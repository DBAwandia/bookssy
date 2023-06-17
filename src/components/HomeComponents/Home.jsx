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
import 'animate.css';

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
        className='w-full z-[99999] lg:hidden fixed bottom-0 right-0'
      >
        <Footbar/>
      </div>
    </div>
  )
}

export default Home
