import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center h-16 bg-purple-600">
      <div className="flex gap-3 items-center w-full px-6 md:px-12">
        <a href="/">
          <img src="logo.png" alt="logo" className="w-12" />
        </a>
        <a href="/">
          <h2 className="text-center text-2xl text-white font-bold">MATRIX</h2>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
