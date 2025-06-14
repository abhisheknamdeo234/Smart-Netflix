import { useDispatch, useSelector } from "react-redux";
import { Api_options } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/MovieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((state) => state.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?page=1',
      Api_options
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    if (!nowPlaying) {
      getUpcomingMovies();
    }
  }, [nowPlaying]);
};

export default useUpcomingMovies;
