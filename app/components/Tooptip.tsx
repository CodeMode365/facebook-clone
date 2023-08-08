import React, { useState } from 'react'


interface TooptipProps {
    hint: string
}
const Tooptip: React.FC<TooptipProps> = ({ hint }) => {

    return (
        <div className='bg-white text-black text-sm w-4'>
            Tooptip
        </div>
    )
}

export default Tooptip