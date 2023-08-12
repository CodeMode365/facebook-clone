'use client'

import Avatar from '@/app/components/Avatar'
import React from 'react'
import { BsThreeDots } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"
import { FaEarthAmericas } from "react-icons/fa6"
import { PiShareFat } from "react-icons/pi"
import { BiLike, BiComment } from "react-icons/bi"

const Post = () => {

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
        <div className='w-11/12 h-auto mx-auto bg-white/10 rounded-lg pt-[1px] mb-6'>
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
            <div className='bg-white/30 w-full h-[700px] my-4'>
                post Image here
            </div>
            <div className='flex justify-between px-20 items-center pb-2'>
                {
                    actions.map((action) => (
                        <div key={action.name} className='text-white/80 flex items-center cursor-pointer px-6 py-2 text-white text-md hover:bg-white/10 rounded-lg'>
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

export default Post