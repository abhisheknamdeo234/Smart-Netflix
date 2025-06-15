import React from 'react'
import Header from "./Header"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopratedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
 
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div >
      <Header />
      {
       
        showGptSearch ? <GptSearch/> :  <div>  <MainContainer />  <SecondaryContainer />  </div>
        
      }
       
    
      
      
      
      
      
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