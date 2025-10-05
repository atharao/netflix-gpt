import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute text-white -translate-y-1/2 top-1/2 left-1/4 -translate-x-1/4'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='w-1/4 py-6 text-lg'>{overview}</p>
        <button className='p-4 px-12 text-xl text-black bg-white rounded-lg hover:bg-opacity-80'>Play</button>
        <button className='p-4 px-12 mx-2 text-xl text-white bg-gray-500 bg-opacity-50 rounded-lg'>More Info</button>
    </div>
  )
}

export default VideoTitle