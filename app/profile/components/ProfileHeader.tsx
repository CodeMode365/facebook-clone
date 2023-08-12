import Avatar from '@/app/components/Avatar'
import Button from '@/app/components/Button'
import React from 'react'
import { AiOutlinePlus, AiFillCamera } from 'react-icons/ai'
import { BiSolidDownArrow } from 'react-icons/bi'
import { MdModeEdit } from 'react-icons/md'
import ProfileNav from './ProfileNav'

const ProfileHeader = () => {
    return (
        <div className='h-50 mx-auto w-full h-auto'>
            <div className=' h-[40vh] max-h-[350px] w-full rounded-lg relative bg-gradient-to-b from-blue-800 to-red-700'>
                <div className='absolute left-0 bottom-0 translate-y-3/4 translate-x-10 500 flex flex-row items-center justify-center w-full bg-yellow-800'>


                </div>
            </div>
            <div className='w-11/12 mx-auto flex items-end -translate-y-1/4'>
                <div>

                </div>
                <div className='h-[20vh] w-[20vh] bg-white/80 rounded-full relative'>
                    {/* Profile image here */}
                    {/* <Image/> */}
                    <div className='absolute flex items-center justify-center cursor-pointer h-[30px] w-[30px] bg-black/80 rounded-full right-[2%] bottom-[15%]'>
                        <AiFillCamera size={24} className="text-white/90" />
                    </div>
                </div>
                <div className='flex justify-between w-[75%] h-auto'>
                    <div className='ml-4 '>
                        <h2 className='text-2xl text-white font-extrabold'>Pabin B. Dhami</h2>
                        <h3 className='text-xl text-white/80 my-[1px]'>500 Friends</h3>
                        <div className='flex '>
                            <div className='w-[50px] h-[50px] bg-blue-300 rounded-full -translate-x-0'></div>
                            <div className='w-[50px] h-[50px] bg-blue-400 rounded-full -translate-x-5'></div>
                            <div className='w-[50px] h-[50px] bg-blue-500 rounded-full -translate-x-10'></div>
                        </div>
                    </div>
                    <div className='flex h-10 items-baseline mt-auto'>
                        <Button classes='mx-2' icon={AiOutlinePlus} title='Add to story' primary />
                        <Button classes='' icon={MdModeEdit} title='Edit profile' primary={false} />
                    </div>
                </div>
            </div>
            <ProfileNav />
        </div>
    )
}

export default ProfileHeader