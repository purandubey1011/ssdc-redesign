const workItems = [
  {
    image: '/about/howwework/img1.jpg',
    title: 'COMPLETE INTERIOR SOLUTION',
    description:
      'End-To-End Interior Solutions - From Conceptual Design To Final Handover - Ensuring Total Peace Of Mind.',
  },
  {
    image: '/about/howwework/img2.jpg',
    title: 'DESIGN ONLY PACKAGE',
    description:
      'Premium Design Services With Complete Technical Drawings And 3D Visuals, Allowing Clients To Execute Using Their Preferred Local Contractor.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#f4f4f4] pb-[70px] pt-[58px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto w-[88vw]">
        <h2 className="text-[34px] font-semibold uppercase leading-none tracking-[-0.035em] max-[1200px]:text-[30px] max-[640px]:text-[26px]">
          HOW WE WORK WITH OUR CLIENTS
        </h2>

        <div className="mt-[46px] space-y-[58px]">
          {workItems.map((item) => (
            <article key={item.title}>
              <div className="h-[470px] w-full overflow-hidden max-[1200px]:h-[390px] max-[640px]:h-[230px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <h3 className="mt-[24px] text-[20px] font-semibold uppercase leading-none tracking-[-0.02em] max-[640px]:text-[16px]">
                {item.title}
              </h3>

              <p className="mt-[14px] max-w-[650px] text-[14px] font-light capitalize leading-[1.55] tracking-[-0.01em] text-[#393631] max-[640px]:text-[12px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
