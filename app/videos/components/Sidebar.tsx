import Input from '@/app/components/Input'
import React from 'react'
import { BiSolidMoviePlay, BiSolidVideos } from 'react-icons/bi'
import { BsCamera } from 'react-icons/bs'
import { IoMdRocket, IoMdSave, IoMdSettings } from 'react-icons/io'
import { PiFilmReelFill } from 'react-icons/pi'


const Sidebar = () => {

    const links = [
        {
            name: "Home",
            icon: BiSolidVideos
        },
        {
            name: "Live",
            icon: BsCamera
        },
        {
            name: "Reels",
            icon: PiFilmReelFill
        },
        {
            name: "Shows",
            icon: BiSolidMoviePlay
        },
        {
            name: "Explore",
            icon: IoMdRocket
        },
        {
            name: "Saved Videos",
            icon: IoMdSave
        },
    ]

    return (
        <div className='hidden md:block md:col-span-3 bg-black/80 border-r border-white p-4 overflow-y-auto overflow-x-hidden'>
            <div className='flex justify-between items-center'>
                <span className='text-3xl font-bold text-white/80'>Video</span>
                <span className='bg-white/10 rounded-full flex items-center justify-center p-2 cursor-pointer'>
                    <IoMdSettings size={32} className="text-white/90" />
                </span>
            </div>
            <div className='my-4 w-full'>
                <Input type={'text'} rounded='full' required={false} classes='text-xl w-full' placeholder='🔍 Search Videos' />
            </div>

            <div className='flex flex-col px-4 my-4'>
                {links.map((link, ind) => (
                    <div key={link.name} className={`flex flex-row items-center cursor-pointer rounded-md text-lg font-bold my-1 text-white/80 hover:bg-white/10 ${ind == 0 ? "bg-white/10" : ""} px-4 py-3`}>
                        <span className={`${ind === 0 ? 'bg-blue-500' : 'bg-white/10'} rounded-full flex items-center justify-center p-2 cursor-pointer`}>
                            <link.icon size={30} />
                        </span>
                        <span className='mx-4'>{link.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar