import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="myContainer flex items-center justify-between py-5 px-4 h-14">
        <div className="font-bold ">
          <span className="text-green-700">&lt;</span>
          Pass<span className="text-green-500">OP /&gt;</span>
        </div>
        <ul className="">
          <li className="flex gap-9 text-lg text-center">
            <a href="/" className="hover:font-bold duration-300">
              Home
            </a>
            <a href="#" className="hover:font-bold duration-300">
              Contact
            </a>
            <a href="#" className="hover:font-bold duration-300">
              About
            </a>
          </li>
        </ul>
        <div>
          <FaGithub />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
