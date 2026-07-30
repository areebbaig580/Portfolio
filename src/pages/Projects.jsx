import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MovieCard from '../components/project/MovieCard';
import {ArrowUpRight} from 'lucide-react'

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
      image: "/pomoductivity.png",
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
        <div className='my-4 md:text-lg rounded-xl border-1 border-[#aeaeae] h-fit w-fit px-2 py-1 absolute top-5 right-2 md:right-[15vw] cursor-pointer flex gap-1 items-center'> View all projects <ArrowUpRight size={20} /></div>
     
        
    </div>
  )
}

export default Projects
