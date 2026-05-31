import { useEffect } from 'react'
import StatsStrip from '../About/StatsStrip'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import ProjectCta from './ProjectCta'
import ProjectHero from './ProjectHero'
import ProjectWork from './ProjectWork'

const Project = () => {
  useEffect(() => {
    const shouldRestore = sessionStorage.getItem('restoreProjectScroll')
    const savedScroll = sessionStorage.getItem('projectScrollY')

    if (shouldRestore === 'true' && savedScroll) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: Number(savedScroll), behavior: 'auto' })
        sessionStorage.removeItem('restoreProjectScroll')
      })
    }
  }, [])

  return (
    <div className="overflow-x-hidden bg-[#fbfbfa]">
      <Navbar background="#fbfbfa" />
      <ProjectHero />
      <ProjectWork />
      <StatsStrip />
      <ProjectCta />
      <Footer background="#F4F4F4" />
    </div>
  )
}

export default Project
