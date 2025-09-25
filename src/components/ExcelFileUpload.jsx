import React from "react";
import { RiFileExcel2Fill } from "react-icons/ri";

const ExcelFileUpload = ({ handleFileUpload, ExcelData }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* <h1 className="text-xl font-bold">Upload Excel Sheet</h1> */}
      <div className="flex justify-center items-center relative">
        <label
          htmlFor="excel-file"
          className="flex items-center rounded-md gap-2 font-normal text-white w-full text-md bg-[#469b61] py-2 px-8 cursor-pointer shadow-md hover:shadow-large hover:bg-[#307750] transition-all duration-300 hover:scale-95"
        >
          <RiFileExcel2Fill size={20} className="text-white" />
          <input
            type="file"
            id="excel-file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="opacity-0 absolute top-0 -z-10"
          />
          Upload File
        </label>
      </div>
      <p className="mt-4">Total Rows Uploaded: {ExcelData.length}</p>
    </div>
  );
};

export default ExcelFileUpload;
