import React from 'react'

const Bottom = () => {
    return (
        <div className='w-full flex gap-5 justify-evenly my-10 md:my-0 md:mt-15'>
            <div className='h-fit w-fit flex flex-col items-center'>
                <div className='text-2xl md:text-3xl font-semibold'>1+</div>
                <div className='text-sm md:text-lg text-gray-600 text-center'>Year <br />learning</div>
            </div>
            <div className='h-fit w-fit flex flex-col items-center'>
                <div className='text-2xl md:text-3xl font-semibold'>10+</div>
                <div className='text-sm md:text-lg text-gray-600 text-center'>Projects<br />Completed</div>
            </div>
            <div className='h-fit w-fit flex flex-col items-center'>
                <div className='text-2xl md:text-3xl font-semibold'>100%</div>
                <div className='text-sm md:text-lg text-gray-600 text-center'>Responsive</div>
            </div>
            <div className='h-fit w-fit flex flex-col items-center'>
                <div className='text-2xl md:text-3xl font-semibold'>5+</div>
                <div className='text-sm md:text-lg text-gray-600 text-center'>Technologies</div>
            </div>


        </div>
    )
}

export default Bottom
