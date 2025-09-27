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
    <div className="w-full mt-4 pb-4 flex flex-col items-center justify-center md:w-[350px] rounded-md">
      <h2 className="w-full text-md font-bold text-center py-2 bg-blue-800 text-white tracking-wide rounded-t-md">
        SINGLE DIGIT SUPPRESSER
      </h2>
      <p className="px-2 w-full py-2">Select One by One:</p>
      <div className="flex flex-col gap-2">
        {/* First Digit */}
        <div className="shadow-lg pb-3 rounded-lg bg-white">
          <p className="w-full text-sm p-2 mt-1 font-bold">
            Enter Number of Inputs to Eliminate 1st Digit
          </p>
          <div className="px-2 w-full">
            <select
              onChange={(e) => setFirstDigitInput(Number(e.target.value))}
              defaultValue={3}
              className="w-40 text-center font-bold text-white bg-blue-500 py-4 focus:outline-none cursor-pointe rounded-md cursor-pointer"
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
                  placeholder="0"
                  maxLength={2}
                  type="text"
                  onChange={(e) =>
                    firstDigitValuesHandler(index, Number(e.target.value))
                  }
                  className="py-1 border-purple-800 border-b-2 text-center  text-black text-2xl font-bold focus:outline-none focus:border-b-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Second Digit */}
        <div className="rounded-lg shadow-lg bg-white pb-3">
          <p className="w-full text-sm p-2 mt-2 font-bold">
            Enter Number of Inputs to Eliminate 2nd Digit
          </p>
          <div className="px-2 w-full">
            <select
              defaultValue={3}
              onChange={(e) => setSecondDigitInput(Number(e.target.value))}
              className="w-40 text-center font-bold text-white bg-blue-500 py-4 focus:outline-none cursor-pointe rounded-md cursor-pointer"
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
                  placeholder="0"
                  maxLength={2}
                  type="text"
                  onChange={(e) =>
                    secondDigitValuesHandler(index, Number(e.target.value))
                  }
                  className="py-1 border-purple-800 border-b-2 text-center  text-black text-2xl font-bold focus:outline-none focus:border-b-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Third Digit */}
        <div className="rounded-lg shadow-lg bg-white pb-3">
          <p className="w-full text-sm p-2 mt-2 font-bold">
            Enter Number of Inputs to Eliminate 3rd Digit
          </p>
          <div className="px-2 w-full">
            <select
              defaultValue={3}
              onChange={(e) => setThirdDigitInput(Number(e.target.value))}
              className="w-40 text-center font-bold text-white bg-blue-500 py-4 focus:outline-none cursor-pointe rounded-md cursor-pointer"
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
                  placeholder="0"
                  maxLength={2}
                  type="text"
                  onChange={(e) =>
                    thirdDigitValuesHandler(index, Number(e.target.value))
                  }
                  className="py-1 border-purple-800 border-b-2 text-center  text-black text-2xl font-bold focus:outline-none focus:border-b-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fourth Digit */}
        <div className="rounded-lg shadow-lg bg-white pb-3">
          <p className="w-full text-sm p-2 mt-2 font-bold">
            Enter Number of Inputs to Eliminate 4th Digit
          </p>
          <div className="px-2 w-full">
            <select
              defaultValue={3}
              onChange={(e) => setFourthDigitInput(Number(e.target.value))}
              className="w-40 text-center font-bold text-white bg-blue-500 py-4 focus:outline-none cursor-pointe rounded-md cursor-pointer"
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
                  placeholder="0"
                  maxLength={2}
                  type="text"
                  onChange={(e) =>
                    fourthDigitValuesHandler(index, Number(e.target.value))
                  }
                  className="py-1 border-purple-800 border-b-2 text-center  text-black text-2xl font-bold focus:outline-none focus:border-b-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fifth Digit */}
        <div className="rounded-lg shadow-lg bg-white pb-3">
          <p className="w-full text-sm p-2 mt-2 font-bold">
            Enter Number of Inputs to Eliminate 5th Digit
          </p>
          <div className="px-2 w-full">
            <select
              defaultValue={3}
              onChange={(e) => setFifthDigitInput(Number(e.target.value))}
              className="w-40 text-center font-bold text-white bg-blue-500 py-4 focus:outline-none cursor-pointe rounded-md cursor-pointer"
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
                  placeholder="0"
                  maxLength={2}
                  type="text"
                  onChange={(e) =>
                    fifthDigitValuesHandler(index, Number(e.target.value))
                  }
                  className="py-1 border-purple-800 border-b-2 text-center  text-black text-2xl font-bold focus:outline-none focus:border-b-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sixth Digit */}
        <div className="rounded-lg shadow-lg bg-white pb-3">
          <p className="w-full text-sm p-2 mt-2 font-bold">
            Enter Number of Inputs to Eliminate 6th Digit
          </p>
          <div className="px-2 w-full">
            <select
              defaultValue={3}
              onChange={(e) => setSixthDigitInput(Number(e.target.value))}
              className="w-40 text-center font-bold text-white bg-blue-500 py-4 focus:outline-none cursor-pointe rounded-md cursor-pointer"
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
                  placeholder="0"
                  maxLength={2}
                  type="text"
                  onChange={(e) =>
                    sixthDigitValuesHandler(index, Number(e.target.value))
                  }
                  className="py-1 border-purple-800 border-b-2 text-center  text-black text-2xl font-bold focus:outline-none focus:border-b-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitElimination;
