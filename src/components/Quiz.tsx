import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';
import { ResultCard } from './ResultCard';
import { QUESTIONS } from '../data/questions';

export function Quiz() {
  const navigate = useNavigate();
  const {
    state,
    currentQuestion,
    currentAnswer,
    topicScores,
    isLastQuestion,
    start,
    answer,
    next,
    reset,
  } = useQuiz();

  if (state.status === 'idle') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6 px-4">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
            Simulado
          </h1>
          <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
            {QUESTIONS.length} questões de múltipla escolha · ordem embaralhada
          </p>
        </div>
        <div
          className="surface rounded-xl p-5 max-w-sm text-left space-y-2 text-sm"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <p>Teclas de atalho durante o simulado:</p>
          <ul className="space-y-1">
            <li><kbd className="font-mono">1–4</kbd> ou <kbd className="font-mono">A–D</kbd> — selecionar alternativa</li>
            <li><kbd className="font-mono">Enter</kbd> — avançar para a próxima questão</li>
          </ul>
        </div>
        <button
          onClick={start}
          className="px-8 py-3 rounded-lg font-semibold text-sm"
          style={{ background: 'var(--color-green)', color: '#fff' }}
          autoFocus
        >
          Começar simulado
        </button>
        <button
          onClick={() => navigate('/')}
          className="text-sm"
          style={{ color: 'var(--color-text-muted)' }}
        >
          ← Voltar à revisão
        </button>
      </div>
    );
  }

  if (state.status === 'finished') {
    return (
      <div className="px-4 py-6">
        <ResultCard
          answers={state.answers}
          topicScores={topicScores}
          score={state.score}
          onReset={reset}
          onBack={() => navigate('/')}
        />
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="px-4 py-6 space-y-5">
      <div className="max-w-2xl mx-auto space-y-2">
        <div className="flex items-center justify-between text-sm" style={{ color: 'var(--color-text-muted)' }}>
          <span>Progresso</span>
          <span>
            {state.answers.length} respondida{state.answers.length !== 1 ? 's' : ''} · {state.score} correta{state.score !== 1 ? 's' : ''}
          </span>
        </div>
        <ProgressBar value={state.currentIndex} max={state.order.length} />
      </div>

      <QuestionCard
        question={currentQuestion}
        questionNumber={state.currentIndex + 1}
        totalQuestions={state.order.length}
        answer={currentAnswer}
        onAnswer={(idx) => answer(currentQuestion.id, idx)}
        onNext={next}
        isLast={isLastQuestion}
      />
    </div>
  );
}
