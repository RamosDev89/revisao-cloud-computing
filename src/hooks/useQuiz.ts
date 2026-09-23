import { useCallback, useMemo, useReducer } from 'react';
import type { AnswerRecord, QuizState, TopicScore } from '../types/quiz';
import { QUESTIONS } from '../data/questions';
import { shuffle } from '../utils/shuffle';

type Action =
  | { type: 'START' }
  | { type: 'ANSWER'; questionId: number; selectedIndex: number }
  | { type: 'NEXT' }
  | { type: 'FINISH' }
  | { type: 'RESET' };

function makeInitialState(): QuizState {
  return {
    status: 'idle',
    order: [],
    currentIndex: 0,
    answers: [],
    score: 0,
  };
}

function reducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case 'START':
      return {
        status: 'running',
        order: shuffle(QUESTIONS.map((q) => q.id)),
        currentIndex: 0,
        answers: [],
        score: 0,
      };
    case 'ANSWER': {
      const question = QUESTIONS.find((q) => q.id === action.questionId);
      if (!question) return state;
      const isCorrect = action.selectedIndex === question.correctIndex;
      const record: AnswerRecord = {
        questionId: action.questionId,
        selectedIndex: action.selectedIndex,
        isCorrect,
      };
      return {
        ...state,
        answers: [...state.answers, record],
        score: isCorrect ? state.score + 1 : state.score,
      };
    }
    case 'NEXT': {
      const nextIndex = state.currentIndex + 1;
      if (nextIndex >= state.order.length) {
        return { ...state, status: 'finished' };
      }
      return { ...state, currentIndex: nextIndex };
    }
    case 'FINISH':
      return { ...state, status: 'finished' };
    case 'RESET':
      return makeInitialState();
    default:
      return state;
  }
}

export function useQuiz() {
  const [state, dispatch] = useReducer(reducer, makeInitialState());

  const currentQuestion = useMemo(() => {
    if (state.status !== 'running') return null;
    const id = state.order[state.currentIndex];
    return QUESTIONS.find((q) => q.id === id) ?? null;
  }, [state.status, state.order, state.currentIndex]);

  const currentAnswer = useMemo(() => {
    if (!currentQuestion) return null;
    return state.answers.find((a) => a.questionId === currentQuestion.id) ?? null;
  }, [currentQuestion, state.answers]);

  const topicScores = useMemo<TopicScore[]>(() => {
    const map = new Map<string, { correct: number; total: number }>();
    for (const id of state.order) {
      const q = QUESTIONS.find((q) => q.id === id);
      if (!q) continue;
      const entry = map.get(q.topic) ?? { correct: 0, total: 0 };
      entry.total += 1;
      map.set(q.topic, entry);
    }
    for (const answer of state.answers) {
      const q = QUESTIONS.find((q) => q.id === answer.questionId);
      if (!q) continue;
      const entry = map.get(q.topic);
      if (!entry) continue;
      if (answer.isCorrect) entry.correct += 1;
    }
    return Array.from(map.entries()).map(([topic, v]) => ({
      topic: topic as TopicScore['topic'],
      correct: v.correct,
      total: v.total,
    }));
  }, [state.order, state.answers]);

  const start = useCallback(() => dispatch({ type: 'START' }), []);
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  const answer = useCallback((questionId: number, selectedIndex: number) => {
    dispatch({ type: 'ANSWER', questionId, selectedIndex });
  }, []);

  const next = useCallback(() => dispatch({ type: 'NEXT' }), []);

  const isLastQuestion = state.currentIndex === state.order.length - 1;

  return {
    state,
    currentQuestion,
    currentAnswer,
    topicScores,
    isLastQuestion,
    start,
    answer,
    next,
    reset,
  };
}
