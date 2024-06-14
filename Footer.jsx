import React from "react";
import { TbHeartFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-slate-800 text-white h-16">
        <p>Created with love by Abid.</p>
        <span className="mt-1">
          <TbHeartFilled />
        </span>
      </div>
    </div>
  );
};

export default Footer;
