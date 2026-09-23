import { Link } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';
import { REVISION_TOPICS, EXTRA_SECTION } from '../data/revision';
import { RevisionSection } from '../components/RevisionSection';
import { TopicNav } from '../components/TopicNav';
import { Callout } from '../components/Callout';
import { ComparisonTable } from '../components/ComparisonTable';

export function RevisionPage() {
  return (
    <div className="px-4 py-6">
      {/* Hero */}
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold leading-tight" style={{ color: 'var(--color-text)' }}>
          Revisão para a prova
        </h1>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Sete temas essenciais cobrindo toda a matéria. Leia, depois treine com o simulado.
        </p>
        <Link
          to="/simulado"
          className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg font-semibold text-sm"
          style={{ background: 'var(--color-orange)', color: '#fff' }}
        >
          <ClipboardList size={16} />
          Ir para o simulado (24 questões)
        </Link>
      </div>

      <TopicNav
        topics={REVISION_TOPICS}
        extraAnchor={EXTRA_SECTION.anchor}
        extraLabel={EXTRA_SECTION.title}
      />

      {REVISION_TOPICS.map((topic) => (
        <RevisionSection key={topic.id} topic={topic} />
      ))}

      {/* Extra section */}
      <section
        id={EXTRA_SECTION.anchor}
        className="scroll-mt-20 py-8 border-b"
        style={{ borderColor: 'var(--color-border)' }}
      >
        <div className="flex items-baseline gap-3 mb-5">
          <span
            className="text-3xl font-bold tabular-nums"
            style={{ color: 'var(--color-border)' }}
          >
            +
          </span>
          <h2 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
            {EXTRA_SECTION.title}
          </h2>
        </div>

        {EXTRA_SECTION.blocks.map((block, i) => {
          if (block.type === 'paragraph') {
            return (
              <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text)' }}>
                {block.text}
              </p>
            );
          }
          if (block.type === 'subtitle') {
            return (
              <h3 key={i} className="text-base font-semibold mt-5 mb-2" style={{ color: 'var(--color-green)' }}>
                {block.text}
              </h3>
            );
          }
          if (block.type === 'list') {
            return (
              <ul key={i} className="list-none mb-3 space-y-1.5">
                {block.items.map((item, j) => (
                  <li key={j} className="text-sm flex gap-2" style={{ color: 'var(--color-text)' }}>
                    <span style={{ color: 'var(--color-orange)', flexShrink: 0 }}>›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          if (block.type === 'table') {
            return <ComparisonTable key={i} headers={block.headers} rows={block.rows} />;
          }
          if (block.type === 'callout') {
            return <Callout key={i} variant={block.variant} text={block.text} />;
          }
          return null;
        })}
      </section>

      <footer className="py-8 text-center text-xs" style={{ color: 'var(--color-text-muted)' }}>
        Programação Cloud Computing · UniOpet · Prof. Michel Santos
      </footer>
    </div>
  );
}
