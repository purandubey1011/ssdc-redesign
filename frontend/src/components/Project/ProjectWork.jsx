const filters = ['All', 'Living Rooms', 'Bedrooms', 'Kitchens', 'Full Homes', 'Renovations']

const projects = [
  '/project/our work/img1.jpg',
  '/project/our work/img2.jpg',
  '/project/our work/img3.jpg',
  '/project/our work/img4.jpg',
  '/project/our work/img5.jpg',
  '/project/our work/img6.jpg',
]

const ProjectCard = ({ image, align = 'left' }) => (
  <article
    className={`w-[48%] max-[900px]:w-full ${
      align === 'right' ? 'ml-auto' : ''
    }`}
  >
    <div className="aspect-[1.3/1] w-full overflow-hidden">
      <img
        src={image}
        alt="SSDS project interior"
        className="h-full w-full object-cover object-center"
      />
    </div>

    <div className="mt-[15px] flex items-start justify-between gap-6">
      <div>
        <h3 className="text-[16px] font-semibold leading-none tracking-[-0.02em] max-[640px]:text-[14px]">
          Modern Luxury Apartment – Siliguri
        </h3>
        <p className="mt-[8px] text-[9px] font-light leading-none tracking-[-0.01em] text-[#5d5852] max-[640px]:text-[8px]">
          Warm Tones, Minimal Lines &amp; Refined Textures For Timeless Elegance.
        </p>
      </div>

      <a
        href="/"
        className="shrink-0 text-[13px] font-light leading-none tracking-[-0.01em] text-black max-[640px]:text-[11px]"
      >
        View Project <span className="ml-[9px] text-[16px]">&raquo;</span>
      </a>
    </div>
  </article>
)

const ProjectWork = () => {
  return (
    <section
      id="project-work"
      className="bg-[#fbfbfa] pb-[82px] pt-[28px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]"
    >
      <div className="mx-auto w-[88vw]">
        <div className="flex flex-wrap gap-[16px]">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`h-[40px] border px-[20px] text-[14px] font-light leading-none ${
                index === 0
                  ? 'border-black bg-black text-white'
                  : 'border-[#333] bg-transparent text-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-[24px] h-px w-full bg-[#c7c7c7]" />

        <div className="mt-[51px] space-y-[82px]">
          <ProjectCard image={projects[0]} />
          <ProjectCard image={projects[1]} align="right" />
          <ProjectCard image={projects[2]} />
          <ProjectCard image={projects[3]} align="right" />
          <ProjectCard image={projects[4]} />
          <ProjectCard image={projects[5]} align="right" />
        </div>
      </div>
    </section>
  )
}

export default ProjectWork
