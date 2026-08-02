import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ArrowUpRight } from 'lucide-react'

const ProjectCard = ({ name, projectType, descrip, features, techStack, liveLink, repoLink, panel , img}) => {
    return (
        <div className='flex flex-col md:flex-row project-card h-fit w-full py-4 pb-10 md:pb-4 mb-2 md:mb-0 relative'>

            <a href={liveLink} className='h-fit w-fit rounded-lg overflow-hidden'>
                <img src={img} alt="" className='w-[100vw] md:w-[45vw] h-fit object-contain cursor-pointer transform transition ease duration-300 hover:translate-y-[-5px]' />
            </a>

            <div className=' md:px-4 flex flex-col gap-2 '>
                <div className='text-[#363636]'>[ {projectType} ]</div>
                <div className='text-3xl '>{name}</div>

                <div className='text-[#363636]'>{descrip}</div>

                <div className='text-lg '>Key Features</div>
                <div className='text-[#363636] flex flex-col px-5'>
                    {features.map((f,index)=>(
                        <li key={index}>{f}</li>
                    ))}
                </div>

                <div className='text-lg'>Tech Stack</div>
                <div className='h-fit w-full flex flex-wrap gap-2 md:gap-4 text-[#363636]'>
                    {techStack.map((t, index)=>(
                        <div key={index}>[ {t} ]</div>
                    ))}
                </div>

                <div className='flex flex-col md:flex-row gap-2 mt-5'>
                    <a href={liveLink} className='h-fit w-fit px-4 py-2 rounded-2xl text-black border flex items-center gap-1  cursor-pointer transition duration-300 ease-in hover:bg-black hover:text-white'>Live Preview <ArrowUpRight size={18} /></a>
                    <a href={repoLink} className='h-fit w-fit px-4 py-2 rounded-2xl text-black border flex items-center gap-1  cursor-pointer transition duration-300 ease-in hover:bg-black hover:text-white'><FontAwesomeIcon icon={faGithub} /> Github Repo</a>
                </div>

                <div className='flex text-[#363636] absolute bottom-0 md:bottom-2 right-2'>
                    {panel}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
