import React from 'react'
import bg from '../assets/bgnew.mp4'

function Background() {
  return (
    <>
    <div className=' z-[2] w-full h-screen '>
        <video autoPlay loop muted src={bg}></video>
    </div>
    </>
  )
}

export default Background