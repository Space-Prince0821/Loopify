import { useState } from "react";
import { quiz } from "~/data";

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-slate-900 text-white">
        <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
          <h1 className="text-3xl">Quiz Page</h1>

          <div>
            Question: {activeQuestion + 1}  
            <span>/{questions.length}</span>
          </div>

          <div>
            {!showResult ? (
                <div className="bg-white text-black px-20 py-2 rounded-lg pt-4 pb-4 flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">{questions[activeQuestion]?.question}</h3>
                    {answers.map((answer: Array<string>, idx: number) => (
                        <li 
                            className="list-none border-2 border-gray-600 px-2 py-2 rounded-lg flex justify-center hover:bg-slate-200 cursor-pointer hover:border-black" 
                            key={idx}
                        >
                            <span>{answer}</span>
                        </li>
                    ))}
                </div>
            ) : (
                <div className="">

                </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
