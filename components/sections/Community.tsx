import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { CollageTile } from "@/components/ui/CollageTile";
import { MEDIA } from "@/lib/media";
import type { HomeContent } from "@/lib/content/types";

const LAYOUT: Record<string, { src: string; wrapper: string; image?: string; sizes: string }> = {
  escuela: {
    src: MEDIA.community.escuela,
    wrapper: "col-span-2 aspect-[3/2] sm:aspect-auto sm:row-span-2",
    sizes: "(min-width: 640px) 50vw, 100vw",
  },
  "evento-grande": {
    src: MEDIA.community.eventoGrande,
    wrapper: "aspect-[3/4] sm:aspect-auto sm:row-span-3",
    image: "object-[50%_55%]",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
  hogar: {
    src: MEDIA.community.hogar,
    wrapper: "aspect-[3/4] sm:aspect-auto sm:row-span-3",
    image: "object-[50%_75%]",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
  certificacion: {
    src: MEDIA.community.certificacion,
    wrapper: "aspect-[4/3] sm:aspect-auto",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
  corazones: {
    src: MEDIA.community.corazones,
    wrapper: "aspect-[4/3] sm:aspect-auto",
    sizes: "(min-width: 640px) 25vw, 50vw",
  },
};

export function Community({ community }: { community: HomeContent["community"] }) {
  return (
    <section className="border-t border-ink-800 py-28">
      <Container>
        <SectionHeading title={community.heading} intro={community.intro} align="center" />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[200px]">
          {community.photos.map((photo, index) => {
            const layout = LAYOUT[photo.id];
            if (!layout) return null;
            return (
              <AnimatedReveal key={photo.id} delay={Math.min(index * 0.06, 0.3)} className={layout.wrapper}>
                <CollageTile
                  src={layout.src}
                  alt={photo.alt}
                  className="h-full w-full"
                  imageClassName={layout.image}
                  sizes={layout.sizes}
                />
              </AnimatedReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
