import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const MovieCard = ({ name, img, labels, tech , link}) => {
    return (
        <div className='h-fit w-fit cursor-pointer group relative' tabIndex={0}>

            <img src={img} alt="" className='h-[30vh] md:h-[40vh]' />

            <a href={link}
                className='hidden group-hover:flex absolute top-4 right-4 h-fit w-fit px-2 py-1
               bg-black/50 text-white rounded-xl items-center gap-2'
            >Redirect <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-sm text-white' />
            </a>


            <div className='h-fit w-full bg-gray-200 rounded-b-lg px-2 py-2 flex flex-col gap-2'>
                <div className='text-2xl'>{name}</div>
                <div className='flex gap-2'>
                    {labels.map((l , index)=>(

                    <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl' key={index}>{l}</div>
                    ))}
                </div>
                <div className='flex gap-2'>
                    {tech.map((t , index)=>(

                    <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl' key={index}>{t}</div>
                    ))}
            
                </div>
            </div>
        </div>
    )
}

export default MovieCard
