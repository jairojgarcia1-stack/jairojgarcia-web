import { Container } from "@/components/ui/Container";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import type { HomeContent } from "@/lib/content/types";

export function Contact({ contact, id }: { contact: HomeContent["contact"]; id: string }) {
  return (
    <section id={id} className="border-t border-ink-800 py-24">
      <Container className="flex flex-col items-center text-center">
        <AnimatedReveal>
          <h2 className="text-3xl font-semibold text-cream-50 sm:text-4xl">{contact.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-cream-400">{contact.description}</p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={contact.cta.href}>{contact.cta.label}</Button>
            <a href={`mailto:${contact.email}`} className="text-sm text-cream-400 hover:text-gold-300">
              {contact.email}
            </a>
          </div>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
