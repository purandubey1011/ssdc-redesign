const StoryBehindSsdc = () => {
  return (
    <section className="flex h-[80vh] min-h-[650px] items-center bg-[#fbfbfa] text-black [font-family:'Helvetica_Neue',Arial,sans-serif] max-[900px]:h-auto max-[900px]:py-16">
      <div className="mx-auto flex w-[88vw] items-start justify-between gap-[7vw] max-[900px]:flex-col">
        <div className="w-[42vw] max-w-[520px] shrink-0 max-[900px]:w-full max-[900px]:max-w-none">
          <h2 className="text-[34px] font-semibold uppercase leading-[1.18] tracking-[-0.03em] max-[1200px]:text-[30px] max-[640px]:text-[26px]">
            THE STORY BEHIND
            <br />
            SSDS
          </h2>

          <div className="mt-[36px] space-y-[16px] text-[17px] font-light capitalize leading-[1.28] tracking-[-0.015em] text-[#5c5752] max-[1200px]:text-[15px] max-[640px]:text-[14px]">
            <p>
              SSDS Was Born From A Simple Belief - A Home Should Not Just Look
              Beautiful, It Should Feel Effortless To Live In.
            </p>

            <p>
              After Working Closely With Homeowners And Understanding Their
              Struggles - Budget Confusion, Design Mismatches, Delayed
              Projects, And Poor Finishing - Subhashini Singhala Envisioned A
              Studio That Would Simplify The Entire Interior Journey.
            </p>

            <p>
              A Studio Where Design Clarity Meets Execution Discipline. Where
              Transparency Replaces Confusion. And Where Dream Homes Are
              Delivered, Not Just Promised.
            </p>

            <p>
              Today, SSDS Stands For Premium Interiors Built On Trust, Process
              And Precision.
            </p>
          </div>
        </div>

        <div className="relative h-[470px] flex-1 min-w-[610px] max-[900px]:min-w-0 max-[900px]:w-full">
          <div className="absolute left-0 top-0 h-[225px] w-[195px] overflow-hidden">
            <img
              src="/about/storybehindssdc/img1.jpg"
              alt="Dining and kitchen interior"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute left-[214px] top-0 h-[470px] w-[195px] overflow-hidden">
            <img
              src="/about/storybehindssdc/img2.jpg"
              alt="Warm bedroom interior"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute bottom-0 left-[428px] h-[224px] w-[195px] overflow-hidden">
            <img
              src="/about/storybehindssdc/img3.jpg"
              alt="Bathroom interior with circular mirror"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoryBehindSsdc
