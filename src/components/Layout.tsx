import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const [dark, setDark] = useLocalStorage<boolean>(
    'cloud-theme-dark',
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const location = useLocation();
  const isQuiz = location.pathname === '/simulado';

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <header
        className="sticky top-0 z-40 border-b"
        style={{
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
              UniOpet · Prof. Michel Santos
            </span>
            <span className="text-sm font-bold" style={{ color: 'var(--color-green)' }}>
              Programação Cloud Computing
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {!isQuiz && (
              <Link
                to="/simulado"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                style={{ background: 'var(--color-orange)', color: '#fff' }}
              >
                <ClipboardList size={14} />
                Simulado
              </Link>
            )}
            <ThemeToggle dark={dark} onToggle={() => setDark(!dark)} />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto">
        {children}
      </main>
    </div>
  );
}
