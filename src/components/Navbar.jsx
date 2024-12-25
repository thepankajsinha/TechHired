import React from "react";
import {FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { Link } from "react-router-dom";
import { RiGithubLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-white text-black">
      <div className="container mx-auto flex items-center justify-between py-3 px-6 ">


        {/* Logo */}
        <div className="text-4xl font-bold">
          <Link to={"/"}><span className=" text-3xl md:text-4xl text-blue-900">TechHired</span></Link>
        </div>



        {/* Button */}
        <div className="flex gap-2">
          <a href="https://linktr.ee/theanujsinha" target="_blank">
            <SiLinktree className="text-3xl hover:text-blue-700" />
          </a>
          <a href="https://www.linkedin.com/in/thepankajsinha/" target="_blank">
            <FaLinkedinIn className="text-3xl hover:text-blue-700" />
          </a>
          <a href="https://github.com/thepankajsinha/TechHired" target="_blank">
            <RiGithubLine className="text-3xl hover:text-blue-700" />
          </a>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
