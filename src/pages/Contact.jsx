import React from 'react'
import Form from '../components/forms/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='h-fit w-full flex flex-col md:flex-row px-2 md:px-10 justify-between mb-5 scroll-mt-20' id='contact'>
      <div >
        <div className='uppercase text-lg md:text-2xl font-semibold tracking-tighter'>Contact</div>
        <div className='uppercase text-5xl md:text-8xl font-semibold tracking-tighter'>Lets,</div>
        <div className='uppercase text-5xl md:text-8xl font-semibold tracking-tighter'>Collaborate</div>
        <div className='uppercase text-5xl md:text-8xl font-semibold tracking-tighter'>Together!</div>
        <div className='flex flex-col mt-2 pl-2 gap-2'>

        <a href='mailto:areebbig580@gmail.com' className='flex items-center gap-2 text-[#363636]'><FontAwesomeIcon icon={faEnvelope}/> areebbaig580@gmail.com</a>
        <a href="callto:+91 6396892198" className='flex items-center gap-2 text-[#363636]'><FontAwesomeIcon icon={faPhone}/> +91 6396892198</a>
        </div>

      </div>
      <Form/>

    </div>
  )
}

export default Contact
