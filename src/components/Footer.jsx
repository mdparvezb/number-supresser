import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex text-white justify-center py-3 text-center bg-black">
      <p className="text-sm">
        &copy; All Rights Reserved {new Date().getFullYear()}.
      </p>
    </div>
  );
};

export default Footer;
