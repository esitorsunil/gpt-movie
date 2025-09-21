import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const movie = useSelector((store) => store.movies?.selectedMovie); 
  // assuming you store movie info with backdrop_path

  useMovieTrailer(movieId);

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Try autoplay on mount (desktop will work, mobile may block)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      setShowVideo(true);
    }
  }, []);

  return (
    <div className="w-screen relative">
      {showVideo ? (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&playsinline=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="w-screen aspect-video relative">
          {/* Backdrop image */}
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
            alt={movie?.title || "Movie thumbnail"}
          />
          {/* Play button overlay */}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center text-white text-4xl bg-black bg-opacity-50 rounded-full w-20 h-20 mx-auto my-auto"
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
