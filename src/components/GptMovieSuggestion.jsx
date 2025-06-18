import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {movieResults,movieNames}= useSelector(store=>store.gpt);
  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black/90 text-white rounded-b-md'>
      {movieNames.map((movie,idx)=> <MovieList key ={idx} title={movie} movies={movieResults[idx]}/>)}
      
    </div>
  )
}

export default GptMovieSuggestion ; 