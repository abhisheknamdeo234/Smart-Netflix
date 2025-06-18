import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/Constants'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
        <>
        <div className='fixed -z-10 h-screen'>

        <img className="h-screen object-cover" src={BG_IMG}
        alt="background img"/>
        </div>
    <div className='pt-[15%] md:p-0'>
      
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
      </>
  )
}

export default GptSearch