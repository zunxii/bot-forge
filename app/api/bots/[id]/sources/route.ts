import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { processFileSource, processWebsiteSource } from "@/services/ingestions/pipeline";

async function assertOwnership(botId: string, userId: string) {
  const supabase = await createClient();
  const { data: bot } = await supabase.from("bots").select("id, owner_id").eq("id", botId).single();
  return bot && bot.owner_id === userId;
}

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: botId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ success: false, error: "Not authenticated." }, { status: 401 });
  }

  const { data: sources, error } = await supabase
    .from("sources")
    .select("*")
    .eq("bot_id", botId)
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, sources });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id: botId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ success: false, error: "Not authenticated." }, { status: 401 });
  }

  const owns = await assertOwnership(botId, user.id);
  if (!owns) {
    return NextResponse.json({ success: false, error: "Bot not found." }, { status: 404 });
  }

  const contentType = request.headers.get("content-type") ?? "";

  // ---- File upload branch (multipart/form-data) ----
  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ success: false, error: "File is required." }, { status: 400 });
    }

    const { data: source, error: sourceError } = await supabase
      .from("sources")
      .insert({
        bot_id: botId,
        type: "file",
        status: "pending",
        file_name: file.name,
        file_type: file.type || file.name.split(".").pop(),
      })
      .select("*")
      .single();

    if (sourceError || !source) {
      return NextResponse.json(
        { success: false, error: sourceError?.message ?? "Failed to create source." },
        { status: 500 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await processFileSource({
      botId,
      sourceId: source.id,
      buffer,
      fileName: file.name,
      mimeType: file.type,
    });

    const { data: updatedSource } = await supabase.from("sources").select("*").eq("id", source.id).single();

    return NextResponse.json({
      success: result.success,
      source: updatedSource ?? source,
      chunkCount: result.chunkCount,
      error: result.error,
    });
  }

  // ---- JSON branch: website or qna ----
  const body = await request.json().catch(() => ({}));

  if (body.type === "website") {
    const url = typeof body.url === "string" ? body.url.trim() : "";
    if (!url) {
      return NextResponse.json({ success: false, error: "url is required." }, { status: 400 });
    }

    try {
      new URL(url);
    } catch {
      return NextResponse.json({ success: false, error: "Invalid URL format." }, { status: 400 });
    }

    const { data: source, error: sourceError } = await supabase
      .from("sources")
      .insert({ bot_id: botId, type: "website", status: "pending", input_url: url })
      .select("*")
      .single();

    if (sourceError || !source) {
      return NextResponse.json(
        { success: false, error: sourceError?.message ?? "Failed to create source." },
        { status: 500 }
      );
    }

    await supabase.from("bots").update({ website_url: url }).eq("id", botId);

    const result = await processWebsiteSource({ botId, sourceId: source.id, url });

    const { data: updatedSource } = await supabase.from("sources").select("*").eq("id", source.id).single();

    return NextResponse.json({
      success: result.success,
      source: updatedSource ?? source,
      pageCount: result.pageCount,
      chunkCount: result.chunkCount,
      error: result.error,
    });
  }

  if (body.type === "qna") {
    const question = typeof body.question === "string" ? body.question.trim() : "";
    const answer = typeof body.answer === "string" ? body.answer.trim() : "";

    if (!question || !answer) {
      return NextResponse.json(
        { success: false, error: "question and answer are required." },
        { status: 400 }
      );
    }

    const { data: source, error: sourceError } = await supabase
      .from("sources")
      .insert({ bot_id: botId, type: "qna", status: "pending", file_name: question })
      .select("*")
      .single();

    if (sourceError || !source) {
      return NextResponse.json(
        { success: false, error: sourceError?.message ?? "Failed to create source." },
        { status: 500 }
      );
    }

    const result = await processFileSource({
      botId,
      sourceId: source.id,
      buffer: Buffer.from(`${question}\n\n${answer}`, "utf-8"),
      fileName: `${question.slice(0, 60)}.txt`,
      mimeType: "text/plain",
    });

    const { data: updatedSource } = await supabase.from("sources").select("*").eq("id", source.id).single();

    return NextResponse.json({
      success: result.success,
      source: updatedSource ?? source,
      chunkCount: result.chunkCount,
      error: result.error,
    });
  }

  return NextResponse.json({ success: false, error: "Unsupported source type." }, { status: 400 });
}
