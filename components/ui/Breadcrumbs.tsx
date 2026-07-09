import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-cream-400">
      {items.map((item, index) => (
        <span key={item.path} className="flex items-center gap-2">
          {index > 0 ? <span className="text-ink-600">/</span> : null}
          {index === items.length - 1 ? (
            <span className="text-cream-200">{item.name}</span>
          ) : (
            <Link href={item.path} className="transition-colors hover:text-gold-300">
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
