import React from 'react'
import Header from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
 
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {
        // - mainContainer
        //  - videobackground
        //  - video nameand and details
        // - secondary mainContainer
        //  - movielist * N
        //  - cards *N 
      }
    </div>
  )
}

export default Browse