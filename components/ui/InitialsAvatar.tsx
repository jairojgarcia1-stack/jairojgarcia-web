function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function InitialsAvatar({ name, className = "" }: { name: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/10 font-display text-sm font-semibold text-gold-300 ${className}`}
    >
      {getInitials(name)}
    </div>
  );
}
