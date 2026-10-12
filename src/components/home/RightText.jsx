import Available from '../common/Available'

import Technologies from './Technologies'

const RightText = () => {
  return (
    <div className='min-h-[35vh] w-full md:w-3/10 flex flex-col mt-10 md:mt-0'>
      <span className='uppercase md:tracking-wider md:text-transparent md:[-webkit-text-stroke:2px_black] text-4xl md:text-7xl font-semibold md:font-bold text-2'>Frontend</span>
      <div className='text-5xl md:text-7xl pl-0 md:pl-20 uppercase font-semibold md:font-bold text-2'>Developer</div>
      <div className='w-full flex justify-start md:justify-end mt-5'>

        <Available />
      </div>
      <Technologies/>
    </div>
  )
}

export default RightText
