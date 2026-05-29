export type Question = {
  id: string;
  categoryId: string;
  subCategoryId?: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  timeLimitSeconds: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type SubCategory = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
};

export const CATEGORIES: Category[] = [
  { id: 'cat_pop_culture', name: 'Pop Culture', slug: 'pop-culture' }
];

export const SUB_CATEGORIES: SubCategory[] = [
  { id: 'subcat_tswift', categoryId: 'cat_pop_culture', name: 'Taylor Swift', slug: 'taylor-swift' },
  { id: 'subcat_bts', categoryId: 'cat_pop_culture', name: 'BTS', slug: 'bts' }
];

import { BTS_QUESTIONS } from './btsQuestions';
import { TAYLOR_SWIFT_QUESTIONS } from './taylorSwiftQuestions';

const mappedBtsQuestions: Question[] = BTS_QUESTIONS.map((q, index) => ({
  ...q,
  id: `q_bts_${index}`,
  categoryId: 'cat_pop_culture',
  subCategoryId: 'subcat_bts'
}));

export const QUESTIONS: Question[] = [
  ...TAYLOR_SWIFT_QUESTIONS,
  ...mappedBtsQuestions
];
