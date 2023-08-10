import Input from '@/app/components/Input'
import Header from '@/app/components/Sidebar/Header'
import SidebarItem from '@/app/components/Sidebar/SidebarItem'
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
            <Header title='Video' searchHolder='🔍 Search Videos' />
            <div className='flex flex-col px-4 my-4'>
                {links.map((link, ind) => (
                    <SidebarItem active={ind == 0} icon={link.icon} name={link.name} key={ind} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar