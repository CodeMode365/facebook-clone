import clsx from 'clsx'
import React, { useState } from 'react'
import { IconType } from 'react-icons'


interface ButtonProps {
    title: string
    classes: string
    primary: boolean
    icon?: IconType
    textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}
const Button: React.FC<ButtonProps> = ({ title, classes, primary, icon: Icon, textSize }) => {

    return (
        <button className={clsx(`px-2 py-3  text-white rounded-md flex items-center`, primary ? 'bg-blue-500 hover:bg-blue-400' : " bg-white/20 hover:bg-white/30", classes && `${classes}`)}>
            {
                Icon &&
                (
                    <Icon size={20} className='mr-1 text-white/80' />
                )
            }
            <span className={`${textSize ? `text-${textSize}` : "text-sm"} font-semibold mx-auto`}>
                {title}
            </span>
        </button>
    )
}

export default Button