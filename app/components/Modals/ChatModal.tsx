'use client'

import React from 'react'
import { BsFillImageFill, BsThreeDots } from 'react-icons/bs'
import { VscChromeMinimize } from 'react-icons/vsc'
import { RxCross1 } from 'react-icons/rx'
import { AiFillLike, AiFillPlusCircle } from 'react-icons/ai'
import { RiEmojiStickerFill } from 'react-icons/ri'
import { BiSolidFileGif } from 'react-icons/bi'
import Avatar from '../Avatar'


const Modal = ({ removeChat }: { removeChat: () => void }) => {
    return (
        <div className='h-full w-[350px] bg-[#222] rounded-md relative overflow-hidden border-white/70 mx-2'>

            {/* user detailing header  */}
            <div className=' text-white/80 w-11/12 mx-auto flex justify-between border-b border-white/10 py-2 '>
                <div className='flex items-ceter justify-center'>
                    <Avatar size={10} />
                    <h2 className='text-xl text-center my-auto ml-1'>User name</h2>
                </div>
                <div className='flex items-center'>
                    <span className='hover:bg-white/10 rounded-full h-10 w-10 flex items-center justify-center mx-[1px]'>
                        <BsThreeDots size={24} className="mx-1 cursor-pointer" />
                    </span>
                    <span className='hover:bg-white/10 rounded-full h-10 w-10 flex items-center justify-center mx-[1px]'>
                        <VscChromeMinimize size={24} className="mx-1 cursor-pointer" />
                    </span>
                    <span onClick={removeChat} className='hover:bg-white/10 rounded-full h-10 w-10 flex items-center justify-center mx-[1px]'>
                        <RxCross1 size={24} className="mx-1 cursor-pointer" onClick={() => { }} />
                    </span>
                </div>
            </div>

            {/* messaging  */}
            <div>

            </div>

            {/* message typing area bottom */}
            <div className='absolute left-0 bottom-0 bg-white/10 text-blue-500 w-full h-14 flex flex-row items-center justify-between px-2'>
                {/* AiFillPlusCircle */}
                <div className='flex items-center'>
                    <AiFillPlusCircle size={24} className="mx-[5px] cursor-pointer" />
                    <BsFillImageFill size={24} className="mx-[5px] cursor-pointer" />
                    {/* <RiEmojiStickerFill size={24} className="mx-[5px] cursor-pointer" onClick={() => { }} /> */}
                    <BiSolidFileGif size={24} className="mx-[5px] cursor-pointer" onClick={() => { }} />
                </div>
                <div>
                    <input type='text' placeholder='Aa' className=' bg-white/10 px-4 py-2 text-white ouline-none  w-[200px] active:outline-none focus:outline-none rounded-full' required />
                </div>
                <div>
                    <AiFillLike size={24} className="mx-1 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

interface iProps {
    chatCount: number
    removeChat: () => void
}

const ChatModal: React.FC<iProps> = ({ chatCount, removeChat }) => {

    // const [modalCount, setModalCount] = React.useState<number>(chatCount)

    return (
        <div className=' z-[200] absolute h-[60vh] bg-transparent w-30 bottom-0 right-20  flex flex-row w-auto '>

            {Array.from({ length: chatCount }).map((_, i) => (
                <Modal key={i} removeChat={removeChat} />
            ))}

        </div>
    )
}

export default ChatModal