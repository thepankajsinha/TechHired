import React from 'react';

function Header() {
  return (
    <div className='mt-10 flex flex-col gap-5 items-center justify-center text-black px-4 sm:px-6 lg:px-8'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>
        Where Opportunities Meet Talent
      </h1>
      <p className='text-lg sm:text-xl md:text-2xl text-center'>
        Get the latest job openings that best suit you!!
      </p>
    </div>
  );
}

export default Header;
