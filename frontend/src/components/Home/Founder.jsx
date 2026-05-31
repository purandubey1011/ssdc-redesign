const Founder = () => {
  return (
    <section className="overflow-hidden bg-[#f4efe6] px-[7.1vw] pb-[88px] pt-[31px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif] max-[900px]:px-6 max-[900px]:py-14">
      <div className="mx-auto flex max-w-[1000px] gap-[60px] max-[900px]:flex-col">
        <div className="h-[422px] w-[337px] shrink-0 overflow-hidden max-[900px]:h-[390px] max-[900px]:w-full">
          <img
            src="/home/founder/founder.jpg"
            alt="Subhashini Singhala"
            className="h-full w-full object-cover object-[center_42%]"
          />
        </div>

        <div className="min-w-0 pt-[53px] max-[900px]:pt-0">
          <h2 className="whitespace-nowrap text-[50px] font-semibold uppercase leading-none tracking-[-0.04em] text-[#dfddd6] max-[1100px]:text-[44px] max-[900px]:whitespace-normal max-[640px]:text-[36px]">
            MEET THE DESIGNER
          </h2>

          <p className="mt-[18px] max-w-[640px] text-[18px] font-light leading-[1.42] tracking-[-0.025em] text-[#34312d] max-[640px]:text-[16px]">
            Subhashini Singhala is the creative force and strategic mind behind
            SSDS. With a strong eye for detail, deep understanding of space
            planning, and a passion for functional aesthetics, she designs homes
            that feel balanced, elegant and deeply personal.
          </p>

          <h3 className="mt-[129px] text-[23px] font-semibold uppercase leading-none tracking-[-0.04em] text-[#111] max-[900px]:mt-14">
            SUBHASHINI SINGHALA
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Founder
