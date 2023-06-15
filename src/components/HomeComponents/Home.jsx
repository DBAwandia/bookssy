import React , { useContext } from 'react'
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
import { SearchProductContext } from '../../Context/SearchProductContext'
import BooksySearchPage from '../../Pages/BooksySearchpage/BooksySearchPage'
import 'animate.css';
import BooksyLocationSearchPage from '../../Pages/BooksyLocationSearchPage/BooksyLocationSearchPage'
import { SearchLocationContext } from '../../Context/SearchLocationContext'

function Home() {
  //opening BooksySearchPage component
  const { open } = useContext(SearchProductContext)

  //opening BooksyLocationSearchPage component
  const { opens } = useContext(SearchLocationContext)

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

    {/* opne the BooksySearchPage component */}
      {open &&
        <div 
          className='w-full animate__animated animate__fadeIn h-screen z-[9999999999999] fixed bottom-0 right-0'
        >
          <BooksySearchPage/>
        </div>
      }

      {/* open the BooksyLocationSearchPage component */}
      {opens &&
        <div 
          className='w-full animate__animated animate__fadeIn h-screen z-[9999999999999] fixed bottom-0 right-0'
        >
          <BooksyLocationSearchPage/>
        </div>
      }

    </div>
  )
}

export default Home
