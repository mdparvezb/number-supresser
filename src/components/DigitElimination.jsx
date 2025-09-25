import React from "react";

const DigitElimination = ({
  firstDigitInput,
  setFirstDigitInput,
  secondDigitInput,
  setSecondDigitInput,
  thirdDigitInput,
  setThirdDigitInput,
  fourthDigitInput,
  setFourthDigitInput,
  fifthDigitInput,
  setFifthDigitInput,
  sixthDigitInput,
  setSixthDigitInput,
  firstDigitValuesHandler,
  secondDigitValuesHandler,
  thirdDigitValuesHandler,
  fourthDigitValuesHandler,
  fifthDigitValuesHandler,
  sixthDigitValuesHandler,
}) => {
  return (
    <div className="w-full mt-4 pb-4 flex flex-col items-center justify-center md:w-[350px] bg-white shadow-lg rounded-md">
      <h2 className="w-full text-md font-normal text-center py-2 bg-blue-400 text-white rounded-t-md">
        Single Digit Suppresser Select One by One
      </h2>
      {/* First Digit */}
      <div>
        <p className="w-full text-sm p-2 mt-2 font-bold">
          Enter Number of Inputs to Eliminate 1st Digit
        </p>
        <div className="px-2 w-full">
          <select
            onChange={(e) => setFirstDigitInput(Number(e.target.value))}
            className="w-[50%] focus:outline-none focus:shadow-lg transition-all duration-200 bg-yellow-200 px-4 py-2 rounded cursor-pointer"
          >
            {[...Array(100)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {/* Show Input Fields if Input Selected for First Digit */}
        <div className="w-full flex flex-col mt-2 p-2 overflow-y-auto">
          <p className="">Enter the Values One by One:</p>
          <div className="w-full grid grid-cols-5 gap-2 max-h-[200px]">
            {[...Array(firstDigitInput)].map((_, index) => (
              <input
                key={index}
                type="text"
                onChange={(e) =>
                  firstDigitValuesHandler(index, Number(e.target.value))
                }
                className="p-2 rounded bg-orange-400 text-center focus:outline-blue-700 text-white font-bold"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Second Digit */}
      <div>
        <p className="w-full text-sm p-2 mt-2 font-bold">
          Enter Number of Inputs to Eliminate 2nd Digit
        </p>
        <div className="px-2 w-full">
          <select
            onChange={(e) => setSecondDigitInput(Number(e.target.value))}
            className="w-[50%] focus:outline-none focus:shadow-lg transition-all duration-200 bg-yellow-200 px-4 py-2 rounded cursor-pointer"
          >
            {[...Array(100)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {/* Show Input Fields if Input Selected for Second Digit */}
        <div className="w-full flex flex-col mt-2 p-2 overflow-y-auto">
          <p className="">Enter the Values One by One:</p>
          <div className="w-full grid grid-cols-5 gap-2 max-h-[200px]">
            {[...Array(secondDigitInput)].map((_, index) => (
              <input
                key={index}
                type="text"
                onChange={(e) =>
                  secondDigitValuesHandler(index, Number(e.target.value))
                }
                className="p-2 rounded bg-orange-400 text-center focus:outline-blue-700 text-white font-bold"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Third Digit */}
      <div>
        <p className="w-full text-sm p-2 mt-2 font-bold">
          Enter Number of Inputs to Eliminate 3rd Digit
        </p>
        <div className="px-2 w-full">
          <select
            onChange={(e) => setThirdDigitInput(Number(e.target.value))}
            className="w-[50%] focus:outline-none focus:shadow-lg transition-all duration-200 bg-yellow-200 px-4 py-2 rounded cursor-pointer"
          >
            {[...Array(100)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {/* Show Input Fields if Input Selected for Third Digit */}
        <div className="w-full flex flex-col mt-2 p-2 overflow-y-auto">
          <p className="">Enter the Values One by One:</p>
          <div className="w-full grid grid-cols-5 gap-2 max-h-[200px]">
            {[...Array(thirdDigitInput)].map((_, index) => (
              <input
                key={index}
                type="text"
                onChange={(e) =>
                  thirdDigitValuesHandler(index, Number(e.target.value))
                }
                className="p-2 rounded bg-orange-400 text-center focus:outline-blue-700 text-white font-bold"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fourth Digit */}
      <div>
        <p className="w-full text-sm p-2 mt-2 font-bold">
          Enter Number of Inputs to Eliminate 4th Digit
        </p>
        <div className="px-2 w-full">
          <select
            onChange={(e) => setFourthDigitInput(Number(e.target.value))}
            className="w-[50%] focus:outline-none focus:shadow-lg transition-all duration-200 bg-yellow-200 px-4 py-2 rounded cursor-pointer"
          >
            {[...Array(100)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {/* Show Input Fields if Input Selected for Fourth Digit */}
        <div className="w-full flex flex-col mt-2 p-2 overflow-y-auto">
          <p className="">Enter the Values One by One:</p>
          <div className="w-full grid grid-cols-5 gap-2 max-h-[200px]">
            {[...Array(fourthDigitInput)].map((_, index) => (
              <input
                key={index}
                type="text"
                onChange={(e) =>
                  fourthDigitValuesHandler(index, Number(e.target.value))
                }
                className="p-2 rounded bg-orange-400 text-center focus:outline-blue-700 text-white font-bold"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fifth Digit */}
      <div>
        <p className="w-full text-sm p-2 mt-2 font-bold">
          Enter Number of Inputs to Eliminate 5th Digit
        </p>
        <div className="px-2 w-full">
          <select
            onChange={(e) => setFifthDigitInput(Number(e.target.value))}
            className="w-[50%] focus:outline-none focus:shadow-lg transition-all duration-200 bg-yellow-200 px-4 py-2 rounded cursor-pointer"
          >
            {[...Array(100)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {/* Show Input Fields if Input Selected for Fifth Digit */}
        <div className="w-full flex flex-col mt-2 p-2 overflow-y-auto">
          <p className="">Enter the Values One by One:</p>
          <div className="w-full grid grid-cols-5 gap-2 max-h-[200px]">
            {[...Array(fifthDigitInput)].map((_, index) => (
              <input
                key={index}
                type="text"
                onChange={(e) =>
                  fifthDigitValuesHandler(index, Number(e.target.value))
                }
                className="p-2 rounded bg-orange-400 text-center focus:outline-blue-700 text-white font-bold"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sixth Digit */}
      <div>
        <p className="w-full text-sm p-2 mt-2 font-bold">
          Enter Number of Inputs to Eliminate 6th Digit
        </p>
        <div className="px-2 w-full">
          <select
            onChange={(e) => setSixthDigitInput(Number(e.target.value))}
            className="w-[50%] focus:outline-none focus:shadow-lg transition-all duration-200 bg-yellow-200 px-4 py-2 rounded cursor-pointer"
          >
            {[...Array(100)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        {/* Show Input Fields if Input Selected for Sixth Digit */}
        <div className="w-full flex flex-col mt-2 p-2 overflow-y-auto">
          <p className="">Enter the Values One by One:</p>
          <div className="w-full grid grid-cols-5 gap-2 max-h-[200px]">
            {[...Array(sixthDigitInput)].map((_, index) => (
              <input
                key={index}
                type="text"
                onChange={(e) =>
                  sixthDigitValuesHandler(index, Number(e.target.value))
                }
                className="p-2 rounded bg-orange-400 text-center focus:outline-blue-700 text-white font-bold"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitElimination;
