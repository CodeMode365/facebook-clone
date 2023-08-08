import React, { useState } from 'react'


interface InputProps {
    rounded?: string
    placeholder?: string
    type: 'number' | 'text' | 'email'
    required: boolean,
    classes?: string
}
const Input: React.FC<InputProps> = ({ rounded, placeholder, type, required, classes }) => {

    return (
        <input className={`rounded-${rounded} bg-white/10 px-4 py-3 text-white ouline-none ${classes} active:outline-none focus:outline-none`} type={type} placeholder={placeholder} required={required} />
    )
}

export default Input