import React from 'react';
import images from "./images";

const Lazyloading = () => {
  return (
    <div className='container bg-black rounded-lg w-full flex justify-center items-center m-8 p-8 max-lg:p-4 max-lg:m-4 w-full'>
        <div className='flex flex-col justify-center items-center rounded-lg border-2 border-[#B59410]'>
        <img src={images.picture.welcome}/>
        <div className='text-white font-black text-center'>Loading. Please Wait...</div>
        </div>

    </div>
  )
}

export default Lazyloading