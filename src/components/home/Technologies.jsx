import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faCss3, faHtml5, faJava, faJs, faPhoenixFramework, faReact, faTailwindCss, faTypescript } from '@fortawesome/free-brands-svg-icons'

const Technologies = () => {
    return (
        <div className='flex gap-5 md:gap-8 mt-10 md:mt-5 w-full justify-end h-fit w-fit flex-wrap'>
            <div className='h-fit w-fit  flex flex-col gap-2 items-center'>
                <FontAwesomeIcon icon={faHtml5} className='text-3xl md:text-4xl text-orange-400' />
                Html
            </div>
            <div className='h-fit w-fit  flex flex-col gap-2 items-center'>
                <FontAwesomeIcon icon={faCss} className='text-3xl md:text-4xl text-blue-300' />
                Css
            </div>
            <div className='h-fit w-fit  flex flex-col gap-2 items-center'>
                <FontAwesomeIcon icon={faJs} className='text-3xl md:text-4xl text-yellow-300' />
                JS
            </div>
            <div className='h-fit w-fit  flex flex-col gap-2 items-center '>
                <FontAwesomeIcon icon={faReact} className='text-3xl md:text-4xl text-blue-400' />
                React
            </div>
            <div className='h-fit w-fit  flex flex-col gap-2 items-center '>
                <FontAwesomeIcon icon={faTailwindCss} className='text-3xl md:text-4xl text-blue-500' />
                Tailwind
            </div>

        </div>
    )
}

export default Technologies
