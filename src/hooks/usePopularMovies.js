import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";


const usePopularMovies = () => {
    //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?page=1" , 
    API_OPTION
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
   !popularMovies && getPopularMovies();
  },[]);

};

export default usePopularMovies;