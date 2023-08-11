import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import Avatar from '../Avatar'
import Input from '../Input'


interface NotificationModalProps {
    onClose: () => void
}
const NotificationModal: React.FC<NotificationModalProps> = ({ onClose }) => {



    const users = [
        { name: "UseX" },
        { name: "UserY" },
        { name: "UserZ" },
        { name: "UserZ" },
        { name: "User1" },
        { name: "User1" },
        { name: "User1" },
    ]

    return (
        <div className="absolute left-[-19rem] mt-2 min-w-[400px] h-[80vh] mb-4  rounded-lg bg-neutral-800  overflow-y-auto overflow-x-hidden z-[9999]">
            <div className='text-3xl font-bold text-white/80 my-4 w-11/12 mx-auto flex justify-between'>
                <h2>Notifications</h2>
                <div className='flex'>
                    <BsThreeDots size={24} className="mx-2 cursor-pointer" />
                </div>
            </div>

            <div className='w-full px-auto ml-5 flex'>
                <h2 className='cursor-pointer rounded-full px-4 py-3 hover:bg-white/10'>All</h2>
                <h2 className='mx-4 cursor-pointer rounded-full px-4 py-3 hover:bg-white/10'>Unred</h2>
            </div>

            <div className='mt-6'>
                {users.map((user, ind) => (
                    <div key={user.name + ind} className='w-11/12 mx-auto text-white/80 flex items-center cursor-pointer  text-white text-md hover:bg-white/10 rounded-lg py-4 px-3 hover:text-blue-500'>
                        <span>
                            <Avatar />
                        </span>
                        <span className='mx-2  align-top text-white/90 ib'>
                            <b className='text-white'>{user.name}</b>
                            {" "}   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default NotificationModal