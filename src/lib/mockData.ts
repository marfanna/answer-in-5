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

export type NicheIcon =
  | 'music'    // music artists, bands
  | 'film'     // movies, TV shows, actors
  | 'gaming'   // video games, esports
  | 'code'     // programming, tech, software
  | 'religion' // religious knowledge, theology
  | 'sport'    // sports, athletes
  | 'science'  // science, space, nature
  | 'food'     // cuisine, cooking, restaurants
  | 'general'; // mixed / pop culture catch-all

export type SubCategory = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  icon: NicheIcon;
  description: string;
};

export const CATEGORIES: Category[] = [
  { id: 'cat_music',      name: 'Music',      slug: 'music'      },
  { id: 'cat_film',       name: 'Film & TV',  slug: 'film-tv'    },
  { id: 'cat_tech',       name: 'Tech',       slug: 'tech'       },
  { id: 'cat_religion',   name: 'Religion',   slug: 'religion'   },
  { id: 'cat_sport',      name: 'Sport',      slug: 'sport'      },
  { id: 'cat_science',    name: 'Science',    slug: 'science'    },
  { id: 'cat_food',       name: 'Food',       slug: 'food'       },
  { id: 'cat_mixed',      name: 'Mixed',      slug: 'mixed'      },
];

// ─── Register every niche here ────────────────────────────────────────────────
// icon    → one of the NicheIcon values above
// slug    → used in the URL: /quiz/[slug]
// ─────────────────────────────────────────────────────────────────────────────
export const SUB_CATEGORIES: SubCategory[] = [
  { id: 'subcat_tswift',  categoryId: 'cat_music', name: 'Taylor Swift',   slug: 'taylor-swift', icon: 'music',   description: 'Are you the ultimate Swiftie?'      },
  { id: 'subcat_bts',     categoryId: 'cat_music', name: 'BTS',            slug: 'bts',           icon: 'music',   description: 'Test your ARMY knowledge.'          },
  { id: 'subcat_beyonce', categoryId: 'cat_music', name: 'Beyoncé',        slug: 'beyonce',       icon: 'music',   description: 'How well do you know Queen Bey?'    },
  { id: 'subcat_ariana',  categoryId: 'cat_music', name: 'Ariana Grande',  slug: 'ariana-grande', icon: 'music',   description: 'Thank u, next — if you fail this.'  },
  { id: 'cat_mixed',      categoryId: 'cat_mixed', name: 'Ultimate Mix',   slug: 'mixed',         icon: 'general', description: 'Every niche. One massive challenge.' },
];

import { BTS_QUESTIONS }          from './btsQuestions';
import { TAYLOR_SWIFT_QUESTIONS } from './taylorSwiftQuestions';
import { BEYONCE_QUESTIONS }      from './beyonceQuestions';
import { ARIANA_QUESTIONS }       from './arianaQuestions';

const mappedTsQuestions: Question[] = TAYLOR_SWIFT_QUESTIONS.map((q, index) => ({
  ...q, id: `q_ts_${index}`, categoryId: 'cat_pop_culture', subCategoryId: 'subcat_tswift'
}));

const mappedBtsQuestions: Question[] = BTS_QUESTIONS.map((q, index) => ({
  ...q, id: `q_bts_${index}`, categoryId: 'cat_pop_culture', subCategoryId: 'subcat_bts'
}));

const mappedBeyonceQuestions: Question[] = BEYONCE_QUESTIONS.map((q, index) => ({
  ...q, id: `q_bey_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_beyonce'
}));

const mappedArianaQuestions: Question[] = ARIANA_QUESTIONS.map((q, index) => ({
  ...q, id: `q_ari_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_ariana'
}));

export const QUESTIONS: Question[] = [
  ...mappedTsQuestions,
  ...mappedBtsQuestions,
  ...mappedBeyonceQuestions,
  ...mappedArianaQuestions,
];
