import React from 'react'
import Home from './pages/Home'
import Nav from './components/common/Nav'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/common/Footer'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import AllProjects from './pages/AllProjects'


const App = () => {
  return (
  
    <div className='px-2 h-full w-full flex flex-col'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Projects' element={<AllProjects/>}/>
    </Routes>
      
      <Footer/>
    </div>
  
  )
}

export default App
