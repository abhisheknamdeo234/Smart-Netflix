import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/Constants'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>

        <img src={BG_IMG}
        alt="background img"/>
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch