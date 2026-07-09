import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonld";
import { staticRoutes } from "@/lib/i18n/slug-map";
import { formatDate } from "@/lib/format";
import type { BlogContent, BlogPost, Locale, SiteContent } from "@/lib/content/types";

export function BlogIndexPage({
  locale,
  site,
  blogContent,
  posts,
}: {
  locale: Locale;
  site: SiteContent;
  blogContent: BlogContent;
  posts: BlogPost[];
}) {
  const path = staticRoutes.blog[locale];
  const breadcrumbItems = [
    { name: site.nav.home.label, path: staticRoutes.home[locale] },
    { name: site.nav.blog.label, path },
  ];
  const readingTimeLabel = (minutes: number) =>
    locale === "es" ? `${minutes} min de lectura` : `${minutes} min read`;

  return (
    <PageShell site={site}>
      <JsonLd
        data={[
          webPageSchema({ path, title: blogContent.heading, description: blogContent.intro, locale }),
          breadcrumbSchema(breadcrumbItems),
        ]}
      />
      <Container className="pt-16">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="text-4xl font-semibold text-cream-50 sm:text-5xl">{blogContent.heading}</h1>
        <p className="mt-4 max-w-2xl text-lg text-cream-400">{blogContent.intro}</p>
      </Container>

      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <AnimatedReveal key={post.id} delay={(index % 3) * 0.08}>
              <Link href={`${path}/${post.slug}`} className="group block h-full">
                <Card className="flex h-full flex-col justify-between">
                  <div>
                    <Badge>{post.category}</Badge>
                    <h2 className="mt-4 font-display text-xl font-semibold text-cream-50 group-hover:text-gold-300">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-cream-400">{post.excerpt}</p>
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-wide text-cream-400">
                    {formatDate(post.publishDate, locale)} · {readingTimeLabel(post.readingTime)}
                  </p>
                </Card>
              </Link>
            </AnimatedReveal>
          ))}
        </Container>
      </section>
    </PageShell>
  );
}
