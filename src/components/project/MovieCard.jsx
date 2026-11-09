import { Link } from 'react-router-dom'

const MovieCard = ({ name, img, labels, tech, link }) => {
    return (
        <Link className='h-fit w-fit cursor-pointer group relative border border-[#d3d3d3] rounded-md overflow-hidden' to={link} target="_blank"  rel="noopener noreferrer">

            <img src={img} alt="" className='h-[30vh] md:h-[17vh] lg:h-[20vh] xl:h-[29vh] 2xl:h-[39vh]' />

            <div className='h-fit w-full rounded-b-lg px-2 py-2 flex flex-col gap-2 bg-[#eae9e9]'>
                <div className='text-2xl font-semibold'>{name}</div>
                <div className='flex gap-2'>
                    {labels.map((l, index) => (

                        <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl  transition duration-300 ease-in hover:bg-black hover:text-white' key={index}>{l}</div>
                    ))}
                </div>
                <div className='flex gap-2'>
                    {tech.map((t, index) => (

                        <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl transition duration-300 ease-in hover:bg-black hover:text-white' key={index}>{t}</div>
                    ))}

                </div>
            </div>
        </Link>
    )
}

export default MovieCard
