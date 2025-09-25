import { React, useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./App.css";
import Loader from "./components/Loader";
import { toast } from "react-toastify";
import OddEvenSuppresser from "./components/OddEvenSuppresser";
import DigitElimination from "./components/DigitElimination";
import NumberSuppresser from "./components/NumberSuppresser";
import ExcelFileUpload from "./components/ExcelFileUpload";

function App() {
  const [loading, setLoading] = useState(false);
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

  // Reset Handler
  const resetHandler = () => {
    window.location.reload();
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, [resetHandler]);

  // File Upload Handler
  const handleFileUpload = (event) => {
    setLoading(true);
    const file = event.target.files[0];
    if (!file) {
      setLoading(false);
      return;
    }

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
      setLoading(false);
      toast.info("File Uploaded Successfully");
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
  const submitHandler = () => {
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

  return (
    <>
      <Loader loading={loading} />
      <div className="w-full p-4 bg-gray-50 flex flex-col items-center">
        <ExcelFileUpload
          ExcelData={ExcelData}
          handleFileUpload={handleFileUpload}
        />

        <div className="w-full flex-col md:flex justify-around items-center">
          {/* Numbert Suppresser */}
          <NumberSuppresser
            setSupressInputOptions={setSupressInputOptions}
            suppressInputOptions={suppressInputOptions}
            suppressInputValueHandler={suppressInputValueHandler}
          />
          {/* OddEven Suppresser */}
          <OddEvenSuppresser
            OddEvenSelected={OddEvenSelected}
            oddEvenData={oddEvenData}
            checkboxHandler={checkboxHandler}
          />
        </div>
        {/* 6 Single Digit Suppresser */}
        <DigitElimination
          firstDigitInput={firstDigitInput}
          setFirstDigitInput={setFirstDigitInput}
          secondDigitInput={secondDigitInput}
          SetsecondDigitInput={setSecondDigitInput}
          thirdDigitInput={thirdDigitInput}
          setThirdDigitInput={setThirdDigitInput}
          fourthDigitInput={fourthDigitInput}
          setFourthDigitInput={setFourthDigitInput}
          fifthDigitInput={fifthDigitInput}
          setFifthDigitInput={setFifthDigitInput}
          sixthDigitInput={sixthDigitInput}
          setSixthDigitInput={setSixthDigitInput}
          firstDigitValuesHandler={firstDigitValuesHandler}
          secondDigitValuesHandler={secondDigitValuesHandler}
          thirdDigitValuesHandler={thirdDigitValuesHandler}
          fourthDigitValuesHandler={fourthDigitValuesHandler}
          fifthDigitValuesHandler={fifthDigitValuesHandler}
          sixthDigitValuesHandler={sixthDigitValuesHandler}
        />
        {/* Submit Handler */}
        <div className="w-full flex justify-center gap-2 mt-4">
          {/* Reset All Button */}
          <button
            className="bg-red-600 px-6 py-2 text-white rounded-md transition-all duration-300 hover:opacity-90 hover:scale-95"
            onClick={resetHandler}
          >
            Reset All
          </button>

          {/* Run Program Button */}
          <button
            className="bg-blue-600 px-6 py-2 text-white rounded-md transition-all duration-300 hover:opacity-90 hover:scale-95"
            onClick={submitHandler}
          >
            Run Program
          </button>
        </div>
        {/* Download Excel
      <div className="px-6 py-2 mt-4 bg-green-600 text-white rounded">
        <button onClick={ExcelFilerHandler}>Download Output Excel File</button>
      </div> */}
      </div>
    </>
  );
}

export default App;
