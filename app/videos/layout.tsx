import React from 'react'
import Sidebar from './components/Sidebar'

const layout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <main className='grid grid-cols-12'>
            <Sidebar />
            {children}
        </main>
    )
}

export default layout