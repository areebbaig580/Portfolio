import React from 'react'
import Brand from '../components/common/Brand'
import Available from '../components/common/Available'
import ProjectCard from '../components/project/ProjectCard'

const AllProjects = () => {
    const projects = [
        {
            name: "Movies Hub",
            img: "/movie-app.png",
            projectType: "Movie Discovery App",
            projectDescription:
                "A modern movie discovery platform that lets users explore trending movies, search by title, view detailed information, manage a personal watchlist, and discover where movies are available to stream.",
            features: [
                "Advanced movie search",
                "Trending & popular movies",
                "Detailed movie information",
                "Genre-based browsing",
                "Watchlist management",
                "Streaming provider links",
                "Responsive UI",
                "Loading & error states"
            ],
            techStack: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                "TMDB API",
                "JustWatch",
                "React Router"
            ],
            liveLink: "https://movies-hub-vert-xi.vercel.app/",
            repoLink: "https://github.com/areebbaig580/Movies-hub",
            bottomRightPanel: "2026 • React • Responsive"
        },

        {
            name: "Pomoductivity Pro",
            img: "/pomoductivity-pro.png",
            projectType: "Productivity Platform",
            projectDescription:
                "A modern Pomodoro productivity application featuring customizable focus sessions, productivity analytics, session history, and performance tracking to help users stay focused.",
            features: [
                "Custom focus, short & long break timers",
                "Dashboard analytics",
                "Weekly productivity charts",
                "Session history",
                "Custom timer settings",
                "Browser notifications",
                "Local data persistence",
                "Responsive design"
            ],
            techStack: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Chart.js",
                "Local Storage"
            ],
            liveLink: "https://pomoductivity-pro.vercel.app/",
            repoLink: "https://github.com/areebbaig580/Pomoductivity-Pro",
            bottomRightPanel: "2026 • React • Responsive"
        },

        {
            name: "Habitly",
            img: "/Habit-tracker.png",
            projectType: "Habit Tracker",
            projectDescription:
                "A habit tracking application that enables users to build positive habits, monitor daily progress, and analyze consistency through visual insights and progress tracking.",
            features: [
                "Create & manage habits",
                "Daily habit tracking",
                "Progress visualization",
                "Habit completion history",
                "Streak tracking",
                "Responsive interface"
            ],
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "Chart.js",
                "Local Storage"
            ],
            liveLink: "https://habitly-areeb-baig.vercel.app/",
            repoLink: "https://github.com/areebbaig580/Habitly",
            bottomRightPanel: "2026 • React • Responsive"
        },

        {
            name: "Pomoductivity",
            img: "/pomoductivity.png",
            projectType: "Productivity App",
            projectDescription:
                "An advanced Pomodoro timer built with HTML, CSS, and JavaScript featuring customizable timers, productivity analytics, session history, and weekly performance tracking.",
            features: [
                "Pomodoro timer",
                "Custom focus durations",
                "Session history",
                "Daily productivity statistics",
                "Weekly analytics",
                "Interactive charts",
                "Local data storage"
            ],
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "Chart.js",
                "Local Storage"
            ],
            liveLink: "https://pomoductivity-henna.vercel.app/",
            repoLink: "https://github.com/areebbaig580/Pomoductivity",
            bottomRightPanel: "2026 • HTML/CSS/JS • Responsive"
        },

        {
            name: "Expenso",
            img: "/expenso.png",
            projectType: "Personal Finance Tracker",
            projectDescription:
                "A personal finance application that helps users manage income and expenses, visualize spending patterns, and gain insights through interactive dashboards.",
            features: [
                "Income & expense management",
                "Transaction history",
                "Dashboard analytics",
                "Weekly & monthly charts",
                "Balance calculation",
                "Category tracking",
                "Local data persistence"
            ],
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "Chart.js",
                "Local Storage"
            ],
            liveLink: "https://expenso-areeb-baig.vercel.app/",
            repoLink: "https://github.com/areebbaig580/Expenso",
            bottomRightPanel: "2026 • HTML/CSS/JS • Responsive"
        },

        {
            name: "Weather App",
            img: "/weather-app.png",
            projectType: "Weather Application",
            projectDescription:
                "A responsive weather application that provides real-time weather conditions, forecasts, and location-based updates using REST APIs with an engaging user interface.",
            features: [
                "Real-time weather",
                "Weather forecast",
                "Search by city",
                "Location-based weather",
                "Weather animations",
                "Responsive design",
                "Error handling"
            ],
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "REST API",
                "Weather API"
            ],
            liveLink: "https://weather-app-areeb-baig.vercel.app/",
            repoLink: "https://github.com/areebbaig580/Weather-app",
            bottomRightPanel: "2026 • HTML/CSS/JS • Responsive"
        }
    ];
    return (
        <div className='min-h-[100vh] w-full px-2 md:px-4'>
            <div className='flex px-4 py-2 h-fit w-full items-center justify-between border-b-1 border-gray-300 fixed top-0 left-0 bg-white z-100'>
                <Brand />
            </div>
            <div className='pt-[8vh]'>

                <div className='uppercase text-4xl md:text-6xl font-semibold mb-5'>ALL Projects</div>
                <div className='flex flex-col h-fit w-full gap-4'>
                    {projects.map((p, index) => (
                        <ProjectCard name={p.name} projectType={p.projectType} descrip={p.projectDescription} features={p.features} techStack={p.techStack} liveLink={p.liveLink} repoLink={p.repoLink} panel={p.bottomRightPanel} img={p.img} key={index} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default AllProjects
