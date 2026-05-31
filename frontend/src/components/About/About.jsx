import CtaBanner from '../Home/CtaBanner'
import AboutFounder from './AboutFounder'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import AboutHero from './AboutHero'
import DesignPhilosophy from './DesignPhilosophy'
import HowWeWork from './HowWeWork'
import StatsStrip from './StatsStrip'
import StoryBehindSsdc from './StoryBehindSsdc'
import WhyChoose from './WhyChoose'

const About = () => {
  return (
    <div className="overflow-x-hidden bg-[#f4efe6]">
      <Navbar />
      <AboutHero />
      <StoryBehindSsdc />
      <AboutFounder />
      <DesignPhilosophy />
      <WhyChoose />
      <HowWeWork />
      <StatsStrip />
      <CtaBanner />
      <Footer />
    </div>
  )
}

export default About
