import React from 'react'
import Available from '../common/Available'

import Technologies from './Technologies'

const RightText = () => {
  return (
    <div className='min-h-[35vh] w-full md:w-3/10 flex flex-col mt-10 md:mt-0'>
      <span className='uppercase tracking-wider text-transparent [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:2px_black] text-5xl md:text-7xl font-bold'>Frontend</span>
      <div className='text-5xl md:text-7xl pl-12 md:pl-20 uppercase font-bold'>Developer</div>
      <div className='w-full flex justify-start md:justify-end mt-5'>

        <Available />
      </div>
      <Technologies/>
    </div>
  )
}

export default RightText
