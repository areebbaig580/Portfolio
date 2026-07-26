import React from 'react'
import Home from './pages/Home'
import Nav from './components/common/Nav'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/common/Footer'
import About from './pages/About'


const App = () => {
  return (
    <div className='px-2 h-full w-full overflow-hidden flex flex-col'>
      <Nav/>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
