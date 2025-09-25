import React from "react";

const NumberSuppresser = ({
  setSupressInputOptions,
  suppressInputOptions,
  suppressInputValueHandler,
}) => {
  return (
    <div className="w-full mt-4 flex flex-col items-center justify-center md:w-[350px] bg-white shadow-lg rounded-md">
      {/* Number Supresser */}
      <h2 className="w-full text-md font-normal text-center py-2 bg-blue-400 text-white rounded-t-md">
        How many numbers you want to suppress?
      </h2>
      <div className="w-full flex gap-2">
        <select
          onChange={(e) => setSupressInputOptions(Number(e.target.value))}
          className="w-full px-4 py-2 focus:outline-none cursor-pointer bg-blue-100"
        >
          {[...Array(20)].map((_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      {/* Show Input Fields if Value Selected */}
      <div className="w-full flex flex-col max-h-[350px] p-4">
        <p className="py-2">Enter the Values One by One:</p>
        <div className="w-full grid grid-cols-5 gap-2 max-h-[350px]">
          {[...Array(suppressInputOptions)].map((_, index) => (
            <input
              key={index}
              onChange={(e) =>
                suppressInputValueHandler(index, Number(e.target.value))
              }
              type="text"
              className="p-2 rounded bg-green-500 text-center focus:outline-blue-700 text-white font-bold"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberSuppresser;
