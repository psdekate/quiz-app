import { useCallback, useState } from "react";
import questions from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); // used to store the option/answer clicked by a user from the set of available options/answers
  const activeQuestion = userAnswers.length; //used to access the length of answers from the questions.js file

  const quizIsOver = activeQuestion === questions.length;

  //we passed in an argument expected at a click
  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer,
  ) {
    //looping through every element in this array
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
      // also saving the previous records and accepting new record on click
    });
  }, []);

  const skipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer],
  );

  if (quizIsOver) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div className="flex w-[50vw] flex-col items-center gap-8 rounded-lg bg-blue-900 p-6">
      <Question
        key={activeQuestion}
        index={activeQuestion}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={skipAnswer}
      />
    </div>
  );
}
