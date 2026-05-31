const ProjectHero = () => {
  return (
    <section className="relative h-[calc(100vh-56px)] min-h-[552px] overflow-hidden bg-[#fbfbfa] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="relative mx-auto h-full w-[88vw]">
        <div className="absolute bottom-[74px] left-0 h-[300px] w-[250px] overflow-hidden max-[900px]:hidden">
          <img
            src="/about/storybehindssdc/img1.jpg"
            alt="Interior dining space"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute right-0 top-[55px] h-[300px] w-[250px] overflow-hidden max-[900px]:hidden">
          <img
            src="/about/storybehindssdc/img3.jpg"
            alt="Bathroom interior"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="mx-auto flex h-full max-w-[760px] flex-col items-center pt-[143px] text-center max-[900px]:justify-center max-[900px]:pt-0">
          <h1 className="text-[56px] font-bold uppercase leading-[1.20] tracking-[1px] max-[1000px]:text-[44px] max-[640px]:text-[33px]">
            SPACES THAT SPEAK OF
            <br />
            ELEGANCE, COMFORT &amp;
            <br />
            CRAFTSMANSHIP
          </h1>

          <p className="mt-[21px] max-w-[482px] text-[14px] font-extralight capitalize leading-[1.38] tracking-[-0.015em] text-[#87837f] max-[640px]:text-[13px]">
            Explore A Curated Collection Of SSDS Projects - Thoughtfully
            Designed, Meticulously Detailed And Beautifully Executed.
          </p>

          <a
            href="#project-work"
            className="absolute bottom-[34px] left-1/2 flex -translate-x-1/2 flex-col items-center text-[14px] font-light leading-none tracking-[-0.015em] text-black"
          >
            View Our Work
            <span className="mt-[8px] text-[21px] leading-none">&#8964;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectHero
