import { AlertTriangle, Lightbulb, StickyNote } from 'lucide-react';

interface Props {
  variant: 'note' | 'mnemonic' | 'trap';
  text: string;
}

const CONFIG = {
  note: {
    icon: StickyNote,
    label: 'Nota',
    bg: 'var(--color-green-light)',
    border: 'var(--color-green)',
    color: 'var(--color-green)',
  },
  mnemonic: {
    icon: Lightbulb,
    label: 'Mnemônico',
    bg: 'var(--color-orange-light)',
    border: 'var(--color-orange)',
    color: 'var(--color-orange)',
  },
  trap: {
    icon: AlertTriangle,
    label: 'Pegadinha',
    bg: '#fff8e6',
    border: '#c09000',
    color: '#7a5800',
  },
} as const;

export function Callout({ variant, text }: Props) {
  const cfg = CONFIG[variant];
  const Icon = cfg.icon;

  return (
    <div
      className="rounded-lg p-4 flex gap-3 my-4"
      style={{
        background: cfg.bg,
        borderLeft: `3px solid ${cfg.border}`,
      }}
      role="note"
    >
      <Icon size={18} style={{ color: cfg.color, flexShrink: 0, marginTop: 2 }} />
      <div>
        <span
          className="text-xs font-semibold tracking-wide mr-2"
          style={{ color: cfg.color }}
        >
          {cfg.label.toUpperCase()}
        </span>
        <span className="text-sm" style={{ color: 'var(--color-text)' }}>
          {text}
        </span>
      </div>
    </div>
  );
}
