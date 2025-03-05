import quizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={quizLogo} alt="" className="w-[6rem]" />
      <h1 className="text-5xl font-bold text-pink-500 uppercase">reactquiz</h1>
    </div>
  );
}
