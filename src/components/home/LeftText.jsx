import Hero from './Hero'

const LeftText = () => {
  return (
    <div className='h-fit w-fit flex md:gap-10 lg:gap-20'>
      <div className='flex flex-col gap-2'>

          <div className='text-2xl md:text-5xl font-semibold '>Hey its,</div>
          <span className='uppercase md:tracking-wider md:text-transparent md:[-webkit-text-stroke:2px_black] md:text-7xl xl:text-6xl text-5xl font-semibold md:font-bold text-1'>Areeb Baig</span>
          <div className='flex flex-col mt-5 gap-2 md:gap-1 text-3'>
            <div className='text-sm md:text-xl'>Frontend Developer from India.</div>
            <div className='text-sm md:text-xl'>Crafting modern, responsive interfaces.</div>
            <div className='text-sm md:text-xl'>Turning ideas into interactive products.</div>
          </div>
          <div className='h-fit w-fit bg-white text-black md:text-lg mt-5 md:mt-10 px-4 py-2 border border-black
           rounded-2xl cursor-pointer transition duration-300 ease-in hover:bg-black hover:text-white font-semibold select-none '>Download CV</div>
        </div>
       
        <div className='hidden md:flex'>

        <Hero />
        </div>
      
      </div>
  )
}

export default LeftText
