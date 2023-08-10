import React from 'react'
import VideoCard from './components/VideoCard'

const page = () => {
  return (
    <div className='bg-black/90 col-span-12 md:col-span-9 h-[91vh] p-8 overflow-y-auto overflow-x-hidden'>
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  )
}

export default page