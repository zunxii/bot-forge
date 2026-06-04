import { CircleDashed, Database, Globe, MessageSquare } from "lucide-react";
import { FloatingIcon } from "@/components/ui/floating-icon";

export function HeroFloatingIcons() {
  return (
    <>
      <FloatingIcon className="left-[-12px] top-[24%] h-12 w-12 rotate-[-10deg]">
        <CircleDashed className="h-5 w-5 text-[#8a97ff]" />
      </FloatingIcon>

      <FloatingIcon className="right-[-8px] top-[14%] h-13 w-13 rotate-[8deg]">
        <Database className="h-5.5 w-5.5 text-[#8a97ff]" />
      </FloatingIcon>

      <FloatingIcon className="left-[6%] bottom-[20%] h-11 w-11 rotate-[12deg]">
        <MessageSquare className="h-5 w-5 text-[#8a97ff]" />
      </FloatingIcon>

      <FloatingIcon className="right-[11%] bottom-[27%] h-11 w-11 rotate-[-8deg]">
        <Globe className="h-5 w-5 text-[#8a97ff]" />
      </FloatingIcon>
    </>
  );
}