import React from 'react'
import Available from './Available'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
    return (
        <div className='h-fit w-full bg-gray-100 pt-[5vh]'>
            <div className='h-fit w-full flex flex-col items-center'>
                <Available />
                <div className='text-2xl md:text-7xl font-semibold uppercase tracking-tight mt-10'>Have a Project in mind?</div>
                <div className='w-full md:w-[55vw] mt-5 text-sm md:text-lg text-center'>I'm always looking for the next interesting problem to solve. Right now,
                    I'm open to internships, freelance projects, and collaborations of all kinds — big or small. If you've got something in mind,
                    I'd love to help bring it to life.</div>
                <div className='h-fit w-fit px-4 py-2 flex gap-1 items-center bg-black text-gray-200 text-lg font-semibold rounded-3xl cursor-pointer mt-8 b border-5 border-gray-500'
                onClick={()=> scrollTo('contact')}
                >Contact Me <ArrowUpRight size={20}/></div>
                
                
                <div className='h-fit w-full flex flex-wrap justify-center gap-2 md:gap-5 mt-8 pb-8'>
                  
                    <a href='https://github.com/areebbaig580' className='h-fit w-fit px-2 py-2 bg-white rounded-2xl flex gap-1 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faGithub} />
                        <div>Github</div>
                    </a>
                    <a href='' className='h-fit w-fit px-2 py-2 bg-white rounded-2xl flex gap-1 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <div>Linkedin</div>
                    </a>
                    <a  href='https://instagram.com/axreeb._' className='h-fit w-fit px-2 py-2 bg-white rounded-2xl flex gap-1 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <div>Instagram</div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer
