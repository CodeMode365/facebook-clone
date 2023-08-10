import React from 'react'
import Avatar from '../Avatar'
import { BsThreeDots } from "react-icons/bs"
import { RxCross1 } from "react-icons/rx"
import { MdZoomOutMap } from "react-icons/md"
import Input from '../Input'


interface iProps {
    onClose: () => void
    addChat: () => void
}

const MessageModal: React.FC<iProps> = ({ onClose, addChat }) => {


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
        <div className="absolute -left-60 mt-2 min-w-[400px] h-[80vh] mb-4  rounded-lg bg-neutral-800 z-[9999] ">
            <div className='overflow-y-auto overflow-x-hidden h-[94.5%] mb-4'>
                <div className='text-3xl font-bold text-white/80 my-4 w-11/12 mx-auto flex justify-between'>
                    <h2>Chats</h2>
                    <div className='flex'>
                        <BsThreeDots size={24} className="mx-2 cursor-pointer" />
                        <MdZoomOutMap size={24} className="mx-2 cursor-pointer" />
                        <RxCross1 size={24} className="mx-2 cursor-pointer" onClick={onClose} />
                    </div>
                </div>

                <div className='w-full px-auto ml-5'>
                    <Input type={'text'} required={false} rounded='full' classes='w-11/12 ' placeholder='🔍 Search Messenger' />
                </div>

                <div className='mt-6'>
                    {users.map((user, ind) => (
                        <div onClick={addChat} key={user.name + ind} className='w-11/12 mx-auto text-white/80 flex items-center cursor-pointer  text-white text-md hover:bg-white/10 rounded-lg py-4 px-3 hover:text-blue-500'>
                            <span>
                                <Avatar />
                            </span>
                            <span className='mx-2  align-top text-white'>
                                {user.name}
                                <br />
                                <span className='text-white/70'>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute border-t border-white/30 bottom-0 text-blue-500 flex flex-col items-center w-full'>
                <h4 className='my-2 text-lg hover:underline cursor-pointer'>See all in Messenger</h4>
            </div>

        </div>
    )
}

export default MessageModal