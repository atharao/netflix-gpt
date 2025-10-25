import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[27%] lg:pt-[25%] xl:pt-[17%] md:pt-[25%] sm:pt-[35%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-2xl m-4 sm:text-3xl md:text-4xl  md:m-0   xl:text-5xl lg:m-0 font-bold'>{title}</h1>
        <p className='hidden xl:inline-block py-6  text-md w-1/4'>{overview}</p>
        <div className='my-3 md:my-0'>
        <button className='bg-white  text-black py-1 px-1 ml-4 lg:ml-0 lg:py-2 lg:mt-4 xl:mt-0 lg:px-2 md:ml-0 md:mt-2 md:px-1 md:py-1  text-sm md:text-lg rounded-lg hover:bg-opacity-80'>▶️ Play</button>
        <button className=' hidden lg:inline-block bg-gray-500 mx-2 text-white py-2 px-2 text-lg bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;