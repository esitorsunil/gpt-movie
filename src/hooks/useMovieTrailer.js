import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTralier = (movieId) => {

    const dispatch = useDispatch();

    const movieTrailer = useSelector(
      (store) => store.movies.tralierVideo);
  //fetch the tralier and update the trailer using redux store
  const getMovieVideos = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+
        movieId+
        '/videos?language=en-US', API_OPTION
    );
    const json = await data.json();
    

    const filterData = json.results.filter((video)=> video.type === "Trailer");
    const tralier = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(tralier));
  };
  useEffect(() => {
   !movieTrailer && getMovieVideos();
  },[])

};

export default useMovieTralier;