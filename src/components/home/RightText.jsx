import Available from '../common/Available'

import Technologies from './Technologies'

const RightText = () => {
  return (
    <div className='h-fit w-full xl:w-3/10 flex flex-col mt-10 md:mt-0'>
      <span className='uppercase md:tracking-wider md:text-transparent md:[-webkit-text-stroke:2px_black] text-4xl md:text-7xl xl:text-7xl font-semibold md:font-bold text-2'>Frontend</span>
      <div className='text-5xl md:text-6xl lg:text-8xl xl:text-7xl pl-0 xl:pl-5 2xl:pl-20 uppercase font-semibold md:font-bold text-2'>Developer</div>
      <div className='w-full flex justify-start xl:justify-end mt-5'>

        <Available />
      </div>
      <Technologies/>
    </div>
  )
}

export default RightText
