interface Props {
  value: number;
  max: number;
  label?: string;
  color?: string;
}

export function ProgressBar({ value, max, label, color }: Props) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  const bg = color ?? 'var(--color-green)';

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm mb-1" style={{ color: 'var(--color-text-muted)' }}>
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: 'var(--color-border)' }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className="h-2 rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, background: bg }}
        />
      </div>
    </div>
  );
}
