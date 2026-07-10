import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import type { HomeContent } from "@/lib/content/types";

export function Contact({ contact, id }: { contact: HomeContent["contact"]; id: string }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-ink-800 py-28">
      <Container className="flex flex-col items-center text-center">
        <AnimatedReveal>
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-cream-50 sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream-400">{contact.description}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {contact.buttons.map((button, index) => (
              <Button key={button.label} href={button.href} variant={index === 0 ? "primary" : "secondary"}>
                {button.label}
              </Button>
            ))}
          </div>
          <a href={`mailto:${contact.email}`} className="mt-8 inline-block text-sm text-cream-400 hover:text-gold-300">
            {contact.email}
          </a>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
