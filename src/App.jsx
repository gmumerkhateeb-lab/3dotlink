import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Cards/Cards'
import Marquee from './Components/Marquee/Marquee'
import Gallery from './Components/Gallery/Gallery'
import Faqs from './Components/Faqs/Faqs'
import Roadmap from './Components/Roadmap/Roadmap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="max-w-full bg-black">
    <Navbar />
    <Hero />
    <Cards />
    <Marquee />
    <Gallery />
    <Roadmap />
    <Faqs />

    {/* <p className='bg-red-500'>Vite + React</p> */}
    </div>
    </>
  )
}

export default App
