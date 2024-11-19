import "./App.css";
import Score from "./components/Score";
import Questions from "./components/Questions";
import { Problems } from "./constants/Problems";
import { useState } from "react";
function App() {
  const [problemIndx, setProblemIndx] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(Problems.length).fill(-1)
  );
  const [score, setScore] = useState({
    showScore: false,
    total: 0,
  });
  const nextPage = () => {
    if (problemIndx === Problems.length - 1) return findScore();
    setProblemIndx((prev) => prev + 1);
    console.log();
  };

  const prevPage = () => {
    if (problemIndx === 0) return;
    setProblemIndx((prev) => prev - 1);
  };

  const findScore = () => {
    let total = 0;
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i] === Problems[i].ans) total += 10;
    }
    setScore({ showScore: true, total: total });
    console.log(selectedOptions);
  };

  return (
    <>
      <section className="h-[100vh] w-[100%] bg-custom-bg bg-center bg-cover">
        {score.showScore ? (
          <div className="flex justify-center  items-center h-[100vh]">
            <Score score={score} />
          </div>
        ) : (
          <div className="h-[100vh]  flex flex-col items-center justify-center  font-inter">
            <div className="mt-2 w-[90%] md:w-[70%]">
              <Questions
                index={problemIndx}
                setSelectedOptions={setSelectedOptions}
                selectedOptions={selectedOptions}
              />
            </div>
            <div className="md:w-[70%] w-[90%] mt-2 flex justify-between">
              <button
                disabled={problemIndx === 0}
                onClick={prevPage}
                className={`px-8 py-2 ${
                  problemIndx === 0 ? "bg-pink-200" : "bg-pink-900"
                } rounded text-white font-semibold outline-1 outline outline-pink-200`}
              >
                Prev
              </button>
              <button
                onClick={() => nextPage()}
                className="px-8 py-2 bg-pink-900 rounded text-white font-semibold outline-1 outline outline-pink-200"
              >
                {problemIndx === 9 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default App;
