import React from 'react'

function Navbar() {
  return (
    <div className='fixed top-0 h-16 bg-transparent w-full flex flex-row justify-center items-center gap-4 Anton text-white text-2xl'>
        <p className='w-32 text-right'>ARTISTS</p>
        <p className='grow justify-center flex'>CREATIVE CLICK MEDIA</p>
        <p className='w-32'>AGENCY</p>
    </div>
  )
}

export default Navbar