'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Image from 'next/image'
import Button from './components/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {

  const router = useRouter()

  return (
    <div className='w-full h-full bg-black/80 min-h-[92vh] flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col max-w-[550px] text-center'>
        <Image src={"/Lock.png"} alt='Error Image' height={150} width={150} className='mb-3'/>
        <h2 className='text-2xl my-1 font-semibold text-white'>This content isn't available right now!</h2>
        <p className='text-white/80 text-lg leading-6'>When this happens, it's usually beacause the owner only shared it with a small group of people, changed who can see it or it's been deleted.</p>

        <button className={` text-white rounded-md flex items-center bg-blue-500 hover:bg-blue-400 my-4 `}>
          <Link href={"/"} className='px-2 py-3 rounded-md'>
            <span className='text-lg font-semibold mx-1'>
              Go to News Feed
            </span>
          </Link>
        </button>
        <button
          onClick={()=>router.refresh()}
          className='text-blue-500 text-lg mb-2'
        >
          Try again
        </button>
        <button
          onClick={()=>router.back()}
          className='text-blue-500 text-lg'
        >
         Go Back
        </button>
      </div>
    </div >
  )
}