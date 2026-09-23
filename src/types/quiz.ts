export type Topic =
  | 'Tipos de serviço'
  | 'Tipos de nuvem'
  | 'Elasticidade'
  | 'Horizontal × vertical'
  | 'MapReduce'
  | 'Hadoop'
  | 'API e web services';

export interface Question {
  id: number;
  topic: Topic;
  statement: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface AnswerRecord {
  questionId: number;
  selectedIndex: number;
  isCorrect: boolean;
}

export type QuizStatus = 'idle' | 'running' | 'finished';

export interface QuizState {
  status: QuizStatus;
  order: number[];
  currentIndex: number;
  answers: AnswerRecord[];
  score: number;
}

export interface TopicScore {
  topic: Topic;
  correct: number;
  total: number;
}
