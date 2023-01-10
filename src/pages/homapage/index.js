import React from 'react'
import CardComponents from '../../components/cardComponents'
import NavBar from '../../components/NavBar'
import Hero from '../../features/Hero'



const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <CardComponents/>
    </div>
  )
}

export default HomePage