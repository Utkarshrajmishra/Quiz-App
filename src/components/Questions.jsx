import { Problems } from "../constants/Problems";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Questions = ({ index, setSelectedOptions, selectedOptions }) => {
  const handleSelect = (option) => {
    const temp = [...selectedOptions];
    temp[index] = option;
    setSelectedOptions(temp);
  };

  return (
    <div className="flex flex-col items-center w-[100%] ">
      <div className="w-[100%] ">
        <p className="text-white text-xl font-semibold">
          {index + 1}. What's the output?
        </p>
        <div>
          <SyntaxHighlighter
            language="javascript"
            style={docco}
            customStyle={{
              width: "100%",
              marginTop: "2px",
            }}
          >
            {Problems[index].code}
          </SyntaxHighlighter>
        </div>
        <div className={`text-white divide-y divide-zinc-700 `}>
          {Problems[index].options.map((item, indx) => (
            <div
              onClick={() => handleSelect(indx)}
              key={item.id}
              className={`${
                selectedOptions[index] === indx
                  ? "bg-green-900"
                  : "bg-stone-900"
              } px-2 py-4 cursor-pointer`}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
