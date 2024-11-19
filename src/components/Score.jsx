import tropy from "../assets/tropy.png";

const Score = ({score}) => {
  console.group(score.total);
  return (
    <section className="w-[90%] font-inter md:w-[400px] bg-pink-800 flex flex-col items-center rounded-md py-5 justify-center">
      <p className="text-pink-400  font-semibold text-xl ">Your Score</p>
      <p className="text-sm text-red-400">*Each question carries 10 marks</p>

      <img src={tropy} alt="" className="w-20 h-20 mt-2" />
      <p className="text-white mt-2 font-semibold">Score</p>
      <p className="text-white font-semibold">{score.total} / 100</p>
    </section>
  );
};

export default Score;
