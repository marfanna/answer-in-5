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

export type NicheIcon =
  | 'music'    // music artists, bands
  | 'film'     // movies, TV shows, actors
  | 'gaming'   // video games, esports
  | 'code'     // programming, tech, software
  | 'religion' // religious knowledge, theology
  | 'sport'    // sports, athletes
  | 'science'  // science, space, nature
  | 'food'     // cuisine, cooking, restaurants
  | 'general'; // mixed / catch-all

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: NicheIcon;
  description: string;
};

export type SubCategory = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  icon: NicheIcon;
  description: string;
};

// ─── Categories ──────────────────────────────────────────────────────────────
// Each category gets a "Play All [Category]" card in the directory.
// slug → used in URL: /quiz/[slug]
// ─────────────────────────────────────────────────────────────────────────────
export const CATEGORIES: Category[] = [
  { id: 'cat_music',    name: 'Music',        slug: 'music',    icon: 'music',    description: 'Music artists, albums, and fan trivia'      },
  { id: 'cat_film',     name: 'Film & TV',    slug: 'film-tv',  icon: 'film',     description: 'Movies, TV shows, actors, and directors'    },
  { id: 'cat_tech',     name: 'Tech',         slug: 'tech',     icon: 'code',     description: 'Programming, software, and technology'      },
  { id: 'cat_religion', name: 'Religion',     slug: 'religion', icon: 'religion', description: 'Religious knowledge and spiritual trivia'   },
  { id: 'cat_sport',    name: 'Sport',        slug: 'sport',    icon: 'sport',    description: 'Sports, athletes, and competitions'         },
  { id: 'cat_science',  name: 'Science',      slug: 'science',  icon: 'science',  description: 'Space, nature, and scientific discoveries'  },
  { id: 'cat_food',     name: 'Food',         slug: 'food',     icon: 'food',     description: 'Cuisine, recipes, and food culture'         },
  { id: 'cat_geo',      name: 'Geography',    slug: 'geography',icon: 'general',  description: 'World capitals, landmarks, and geography trivia' },
  { id: 'cat_mixed',    name: 'Ultimate Mix', slug: 'mixed',    icon: 'general',  description: 'Every niche combined. One massive challenge.' },
];

// ─── Sub-categories (individual niches) ──────────────────────────────────────
// Add new niches here. categoryId must match a CATEGORIES entry above.
// ─────────────────────────────────────────────────────────────────────────────
export const SUB_CATEGORIES: SubCategory[] = [
  { id: 'subcat_tswift',  categoryId: 'cat_music', name: 'Taylor Swift',  slug: 'taylor-swift', icon: 'music', description: 'Are you the ultimate Swiftie?'     },
  { id: 'subcat_bts',     categoryId: 'cat_music', name: 'BTS',           slug: 'bts',           icon: 'music', description: 'Test your ARMY knowledge.'         },
  { id: 'subcat_beyonce', categoryId: 'cat_music', name: 'Beyoncé',       slug: 'beyonce',       icon: 'music', description: 'How well do you know Queen Bey?'   },
  { id: 'subcat_ariana',  categoryId: 'cat_music', name: 'Ariana Grande',    slug: 'ariana-grande',    icon: 'music', description: 'Thank u, next — if you fail this.'           },
  { id: 'subcat_onedirection', categoryId: 'cat_music', name: 'One Direction', slug: 'one-direction', icon: 'music', description: 'Test your knowledge on the ultimate boyband.' },
  { id: 'subcat_sabrina', categoryId: 'cat_music', name: 'Sabrina Carpenter', slug: 'sabrina-carpenter', icon: 'music', description: 'Short n\' sweet — but this quiz isn\'t.'      },
  { id: 'subcat_justinbieber', categoryId: 'cat_music', name: 'Justin Bieber', slug: 'justin-bieber', icon: 'music', description: 'Are you the ultimate Belieber?' },
  { id: 'subcat_cardib', categoryId: 'cat_music', name: 'Cardi B', slug: 'cardi-b', icon: 'music', description: 'Test your Bardi Gang knowledge.' },
  { id: 'subcat_nickiminaj', categoryId: 'cat_music', name: 'Nicki Minaj', slug: 'nicki-minaj', icon: 'music', description: 'Test your Barbz knowledge.' },
  { id: 'subcat_us_states', categoryId: 'cat_geo', name: 'US States', slug: 'us-states-capitals', icon: 'general', description: 'Test your knowledge of the 50 US States and Capitals.' },
  { id: 'subcat_world_capitals', categoryId: 'cat_geo', name: 'World Capitals', slug: 'world-capitals', icon: 'general', description: 'Every single country and its capital.' },
  { id: 'subcat_landmarks_oceans', categoryId: 'cat_geo', name: 'Landmarks & Oceans', slug: 'landmarks-oceans', icon: 'general', description: 'Hard trivia on famous world landmarks and oceans.' },
];

