import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className='h-20 flex items-center justify-between w-full text-black'>
      <Link to={"/"}><div className='text-3xl pl-20 font-bold'>TechHired</div></Link>
    </div>
  );
}


export default Navbar;
