import Button from '@/app/components/Button'
import React from 'react'

const Intro = () => {

    const hobbies = [
        { title: "💻 Learning to Code" },
        { title: "🎸 Learning to Code" },
        { title: "🎧 Listening to Music" },
        { title: "🎧 SIng" },
        { title: "🎧 SIng" },
        { title: "🎸 Learning to Code" },
        { title: "💻 Learning to Code" },
        { title: "🎧 Listening to Music" },
    ]

    return (
        <div className='bg-white/10 mx-auto rounded-md w-full my-4' >
            <div className='w-11/12 mx-auto flex items-start flex-col'>
                <h1 className='mt-2 text-2xl text-bold'>Intro</h1>
                <div className='my-2 px-2 w-full'>
                    <span className='text-lg'>Life is going on.</span>
                    <Button title={'Edit bio'} classes={'my-1 w-full flex items-center py-2'} primary={false} />
                </div>
                <div className='my-2 px-2 w-full'>
                    <span className='text-lg'>
                        poeap656967
                    </span>
                    <Button title='Edit details ' classes='my-1 w-full flex items-center py-2' primary={false} />
                </div>
                <div>
                    {
                        hobbies.map(hobby => (

                            <span className='mx-1 my-1 border rounded-full p-2 cursor-pointer hover:bg-white/20 inline-flex' key={hobby.title}>{hobby.title}</span>
                        ))
                    }

                    <Button textSize={"xl"} title='Edit hobbies' classes='w-full my-2 flex items-center py-2' primary={false} />
                </div>
            </div>
        </div>
    )
}

export default Intro