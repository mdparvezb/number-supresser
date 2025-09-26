import React from "react";
import "./../App.css";

const NumberSuppresser = ({
  setSupressInputOptions,
  suppressInputOptions,
  suppressInputValueHandler,
}) => {
  return (
    <div className="w-full mt-4 flex flex-col items-center justify-center md:w-[350px] bg-white shadow-lg rounded-md">
      {/* Number Supresser */}
      <h2 className="w-full text-md tracking-wide text-center py-2 bg-blue-800 text-white rounded-t-md font-bold">
        NUMBER SUPPRESSER
      </h2>
      <div className="w-full flex flex-col mt-4 ml-6 gap-2">
        <p>Choose Number of Inputs to Suppress:</p>
        <select
          onChange={(e) => setSupressInputOptions(Number(e.target.value))}
          className="w-40 text-center font-bold text-white bg-green-600 py-4 focus:outline-none cursor-pointe rounded-sm cursor-pointer"
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
              maxLength={2}
              placeholder="0"
              key={index}
              onChange={(e) =>
                suppressInputValueHandler(index, Number(e.target.value))
              }
              type="text"
              className="py-1 border-blue-700 border-b-2 text-center  text-black text-2xl font-bold focus:outline-none focus:border-b-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberSuppresser;
