import React from 'react'
import { IoMdSettings } from 'react-icons/io'
import Input from '../Input'

interface iProps {
    title: string
    searchHolder: string
}

const Header: React.FC<iProps> = ({ title, searchHolder }) => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <span className='text-3xl font-bold text-white/80'>{title}</span>
                <span className='bg-white/10 rounded-full flex items-center justify-center p-2 cursor-pointer'>
                    <IoMdSettings size={32} className="text-white/90" />
                </span>
            </div>
            <div className='my-4 w-full'>
                <Input type={'text'} rounded='full' required={false} classes='text-xl w-full' placeholder={searchHolder} />
            </div>
        </>
    )
}

export default Header