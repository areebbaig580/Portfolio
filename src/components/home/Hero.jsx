import React from 'react'

const Hero = () => {
  return (
    <div className='h-fit w-fit flex justify-center portrait'>
      <img src="/profile.jpeg" alt="" className='h-[30vh] w-[50vw] md:h-[300px] md:w-[30vw] lg:h-[350px] lg:w-[30vw] xl:h-[400px] xl:w-[22vw] object-cover rounded-lg' />
    </div>
  )
}

export default Hero
