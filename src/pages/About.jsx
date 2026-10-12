import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className='min-h-[100vh] w-full md:px-2 md:px-10 scroll-mt-18 md:scroll-mt-12' id='about'>
      <div className='uppercase text-4xl md:text-6xl font-semibold mb-5'>About Me</div>
      <div className='flex flex-col '>
        <div className='flex flex-col md:flex-row justify-evenly gap-2'>

          <img src="/profile.jpeg" alt="" className='hidden md:flex h-[30vh] md:w-[14vw] md:h-fit rounded-2xl object-cover object-center ' />
          <div className='w-full md:w-[69vw] flex flex-col gap-5 md:gap-2'>

            <div className='md:text-lg border-l px-2 h-fit border-[#999999]'>Hi, I'm Areeb Beg, a B.Tech Computer Science Engineering student at IILM University and a passionate Frontend Developer from India.</div>

            <div className='md:text-lg border-l px-2 h-fit border-[#999999]'>I enjoy transforming ideas into modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, React, and Tailwind CSS. I'm always exploring new technologies and improving my skills by building real-world projects that solve everyday problems.</div>

            <div className='md:text-lg border-l px-2 h-fit border-[#999999]'>Outside of coding, you'll usually find me working out, travelling, gaming, or learning something new. I'm also fascinated by productivity and efficiency, which inspired me to build applications like Pomoductivity Pro to help people manage their time better.</div>

            <div className='md:text-lg border-l px-2 h-fit border-[#999999]'>I'm currently looking for Frontend Development Internship opportunities where I can contribute, learn from experienced developers, and continue growing as a software engineer.</div>
          </div>
        </div>
        <div className='mt-5 flex flex-col items-center gap-5 mb-5 md:mb-0'>
          <div className='text-xl md:text-2xl font-semibold'>Quick Facts</div>

          <div className='flex gap-2 justify-evenly h-fit w-full flex-col md:flex-row'>
            <div className='md:text-lg h-fit w-full md:w-fit px-4 py-2 rounded-xl '>
              <div className='text-xl font-bold mb-2'>Information</div>
              <ul className="list-disc list-inside">
                <li>Areeb</li>
                <li>B.Tech Computer Science Engineering</li>
                <li>IILM University</li>
                <li>India</li>
              </ul>
            </div>
            <div className='md:text-lg h-fit w-full md:w-fit px-4 py-2 rounded-xl '>
              <div className='text-xl font-bold mb-2'>Interests</div>
              <ul className="list-disc list-inside">
                <li>Frontend Development</li>
                <li> UI/UX Design</li>
                <li>Productivity Systems</li>
                <li>Fitness</li>
                <li>Travelling</li>
              </ul>
            </div>
            <div className='md:text-lg h-fitw-full md:w-fit px-4 py-2 rounded-xl'>
              <div className='text-xl font-bold mb-2'>Current Goals</div>
              <ul className="list-disc list-inside">

                <li>Landing a Frontend Internship</li>
                <li>AI Integration in Projects</li>
                <li>Backend Development</li>
                <li>Exploring Data Sciemce</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
