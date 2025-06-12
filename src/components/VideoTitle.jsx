import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className ="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className = "text-4xl font-bold">{title}</h1>
        <p className = "py-6 w-1/2">{overview}</p>
        <div >
            <button className='bg-white w-25 p-2 text-black text-xl bg/2 rounded-md hover:bg-white/70'>
             ► Play
            </button>
            <button className='mx-2 bg-gray-500/50 w-35 p-2 text-white text-xl bg/2 rounded-md'>
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle