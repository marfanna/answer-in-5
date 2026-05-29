'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Clock, AlertCircle } from 'lucide-react';
import { Question } from '@/lib/mockData';

export default function QuizClient({ questions, title }: { questions: Question[], title: string }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswering, setIsAnswering] = useState(false); // When true, showing correct/incorrect before next question

  const currentQuestion = questions[currentIndex];

  const handleNextQuestion = useCallback(() => {
    setSelectedAnswer(null);
    setIsAnswering(false);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setTimeLeft(5);
    } else {
      setIsGameOver(true);
    }
  }, [currentIndex, questions.length]);

  const handleAnswer = useCallback((index: number) => {
    if (isAnswering) return; // Prevent multiple clicks
    
    setSelectedAnswer(index);
    setIsAnswering(true);
    
    if (index === currentQuestion.correctAnswerIndex) {
      setScore(prev => prev + 100 + (timeLeft * 10)); // Bonus points for speed
    }

    // Wait 2 seconds so user can read explanation, then go to next
    setTimeout(() => {
      handleNextQuestion();
    }, 2500);
  }, [currentQuestion, isAnswering, timeLeft, handleNextQuestion]);

  // Timer logic
  useEffect(() => {
    if (isGameOver || isAnswering) return;

    if (timeLeft <= 0) {
      // Time is up! Treat as incorrect.
      handleAnswer(-1); // -1 means no option selected
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isGameOver, isAnswering, handleAnswer]);

  if (isGameOver) {
    return (
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-lg shadow-xl border-slate-200">
          <CardHeader className="text-center space-y-4">
            <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
            <CardTitle className="text-3xl font-heading">Quiz Completed!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-slate-500 font-medium">YOUR SCORE</p>
              <p className="text-6xl font-bold text-slate-900 font-heading">{score}</p>
            </div>
            <p className="text-slate-600">
              You answered {questions.length} questions on {title}.
            </p>
          </CardContent>
          <CardFooter className="flex gap-4 justify-center">
            <Button variant="outline" onClick={() => router.push('/')}>Go Home</Button>
            <Button onClick={() => window.location.reload()}>Play Again</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 w-full max-w-2xl mx-auto">
      {/* Header Stats */}
      <div className="w-full flex justify-between items-center mb-8">
        <Badge variant="outline" className="text-sm px-3 py-1 bg-white">
          Question {currentIndex + 1} / {questions.length}
        </Badge>
        <div className="flex items-center gap-2 font-bold text-lg font-heading">
          <Trophy className="w-5 h-5 text-yellow-500" /> {score}
        </div>
      </div>

      {/* Main Question Card */}
      <Card className="w-full shadow-lg border-slate-200 relative overflow-hidden">
        {/* Timer Bar */}
        <Progress 
          value={(timeLeft / 5) * 100} 
          className={`h-2 rounded-none absolute top-0 left-0 right-0 ${timeLeft <= 2 ? 'bg-red-100 [&>div]:bg-red-500' : '[&>div]:bg-slate-900'}`} 
        />
        
        <CardHeader className="pt-10">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs font-bold text-slate-400 tracking-wider uppercase">{title}</h2>
            <div className={`flex items-center gap-1 font-bold ${timeLeft <= 2 ? 'text-red-500 animate-pulse' : 'text-slate-500'}`}>
              <Clock className="w-4 h-4" /> {timeLeft}s
            </div>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-heading leading-tight text-slate-900">
            {currentQuestion.questionText}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3 mt-6">
          {currentQuestion.options.map((option, index) => {
            let buttonStateClass = "bg-white hover:bg-slate-50 border-slate-200 text-slate-700";
            
            if (isAnswering) {
              if (index === currentQuestion.correctAnswerIndex) {
                buttonStateClass = "bg-green-100 border-green-500 text-green-900 hover:bg-green-100";
              } else if (index === selectedAnswer) {
                buttonStateClass = "bg-red-100 border-red-500 text-red-900 hover:bg-red-100";
              } else {
                buttonStateClass = "bg-slate-50 border-slate-200 text-slate-400 opacity-50"; // Dim others
              }
            }

            return (
              <Button
                key={index}
                variant="outline"
                className={`w-full justify-start h-14 md:h-16 text-left px-6 text-base whitespace-normal shadow-sm transition-all ${buttonStateClass}`}
                onClick={() => handleAnswer(index)}
                disabled={isAnswering}
              >
                {option}
              </Button>
            );
          })}
        </CardContent>

        {/* Explanation Toast */}
        {isAnswering && (
          <div className="p-4 mx-6 mb-6 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2">
            <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-600">{currentQuestion.explanation}</p>
          </div>
        )}
      </Card>
    </div>
  );
}
