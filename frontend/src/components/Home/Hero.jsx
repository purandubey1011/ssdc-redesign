const Hero = () => {
  return (
    <section className="flex h-[calc(100vh-56px)] min-h-[680px] flex-col overflow-hidden bg-[#f4efe6] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto flex h-[32.5%] w-[88vw] items-end justify-between pb-[33px] pt-[64px] max-[900px]:h-[35%] max-[640px]:w-[90vw] max-[640px]:items-start max-[640px]:pt-[58px]">
        <h1 className="max-w-[590px] text-[48px] font-light uppercase leading-[1.12] tracking-[-0.035em] max-[900px]:text-[40px] max-[640px]:text-[34px]">
          PREMIUM INTERIORS,
          <br />
          BUILT TO BELONG
        </h1>

        <p className="mb-[31px] hidden w-[258px] text-[14px] font-light leading-[1.28] text-[#191611] md:block">
          Premium Interior Design &amp; Execution Built For Homes That Deserve
        </p>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden bg-[#f4efe6]">
        <div className="pointer-events-none absolute left-1/2 top-[-236px] z-10 h-[300px] w-[150vw] -translate-x-1/2 rounded-[0_0_50%_50%] bg-[#f4efe6]" />

        <img
          src="/home/hero/heroimage.jpg"
          alt="Luxury interior living room with a sectional sofa and waterfront windows"
          className="h-full w-full object-cover object-[center_50%]"
        />

        <div className="pointer-events-none absolute bottom-[-174px] left-1/2 z-10 h-[230px] w-[150vw] -translate-x-1/2 rounded-[50%_50%_0_0] bg-[#f4efe6]" />
      </div>
    </section>
  )
}

export default Hero
