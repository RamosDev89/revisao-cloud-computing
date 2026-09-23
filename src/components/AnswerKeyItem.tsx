import { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, XCircle } from 'lucide-react';
import type { AnswerRecord, Question } from '../types/quiz';

const LABELS = ['A', 'B', 'C', 'D'] as const;

interface Props {
  question: Question;
  answer: AnswerRecord;
  index: number;
  defaultOpen: boolean;
}

export function AnswerKeyItem({ question, answer, index, defaultOpen }: Props) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <li
      className="rounded-lg overflow-hidden surface"
      style={{
        borderLeft: `3px solid ${answer.isCorrect ? '#28a745' : '#dc3545'}`,
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left"
        aria-expanded={open}
      >
        <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-text-muted)', width: '1.5rem' }}>
          {index + 1}.
        </span>
        {answer.isCorrect ? (
          <CheckCircle size={16} style={{ color: '#28a745', flexShrink: 0 }} />
        ) : (
          <XCircle size={16} style={{ color: '#dc3545', flexShrink: 0 }} />
        )}
        <span className="flex-1 text-sm font-medium line-clamp-2" style={{ color: 'var(--color-text)' }}>
          {question.statement}
        </span>
        <span className="ml-2 shrink-0" style={{ color: 'var(--color-text-muted)' }}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>

      {open && (
        <div className="px-4 pb-4 pt-1 space-y-2 text-sm">
          <div
            className="flex items-center gap-2 text-xs font-medium px-2 py-1 rounded"
            style={{ background: 'var(--color-green-light)', color: 'var(--color-green)', width: 'fit-content' }}
          >
            {question.topic}
          </div>

          <div className="space-y-1">
            <p style={{ color: 'var(--color-text-muted)' }}>
              <span className="font-medium">Sua resposta:</span>{' '}
              <span
                style={{ color: answer.isCorrect ? '#28a745' : '#dc3545' }}
                className="font-semibold"
              >
                {LABELS[answer.selectedIndex]}. {question.options[answer.selectedIndex]}
              </span>
            </p>
            {!answer.isCorrect && (
              <p style={{ color: 'var(--color-text-muted)' }}>
                <span className="font-medium">Resposta certa:</span>{' '}
                <span style={{ color: '#28a745' }} className="font-semibold">
                  {LABELS[question.correctIndex]}. {question.options[question.correctIndex]}
                </span>
              </p>
            )}
          </div>

          <p style={{ color: 'var(--color-text)' }} className="leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </li>
  );
}
