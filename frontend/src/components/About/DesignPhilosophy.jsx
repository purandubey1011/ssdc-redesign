const principles = [
  {
    number: '01',
    title: 'Function Before Form',
    description:
      'Every layout is planned around lifestyle, movement and daily routines - not just looks.',
  },
  {
    number: '02',
    title: 'Timeless Over Trendy',
    description:
      'We avoid short-lived trends and focus on clean, enduring aesthetics.',
  },
  {
    number: '03',
    title: 'Transparency Always',
    description:
      'Clear BOQs, honest timelines and upfront discussions - no hidden surprises.',
  },
  {
    number: '03',
    title: 'Execution Excellence',
    description:
      'Designs are meaningless without flawless execution. Our goal is a 99% match between 3D and reality.',
  },
]

const DesignPhilosophy = () => {
  return (
    <section className="bg-[#fbfbfa] py-[72px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto w-[88vw]">
        <h2 className="text-[34px] font-semibold uppercase leading-none tracking-[-0.035em] max-[1200px]:text-[30px] max-[640px]:text-[26px]">
          OUR DESIGN PHILOSOPHY
        </h2>

        <div className="mt-[47px]">
          {principles.map((item) => (
            <div
              key={`${item.number}-${item.title}`}
              className="grid grid-cols-[64px_1fr_43vw] border-b border-[#e8e8e8] py-[33px] max-[900px]:grid-cols-[56px_1fr] max-[900px]:gap-y-4"
            >
              <span className="text-[32px] font-light leading-none tracking-[-0.035em] text-[#c9c9c9] max-[640px]:text-[26px]">
                {item.number}
              </span>

              <h3 className="text-[26px] font-light leading-none tracking-[-0.035em] text-[#4a4744] max-[1200px]:text-[22px] max-[640px]:text-[18px]">
                {item.title}
              </h3>

              <p className="text-[18px] font-light leading-[1.35] tracking-[-0.015em] text-[#3f3c38] max-[1200px]:text-[16px] max-[900px]:col-span-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DesignPhilosophy
