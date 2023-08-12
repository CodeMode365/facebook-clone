import React from 'react'
import ProfileHeader from './components/ProfileHeader'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='bg-black/90 h-screen overflow-y-auto overflow-x-hidden'>
            <div className='w-[100vw] h-auto bg-white/10'>
                <div className='w-[90vw] max-w-6xl mx-auto h-auto'>
                    <div className='w-full'>
                        <ProfileHeader />
                    </div>
                </div>
            </div>
            <div className='w-[100vw] h-auto'>
                <div className='w-[80vw] max-w-6xl mx-auto h-auto'>
                    <div className='w-11/12 mx-auto text-white'>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default layout