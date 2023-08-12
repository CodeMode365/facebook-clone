import React from 'react'
import Avatar from '@/app/components/Avatar'
import Input from '@/app/components/Input'
import { BiSolidVideoPlus, BiHappyAlt } from "react-icons/bi"
import { IoMdPhotos } from "react-icons/io"


const CreationModal = () => {

    const creations = [
        {
            name: "Live Video",
            icon: BiSolidVideoPlus,
            color: "text-red-500"
        },
        {
            name: "Photo/Video",
            icon: IoMdPhotos,
            color: "text-green-500"
        },
        {
            name: "Feeling/activity",
            icon: BiHappyAlt,
            color: "text-yellow-500"
        },
    ]

    return (
        <div className='w-11/12 flex p-4 pb-2 bg-white/10 mx-auto rounded-md flex-col my-4 '>
            <div className='flex mb-4'>
                <Avatar />
                <Input type={'text'} rounded='full' placeholder={`What's on your mind, Pabin?`} required={true} classes='w-auto ml-8 w-[550px]' />
            </div>
            <hr />
            <div className='flex items-center justify-between px-4 mt-4'>
                {
                    creations.map((create) => (
                        <div key={create.name} className='text-white flex items-center text-md cursor-pointer hover:bg-white/10 py-3 px-4 rounded-lg'>
                            <create.icon size={40} className={`mr-4 ${create.color}`} />
                            {create.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CreationModal