const reasons = [
  'Structured Design Process',
  'Clear Cost Planning',
  'Detailed 3D Visualisation',
  'Transparent BOQ',
  'Disciplined Execution',
  'High Finish Quality',
  'Single Point Responsibility',
]

const WhyChoose = () => {
  return (
    <section className="bg-[#f4f4f4] py-[88px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif] max-[900px]:py-16">
      <div className="mx-auto flex w-[88vw] max-[900px]:flex-col">
        <div className="h-[510px] w-[52%] shrink-0 overflow-hidden max-[900px]:h-[340px] max-[900px]:w-full">
          <img
            src="/about/whychoose/imgleft.jpg"
            alt="Cream living room interior"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="flex h-[510px] flex-1 flex-col justify-center bg-white px-[5vw] max-[900px]:h-auto max-[900px]:py-12 max-[640px]:px-7">
          <h2 className="max-w-[390px] text-[34px] font-semibold uppercase leading-[1.22] tracking-[-0.035em] max-[1200px]:text-[30px] max-[640px]:text-[26px]">
            WHY HOMEOWNERS
            <br />
            CHOOSE SSDS
          </h2>

          <ul className="mt-[32px] space-y-[21px]">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-center gap-[13px] text-[18px] font-light leading-none tracking-[-0.015em] text-[#47433f] max-[1200px]:text-[16px]"
              >
                <span className="text-[20px] font-light leading-none text-[#333]">
                  &#10003;
                </span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
