import React from 'react'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import HeroSection from './HeroSection'
import Nav from '../components/common/Nav'

const Home = () => {
    return (
        <div className='min-h-[100vh] w-full flex flex-col' id='home'>
            <Nav/>
            <HeroSection/>
            <Projects/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Home
