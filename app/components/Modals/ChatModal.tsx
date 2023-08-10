import React from 'react'
import { BsFillImageFill, BsThreeDots } from 'react-icons/bs'
import { VscChromeMinimize } from 'react-icons/vsc'
import { RxCross1 } from 'react-icons/rx'
import { AiFillLike, AiFillPlusCircle } from 'react-icons/ai'
import { RiEmojiStickerFill } from 'react-icons/ri'
import { BiSolidFileGif } from 'react-icons/bi'
import Input from '../Input'
import Avatar from '../Avatar'


const Modal = () => {
    return (
        <div className='h-full w-[350px] bg-black/80 rounded-md relative '>

            {/* user detailing header  */}
            <div className=' text-white/80 w-11/12 mx-auto flex justify-between border-b border-white/10 py-2'>
                <div className='flex items-ceter justify-center'>
                    <Avatar size={10} />
                    <h2 className='text-xl text-center my-auto ml-1'>User name</h2>
                </div>
                <div className='flex items-center'>
                    <BsThreeDots size={24} className="mx-2 cursor-pointer" />
                    <VscChromeMinimize size={24} className="mx-2 cursor-pointer" />
                    <RxCross1 size={24} className="mx-2 cursor-pointer" onClick={() => { }} />
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

const ChatModal = () => {
    return (
        <div className=' z-[200] absolute h-[60vh] bg-black/90 w-30 bottom-0 right-20  flex flex-row w-auto '>
                <Modal />
                <Modal />
        </div>
    )
}

export default ChatModal