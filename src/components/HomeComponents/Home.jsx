import React from 'react'
import Hero from './Hero'
import Recommended from './Recommended'
import TurnOnLocationService from './TurnOnLocationService'
import GetInspired from './GetInspired'
import AppBiz from './AppBiz'
import SpecsContent from './SpecsContent'
import FindSpecialist from './FindSpecialist'
import BlogRecommended from './BlogRecommended'
import Footer from '../Footer'

function Home() {
  return (
    <>
    {/* ALL HomeComponents folders */}
      <Hero />
      <Recommended />
      <TurnOnLocationService />
      <GetInspired />
      <AppBiz />
      <SpecsContent />
      <FindSpecialist />
      <BlogRecommended />
      <Footer />
    </>
  )
}

export default Home
