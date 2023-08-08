import React from 'react'
import Rightbar from './components/Rightbar'
import Leftbar from './components/Leftbar'
import Center from './components/Center'

const Home = () => {
  return (
    <main className='grid grid-cols-12'>
      <Leftbar />
      <Center />
      <Rightbar />
    </main>
  )
}

export default Home