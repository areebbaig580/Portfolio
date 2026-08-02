import React, { useEffect } from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import HeroSection from './HeroSection'
import Nav from '../components/common/Nav'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const id = location.state.scrollTo;
            const el = document.getElementById(id);

            el?.scrollIntoView({ behavior: 'smooth' });

            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    return (
        <div className='min-h-[100vh] w-full flex flex-col' id='home'>
            <Nav />
            <HeroSection />
            <Projects />
            <About />
            <Contact />
        </div>
    )
}

export default Home
