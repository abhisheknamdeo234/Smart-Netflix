import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';



  // fetching the trailer and  updating in store
const VideoBackground = ({movieId}) => {
    const trailervideo = useSelector(store =>store.movies?.trailerVideo)
    useMovieTrailer(movieId);
    return (
        <div className = "w-"><iframe className = "w-screen aspect-video" 
        src={"https://www.youtube.com/embed/"+trailervideo?.key + "?&autoplay=1&mute=1"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" ></iframe></div>
        
        
    )
}

export default VideoBackground;