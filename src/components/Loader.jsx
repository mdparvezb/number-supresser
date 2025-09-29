import React from "react";

const Loader = ({ loading }) => {
  if (loading) {
    document.body.classList.add("remove-scroll");
  } else {
    document.body.classList.remove("remove-scroll");
  }
  return (
    <>
      {loading && (
        <div className="w-full h-screen absolute top-0 left-0 overflow-hidden flex justify-center items-center bg-black opacity-95 pointer-events-auto z-50">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default Loader;
