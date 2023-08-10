import Avatar from '@/app/components/Avatar'
import React from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { BiComment, BiLike } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { FaEarthAmericas } from 'react-icons/fa6'
import { PiShareFat } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'

const VideoCard = () => {

    const actions = [
        {
            name: "Like",
            icon: BiLike
        },
        {
            name: "Comment",
            icon: BiComment
        },
        {
            name: "Share",
            icon: PiShareFat
        },
    ]

    return (
        <div className='w-11/12 h-auto mx-auto bg-white/10 rounded-lg pt-[1px] mb-6 max-w-3xl'>
            <div className='px-4 m-4mt-3 text-white' >
                <div className='flex justify-between pt-4'>
                    <div className='flex items-center'>
                        <Avatar />
                        <div className='ml-2'>
                            <h2 className='leading-5'>Routine of Nepal Banda</h2>
                            <span>23min ago <FaEarthAmericas size={16} className="inline ml-1" /></span>
                        </div>
                    </div>
                    <div className='flex'>
                        <BsThreeDots size={30} className={"mx-2 cursor-pointer"} />
                        <RxCross2 size={30} className="cursor-pointer" />
                    </div>
                </div>
                <p className='px-4 text-white/80'>Throwing garbage in Dhobi river located in Kathmandu... Please do not throw garbage at all.</p>
                <div>
                </div>
            </div>
            <div className='bg-white/30 w-full h-[700px] my-4 flex items-center justify-center text-blue-500 cursor-pointer '>
                <AiFillPlayCircle size={80} className="hover:blur-[3px] shadow-lg shadow-blue-500 rounded-full " />
            </div>
            <div className='flex justify-between px-20 items-center pb-2'>
                {
                    actions.map((action) => (
                        <div key={action.name} className='text-white/80 flex items-center cursor-pointer text-md hover:bg-white/10 rounded-lg px-4 py-10'>
                            <span>
                                <action.icon size={30} />
                            </span>
                            <span className='mx-2 text-md'>
                                {action.name}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default VideoCard