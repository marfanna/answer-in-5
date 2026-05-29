const fs = require('fs');
let content = fs.readFileSync('./src/lib/taylorSwiftQuestions.ts', 'utf8');
content = content.replace('export const TAYLOR_SWIFT_QUESTIONS: Question[] = [', 'export const TAYLOR_SWIFT_QUESTIONS: Omit<Question, \'id\' | \'categoryId\' | \'subCategoryId\'>[] = [');
content = content.replace(/^\s*"id": "q_ts_bulk_\d+",\r?\n/gm, '');
content = content.replace(/^\s*"categoryId": "cat_pop_culture",\r?\n/gm, '');
content = content.replace(/^\s*"subCategoryId": "subcat_tswift",\r?\n/gm, '');
fs.writeFileSync('./src/lib/taylorSwiftQuestions.ts', content, 'utf8');
console.log('Done formatting Taylor Swift questions!');
