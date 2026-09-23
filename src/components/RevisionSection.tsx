import type { RevisionTopic } from '../data/revision';
import { Callout } from './Callout';
import { ComparisonTable } from './ComparisonTable';

interface Props {
  topic: RevisionTopic;
}

export function RevisionSection({ topic }: Props) {
  return (
    <section id={topic.anchor} className="scroll-mt-20 py-8 border-b" style={{ borderColor: 'var(--color-border)' }}>
      <div className="flex items-baseline gap-3 mb-5">
        <span
          className="text-3xl font-bold tabular-nums"
          style={{ color: 'var(--color-border)' }}
        >
          {String(topic.id).padStart(2, '0')}
        </span>
        <h2 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
          {topic.topic}
        </h2>
      </div>

      {topic.blocks.map((block, i) => {
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
  );
}
