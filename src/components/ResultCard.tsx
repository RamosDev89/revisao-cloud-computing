import { useMemo, useState } from 'react';
import { BookOpen, RefreshCw } from 'lucide-react';
import type { AnswerRecord, TopicScore } from '../types/quiz';
import { QUESTIONS } from '../data/questions';
import { AnswerKeyItem } from './AnswerKeyItem';
import { ProgressBar } from './ProgressBar';

interface Props {
  answers: AnswerRecord[];
  topicScores: TopicScore[];
  score: number;
  onReset: () => void;
  onBack: () => void;
}

type Filter = 'all' | 'wrong' | 'right';

function performanceMessage(pct: number): string {
  if (pct >= 90) return 'Domínio consolidado — revisar só as pegadinhas.';
  if (pct >= 70) return 'Base sólida com alguns pontos soltos.';
  if (pct >= 50) return 'Releia a revisão antes de repetir o simulado.';
  return 'Refaça a leitura dos sete temas antes de tentar novamente.';
}

export function ResultCard({ answers, topicScores, score, onReset, onBack }: Props) {
  const [filter, setFilter] = useState<Filter>('all');

  const total = answers.length;
  const pct = total === 0 ? 0 : Math.round((score / total) * 100);
  const nota = total === 0 ? 0 : Math.round((score / total) * 100) / 10;
  const notaStr = nota.toFixed(1).replace('.', ',');

  const sortedAnswers = useMemo(() => {
    const wrong = answers.filter((a) => !a.isCorrect);
    const right = answers.filter((a) => a.isCorrect);
    return [...wrong, ...right];
  }, [answers]);

  const filteredAnswers = useMemo(() => {
    if (filter === 'wrong') return sortedAnswers.filter((a) => !a.isCorrect);
    if (filter === 'right') return sortedAnswers.filter((a) => a.isCorrect);
    return sortedAnswers;
  }, [filter, sortedAnswers]);

  const gradeColor =
    pct >= 70 ? '#28a745' : pct >= 50 ? 'var(--color-orange)' : '#dc3545';

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Score hero */}
      <div className="surface rounded-2xl p-6 text-center space-y-2">
        <p className="text-xs font-semibold tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
          RESULTADO FINAL
        </p>
        <p className="text-6xl font-bold tabular-nums" style={{ color: gradeColor }}>
          {notaStr}
        </p>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
          / 10,0
        </p>
        <p className="text-base font-medium" style={{ color: 'var(--color-text)' }}>
          {score} de {total} questões corretas &mdash; {pct}% de acerto
        </p>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-muted)' }}>
          {performanceMessage(pct)}
        </p>
      </div>

      {/* Topic scores */}
      <div className="surface rounded-xl p-5 space-y-4">
        <h2 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
          Desempenho por tema
        </h2>
        {topicScores.map((ts) => (
          <div key={ts.topic} className="space-y-1">
            <div className="flex justify-between text-xs" style={{ color: 'var(--color-text-muted)' }}>
              <span>{ts.topic}</span>
              <span>{ts.correct}/{ts.total}</span>
            </div>
            <ProgressBar
              value={ts.correct}
              max={ts.total}
              color={ts.correct === ts.total ? '#28a745' : ts.correct === 0 ? '#dc3545' : 'var(--color-orange)'}
            />
          </div>
        ))}
      </div>

      {/* Answer key */}
      <div className="space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            Gabarito explicado
          </h2>
          <div className="flex gap-1 rounded-lg overflow-hidden surface p-0.5">
            {(['all', 'wrong', 'right'] as Filter[]).map((f) => {
              const labels: Record<Filter, string> = { all: 'Todas', wrong: 'Só erros', right: 'Só acertos' };
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-3 py-1 rounded text-xs font-medium transition-colors"
                  style={{
                    background: filter === f ? 'var(--color-green)' : 'transparent',
                    color: filter === f ? '#fff' : 'var(--color-text-muted)',
                  }}
                >
                  {labels[f]}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="space-y-2">
          {filteredAnswers.map((answer, i) => {
            const question = QUESTIONS.find((q) => q.id === answer.questionId);
            if (!question) return null;
            return (
              <AnswerKeyItem
                key={answer.questionId}
                question={question}
                answer={answer}
                index={i}
                defaultOpen={!answer.isCorrect}
              />
            );
          })}
          {filteredAnswers.length === 0 && (
            <li className="text-center py-8 text-sm" style={{ color: 'var(--color-text-muted)' }}>
              Nenhuma questão nesta categoria.
            </li>
          )}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-3 flex-col sm:flex-row pb-8">
        <button
          onClick={onReset}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-colors"
          style={{ background: 'var(--color-green)', color: '#fff' }}
        >
          <RefreshCw size={16} />
          Refazer o simulado
        </button>
        <button
          onClick={onBack}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-colors surface"
          style={{ color: 'var(--color-green)' }}
        >
          <BookOpen size={16} />
          Voltar à revisão
        </button>
      </div>
    </div>
  );
}
