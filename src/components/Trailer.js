import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const Trailer = () => {
  const navigate = useNavigate()
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(movies===null) return;

  const mainMovie = movies[0];

  const {id} = mainMovie;

    
    const handleHomePage = () => {
        navigate("/browse")
    }
  return (
    <>
    <div className='bg-black'>
        <p className="text-7xl bg-black  text-white top-[20px] left-[10px] w-[50px] cursor-pointer" onClick={handleHomePage}>←</p>
        </div>
        <div className='pt-[30%] bg-black md:pt-0'>
        <VideoBackground movieId={id}/>
    </div>
        </> 
  )
}

export default Trailer