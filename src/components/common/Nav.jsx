import { useRef } from 'react';
import Brand from './Brand';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  const container = useRef()

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(container.current, {
      opacity: 0,
      yPercent: 1,
      duration: 1,
      ease: "power4.out"
    },)

    tl.to(container.current, {
      opacity: 0,
      scale: 1.5,
      duration: 1.2,
      ease: "power4.out"
    },)

    tl.set('.logo ,.nav', { opacity: 0, y:0 ,scale:1.2})
    tl.set(container.current, { opacity: 1, scale:1 })

    tl.to('.logo', {
      opacity: 1,
      scale:1,
      duration: 0.3,
       ease: "power4.out"
    })
    tl.to('.nav', {
      opacity: 1,
      scale:1,
      duration: 0.3,
      stagger:0.3,
       ease: "power4.out"
    })
  }, { scope: container });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='flex flex-col md:flex-row px-4 py-2 h-fit w-full md:items-center justify-between border-b border-gray-300 fixed top-0 left-0 bg-white z-100 ' ref={container}>
      <Brand />
      <div className='flex w-full items-center justify-evenly md:justify-end gap-2 md:gap-4 nav-bar'>
        <div className='hover:cursor-pointer hover:font-bold select-none nav' onClick={() => scrollTo('home')}>Home</div>
        <div className='hover:cursor-pointer hover:font-bold select-none nav' onClick={() => scrollTo('projects')}>Projects</div>
        <div className='hover:cursor-pointer hover:font-bold select-none nav' onClick={() => scrollTo('about')}>About me</div>
        <div className='hover:cursor-pointer hover:font-bold select-none nav' onClick={() => scrollTo('contact')}>Contact me</div>
      </div>
    </div>
  )
}

export default Nav
