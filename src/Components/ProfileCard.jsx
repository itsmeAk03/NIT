import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import profile from '../assets/ProfileNew.png'



function ProfileCard() {

    useGSAP(()=>{
        const tl =gsap.timeline();
        tl.from(".card",{
            opacity:0,
            delay:1,
            duration:2,
            scale:0,
            
        })
        tl.to(".profile",{
            opacity:1,
            duration:2,
            scale:1.5,
            y:-60 // Move the image 60px upwards
        })
        tl.to(".name",{
            opacity:1,
            duration:2,
            scale:1.5,
            y:-40 // Move the image 60px upwards
        })
        tl.from(".role1",{
            opacity:0,
            duration:2,
            scale:0,
            x:-500 ,// Move the image 50px upwards
            y:20
        })
        tl.from(".role2",{
            opacity:0,
            duration:2,
            scale:0,
            x:500 ,// Move the image 50px upwards
            y:20
        })
    })

  return (
    
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[3]">
        
    <div className="card relative w-[40rem] h-[28rem]  bg-transparent shadow-lg shadow-indigo-500/40 ... rounded-md  text-white px-8 py-10 overflow-hidden ">
      <div className="flex flex-col items-center justify-center h-full gap-4">
            <img className="profile w-36 h-28 rounded-full  opacity-0" src={profile} alt="" />
            <p className='name text-slate-50 text-lg font-semibold opacity-0'>Dr Ram Krishna</p>
            <p className='role1 text-slate-400 text-xl font-semibold '>Assistant Professor</p>
            <p className='role2 text-slate-400 text-xl font-semibold '>Metallurgical and Materials Engineering</p>
      </div>
    </div>
  </div>
  )
}

export default ProfileCard
