import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className='flex px-2 py-2 h-fit w-full items-center justify-between border-b-1 border-gray-300 fixed top-0 bg-white'>
      <div className='text-lg font-semibold flex items-center gap-1'>
        <FontAwesomeIcon icon={faCode} size='sm'/>
        areeb.dev
      </div>
      <div className='hidden md:flex items-center gap-4 pr-10'>
        <div>Home</div>
        <div>Projects</div>
        <div>About me</div>
        <div>Contact me</div>
      </div>
    </div>
  )
}

export default Nav
