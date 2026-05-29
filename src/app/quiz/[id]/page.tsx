import { QUESTIONS, SUB_CATEGORIES, CATEGORIES } from '@/lib/mockData';
import QuizClient from '@/components/QuizClient';
import { notFound } from 'next/navigation';

export default async function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  // For the MVP mock data, let's map the URL slug to our specific subsets of data.
  // E.g. "taylor-swift" -> filter QUESTIONS where subCategoryId === "subcat_tswift"
  
  // Find if it's a subcategory (like taylor-swift)
  const subCategory = SUB_CATEGORIES.find(s => s.slug === id);
  const category = CATEGORIES.find(c => c.slug === id);

  let filteredQuestions = [];
  let title = "Quiz";

  if (subCategory) {
    filteredQuestions = QUESTIONS.filter(q => q.subCategoryId === subCategory.id);
    title = subCategory.name;
  } else if (category) {
    filteredQuestions = QUESTIONS.filter(q => q.categoryId === category.id);
    title = category.name;
  } else {
    // If not found, 404
    notFound();
  }

  // If no questions in this niche yet
  if (filteredQuestions.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-heading font-bold mb-2 text-slate-900">Coming Soon!</h1>
        <p className="text-slate-500">We are still adding questions for this niche.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-slate-50/50">
      <QuizClient questions={filteredQuestions} title={title} />
    </div>
  );
}
