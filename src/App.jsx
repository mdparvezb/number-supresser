import { React, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "./App.css";

function App() {
  // First number suppresser
  const [suppressInputOptions, setSupressInputOptions] = useState(1);
  const [suppressInputValues, setSupressInputValues] = useState([]);
  const [ExcelData, setExcelData] = useState([]);
  const [OddEvenSelected, setOddEvenSelected] = useState([]);
  const [firstDigitInput, setFirstDigitInput] = useState(1);
  const [secondDigitInput, setSecondDigitInput] = useState(1);
  const [thirdDigitInput, setThirdDigitInput] = useState(1);
  const [fourthDigitInput, setFourthDigitInput] = useState(1);
  const [fifthDigitInput, setFifthDigitInput] = useState(1);
  const [sixthDigitInput, setSixthDigitInput] = useState(1);
  const [firstDigitValues, setFirstDigitValues] = useState([]);
  const [secondDigitValues, setSecondDigitValues] = useState([]);
  const [thirdDigitValues, setThirdDigitValues] = useState([]);
  const [fourthDigitValues, setFourthDigitValues] = useState([]);
  const [fifthDigitValues, setFifthDigitValues] = useState([]);
  const [sixthDigitValues, setSixthDigitValues] = useState([]);
  const [Supressed, setSupressed] = useState([]);
  const oddEvenData = [
    ["000000"],
    ["000001"],
    ["000010"],
    ["000011"],
    ["000100"],
    ["000101"],
    ["000110"],
    ["000111"],
    ["001000"],
    ["001001"],
    ["001010"],
    ["001011"],
    ["001100"],
    ["001101"],
    ["001110"],
    ["001111"],
    ["010000"],
    ["010001"],
    ["010010"],
    ["010011"],
    ["010100"],
    ["010101"],
    ["010110"],
    ["010111"],
    ["011000"],
    ["011001"],
    ["011010"],
    ["011011"],
    ["011100"],
    ["011101"],
    ["011110"],
    ["011111"],
    ["100000"],
    ["100001"],
    ["100010"],
    ["100011"],
    ["100100"],
    ["100101"],
    ["100110"],
    ["100111"],
    ["101000"],
    ["101001"],
    ["101010"],
    ["101011"],
    ["101100"],
    ["101101"],
    ["101110"],
    ["101111"],
    ["110000"],
    ["110001"],
    ["110010"],
    ["110011"],
    ["110100"],
    ["110101"],
    ["110110"],
    ["110111"],
    ["111000"],
    ["111001"],
    ["111010"],
    ["111011"],
    ["111100"],
    ["111101"],
    ["111110"],
    ["111111"],
  ];

  // Shuffler Function
  function shuffleArray(arr) {
    // Perfect shuffle, no duplicates
    let result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]]; // swap
    }
    return result;
  }

  // File Upload Handler
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Take the first sheet
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      // [[row1],[row2],...]
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Since you have only one column, flatten it
      const flatArray = rows.map((row) => row[0].trim().split(" "));
      const stringToNumber = flatArray.map((row) =>
        row.map((digit) => Number(digit))
      );
      setExcelData(stringToNumber);
    };
    reader.readAsArrayBuffer(file);
  };

  // Supress Input Value Handler (1st Part Execution)
  const suppressInputValueHandler = (index, newValue) => {
    const updated = [...suppressInputValues];
    updated[index] = newValue;
    setSupressInputValues(updated);
  };

  // Single Digit Elimination Input Values Setup (Last Part Execution)
  // First Digit Input Handler
  const firstDigitValuesHandler = (index, newValue) => {
    const updated = [...firstDigitValues];
    updated[index] = newValue;
    setFirstDigitValues(updated);
  };

  // Second Digit Input Handler
  const secondDigitValuesHandler = (index, newValue) => {
    const updated = [...secondDigitValues];
    updated[index] = newValue;
    setSecondDigitValues(updated);
  };

  // Third Digit Input Handler
  const thirdDigitValuesHandler = (index, newValue) => {
    const updated = [...thirdDigitValues];
    updated[index] = newValue;
    setThirdDigitValues(updated);
  };

  // Fourth Digit Input Handler
  const fourthDigitValuesHandler = (index, newValue) => {
    const updated = [...fourthDigitValues];
    updated[index] = newValue;
    setFourthDigitValues(updated);
  };

  // Fifth Digit Input Handler
  const fifthDigitValuesHandler = (index, newValue) => {
    const updated = [...fifthDigitValues];
    updated[index] = newValue;
    setFifthDigitValues(updated);
  };

  // Sixth Digit Input Handler
  const sixthDigitValuesHandler = (index, newValue) => {
    const updated = [...sixthDigitValues];
    updated[index] = newValue;
    setSixthDigitValues(updated);
  };

  // odd Even Checkbox Handler
  const checkboxHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setOddEvenSelected((prevSelected) => [...prevSelected, value]);
    } else {
      setOddEvenSelected((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    }
  };

  // Final Submit Handler
  const SubmitHandler = () => {
    if (ExcelData.length > 0) {
      // Suppressing Numbers Included Filter
      const numberSuppressIncluded = ExcelData.filter((row) => {
        return suppressInputValues.some((value) => row.includes(value));
      });

      // Suppressing Numbers Excluded Filter
      const numberSuppressExcluded = ExcelData.filter((row) => {
        return !suppressInputValues.some((value) => row.includes(value));
      });
      // Binary Conversion For Odd Even Filter
      const binaryProcessed = numberSuppressExcluded.map((row) => {
        let binary = row.map((digit) => (Number(digit) % 2 == 0 ? 0 : 1));
        return [...row, ...binary];
      });
      // Odd Even Included Filter
      const oddEvenIncluded = binaryProcessed.filter((row) => {
        const oddEven = row.slice(-6);
        return OddEvenSelected.some((digit) => digit === oddEven.join(""));
      });
      // Removing Binary Part
      const oddEvenIncludedOriginal = oddEvenIncluded.map((row) =>
        row.slice(0, 6)
      );

      const oddEvenSuppressedMainArray = shuffleArray([
        ...oddEvenIncludedOriginal,
      ]);
      const oddEvenSuppressedExcelData = oddEvenSuppressedMainArray.map(
        (row) => [row.join(" ")]
      );

      // *********************************************************
      //  Excel Process
      const worksheetOddEvenSuppressed = XLSX.utils.aoa_to_sheet(
        oddEvenSuppressedExcelData
      );

      // Create a workbook and append the sheet
      const workbookOddEvenSuppressed = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(
        workbookOddEvenSuppressed,
        worksheetOddEvenSuppressed,
        "Sheet1"
      );

      // Save Excel file directly
      XLSX.writeFile(
        workbookOddEvenSuppressed,
        "OddEven_Suppressed_Sheet.xlsx"
      );
      // *************************************************************

      // Odd Even Excluded Filter
      const oddEvenExcluded = binaryProcessed.filter((row) => {
        const oddEven = row.slice(-6);
        return !OddEvenSelected.some((digit) => digit === oddEven.join(""));
      });
      // Removing Binary Part
      const oddEvenExcludedOriginal = oddEvenExcluded.map((row) =>
        row.slice(0, 6)
      );

      // 6 Digit Elemination One by One

      // Digit Including Process
      // First Digit Included
      const firstDigitIncluded = oddEvenExcludedOriginal.filter((row) => {
        return firstDigitValues.includes(row[0]);
      });

      // Second Digit Included
      const secondDigitIncluded = oddEvenExcludedOriginal.filter((row) => {
        return secondDigitValues.includes(row[1]);
      });

      // Third Digit Included
      const thirdDigitIncluded = oddEvenExcludedOriginal.filter((row) => {
        return thirdDigitValues.includes(row[2]);
      });

      // Fourth Digit Included
      const fourthDigitIncluded = oddEvenExcludedOriginal.filter((row) => {
        return fourthDigitValues.includes(row[3]);
      });

      // Fifth Digit Included
      const fifthDigitIncluded = oddEvenExcludedOriginal.filter((row) => {
        return fifthDigitValues.includes(row[4]);
      });

      // Sixth Digit Included
      const sixthDigitIncluded = oddEvenExcludedOriginal.filter((row) => {
        return sixthDigitValues.includes(row[5]);
      });

      const firstDigitIncludedMainArray = shuffleArray([...firstDigitIncluded]);
      const firstDigitExcelData = firstDigitIncludedMainArray.map((row) => [
        row.join(" "),
      ]);
      const secondDigitIncludedMainArray = shuffleArray([
        ...secondDigitIncluded,
      ]);
      const secondDigitExcelData = secondDigitIncludedMainArray.map((row) => [
        row.join(" "),
      ]);
      const thirdDigitIncludedMainArray = shuffleArray([...thirdDigitIncluded]);
      const thirdDigitExcelData = thirdDigitIncludedMainArray.map((row) => [
        row.join(" "),
      ]);
      const fourthDigitIncludedMainArray = shuffleArray([
        ...fourthDigitIncluded,
      ]);
      const fourthDigitExcelData = fourthDigitIncludedMainArray.map((row) => [
        row.join(" "),
      ]);
      const fifthDigitIncludedMainArray = shuffleArray([...fifthDigitIncluded]);
      const fifthDigitExcelData = fifthDigitIncludedMainArray.map((row) => [
        row.join(" "),
      ]);
      const sixthDigitIncludedMainArray = shuffleArray([...sixthDigitIncluded]);
      const sixthDigitExcelData = sixthDigitIncludedMainArray.map((row) => [
        row.join(" "),
      ]);

      // const digitIncludedMainArray = shuffleArray([
      //   ...firstDigitIncluded,
      //   ...secondDigitIncluded,
      //   ...thirdDigitIncluded,
      //   ...fifthDigitIncluded,
      //   ...fifthDigitIncluded,
      //   ...sixthDigitIncluded,
      // ]);

      // *********************************************************
      //  Excel Process
      const worksheetFirstDigitSuppressed =
        XLSX.utils.aoa_to_sheet(firstDigitExcelData);
      const worksheetSecondDigitSuppressed =
        XLSX.utils.aoa_to_sheet(secondDigitExcelData);
      const worksheetThirdDigitSuppressed =
        XLSX.utils.aoa_to_sheet(thirdDigitExcelData);
      const worksheetFourthDigitSuppressed =
        XLSX.utils.aoa_to_sheet(fourthDigitExcelData);
      const worksheetFifthDigitSuppressed =
        XLSX.utils.aoa_to_sheet(fifthDigitExcelData);
      const worksheetSixthDigitSuppressed =
        XLSX.utils.aoa_to_sheet(sixthDigitExcelData);

      // Create a workbook and append the sheet
      const workbookDigitSuppressed = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(
        workbookDigitSuppressed,
        worksheetFirstDigitSuppressed,
        "first_dig_sup"
      );
      XLSX.utils.book_append_sheet(
        workbookDigitSuppressed,
        worksheetSecondDigitSuppressed,
        "second_dig_sup"
      );
      XLSX.utils.book_append_sheet(
        workbookDigitSuppressed,
        worksheetThirdDigitSuppressed,
        "third_dig_sup"
      );
      XLSX.utils.book_append_sheet(
        workbookDigitSuppressed,
        worksheetFourthDigitSuppressed,
        "fourth_dig_sup"
      );
      XLSX.utils.book_append_sheet(
        workbookDigitSuppressed,
        worksheetFifthDigitSuppressed,
        "fifth_dig_sup"
      );
      XLSX.utils.book_append_sheet(
        workbookDigitSuppressed,
        worksheetSixthDigitSuppressed,
        "sixth_dig_sup"
      );

      // Save Excel file directly
      XLSX.writeFile(
        workbookDigitSuppressed,
        "Digit_Elimination_Suppressed_Sheet.xlsx"
      );
      // *************************************************************

      // Digit Excluding Process
      // First Digit Excluded
      const firstDigitExcluded = oddEvenExcludedOriginal.filter((row) => {
        return !firstDigitValues.includes(row[0]);
      });

      // Second Digit Excluded
      const secondDigitExcluded = firstDigitExcluded.filter((row) => {
        return !secondDigitValues.includes(row[1]);
      });

      // Third Digit Excluded
      const thirdDigitExcluded = secondDigitExcluded.filter((row) => {
        return !thirdDigitValues.includes(row[2]);
      });

      // Fourth Digit Excluded
      const fourthDigitExcluded = thirdDigitExcluded.filter((row) => {
        return !fourthDigitValues.includes(row[3]);
      });

      // Fifth Digit Excluded
      const fifthDigitExcluded = fourthDigitExcluded.filter((row) => {
        return !fifthDigitValues.includes(row[4]);
      });

      // Sixth Digit Excluded
      const sixthDigitExcluded = fifthDigitExcluded.filter((row) => {
        return !sixthDigitValues.includes(row[5]);
      });

      const digitExcludedMainArray = shuffleArray([...sixthDigitExcluded]);
      const digitExcludedExcelData = digitExcludedMainArray.map((row) => [
        row.join(" "),
      ]);

      //  Excel Process
      const worksheet = XLSX.utils.aoa_to_sheet(digitExcludedExcelData);

      // Create a workbook and append the sheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      // Save Excel file directly
      XLSX.writeFile(workbook, "Final_Suppressed_Sheet.xlsx");
    } else {
      return;
    }
  };

  //  // Excel File Saving Function
  //  const ExcelFilerHandler = () => {
  //   // Convert array to worksheet
  // const worksheet = XLSX.utils.aoa_to_sheet(data);

  // // Create a workbook and append the sheet
  // const workbook = XLSX.utils.book_new();
  // XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // // Save Excel file directly
  // XLSX.writeFile(workbook, "myData.xlsx");
  //  }

  return (
    <div className="w-full p-4 bg-gray-50 flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-xl font-bold">Upload Excel Sheet</h1>

        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="mt-2"
        />
        <p className="mt-4">Total Rows: {ExcelData.length}</p>
      </div>
      <div className="w-full flex-col md:flex justify-around items-center">
        {/* Number Supresser */}
        <div className="w-full mt-4 flex flex-col items-center justify-center md:w-[350px] bg-white shadow-lg rounded-md">
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
                  placeholder={``}
                  className="p-2 rounded bg-green-500 text-center focus:outline-blue-700 text-white font-bold"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Odd Even Check Box */}
        <div className="w-full mt-4 flex flex-col items-center justify-center md:w-[350px] bg-white shadow-lg rounded-md">
          <h2 className="w-full text-xl font-normal text-center py-2 bg-blue-400 text-white rounded-t-md">
            Select Odd Even Combination
          </h2>
          <div className="w-full p-2 flex flex-col">
            <p>Selected Items:</p>
            <div className="w-full flex gap-1 max-h-24 py-1 flex-wrap overflow-x-hidden overflow-y-scroll">
              {OddEvenSelected.map((item) => (
                <span
                  key={item}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="w-full py-2 px-4 overflow-x-hidden max-h-[350px]">
              {oddEvenData.map((each, index) => (
                <div key={each} className="flex items-center">
                  <p className="p-1 mr-2">{index + 1} &#41; </p>
                  <input
                    id={each}
                    type="checkbox"
                    value={each}
                    onChange={checkboxHandler}
                    className="p-2"
                  />
                  <label htmlFor={each} className="p-2">
                    {each}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* 6 Single Digit Suppresser */}
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
      {/* Submit Handler */}
      <div className="px-6 py-2 mt-4 bg-orange-600 text-white rounded">
        <button onClick={SubmitHandler}>Submit</button>
      </div>
      {/* Download Excel
      <div className="px-6 py-2 mt-4 bg-green-600 text-white rounded">
        <button onClick={ExcelFilerHandler}>Download Output Excel File</button>
      </div> */}
    </div>
  );
}

export default App;
