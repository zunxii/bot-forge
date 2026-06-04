import { Container } from "@/components/ui/container";
import { HeroContent } from "./hero-content";
import { HeroChatPreview } from "./hero-chat-preview";
import { HeroFloatingIcons } from "./hero-floating-icons";

export function Hero() {
  return (
    <section className="relative z-10">
      <Container className="pb-14 pt-6 lg:pb-18 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
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