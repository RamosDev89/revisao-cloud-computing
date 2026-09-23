import { Moon, Sun } from 'lucide-react';

interface Props {
  dark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ dark, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      aria-label={dark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      className="p-2 rounded-lg transition-colors"
      style={{
        background: 'var(--color-green-light)',
        color: 'var(--color-green)',
      }}
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
