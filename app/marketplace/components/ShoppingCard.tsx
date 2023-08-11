import React from 'react'

interface iProps {
  title: string,
  price: string,
  location: string,
  image?: string
}

const ShoppingCard: React.FC<iProps> = ({ title, price, location, image }) => {
  return (
    <div className=' max-h-[600px] w-full h-30'>
      <div className='bg-white/30 min-h-[300px] w-full rounded-md animate-pulse'>
        {/* product image here */}
      </div>

      <div className='mx-4'>
        <h2 className='text-white/80 text-2xl mt-2'>{price}</h2>
        <h4 className='text-white/60'>{title}</h4>
        <h4 className='text-white/60'>{location}</h4>
      </div>
    </div>
  )
}

export default ShoppingCard