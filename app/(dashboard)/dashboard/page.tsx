"use client";

import Link from "next/link";
import { AssistantSidebar } from "@/components/create-assistant/assistant-sidebar";
import { Bot, Search, Plus, MoreVertical, Globe, Database } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const allAssistants = [
    {
      id: 1,
      name: "ACME Support Bot",
      description: "Handles customer support queries for ACME Store.",
      status: "Active",
      queries: "12.4k",
      sources: 3,
      lastTrained: "2 hours ago",
    },
    {
      id: 2,
      name: "Internal HR Assistant",
      description: "Answers employee questions about policies and benefits.",
      status: "Draft",
      queries: "0",
      sources: 1,
      lastTrained: "1 day ago",
    },
  ];

  const filteredAssistants = allAssistants.filter(bot => 
    bot.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    bot.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 selection:bg-zinc-200">
      <div className="mx-auto grid min-h-screen lg:grid-cols-[260px_1fr]">
        <AssistantSidebar />
        <main className="flex min-w-0 flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-[1160px] flex-1 flex-col">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-xl font-semibold tracking-tight text-zinc-950">My Assistants</h1>
                <p className="mt-1 text-sm text-zinc-500">Manage your created assistants and their settings.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search assistants..."
                    className="h-9 w-full rounded-lg border border-zinc-200 bg-white pl-9 pr-4 text-sm outline-none transition focus:border-zinc-400 focus:ring-4 focus:ring-zinc-100 sm:w-64 shadow-sm"
                  />
                </div>
                <Link
                  href="/create"
                  className="inline-flex h-9 items-center gap-2 rounded-lg bg-zinc-950 px-4 text-sm font-medium text-white transition hover:bg-zinc-800 shadow-sm"
                >
                  <Plus className="h-4 w-4" />
                  Create New
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAssistants.map((assistant) => (
                <div key={assistant.id} className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/60 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md">
                  <Link href={`/assistant/${assistant.id}/analytics`} className="absolute inset-0 z-0 rounded-2xl"></Link>
                  <div className="p-6 relative z-10 pointer-events-none">
                    <div className="flex items-start justify-between gap-4 pointer-events-auto">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900 border border-zinc-200/50">
                        <Bot className="h-5 w-5" />
                      </div>
                      <div className="relative group/menu">
                        <button className="text-zinc-400 transition hover:text-zinc-600 p-1.5 rounded-md hover:bg-zinc-50">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                        <div className="absolute right-0 top-full mt-1 hidden w-36 flex-col rounded-xl border border-zinc-200 bg-white p-1 shadow-lg group-hover/menu:flex z-20">
                          <button onClick={(e) => { e.preventDefault(); toast.info('Opening settings...'); }} className="w-full rounded-md px-3 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50">Edit Assistant</button>
                          <button onClick={(e) => { e.preventDefault(); toast.info('Viewing analytics...'); }} className="w-full rounded-md px-3 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50">Analytics</button>
                          <div className="my-1 border-t border-zinc-100"></div>
                          <button onClick={(e) => { e.preventDefault(); toast.error('Assistant deleted'); }} className="w-full rounded-md px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50">Delete</button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold tracking-tight text-zinc-950">{assistant.name}</h3>
                        <span
                          className={`inline-flex items-center rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${
                            assistant.status === "Active"
                              ? "border-emerald-200/50 bg-emerald-50 text-emerald-700"
                              : "border-zinc-200 bg-zinc-50 text-zinc-600"
                          }`}
                        >
                          {assistant.status}
                        </span>
                      </div>
                      <p className="mt-2 line-clamp-2 text-sm text-zinc-500">
                        {assistant.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto border-t border-zinc-100 p-5 relative z-10 pointer-events-none">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-4 text-zinc-500">
                        <div className="flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5" />
                          <span>{assistant.queries}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Database className="h-3.5 w-3.5" />
                          <span>{assistant.sources}</span>
                        </div>
                      </div>
                      <div className="text-zinc-400 font-medium">{assistant.lastTrained}</div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredAssistants.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/50 p-6 text-center">
                  <h3 className="text-sm font-semibold tracking-tight text-zinc-900">No assistants found</h3>
                </div>
              )}

              {/* Create New Card */}
              <Link
                href="/create"
                className="group flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-white p-6 text-center transition-all hover:border-zinc-300 hover:bg-zinc-50/50 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-400 group-hover:text-zinc-900 group-hover:bg-zinc-200 transition-colors">
                  <Plus className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold tracking-tight text-zinc-900">Create new assistant</h3>
                <p className="mt-1 text-[13px] text-zinc-500">Start building your next AI bot.</p>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
