import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import ShoppingCard from './components/ShoppingCard'

const Market = () => {


  return (
    <div className='bg-black/90 col-span-12 md:col-span-9 h-[91vh] p-8 overflow-y-auto overflow-x-hidden'>
      <div className='w-11/12 mx-auto'>
        {/* titlebar */}
        <div className='w-full flex items-center justify-between'>
          <h2 className='text-white text-3xl font-bold'>{`Today's Pick`}</h2>
          <button className='text-blue-500 flex items-center'>
            <IoLocationSharp size={20} />
            <span className='mx-2'>
              Kathmandu-65km
            </span>
          </button>
        </div>
        {/* shopping cards */}
        <div className='w-full my-4 h-auto grid gap-x-4 gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
          {
            Array.from({ length: 15}).map((item, ind) => (
              <ShoppingCard title={'Drone camera'} price={'रू500'} location={'Mahangkal Bagmati'} key={ind} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Market