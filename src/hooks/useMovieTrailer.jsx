import { useDispatch} from "react-redux";
import { Api_options } from "../utils/Constants";
import { addTrailerVideo } from "../utils/MovieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
        
    const getMovieVideos=async ()=>{

        const data = await fetch("https://api.themoviedb.org/3/movie/" +movieId+ "/videos?language=en-US",Api_options);

        const json = await data.json();
       
        
        const filteredVideos = json.results.filter((video)=>video.type ==="Trailer");
        const trailer = filteredVideos.length ? filteredVideos[0]:json.result[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }


    useEffect(()=>{
            getMovieVideos();
        },[]);
  
}

export default useMovieTrailer;
