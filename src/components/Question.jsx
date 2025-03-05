import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import questions from "../questions";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectedAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: questions[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? " correct" : " wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  return (
    <>
      <QuestionTimer
        timeOut={timer}
        onTimeOut={answer.selectedAnswer === "" ? onSkipAnswer : null}
        key={timer}
      />
      <h2 className="text-2xl font-semibold">{questions[index].text}</h2>
      <Answers
        answers={questions[index].answers}
        onSelect={handleSelectedAnswer}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
      />
    </>
  );
}
