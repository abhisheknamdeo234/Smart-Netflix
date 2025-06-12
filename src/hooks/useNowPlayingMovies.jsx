import { useDispatch } from "react-redux";
import { Api_options } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = ()=>{
    const dispatch= useDispatch();
  // fetch data from tmdb api and update the store

  const getNowPlayingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',Api_options);

    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results))
  }
 useEffect(()=>{
  getNowPlayingMovies();
 },[]);
}

export default useNowPlayingMovies