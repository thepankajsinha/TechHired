// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {

//   return (
//     <div className='h-20 flex items-center justify-between w-full text-black'>
//       <Link to={"/"}><div className='text-3xl pl-20 font-bold'>TechHired</div></Link>
//     </div>
//   );
// }


// export default Navbar;




import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
          <a href="https://github.com/thepankajsinha" target="_blank">
            <FaGithub className="text-3xl hover:text-blue-700" />
          </a>
          <a href="https://www.linkedin.com/in/thepankajsinha/" target="_blank">
            <FaLinkedinIn className="text-3xl hover:text-blue-700" />
          </a>
          <a href="https://x.com/thepankajsinha" target="_blank">
            <FaXTwitter className="text-3xl hover:text-blue-700" />
          </a>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
