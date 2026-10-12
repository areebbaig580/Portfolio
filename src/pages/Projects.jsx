import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MovieCard from '../components/project/MovieCard';
import {ArrowUpRight} from 'lucide-react'
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      name: "Movie App",
      image: "/movie-app.png",
      liveLink: "https://movies-hub-vert-xi.vercel.app/",
      labels: [
        "Movie Recommendation",
      ],
      tech: [
        "React",
        "Tailwind CSS",
      ],
    },
    {
      name: "Pomoductivity",
      image: "/pomoductivity-pro.png",
      liveLink: "https://pomoductivity-pro.vercel.app/",
      labels: [
        "Pomodoro",
        "Dashboard",
      ],
      tech: [
        "React",
        "Tailwind CSS",
      ],
    },
    {
      name: "Habitly",
      image: "/Habit-tracker.png",
      liveLink: "https://habitly-areeb-baig.vercel.app/",
      labels: [
        "Habit Tracker",
        "Dashboard",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      name: "Expenso",
      image: "/expenso.png",
      liveLink: "https://expenso-areeb-baig.vercel.app/",
      labels: [
        "Expense Tracker",
        "Dashboard",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
  ];
  return (
    <div className='min-h-[90vh] w-full flex px-2 md:px-10 flex-col mb-4 scroll-mt-18 md:scroll-mt-12 relative' id='projects'>
      <div className='uppercase text-4xl md:text-6xl font-semibold mb-5'>Projects</div>
      
      <div className='h-fit w-fit flex flex-wrap gap-10 mt-4 justify-center'>
        {projects.map((p, index) => (

          <MovieCard name={p.name} img={p.image} labels={p.labels} tech={p.tech} key={index} link={p.liveLink} />
        ))}
      </div>
        <Link className='my-4 md:text-lg rounded-xl h-fit w-fit px-2 py-1 absolute top-5 right-2 md:right-[15vw]  flex gap-1 items-center bg-white text-black  border border-[#888]
            cursor-pointer transition duration-300 ease-in hover:bg-black hover:text-white font-semibold select-none' to={'/Projects'}> View all projects <ArrowUpRight size={20} /></Link>
     
        
    </div>
  )
}

export default Projects
