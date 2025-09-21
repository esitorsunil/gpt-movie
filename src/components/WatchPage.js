import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useNavigate, useSearchParams } from "react-router-dom";

const WatchPage = () => {
    const [trailerId, setTrailerId] = useState(null);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const trailerVideos = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+searchParams.get("v")+"/videos?language=en-IN", API_OPTIONS);
    const json = await data.json();
    console.log(json)

    const filterTrailer = json.results?.filter((video) => video.type==="Trailer");
    const movieTrailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    setTrailerId(movieTrailer.key);
}


useEffect(() => {
    trailerVideos();
},[])
    
const handleHomePage = () => {
  navigate("/browse")
}
  return ( 
    <div className=' h-[100vh] flex flex-col justify-center items-center bg-black'>
      <p className="text-7xl absolute text-white top-[20px] left-[10px] w-[50px] cursor-pointer" onClick={handleHomePage}>←</p>
    <iframe className= 'border rounded-[10px]'
    width="90%"
    height="90%" 
    src={"https://www.youtube.com/embed/"+ trailerId+ "?&autoplay=1&unmute=1"}
    title="YouTube video player"  
    allowFullScreen
    ></iframe>
    <div className="flex items-center justify-between w-[90%]">
      <p>Name</p>
      <p>Published Date</p>
    </div>
  </div>
  )
};
export default WatchPage;