import { useEffect, useRef } from 'react';
import type { AnswerRecord, Question } from '../types/quiz';

const LABELS = ['A', 'B', 'C', 'D'] as const;

interface Props {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  answer: AnswerRecord | null;
  onAnswer: (selectedIndex: number) => void;
  onNext: () => void;
  isLast: boolean;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  answer,
  onAnswer,
  onNext,
  isLast,
}: Props) {
  const nextBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (answer) {
      nextBtnRef.current?.focus();
    }
  }, [answer]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (answer) {
        if (e.key === 'Enter') onNext();
        return;
      }
      const map: Record<string, number> = {
        '1': 0, a: 0, A: 0,
        '2': 1, b: 1, B: 1,
        '3': 2, c: 2, C: 2,
        '4': 3, d: 3, D: 3,
      };
      const idx = map[e.key];
      if (idx !== undefined) onAnswer(idx);
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [answer, onAnswer, onNext]);

  function optionStyle(i: number): React.CSSProperties {
    if (!answer) {
      return {
        background: 'var(--color-surface)',
        border: '1.5px solid var(--color-border)',
        color: 'var(--color-text)',
        cursor: 'pointer',
      };
    }
    if (i === question.correctIndex) {
      return {
        background: '#d4edda',
        border: '1.5px solid #28a745',
        color: '#155724',
        cursor: 'default',
      };
    }
    if (i === answer.selectedIndex) {
      return {
        background: '#f8d7da',
        border: '1.5px solid #dc3545',
        color: '#721c24',
        cursor: 'default',
      };
    }
    return {
      background: 'var(--color-surface)',
      border: '1.5px solid var(--color-border)',
      color: 'var(--color-text-muted)',
      cursor: 'default',
      opacity: 0.6,
    };
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: 'var(--color-green-light)', color: 'var(--color-green)' }}
        >
          {question.topic}
        </span>
        <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          Questão {questionNumber} de {totalQuestions}
        </span>
      </div>

      <p className="text-base font-medium leading-relaxed mb-5 mt-3" style={{ color: 'var(--color-text)' }}>
        {question.statement}
      </p>

      <ol className="space-y-2.5" role="listbox" aria-label="Alternativas">
        {question.options.map((opt, i) => (
          <li key={i}>
            <button
              onClick={() => !answer && onAnswer(i)}
              disabled={!!answer}
              aria-pressed={answer?.selectedIndex === i}
              role="option"
              aria-selected={answer?.selectedIndex === i}
              className="w-full text-left rounded-lg px-4 py-3 text-sm flex gap-3 items-start transition-all"
              style={optionStyle(i)}
            >
              <span className="font-bold tabular-nums w-5 shrink-0">{LABELS[i]}.</span>
              <span>{opt}</span>
            </button>
          </li>
        ))}
      </ol>

      {answer && (
        <div
          aria-live="polite"
          className="mt-4 rounded-lg px-4 py-3 text-sm"
          style={{
            background: answer.isCorrect ? '#d4edda' : '#f8d7da',
            color: answer.isCorrect ? '#155724' : '#721c24',
            border: `1px solid ${answer.isCorrect ? '#c3e6cb' : '#f5c6cb'}`,
          }}
        >
          <p className="font-semibold mb-1">
            {answer.isCorrect
              ? 'Correto!'
              : `Resposta certa: ${LABELS[question.correctIndex]}.`}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}

      {answer && (
        <button
          ref={nextBtnRef}
          onClick={onNext}
          className="mt-5 w-full py-3 rounded-lg font-semibold text-sm transition-colors"
          style={{
            background: 'var(--color-green)',
            color: '#fff',
          }}
        >
          {isLast ? 'Ver resultado' : 'Próxima questão'}
        </button>
      )}
    </div>
  );
}
