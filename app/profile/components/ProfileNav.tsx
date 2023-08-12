'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const ProfileNav = () => {

    const pathname = usePathname()

    const links = [
        { name: "Posts", href: `/profile` },
        { name: "About", href: `/profile/about` },
        { name: "Friends", href: `/profile/friends` },
        { name: "Photos", href: `/profile/photos` },
        { name: "Videos", href: `/profile/videos` },
        { name: "Reels", href: `/profile/reels` },
        { name: "More", href: `/profile/more` },
    ]

    return (
        <div className='border-t-[1px] border-white/30 w-11/12 mx-auto -translate-y-1/4'>
            <ul className='flex text-white/80'>
                {links.map((link, ind) => (
                    <li key={link.name + ind} className={`px-2 py-4 relative`}>
                        <Link href={link.href}>
                            {link.name}
                        </Link>
                        {
                            pathname === link.href &&
                            (
                                <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[4px] bg-blue-500 rounded-lg ' />)
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProfileNav