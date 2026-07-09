import { PageShell } from "@/components/layout/PageShell";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqPageSchema, webPageSchema } from "@/lib/seo/jsonld";
import { staticRoutes } from "@/lib/i18n/slug-map";
import { formatDate } from "@/lib/format";
import type { BlogPost, Locale, SiteContent } from "@/lib/content/types";

export function BlogPostPage({
  locale,
  site,
  post,
}: {
  locale: Locale;
  site: SiteContent;
  post: BlogPost;
}) {
  const basePath = staticRoutes.blog[locale];
  const path = `${basePath}/${post.slug}`;
  const breadcrumbItems = [
    { name: site.nav.home.label, path: staticRoutes.home[locale] },
    { name: site.nav.blog.label, path: basePath },
    { name: post.title, path },
  ];
  const readingTimeLabel = locale === "es" ? `${post.readingTime} min de lectura` : `${post.readingTime} min read`;

  return (
    <PageShell site={site}>
      <JsonLd
        data={[
          webPageSchema({ path, title: post.title, description: post.description, locale }),
          breadcrumbSchema(breadcrumbItems),
          articleSchema({
            path,
            title: post.title,
            description: post.description,
            publishDate: post.publishDate,
            locale,
            keywords: post.keywords,
          }),
          faqPageSchema(post.faqs),
        ]}
      />
      <Container className="pt-16">
        <Breadcrumbs items={breadcrumbItems} />
      </Container>

      <article>
        <Container className="max-w-3xl">
          <AnimatedReveal>
            <Badge>{post.category}</Badge>
            <h1 className="mt-4 text-4xl font-semibold text-cream-50 sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-sm uppercase tracking-wide text-cream-400">
              {formatDate(post.publishDate, locale)} · {readingTimeLabel}
            </p>
            <p className="mt-6 text-xl text-cream-300">{post.excerpt}</p>
          </AnimatedReveal>

          <div className="mt-12 flex flex-col gap-10">
            {post.sections.map((section, index) => (
              <AnimatedReveal key={index} delay={Math.min(index * 0.05, 0.3)}>
                <h2 className="font-display text-2xl font-semibold text-cream-50">{section.heading}</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg leading-relaxed text-cream-400">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <div className="mt-16 border-t border-ink-800 pt-12">
            <h2 className="text-2xl font-semibold text-cream-50">
              {locale === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
            <div className="mt-8 flex flex-col gap-6">
              {post.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-medium text-cream-50">{faq.question}</h3>
                  <p className="mt-2 text-cream-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </article>
    </PageShell>
  );
}
