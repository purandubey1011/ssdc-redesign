import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import CtaBanner from '../Home/CtaBanner'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import { useEffect } from 'react'

const projectFacts = [
  { label: 'Project', value: '3BHK Residential Interior' },
  { label: 'Scope', value: 'Design + Execution' },
  { label: 'Style', value: 'Modern Contemporary' },
  { label: 'Size', value: '1800 Sq Ft' },
]

const features = [
  'Seamless Indoor-Outdoor Living',
  'Open-Concept Layout With Soaring Ceilings',
  'Infinity Pool & Serene Outdoor Entertaining Areas',
  'Primary Suite With Private Balcony & Luxe Bathroom',
  'Sustainable Design & Energy-Efficient Systems',
]

const otherProjects = [
  '/project/our work/img5.jpg',
  '/project/our work/img2.jpg',
  '/project/our work/img3.jpg',
]

const saveProjectScroll = () => {
  sessionStorage.setItem('projectScrollY', String(window.scrollY))
  sessionStorage.setItem('restoreProjectScroll', 'true')
}

const OtherWorkCard = ({ image, align = 'left' }) => (
  <article
    className={`w-[48%] max-[900px]:w-full ${
      align === 'right' ? 'ml-auto' : ''
    }`}
  >
    <div className="aspect-[1.3/1] w-full overflow-hidden">
      <img
        src={image}
        alt="Other SSDS project"
        className="h-full w-full object-cover object-center"
      />
    </div>

    <div className="mt-[16px] flex items-start justify-between gap-6">
      <div>
        <h3 className="text-[17px] font-light leading-none tracking-[-0.025em]">
          Modern Luxury Apartment - Siliguri
        </h3>
        <p className="mt-[9px] text-[10px] font-light leading-none tracking-[-0.01em] text-[#5d5852]">
          Warm Tones, Minimal Lines &amp; Refined Textures For Timeless Elegance.
        </p>
      </div>

      <a
        href="/project/modern-luxury-apartment-siliguri"
        onClick={saveProjectScroll}
        className="shrink-0 text-[14px] font-light leading-none tracking-[-0.01em] text-black"
      >
        View Project <span className="ml-[9px] text-[17px]">&raquo;</span>
      </a>
    </div>
  </article>
)

const ProjectDetail = () => {
  const navigate = useNavigate()

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToProjects = () => {
    sessionStorage.setItem('restoreProjectScroll', 'true')
    navigate('/project')
  }

  return (
    <div className="overflow-x-hidden bg-[#f4efe6] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <Navbar />

      <main className="mx-auto w-[88vw] pb-[78px] pt-[22px]">
        <button
          type="button"
          onClick={handleBackToProjects}
          className="mb-[28px] flex items-center gap-[8px] text-[14px] font-light leading-none tracking-[-0.015em] text-[#3d3935] transition-colors hover:text-black"
        >
          <FiArrowLeft className="h-[16px] w-[16px] stroke-[1.6]" />
          Back to Projects
        </button>

        <section>
          <h1 className="text-[38px] font-light uppercase leading-none tracking-[-0.045em] max-[900px]:text-[30px]">
            MODERN LUXURY APARTMENT - SILIGURI
          </h1>

          <p className="mt-[14px] max-w-[850px] text-[15px] font-light capitalize leading-[1.35] tracking-[-0.015em] text-[#5b5650]">
            A Premium Residential Transformation Blending Warmth, Functionality
            And Modern Aesthetics - Designed For A Family That Values Comfort
            With Elegance
          </p>

          <div className="mt-[26px] h-[348px] w-full overflow-hidden max-[900px]:h-[280px] max-[640px]:h-[220px]">
            <img
              src="/project/our work/img1.jpg"
              alt="Modern luxury apartment balcony"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </section>

        <section className="mt-[28px] grid grid-cols-[150px_1fr] gap-[46px] max-[760px]:grid-cols-1">
          <aside className="space-y-[18px]">
            {projectFacts.map((fact) => (
              <div key={fact.label}>
                <h2 className="text-[16px] font-light leading-none tracking-[-0.015em]">
                  {fact.label}
                </h2>
                <p className="mt-[9px] text-[14px] font-light leading-none tracking-[-0.015em] text-[#4f4a45]">
                  {fact.value}
                </p>
              </div>
            ))}
          </aside>

          <article>
            <h2 className="max-w-[700px] text-[38px] font-light uppercase leading-[1.36] tracking-[-0.055em] max-[900px]:text-[30px]">
              HOUSE ARCHITECTURE DESIGN IN
              <br />
              MANHATTAN, SILIGURI
            </h2>

            <div className="mt-[17px] max-w-[790px] space-y-[15px] text-[15px] font-light capitalize leading-[1.43] tracking-[-0.015em] text-[#5b5650]">
              <p>
                Nestled In The Idyllic Forests Of Lake Tahoe, This Modern
                Residence Seamlessly Blends Indoor And Outdoor Living.
                Floor-To-Ceiling Windows Invite An Abundance Of Natural Light
                While Framing Breathtaking Lake And Mountain Views. Clean
                Lines, Natural Materials, And An Open-Concept Layout Create A
                Warm, Inviting Atmosphere Perfectly Suited For Both
                Entertaining And Peaceful Respites.
              </p>

              <p>
                The Main Living Areas Flow Effortlessly Onto Expansive Decks
                And A Serene Backyard Oasis Featuring A Stunning Infinity Pool.
                Upstairs, The Primary Suite Boasts A Private Balcony
                Overlooking The Lake, A Lavish Spa-Inspired Bathroom, And A
                Spacious Walk-In Closet. Throughout The Home, Sustainable
                Design Practices And Energy-Efficient Systems Ensure Minimal
                Environmental Impact.
              </p>
            </div>

            <div className="mt-[38px] space-y-0">
              <div className="h-[278px] w-full overflow-hidden max-[640px]:h-[210px]">
                <img
                  src="/project/our work/img6.jpg"
                  alt="Dining interior detail"
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="h-[278px] w-full overflow-hidden max-[640px]:h-[210px]">
                <img
                  src="/project/our work/img2.jpg"
                  alt="Kitchen interior detail"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <p className="mt-[14px] text-[15px] font-light leading-none tracking-[-0.015em]">
              Kitchen
            </p>

            <div className="mt-[33px] text-[15px] font-light capitalize leading-[1.45] tracking-[-0.015em] text-[#4e4944]">
              <h3 className="text-[16px] text-black">Key Features:</h3>
              <ul className="mt-[12px] list-disc pl-[18px]">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <p className="mt-[18px] max-w-[700px]">
                This Lakeside Modern Residence Is A True Celebration Of
                Contemporary Luxury Immersed In Nature's Grandeur.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-[76px] border-t border-[#bfb8ab] pt-[57px]">
          <h2 className="text-[31px] font-light uppercase leading-none tracking-[-0.045em]">
            OTHER WORK
          </h2>

          <div className="mt-[46px] space-y-[82px]">
            <OtherWorkCard image={otherProjects[0]} />
            <OtherWorkCard image={otherProjects[1]} align="right" />
            <OtherWorkCard image={otherProjects[2]} />
          </div>
        </section>
      </main>

      <CtaBanner />
      <Footer />
    </div>
  )
}

export default ProjectDetail
