import React from "react";
import { ImSpinner2 } from "react-icons/im";

const LoadingSpinner = () => {
  return (
    <div className='fixed top-0 flex items-center w-screen h-screen z-20 bg-gray-700 bg-opacity-70'>
      <div className='text-5xl text-white text-center w-10 mx-auto'>
        <ImSpinner2 className='animate-spin' />
      </div>
    </div>
  )
}

export default LoadingSpinner