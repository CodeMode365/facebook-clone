import React from 'react'

interface iProps {
    size?: number
}

const Avatar: React.FC<iProps> = ({ size }) => {
    return (
        <div className={`p-2 bg-white/30 rounded-full ${size ? `w-14 h-14` : `w-14 h-14`} mx-1 cursor-pointer`}>
            {/* <Image /> */}
        </div>
    )
}

export default Avatar