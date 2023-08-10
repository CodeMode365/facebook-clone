import React, { useState } from 'react'
import { IconType } from "react-icons"


interface SidebarItemProps {
    name: string,
    icon: IconType
    active: boolean
}
const SidebarItem: React.FC<SidebarItemProps> = ({ name, icon: Icon, active }) => {

    return (
        <div key={name} className={`flex flex-row items-center cursor-pointer rounded-md text-lg font-bold my-1 text-white/80 hover:bg-white/10 ${active ? "bg-white/10" : ""} px-4 py-3`}>
            <span className={`${active ? 'bg-blue-500' : 'bg-white/10'} rounded-full flex items-center justify-center p-2 cursor-pointer`}>
                <Icon size={30} />
            </span>
            <span className='mx-4'>{name}</span>
        </div>
    )
}

export default SidebarItem