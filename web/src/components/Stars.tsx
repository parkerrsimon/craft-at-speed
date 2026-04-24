type StarsProps = {
  rating: number;
  compact?: boolean;
};

export function Stars({ rating, compact }: StarsProps) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const total = 5;

  return (
    <div
      className={[
        "inline-flex items-center gap-1",
        compact ? "text-[12px]" : "text-[14px]",
      ].join(" ")}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: total }).map((_, i) => {
        const idx = i + 1;
        const isFull = idx <= full;
        const isHalf = !isFull && half && idx === full + 1;
        return (
          <span
            key={i}
            className={[
              "leading-none",
              isFull || isHalf ? "text-[color:var(--brand-orange)]" : "text-zinc-300",
            ].join(" ")}
            aria-hidden="true"
          >
            ★
          </span>
        );
      })}
      <span className="ml-1 text-[color:var(--text-secondary)]">{rating.toFixed(1)}</span>
    </div>
  );
}

