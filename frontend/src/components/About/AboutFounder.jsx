const AboutFounder = () => {
  return (
    <section className="bg-[#f7f7f7] px-[5.8vw] py-[89px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif] max-[900px]:px-6 max-[900px]:py-16">
      <div className="mx-auto flex max-w-[905px] items-start gap-[44px] max-[900px]:flex-col">
        <div className="h-[369px] w-[297px] shrink-0 overflow-hidden max-[900px]:h-[390px] max-[900px]:w-full">
          <img
            src="/about/founder/founder.jpg"
            alt="Subhashini Singhala"
            className="h-full w-full object-cover object-[center_42%]"
          />
        </div>

        <div className="pt-[14px]">
          <p className="text-[25px] font-semibold uppercase leading-none tracking-[-0.025em]">
            MEET THE DESIGNER
          </p>

          <h2 className="mt-[31px] text-[47px] font-medium leading-none tracking-[-0.04em] max-[640px]:text-[36px]">
            Subhashini Singhala
          </h2>

          <p className="mt-[17px] max-w-[545px] text-[16px] font-light leading-[1.36] tracking-[-0.015em] text-[#393631]">
            Subhashini Singhala is the creative force and strategic mind behind
            SSDS. With a strong eye for detail, deep understanding of space
            planning, and passion for functional aesthetics, she designs homes
            that feel balanced, elegant and deeply personal.
          </p>

          <div className="mt-[17px] text-[16px] font-light leading-[1.5] tracking-[-0.015em] text-[#393631]">
            <p>Her design philosophy blends:</p>
            <ul className="mt-[5px] list-disc space-y-[1px] pl-[22px]">
              <li>Modern functionality</li>
              <li>Timeless elegance</li>
              <li>Practical space utilisation</li>
              <li>High-quality material selection</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutFounder
