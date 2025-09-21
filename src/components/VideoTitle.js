import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoTitle = ({title,overview}) => {
  const navigate = useNavigate()
  const handleWatchTrailer = () => {
    navigate("/watchtrailer")
  }
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-sm w-1/4'>{overview}</p>
      <div className='my-4 md:m-0'>
      <button 
      className='bg-white text-black py-1 md:py-4 px-3 md:px-12 rounded-lg hover:bg-opacity-80'
      onClick={handleWatchTrailer}  >
          Play</button>
      
      </div>
    </div>
  )
}

export default VideoTitle