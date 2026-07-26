import React from 'react'

const About = () => {
  return (
    <div className='min-h-[100vh] w-full px-2 md:px-10'>
      <div className='uppercase text-6xl font-semibold mb-5'>About</div>
      <div className='flex flex-col md:flex-row justify-evenly'>
        <img src="/profile.jpeg" alt="" className='h-[20vh] md:h-[35vh] rounded-2xl object-cover'/>
        <div className='w-7/10 flex flex-col gap-2'>

        <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex, tempore iusto consequuntur eius quibusdam aspernatur necessitatibus recusandae? Eligendi error incidunt iusto nulla quaerat quibusdam commodi soluta assumenda unde harum eaque molestias voluptas quidem blanditiis perferendis quod, adipisci odio at aperiam cupiditate! Nobis vel assumenda nemo harum dolores.</div>
        <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex, tempore iusto consequuntur eius quibusdam aspernatur necessitatibus recusandae? Eligendi error incidunt iusto nulla quaerat quibusdam commodi soluta assumenda unde harum eaque molestias voluptas quidem blanditiis perferendis quod, adipisci odio at aperiam cupiditate! Nobis vel assumenda nemo harum dolores.</div>
       
        </div>
      </div>
    </div>
  )
}

export default About
