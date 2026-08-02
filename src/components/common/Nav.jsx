import React from 'react'
import Brand from './Brand';


const Nav = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='flex flex-col md:flex-row px-4 py-2 h-fit w-full md:items-center justify-between border-b-1 border-gray-300 fixed top-0 left-0 bg-white z-100'> 
      <Brand/>
      <div className='flex w-full items-center justify-evenly md:justify-end gap-2 md:gap-4'>
        <div className='hover:cursor-pointer hover:font-bold' onClick={()=> scrollTo('home')}>Home</div>
        <div className='hover:cursor-pointer hover:font-bold' onClick={()=> scrollTo('projects')}>Projects</div>
        <div className='hover:cursor-pointer hover:font-bold' onClick={()=> scrollTo('about')}>About me</div>
        <div className='hover:cursor-pointer hover:font-bold' onClick={()=> scrollTo('contact')}>Contact me</div>
      </div>
    </div>
  )
}

export default Nav
