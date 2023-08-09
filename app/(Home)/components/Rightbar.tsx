import Avatar from '@/app/components/Avatar'
import React from 'react'
import { BsThreeDots, BsSearch } from "react-icons/bs"
const Rightbar = () => {

  const users = [
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
    { name: "User1" },
  ]

  return (
    <div className='hidden md:block md:col-span-3 lg:col-span-3 pl-14 bg-black/90 h-[91vh] text-white overflow-x-hidden overflow-y-auto'>
      <div className='w-full flex justify-between px-4 mt-6'>
        <h3 className="font-bold">Contacts</h3>
        <div className='flex'>
          <BsThreeDots size={24} className={"mx-4 cursor-pointer"} />
          <BsSearch size={24} className="cursor-pointer" />
        </div>
      </div>
      <div className='mt-6'>
        {users.map(user => (
          <div className='w-full mx-4 text-white/80 flex items-center cursor-pointer  text-white text-md hover:bg-white/10 rounded-lg py-2 px-3 hover:text-blue-500'>
            <span>
              <Avatar />
            </span>
            <span className='mx-2 '>
              {user.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rightbar