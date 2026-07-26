import React from 'react'
import Form from '../components/forms/Form'

const Contact = () => {
  return (
    <div className='h-fit w-full flex flex-col md:flex-row px-2 md:px-10 justify-between mb-5'>
      <div className='pt-4'>
        <div className='uppercase text-lg md:text-2xl font-semibold tracking-tighter'>Contact</div>
        <div className='uppercase text-5xl md:text-8xl font-semibold tracking-tighter'>Lets,</div>
        <div className='uppercase text-5xl md:text-8xl font-semibold tracking-tighter'>Collaborate</div>
        <div className='uppercase text-5xl md:text-8xl font-semibold tracking-tighter'>Together!</div>

      </div>
      <Form/>

    </div>
  )
}

export default Contact
