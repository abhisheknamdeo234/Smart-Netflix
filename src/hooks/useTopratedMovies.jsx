import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((state) => state.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?page=1',
      Api_options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlaying) {
      getTopRatedMovies();
    }
  }, [nowPlaying]);
};

export default useTopRatedMovies;
