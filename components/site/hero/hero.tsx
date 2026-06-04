import { Container } from "@/components/ui/container";
import { HeroContent } from "./hero-content";
import { HeroChatPreview } from "./hero-chat-preview";
import { HeroFloatingIcons } from "./hero-floating-icons";

export function Hero() {
  return (
    <section className="relative z-10">
      <Container className="pb-16 pt-8 lg:pb-24 lg:pt-14">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <HeroContent />

          <div className="relative">
            <HeroFloatingIcons />
            <HeroChatPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}