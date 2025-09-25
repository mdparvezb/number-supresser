import React from "react";

const OddEvenSuppresser = ({
  OddEvenSelected,
  oddEvenData,
  checkboxHandler,
}) => {
  return (
    <div className="w-full mt-4 flex flex-col items-center justify-center md:w-[350px] bg-white shadow-lg rounded-md">
      <h2 className="w-full text-xl font-normal text-center py-2 bg-blue-400 text-white rounded-t-md">
        Select Odd Even Combination
      </h2>
      <div className="w-full p-2 flex flex-col">
        <p>Selected Items:</p>
        <div className="w-full flex gap-1 mb-2 max-h-24 py-1 flex-wrap overflow-x-hidden overflow-y-auto">
          {OddEvenSelected.map((item) => (
            <span
              key={item}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="w-full py-2 overflow-x-hidden max-h-[350px]">
          {oddEvenData.map((each, index) => (
            <div
              key={each}
              className="w-full px-4 flex items-center border-b border-blue-100"
            >
              <p className="p-1 mr-2">{index + 1} &#41; </p>
              <input
                id={each}
                type="checkbox"
                value={each}
                onChange={checkboxHandler}
                className="p-2 hover:cursor-pointer"
              />
              <label htmlFor={each} className="p-2 hover:cursor-pointer">
                {each}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OddEvenSuppresser;
