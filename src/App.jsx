import { React, useState, useEffect } from "react";
import * as XLSX from "xlsx";
import "./App.css";

function App() {
  // First number suppresser
  const [suppressInputOptions, setSupressInputOptions] = useState(1);
  const [suppressInputValues, setSupressInputValues] = useState([]);
  const [ExcelData, setExcelData] = useState([]);
  const [OddEvenSelected, setOddEvenSelected] = useState([]);
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
      console.log(stringToNumber);
      setExcelData(stringToNumber);
    };
    reader.readAsArrayBuffer(file);
  };

  // Supress Input Value Handler (1st Execution)
  const suppressInputValueHandler = (index, newValue) => {
    const updated = [...suppressInputValues];
    updated[index] = newValue;
    setSupressInputValues(updated);
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

      // Odd Even Excluded Filter
      const oddEvenExcluded = binaryProcessed.filter((row) => {
        const oddEven = row.slice(-6);
        return !OddEvenSelected.some((digit) => digit === oddEven.join(""));
      });

      // 6 Digit Elemination One by One

      console.log("oddEvenIncluded", oddEvenIncluded);
      console.log("oddEvenExcluded", oddEvenExcluded);
    } else {
      return;
    }
  };

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

      {/* Submit Handler */}
      <div className="px-6 py-2 mt-4 bg-orange-600 text-white rounded">
        <button onClick={SubmitHandler}>Submit</button>
      </div>
    </div>
  );
}

export default App;
