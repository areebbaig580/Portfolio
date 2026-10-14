import React, { useEffect } from 'react'
import Available from './Available'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClick = () => {
        if (location.pathname === '/') {
            scrollTo('contact')
        } else {
            navigate('/', { state: { scrollTo: 'contact' } })
        }
    };

    return (
        <div className='h-fit w-full bg-gray-100 pt-[5vh]'>
            <div className='h-fit w-full flex flex-col items-center'>
                <Available />
                <div className='text-2xl md:text-6xl font-semibold uppercase tracking-tight mt-10'>Have a Project in mind?</div>
                <div className='w-full md:w-[55vw] mt-5 text-sm md:text-lg text-center'>Open for internships, freelance projects, and collaborations of all sizes.Let’s
                    team up to solve interesting problems and bring your ideas to life.</div>
                <div className='h-fit w-fit px-4 py-2 flex gap-1 items-center bg-black text-gray-200 text-sm md:text-lg font-semibold rounded-3xl cursor-pointer mt-8 b border-5 border-gray-500 select-none'
                    onClick={handleClick}
                >Contact Me <ArrowUpRight size={20} /></div>


                <div className='h-fit w-full flex flex-wrap justify-center gap-2 md:gap-5 mt-8 pb-8'>

                    <Link to={'https://github.com/areebbaig580'} target='_blank' className='h-fit w-fit px-2 py-2 bg-white rounded-2xl flex gap-1 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faGithub} />
                        <div>Github</div>
                    </Link>
                    <Link  className='h-fit w-fit px-2 py-2 bg-white rounded-2xl flex gap-1 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <div>Linkedin</div>
                    </Link>
                    <Link to={'https://instagram.com/axreeb._'} target='_blank' className='h-fit w-fit px-2 py-2 bg-white rounded-2xl flex gap-1 items-center cursor-pointer'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <div>Instagram</div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Footer
