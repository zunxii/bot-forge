import { CircleDashed, Database, Globe, MessageSquare, Sparkles } from "lucide-react";
import { FloatingIcon } from "@/components/ui/floating-icon";

export function HeroFloatingIcons() {
  return (
    <>
      <FloatingIcon className="left-[-18px] top-[22%] h-14 w-14 rotate-[-10deg]">
        <CircleDashed className="h-6 w-6 text-[#8a96ff]" />
      </FloatingIcon>

      <FloatingIcon className="left-[82%] top-[13%] h-16 w-16 rotate-[8deg]">
        <Database className="h-7 w-7 text-[#8a96ff]" />
      </FloatingIcon>

      <FloatingIcon className="left-[5%] bottom-[21%] h-14 w-14 rotate-[14deg]">
        <MessageSquare className="h-6 w-6 text-[#8a96ff]" />
      </FloatingIcon>

      <FloatingIcon className="right-[-10px] bottom-[28%] h-14 w-14 rotate-[-8deg]">
        <Sparkles className="h-6 w-6 text-[#8a96ff]" />
      </FloatingIcon>

      <FloatingIcon className="right-[16%] top-[46%] h-12 w-12 rotate-[10deg]">
        <Globe className="h-5 w-5 text-[#8a96ff]" />
      </FloatingIcon>
    </>
  );
}