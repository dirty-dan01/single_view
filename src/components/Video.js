import React from 'react'
import ReactPlayer from "react-player/youtube";

const Video = () => {
    const MyVideo = () =>{
        return(
          <ReactPlayer 
            url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            playing={true}
            volume={0.5}
          />
        )
      }
  return (
    <div>
        <MyVideo/>
    </div>
  )
}

export default Video