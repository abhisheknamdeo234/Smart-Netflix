import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies.nowPlayingMovies);
    const toprated = useSelector((store)=>store.movies.topRatedMovies);
    const upcoming = useSelector((store)=>store.movies.upcomingMovies);
    const popular = useSelector((store)=>store.movies.popularMovies);

    // if (!movies) return <div>Loading...</div>;
    
    
    
  return (
    (movies && toprated && upcoming && popular) && (<div className='bg-black '>

        <div className='mt-0 md:-mt-50 pl-5 md:pl-15 relative z-20'>

        <MovieList title={"Now Playing"} movies={movies}/>
        <MovieList title={"Top Rated"} movies={toprated}/>
        <MovieList title={"Upcoming"} movies={upcoming}/>
        <MovieList title={"Popular"} movies={popular}/>

        </div>
        </div>
    )
  )
}

export default SecondaryContainer