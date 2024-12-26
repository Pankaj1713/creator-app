import React from 'react'
import HeroSection from './components/heroBanner'
import Monetization from './components/monetization'
import Performance from './components/performance'
import Community from './components/stats'
import Platform from './components/platform'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Platform/>
      <Monetization/>
      <Performance/>
      <Community/>
    </div>
  )
}

export default Home