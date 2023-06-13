// import React from 'react'
import Hero from './Hero'
import Recommended from './Recommended'
import TurnOnLocationService from './TurnOnLocationService'
import GetInspired from './GetInspired'
import AppBiz from './AppBiz'
import SpecsContent from './SpecsContent'
import FindSpecialist from './FindSpecialist'
import BlogRecommended from './BlogRecommended'
import Footer from '../Footer'
import Footbar from '../Footbar'

function Home() {
  return (
    <div className='relative min-h-screen'>
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
      <div 
        className='w-full z-[9999999999999] lg:hidden fixed bottom-0 right-0'
      >
        <Footbar/>
      </div>
    </div>
  )
}

export default Home
