import { useState } from "react";
import questions from "../questions";
import quizImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); // used to store the options clicked by a user from the set of available options
  const activeQuestion = userAnswers.length; //used to access the length of answers from the questions.js file

  const quizIsOver = activeQuestion === questions.length;

  if (quizIsOver) {
    return (
      <div className="flex flex-col items-center gap-3">
        <img src={quizImage} alt="" className="w-[8rem]" />
        <h2 className="text-3xl font-bold uppercase">Quiz Completed</h2>
      </div>
    );
  }

  //this needs to run after the if statement to ensure that we dont exhaust the length
  const shuffledAnswers = [...questions[activeQuestion].answers]; //we are accessing the 'answers' object using 'questions[activeQuestion].answers' and spreading them so that we can shuffle them
  shuffledAnswers.sort(() => Math.random() - 0.5);

  //we passed in an argument expected at a click
  function handleSelectedAnswer(selectedAnswer) {
    //looping through every element in this array
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
      // also saving the previous records and accepting new record on click
    });
  }

  return (
    <div className="flex w-[50vw] flex-col items-center gap-8 rounded-lg bg-blue-900 p-6">
      <QuestionTimer
        timeOut={10000}
        onTimeOut={() => handleSelectedAnswer(null)}
      />
      <h2 className="text-2xl font-semibold">
        {questions[activeQuestion].text}
      </h2>
      <div className="flex w-full flex-col gap-4">
        {shuffledAnswers.map((answer) => {
          //make sure to write a 'return' keyword after '{' above
          return (
            <div>
              <button
                key={answer}
                onClick={() => handleSelectedAnswer(answer)}
                className="w-full cursor-pointer rounded-sm bg-sky-700 px-5 py-4 text-center hover:bg-sky-600"
              >
                {answer}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
