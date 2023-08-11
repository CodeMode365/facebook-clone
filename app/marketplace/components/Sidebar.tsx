import Input from '@/app/components/Input'
import Header from '@/app/components/Sidebar/Header'
import SidebarItem from '@/app/components/Sidebar/SidebarItem'
import React from 'react'
import { BiSolidCart, } from 'react-icons/bi'
import { FaStore } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { ImDrawer } from 'react-icons/im'
import { IoBagHandleSharp } from 'react-icons/io5'
import { MdSell } from 'react-icons/md'
import Button from '@/app/components/Button'
import { AiOutlinePlus } from "react-icons/ai"


const Sidebar = () => {

    const links = [
        {
            name: "Browse all",
            icon: FaStore
        },
        {
            name: "Notifications",
            icon: IoIosNotifications
        },
        {
            name: "Inbox",
            icon: ImDrawer
        },
        {
            name: "Cart",
            icon: BiSolidCart
        },
        {
            name: "Buying",
            icon: IoBagHandleSharp
        },
        {
            name: "Selling",
            icon: MdSell
        },
    ]

    return (
        <div className='hidden md:block md:col-span-3 bg-black/80 border-r border-white p-4 overflow-y-auto overflow-x-hidden'>
            <Header title='Marketplace' searchHolder='🔍 Search MarketPlace' />
            <div className='flex flex-col px-4 my-4'>
                {links.map((link, ind) => (
                    <SidebarItem active={ind == 0} icon={link.icon} name={link.name} key={ind} />
                ))}
                    <button className={`py-2 mx-auto  text-white rounded-md flex items-center bg-blue-600/50 hover:bg-blue-500/40 w-full text-center  justify-center`}>
                        <AiOutlinePlus size={20} className='mr-1 text-white/80 text-blue-400' />
                        <span className='text-lg font-semibold text-blue-400'>
                            Create new Listing
                        </span>
                    </button>
            </div>
        </div>
    )
}

export default Sidebar