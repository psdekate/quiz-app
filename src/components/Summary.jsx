import quizImage from "../assets/quiz-complete.png";
import questions from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answers[0],
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100,
  );

  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100,
  );

  const wrongAnswers = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div className="flex w-[50vw] flex-col items-center gap-8 rounded-lg bg-blue-950 p-6">
      <img src={quizImage} alt="" className="w-[6rem]" />
      <h2 className="text-3xl font-bold uppercase">Quiz Completed</h2>
      <div className="grid w-full grid-cols-3 text-center">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-bold">{skippedAnswersShare}%</span>
          <span className="font-medium text-stone-200">skipped</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-bold">{correctAnswersShare}%</span>
          <span className="font-medium text-stone-200">answered correctly</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-bold">{wrongAnswers}%</span>
          <span className="font-medium text-stone-200">
            asnwered incorrectly
          </span>
        </div>
      </div>
      <ol className="flex w-full flex-col gap-5 bg-amber-400 text-center">
        {userAnswers.map((answer, index) => {
          let cssClass = "";

          if (answer === null) {
            cssClass += " skippedAnswer";
          } else if (answer === questions[index].answers[0]) {
            cssClass += " correctAnswer";
          } else {
            cssClass += " wrongAnswer";
          }
          return (
            <li key={answer}>
              <p>{index + 1}</p>
              <h2 className="text-[22px] font-semibold">
                {questions[index].text}
              </h2>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
