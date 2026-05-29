export type Question = {
  id: string;
  categoryId: string;
  subCategoryId: string;
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
  { id: 'cat_pop_culture', name: 'Pop Culture', slug: 'pop-culture' },
];

export const SUB_CATEGORIES: SubCategory[] = [
  { id: 'subcat_tswift', categoryId: 'cat_pop_culture', name: 'Taylor Swift', slug: 'taylor-swift' },
  { id: 'subcat_bts', categoryId: 'cat_pop_culture', name: 'BTS', slug: 'bts' }
];

import { BTS_QUESTIONS } from './btsQuestions';

// Map the BTS questions to match the full Question type
const mappedBtsQuestions: Question[] = BTS_QUESTIONS.map((q, index) => ({
  ...q,
  id: `q_bts_${index}`,
  categoryId: 'cat_pop_culture',
  subCategoryId: 'subcat_bts'
}));

// Seeded from user provided CSV
export const QUESTIONS: Question[] = [
  {
    id: 'q_ts_1',
    categoryId: 'cat_pop_culture',
    subCategoryId: 'subcat_tswift',
    questionText: 'Which Taylor Swift song was inspired by her friendship with Lena Dunham?',
    options: ['You Are In Love', 'Welcome To New York', 'New Romantics'],
    correctAnswerIndex: 0,
    explanation: 'She wrote "You Are In Love" inspired by Lena Dunham\'s relationship with Jack Antonoff.',
    timeLimitSeconds: 5,
  },
  {
    id: 'q_ts_2',
    categoryId: 'cat_pop_culture',
    subCategoryId: 'subcat_tswift',
    questionText: 'Which track from folklore references the "Cardigan" music video?',
    options: ['August', 'Betty', 'The Last Great American Dynasty'],
    correctAnswerIndex: 1, 
    explanation: 'Betty is part of the teenage love triangle along with Cardigan and August.',
    timeLimitSeconds: 5,
  },
  {
    id: 'q_ts_3',
    categoryId: 'cat_pop_culture',
    subCategoryId: 'subcat_tswift',
    questionText: 'Which award did Taylor Swift win at the 2022 American Music Awards?',
    options: ['Artist of the Year', 'Favourite Pop Album', 'Favourite Female Pop Artist'],
    correctAnswerIndex: 1, 
    explanation: 'She won Favourite Pop Album among many others.',
    timeLimitSeconds: 5,
  },
  {
    id: 'q_ts_4',
    categoryId: 'cat_pop_culture',
    subCategoryId: 'subcat_tswift',
    questionText: 'Which Taylor Swift song includes the lyric "I once believed love would be burning red"?',
    options: ['Red', 'State of Grace', 'All Too Well'],
    correctAnswerIndex: 0,
    explanation: 'The title track "Red" contains this famous lyric.',
    timeLimitSeconds: 5,
  },
  {
    id: 'q_ts_5',
    categoryId: 'cat_pop_culture',
    subCategoryId: 'subcat_tswift',
    questionText: 'Which producer collaborated with Taylor on the track "The Archer"?',
    options: ['Jack Antonoff', 'Aaron Dessner', 'Max Martin'],
    correctAnswerIndex: 0,
    explanation: 'Jack Antonoff co-wrote and co-produced "The Archer".',
    timeLimitSeconds: 5,
  },
  ...mappedBtsQuestions
];
