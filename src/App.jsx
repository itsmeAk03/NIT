import React from 'react';
import ProfileCard from './Components/ProfileCard';
import Academics from './Components/Academics';
import bg from './assets/bgnew.mp4';

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center  gap-4">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src={bg}
      />
      <div className="container mx-auto p-4">
        <ProfileCard />
        <div className="my-8" /> {/* add some spacing between components */}
        {/* <Academics /> */}
      </div>
    </div>
  );
}

export default App;