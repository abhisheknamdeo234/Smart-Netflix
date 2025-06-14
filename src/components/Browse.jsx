import React from 'react'
import Header from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopratedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {
 
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div >
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
        {/* // - mainContainer
        //  - videobackground
        //  - video nameand and details
        // - secondary mainContainer
        //  - movielist * N
        //  - cards *N  */}
      
    </div>
  )
}

export default Browse;