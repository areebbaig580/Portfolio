import LeftText from '../components/home/LeftText'
import RightText from '../components/home/RightText'
import Bottom from '../components/home/Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import Hero from '../components/home/Hero'

const HeroSection = () => {
    const container = useRef();
    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from('.hero-section', {
            opacity: 0,
            yPercent: 1,
            duration: 1,
            ease: "power4.out"
        },)

        tl.to('.hero-section', {
            opacity: 0,
            scale: 1.5,
            duration: 1.3,
            ease: "power4.out"
        },)

        tl.set('.text-1 , .text-2 ', { opacity: 0, y: -20 })
        tl.set('.portrait', { opacity: 0, y: -60 })
        tl.set('.btn , .text-3 ,.text-4 ,.btm', { opacity: 0, y: 0, scale: 1.3 })
        tl.set('.hero-section', { scale: 1, opacity: 1 })

        tl.to('.text-1', {
            opacity: 1,
            y: 0,
            duration: 0.4,

        })
        tl.to('.text-2', {
            opacity: 1,
            y: 0,
            duration: 0.4,
        })
        tl.to('.text-3 , .btn ,.text-4', {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,

        })
        tl.to('.portrait', {
            opacity: 1,
            y: 0,
            ease: "elastic.out(1.2,0.3)",
            duration: 2,
            stagger: 0.4,
        }, "-=0.2")

        tl.to('.btm', {
            opacity: 1,
            y: 0,
            scale:1,
            duration: 0.3,
        },'-=1.3')
    },)
    return (
        <div className='min-h-[100vh] w-full flex flex-col px-2 md:px-4 pt-20 md:pt-[15vh] relative  hero-section' ref={container}>

            <div className='flex flex-col md:flex-row w-full justify-evenly h-fit'>

                <LeftText />
                <RightText />
            </div>
            <Bottom />
        </div>

    )
}

export default HeroSection
