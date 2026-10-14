import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss, faHtml5, faJs, faReact, faTailwindCss } from '@fortawesome/free-brands-svg-icons'

const Technologies = () => {
    return (
        <div className='flex gap-5 md:gap-8 mt-10 md:mt-5 justify-between md:justify-evenly lg:justify-start xl:justify-end h-fit w-full flex-wrap '>
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
