import React from 'react'
import {IMG_CDN_URL} from "../utils/Constants"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-35 md:w-48 pr-4'>
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;