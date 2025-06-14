import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../utils/Constants";
import { addPopularMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((state) => state.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1',
      Api_options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlaying) {
      getPopularMovies();
    }
  }, [nowPlaying]);
};

export default usePopularMovies;