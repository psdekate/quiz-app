import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <div className="flex w-full flex-col gap-4">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        //make sure to write a 'return' keyword after '{' above
        return (
          <div>
            <button
              key={answer}
              onClick={() => onSelect(answer)}
              //   "w-full cursor-pointer rounded-sm bg-sky-700 px-5 py-4 text-center hover:bg-sky-600"
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </div>
        );
      })}
    </div>
  );
}
