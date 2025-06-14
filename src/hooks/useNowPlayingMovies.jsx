// import { useDispatch, useSelector } from "react-redux";
// import { Api_options } from "../utils/Constants";
// import { addNowPlayingMovies } from "../utils/MovieSlice";
// import { useEffect } from "react";


// const useNowPlayingMovies = ()=>{
//     const dispatch= useDispatch();
//   // fetch data from tmdb api and update the store
//     const nowPlaying = useSelector((state) => state.movies.nowPlayingMovies);
    

//   const getNowPlayingMovies = async ()=>{
//     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',Api_options);

//     const json = await data.json();

//     console.log("json data below")
//     console.log(json.results)
    
//     dispatch(addNowPlayingMovies(json.results));
//   }


//   useEffect(() => {
//     if (!nowPlaying) {
//       getNowPlayingMovies();
//     }
//   }, [nowPlaying]);
// };


// export default useNowPlayingMovies;


import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((state) => state.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      Api_options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlaying) {
      getNowPlayingMovies();
    }
  }, [nowPlaying]);
};

export default useNowPlayingMovies;
