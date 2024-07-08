import React from 'react'
import ProfileCard from './ProfileCard'
import Academics from './Academics'

function Foreground() {
  return (
    <div className=' top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      <ProfileCard/>
      <Academics/>
    </div>
  )
}

export default Foreground
