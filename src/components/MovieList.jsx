import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  // console.log("yes")
  // console.log(movies)

  
  return (
    <div className = "px-6 ">

      <h1 className ="text-2xl md:text-3xl py-4 text-white " >{title}</h1>
    <div className='flex overflow-auto hide-scrollbar '>
      <div className="flex">
        {movies.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
        

      </div>
    </div>
    </div>
  )
}

export default MovieList