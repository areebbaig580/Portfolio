import React from 'react'

const Projects = () => {
  return (
    <div className='min-h-[90vh] w-full flex px-2 md:px-10 flex-col mb-4 scroll-mt-12' id='projects'>
      <div className='uppercase text-4xl md:text-6xl font-semibold mb-5'>Projects</div>
      <div className='h-fit w-full flex flex-wrap gap-10 mt-4 justify-center cursor-pointer'>

        <div className='h-fit w-fit'>
          <img src='/movie-app.png' alt="" className='h-[30vh] md:h-[40vh]' />
          <div className='h-fit w-full bg-gray-200 rounded-b-lg px-2 py-2 flex flex-col gap-2'>
            <div className='text-2xl'>Movie App</div>
            <div className='flex gap-2'>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>Movie Recommendation</div>
            </div>
            <div className='flex gap-2'>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>React</div>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>TailwindCss</div>
            </div>
          </div>
        </div>
        <div className='h-fit w-fit'>
          <img src='/pomoductivity.png' alt="" className='h-[30vh] md:h-[40vh]' />
          <div className='h-fit w-full bg-gray-200 rounded-b-lg px-2 py-2 flex flex-col gap-2'>
            <div className='text-2xl'>Pomoductivity</div>
            <div className='flex gap-2'>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>Pomodoro</div>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>Dashboard</div>
            </div>
            <div className='flex gap-2'>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>React</div>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>TailwindCss</div>
            </div>
          </div>
        </div>
        <div className='h-fit w-fit'>
          <img src='/Habit-tracker.png' alt="" className='h-[30vh] md:h-[40vh]' />
          <div className='h-fit w-full bg-gray-200 rounded-b-lg px-2 py-2 flex flex-col gap-2'>
            <div className='text-2xl'>Habitly </div>
            <div className='flex gap-2'>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>Habit Tracker</div>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>Dashboard</div>
            </div>
            <div className='flex gap-2'>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>Html</div>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>CSS</div>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>JS</div>
            </div>
          </div>
        </div>
        <div className='h-fit w-fit'>
          <img src='/expenso.png' alt="" className='h-[30vh] md:h-[40vh]' />
          <div className='h-fit w-full bg-gray-200 rounded-b-lg px-2 py-2 flex flex-col gap-2'>
            <div className='text-2xl'>Expenso </div>
            <div className='flex gap-2'>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>Expense Tracker</div>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>Dashboard</div>
            </div>
            <div className='flex gap-2'>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>Html</div>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>CSS</div>
              <div className='h-fit w-fit px-2 py-1 bg-white rounded-2xl'>JS</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
