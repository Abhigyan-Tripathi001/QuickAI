import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Home = () => {
    const aiToolsRef = useRef(null)

  return (
    <>
        <Navbar />
        <Hero scrollToRef={aiToolsRef} />
        <div ref={aiToolsRef}>
            <AiTools />
        </div>
        <Testimonial />
        <Plan />
        <Footer />
    </>
  )
}

export default Home
