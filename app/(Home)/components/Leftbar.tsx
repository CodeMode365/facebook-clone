import React from 'react'
import { FaUserFriends, FaGamepad } from "react-icons/fa"
import { BsShop } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { BiSolidVideos } from "react-icons/bi"
import { MdGroups2 } from "react-icons/md"
const Leftbar = () => {

    const actions = [
        {
            name: "Home",
            href: "/",
            icon: AiFillHome
        },
        {
            name: "Video",
            href: "/videos",
            icon: BiSolidVideos
        },
        {
            name: "Marketplace",
            href: "/marketplace",
            icon: BsShop
        },
        {
            name: "Groups",
            href: "/groups",
            icon: MdGroups2
        },
        {
            name: "Gaming",
            href: "/gaming",
            icon: FaGamepad
        },
        {
            name: "Friends",
            href: "/friends",
            icon: FaUserFriends
        },
        {
            name: "Home",
            href: "/",
            icon: AiFillHome
        },
        {
            name: "Video",
            href: "/videos",
            icon: BiSolidVideos
        },
        {
            name: "Marketplace",
            href: "/marketplace",
            icon: BsShop
        },
        {
            name: "Groups",
            href: "/groups",
            icon: MdGroups2
        },
        {
            name: "Gaming",
            href: "/gaming",
            icon: FaGamepad
        },
        {
            name: "Friends",
            href: "/friends",
            icon: FaUserFriends
        },
       
    ]

    return (
        <div className='hidden lg:block col-span-3 bg-black/90 h-[91vh] overflow-y-auto overflow-x-hidden py-4'>
            {actions.map((action) => (
                <div className='w-full my-1 mx-4 text-white/80 flex items-center cursor-pointer px- text-white text-md hover:bg-white/10 rounded-lg py-4 px-3 hover:text-blue-500'>
                    <span>
                        <action.icon size={30} />
                    </span>
                    <span className='mx-2 '>
                        {action.name}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default Leftbar