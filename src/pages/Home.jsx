import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import FinancialFreedom from '../components/FinancialFreedom'
import Programs from '../components/Programs'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FinancialFreedom />
      <Programs />
    </div>
  )
}

export default Home