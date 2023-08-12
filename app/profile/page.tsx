import React from 'react'
import Intro from './components/Intro'
import Post from '../components/Post'
import CreationModal from '../components/Modals/CreationModal'

const page = () => {
    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-2'>
                <Intro />
                {/* photos wrapper  */}
                {/* friends wrapper */}
            </div>
            <div className='col-span-3'>
                {/* post wrapper */}
                <CreationModal />
                <Post />
            </div>
        </div>
    )
}

export default page