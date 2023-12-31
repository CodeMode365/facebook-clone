import React from 'react'
import StoryCard from './StoryCard'
import CreationModal from '../../components/Modals/CreationModal'
import Post from '../../components/Post'


const Center = () => {


    return (
        <div className='col-span-12 md:col-span-9 lg:col-span-6 bg-black/90 overflow-x-hidden overflow-y-auto h-[91vh]'>
            <div className=' overflow-x-auto flex p-2 max-w-full '>
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>
            <div className='w-full px-5 bg-transparent'>
                <CreationModal />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Center