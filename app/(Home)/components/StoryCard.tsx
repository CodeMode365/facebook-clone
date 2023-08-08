import Avatar from '@/app/components/Avatar'
import React from 'react'

const StoryCard = () => {
    return (
        <div className='relative overflow-hiddq bg-black/50 min-w-48 min-w-[200px] min-h-[300px] m-2 rounded-md'>
            <div className='ml-2 pt-4'>
                <Avatar />
            </div>

            <h3 className='absolute bottom-4 left-2 text-white/80'>User name here</h3>
        </div>
    )
}

export default StoryCard