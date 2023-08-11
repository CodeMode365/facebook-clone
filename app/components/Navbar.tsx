'use client'

import React, { useEffect, useState } from 'react'
import Input from './Input'
import Tooptip from './Tooptip'
import { BsFacebook } from "react-icons/bs"
import { AiFillHome } from "react-icons/ai"
import { BsShop, BsMessenger } from "react-icons/bs"
import { BiSearch, BiSolidVideos, } from "react-icons/bi"
import { MdGroups2 } from "react-icons/md"
import { FaGamepad } from "react-icons/fa"
import { IoMdNotifications } from "react-icons/io"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import { useRouter } from 'next/router'
import clsx from 'clsx'
import Avatar from './Avatar'
import MessageModal from './Modals/MessageModal'
import NotificationModal from './Modals/NotificationModal'
import ChatModal from './Modals/ChatModal'


const Navbar = () => {

    const pathnanme = usePathname()

    const [messageOpen, setMessageOpen] = useState(false)
    const [notificationOpen, setNotificationOpen] = useState(false)
    const [chatCount, setChatCount] = useState<number>(2)

    const links = [
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
    ]

    function isActive(link: string): boolean {
        return pathnanme === link ? true : false
    }


    const closeModals = () => {
        setMessageOpen(false)
        setNotificationOpen(false)
    }
    const toggleMessageModal = () => {
        setMessageOpen((prev) => !prev)
        setNotificationOpen(false)
    }
    const toggleNotificatioModal = () => {
        setNotificationOpen((prev) => !prev)
        setMessageOpen(false)
    }

    const addChat = () => {
        if (chatCount < 2) {
            setChatCount(chatCount + 1)
        }
    }
    const removeChat = () => {
        if (chatCount >= 0) {
            setChatCount(chatCount - 1)
        }
    }

    return (
        <>
            <nav className='border-b border-white/60 bg-black/80 h-[4.5rem] w-full dark:text-white py-auto justify-between items-center px-14  flex'>

                <div className='flex justify-between items-center '>
                    <div className='flex'>

                        <h1 className='text-blue-500 bg-white flex rounded-full cursor-pointer'>
                            <BsFacebook size={50} />
                        </h1>
                        <div className='mx-2 lg:hidden bg-white/80 rounded-full flex items-center justify-center text-black/80'>
                            <BiSearch size={32} className="block md:hidden" />
                        </div>

                        <div className=' ml-2'>
                            <Input rounded='full' placeholder='Search Facebook' required type={'text'} classes={"hidden lg:block py-2 px-2 text-lg  text-white"} />
                        </div>

                    </div>

                </div>
                <ul className='hidden md:flex justify-around items-center h-full my-auto md-4 md:ml-10 lg:ml-16  xl:mr-15 overflow-hidden mr-20'>
                    {links.map((link) => (
                        <li key={link.name} className={`flex cursor-pointer lg:mx-2  text-gray-300 ${isActive(link.href) && "border-b-4 border-blue-500 "}`} aria-describedby={link.name}>
                            <Link href={link.href} className={clsx(`px-4 py-2 md:px-8  md:py-3 h-full rounded-md`,
                                isActive(link.href) ? 'text-blue-500 ' : 'hover:bg-white/20'
                            )} onClick={closeModals} aria-label={link.name} title={link.name}>
                                <link.icon className="text-3xl lg:text-4xl" />
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='flex justify-end' >
                    <div className='relative'>
                        <button className={clsx(` bg-white/20 rounded-full p-4 cursro-pointer mx-1`,
                            messageOpen && 'bg-blue-500/60 bg-opacity-75'
                        )}
                            title="messages"
                            onClick={toggleMessageModal}
                        >
                            <BsMessenger size={24} className={`${messageOpen && "text-blue-500"}`} />
                        </button>
                        {
                            messageOpen &&
                            <MessageModal onClose={closeModals} addChat={addChat} />
                        }

                    </div>
                    <div className='relative'>

                        <button className={clsx(` bg-white/20 rounded-full p-4 cursro-pointer mx-1`,
                            notificationOpen && 'bg-blue-500/60 bg-opacity-75'
                        )}
                            title="notifications"
                            onClick={toggleNotificatioModal}

                        >
                            <IoMdNotifications size={24} className={`${notificationOpen && "text-blue-500"}`} />
                        </button>
                        {
                            notificationOpen &&
                            <NotificationModal onClose={closeModals} />
                        }
                    </div>
                    <Link href={"/profile"}>
                        <Avatar />
                    </Link>
                </div>
            </nav>
            <ChatModal chatCount={chatCount} removeChat={removeChat} />
        </>
    )
}

export default Navbar