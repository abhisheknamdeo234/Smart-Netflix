import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className ="w-screen aspect-video pt-[40%] md:pt-[20%]  px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className = "text-xl md:text-4xl font-bold">{title}</h1>
        <p className = " hidden md:inline-block py-6 w-1/2">{overview}</p>
        <div className='my-4 md:my-0'  >
            <button className='bg-white w-25 p-2 text-black text-xl bg/2 rounded-md hover:bg-white/70'>
             ► Play
            </button>
            <button className='hidden md:inline-block mx-2 bg-gray-500/50 w-35 p-2 text-white text-xl bg/2 rounded-md'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle