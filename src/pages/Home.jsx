import React from 'react'
import LeftText from '../components/home/LeftText'
import Hero from '../components/home/Hero'
import RightText from '../components/home/RightText'
import Bottom from '../components/home/Bottom'

const Home = () => {
    return (
        <div className='min-h-[100vh] w-full flex px-2 md:px-4 pt-20 md:pt-[15vh] flex-col' id='home'>
            <div className='h-fit w-full flex flex-col justify-evenly md:flex-row'>
                <LeftText />
                <RightText />
            </div>
            <Bottom />
        </div>
    )
}

export default Home
