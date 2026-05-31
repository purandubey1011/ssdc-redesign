import CtaBanner from './CtaBanner'
import Founder from './Founder'
import Gallery from './Gallery'
import Hero from './Hero'
import LogoMarquee from './LogoMarquee'
import Review from './Review'
import RoomRail from './RoomRail'
import StoryBehind from './StoryBehind'
import Footer from '../common/Footer.jsx'
import Navbar from '../common/Navbar.jsx'

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-[#f4efe6] md:overflow-x-visible">
      <Navbar />
      <Hero />
      <StoryBehind />
      <RoomRail />
      <Review />
      <Gallery />
      <LogoMarquee />
      <Founder />
      <CtaBanner />
      <Footer />
    </div>
  )
}

export default Home
