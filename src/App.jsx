import React from 'react'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import About from './components/About'
import Tools from './components/Tools'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
   <div className=''>
<Navbar/>
<Hero/>
<Clients/>
<About/>
<Tools/>
<Services/>
<Testimonials/>
<Contact/>
<Footer/>
   </div>
  )
}

export default App