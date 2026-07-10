import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { CollageTile } from "@/components/ui/CollageTile";
import { VideoReel } from "@/components/ui/VideoReel";
import { MEDIA } from "@/lib/media";
import type { HomeContent } from "@/lib/content/types";

export function InAction({ action }: { action: HomeContent["action"] }) {
  return (
    <section className="py-28">
      <Container>
        <SectionHeading title={action.heading} intro={action.intro} align="center" />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[170px]">
          <AnimatedReveal className="relative col-span-2 aspect-video overflow-hidden rounded-xl border border-gold-400/30 sm:aspect-auto sm:row-span-2">
            <VideoReel src={MEDIA.speakingReel} />
            <span className="sr-only">{action.videoAlt}</span>
          </AnimatedReveal>

          {action.shots.map((shot, index) => (
            <AnimatedReveal
              key={shot.id}
              delay={Math.min(index * 0.06, 0.3)}
              className={index === 0 ? "col-span-2 aspect-video sm:aspect-auto" : "aspect-square sm:aspect-auto"}
            >
              <CollageTile
                src={MEDIA.actionShots[index]}
                alt={shot.alt}
                className="h-full w-full"
                sizes={index === 0 ? "(min-width: 640px) 50vw, 100vw" : "(min-width: 640px) 25vw, 50vw"}
              />
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