import { BTS_QUESTIONS }          from './btsQuestions';
import { TAYLOR_SWIFT_QUESTIONS } from './taylorSwiftQuestions';
import { BEYONCE_QUESTIONS }      from './beyonceQuestions';
import { ARIANA_QUESTIONS }       from './arianaQuestions';
import { ONE_DIRECTION_QUESTIONS } from './oneDirectionQuestions';
import { SABRINA_QUESTIONS }       from './sabrinacarpenter';
import { JUSTIN_BIEBER_QUESTIONS } from './justinbieber';
import { CARDI_B_QUESTIONS }       from './cardibQuestions';
import { NICKI_MINAJ_QUESTIONS }   from './nickiminajQuestions';
import { US_STATES_QUESTIONS } from './usStatesCapitalsQuestions';
import { WORLD_CAPITALS_QUESTIONS } from './worldCapitalsQuestions';
import { LANDMARKS_OCEANS_QUESTIONS } from './landmarksOceansQuestions';

const mappedTsQuestions: Question[] = TAYLOR_SWIFT_QUESTIONS.map((q, index) => ({
  ...q, id: `q_ts_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_tswift'
}));

const mappedBtsQuestions: Question[] = BTS_QUESTIONS.map((q, index) => ({
  ...q, id: `q_bts_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_bts'
}));

const mappedBeyonceQuestions: Question[] = BEYONCE_QUESTIONS.map((q, index) => ({
  ...q, id: `q_bey_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_beyonce'
}));

const mappedArianaQuestions: Question[] = ARIANA_QUESTIONS.map((q, index) => ({
  ...q, id: `q_ari_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_ariana'
}));

const mappedOneDirectionQuestions: Question[] = ONE_DIRECTION_QUESTIONS.map((q, index) => ({
  ...q, id: `q_1d_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_onedirection'
}));

const mappedSabrinaQuestions: Question[] = SABRINA_QUESTIONS.map((q, index) => ({
  ...q, id: `q_sab_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_sabrina'
}));

const mappedJustinBieberQuestions: Question[] = JUSTIN_BIEBER_QUESTIONS.map((q, index) => ({
  ...q, id: `q_jb_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_justinbieber'
}));

const mappedCardiBQuestions: Question[] = CARDI_B_QUESTIONS.map((q, index) => ({
  ...q, id: `q_cardi_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_cardib'
}));

const mappedNickiMinajQuestions: Question[] = NICKI_MINAJ_QUESTIONS.map((q, index) => ({
  ...q, id: `q_nic_${index}`, categoryId: 'cat_music', subCategoryId: 'subcat_nickiminaj'
}));

const mappedUsStatesQuestions: Question[] = US_STATES_QUESTIONS.map((q, index) => ({
  ...q, id: `q_us_${index}`, categoryId: 'cat_geo', subCategoryId: 'subcat_us_states'
}));

const mappedWorldCapitalsQuestions: Question[] = WORLD_CAPITALS_QUESTIONS.map((q, index) => ({
  ...q, id: `q_world_${index}`, categoryId: 'cat_geo', subCategoryId: 'subcat_world_capitals'
}));

const mappedLandmarksOceansQuestions: Question[] = LANDMARKS_OCEANS_QUESTIONS.map((q, index) => ({
  ...q, id: `q_land_${index}`, categoryId: 'cat_geo', subCategoryId: 'subcat_landmarks_oceans'
}));

export const QUESTIONS: Question[] = [
  ...mappedTsQuestions,
  ...mappedBtsQuestions,
  ...mappedBeyonceQuestions,
  ...mappedArianaQuestions,
  ...mappedOneDirectionQuestions,
  ...mappedSabrinaQuestions,
  ...mappedJustinBieberQuestions,
  ...mappedCardiBQuestions,
  ...mappedNickiMinajQuestions,
  ...mappedUsStatesQuestions,
  ...mappedWorldCapitalsQuestions,
  ...mappedLandmarksOceansQuestions,
];
