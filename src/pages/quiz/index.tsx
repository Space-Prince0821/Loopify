import { useState } from "react";
import { questions } from "~/data";

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const question = questions[activeQuestion]?.question;
  const answers = questions[activeQuestion]?.answers;
  const correctAnswer = questions[activeQuestion]?.correctAnswer;

  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
        setSelectedAnswer(true);
    } else {
        setSelectedAnswer(false);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) => 
        selectedAnswer ?
        {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1
        } : 
        {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1
        }
    );

    if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
    } else {
        setActiveQuestion(0);
        setShowResult(true);
    }
    setChecked(false);
  };

  const startOver = () => {
    setActiveQuestion(0);
    setSelectedAnswer(false);
    setChecked(false);
    setSelectedAnswerIndex(null);
    setShowResult(false);
    setResult({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
  };

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
                    {answers?.map((answer, idx) => (
                        <li 
                            className={selectedAnswerIndex === idx ? 'list-none border-2 border-gray-600 px-2 py-2 rounded-lg flex justify-center cursor-pointer bg-slate-400' : 'list-none border-2 border-gray-600 px-2 py-2 rounded-lg flex justify-center hover:bg-slate-200 cursor-pointer hover:border-black'} 
                            onClick={() => onAnswerSelected(answer, idx)}
                            key={idx}
                        >
                            <span>{answer}</span>
                        </li>
                    ))}

                    {checked ? (
                        <button onClick={nextQuestion} className="border-1 rounded-lg bg-green-200 px-2 py-2">
                            {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                        </button>
                    ) : (
                        <button className="border-1 rounded-lg bg-green-200 px-2 py-2 disabled bg-gray-200 text-slate-400">
                            {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                        </button>
                    )}
                </div>
            ) : (
                <div className="border-1 bg-white text-black flex flex-col items-center justify-center px-4 py-4 rounded-lg w-48 h-48 gap-2 font-medium text-2xl">
                    <h3>Results</h3>
                    <h3>Overall: {Math.floor((result.score/15) * 100)}%</h3>
                    <button onClick={startOver} className="font-normal mt-4 border-1 rounded-lg bg-green-400 px-4 py-2">Try Again</button>
                </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
