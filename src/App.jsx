import "./App.css";
import Quiz from "./components/Quiz";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-8 p-5 text-white">
        <Header />
        <Quiz />
      </div>
    </>
  );
}

export default App;
