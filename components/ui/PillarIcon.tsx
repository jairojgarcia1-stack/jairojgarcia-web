const ROMAN = ["I", "II", "III", "IV"];

function IconShape({ index }: { index: number }) {
  switch (index % 4) {
    case 0:
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="3.4" />
        </>
      );
    case 1:
      return (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.4" />
          <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
        </>
      );
    case 2:
      return (
        <path d="M12 3c-1.2 3.8-4.8 5-4.8 9.2a4.8 4.8 0 0 0 9.6 0c0-1.9-.9-2.9-1.9-3.8.1 1.9-.9 2.9-1.9 1.9-1-1 0-2.9-1-7.3z" />
      );
    default:
      return (
        <>
          <circle cx="8.6" cy="12" r="4.1" />
          <circle cx="15.4" cy="12" r="4.1" />
        </>
      );
  }
}

export function PillarIcon({ index, className = "" }: { index: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.3} className={className}>
      <IconShape index={index} />
    </svg>
  );
}

export function romanNumeral(index: number): string {
  return ROMAN[index % ROMAN.length];
}
