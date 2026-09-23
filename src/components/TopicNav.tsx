import type { RevisionTopic } from '../data/revision';

interface Props {
  topics: RevisionTopic[];
  extraAnchor: string;
  extraLabel: string;
}

export function TopicNav({ topics, extraAnchor, extraLabel }: Props) {
  return (
    <nav aria-label="Temas de revisão" className="py-4">
      <ol className="flex flex-wrap gap-2">
        {topics.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.anchor}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={{
                background: 'var(--color-green-light)',
                color: 'var(--color-green)',
              }}
            >
              <span className="tabular-nums opacity-60">{t.id}.</span>
              {t.topic}
            </a>
          </li>
        ))}
        <li>
          <a
            href={`#${extraAnchor}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
            style={{
              background: 'var(--color-orange-light)',
              color: 'var(--color-orange)',
            }}
          >
            {extraLabel}
          </a>
        </li>
      </ol>
    </nav>
  );
}
