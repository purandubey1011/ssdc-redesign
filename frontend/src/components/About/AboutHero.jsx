const heroImages = [
  {
    src: '/about/hero/img1.jpg',
    alt: 'White chair beside a desk',
    className: 'w-[19vw] min-w-[190px]',
  },
  {
    src: '/about/hero/img2.jpg',
    alt: 'Minimal cream living room interior',
    className: 'w-[33vw] min-w-[320px]',
  },
  {
    src: '/about/hero/img3.jpg',
    alt: 'Modern exterior facade',
    className: 'w-[33vw] min-w-[320px]',
  },
  {
    src: '/about/hero/img4.jpg',
    alt: 'Warm home entry and living room',
    className: 'w-[16vw] min-w-[160px]',
  },
]

const AboutHero = () => {
  return (
    <section className="flex h-[calc(100vh-56px)] min-h-[680px] flex-col overflow-hidden bg-[#f4efe6] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto flex h-[42%] w-[88vw] items-end justify-between gap-10 pb-[20px] pt-[74px] max-[900px]:h-auto max-[900px]:flex-col max-[900px]:items-start max-[900px]:pb-10 max-[640px]:w-[90vw]">
        <h1 className="max-w-[585px] text-[43px] font-semibold uppercase leading-[1.2] tracking-[-0.025em] max-[900px]:text-[38px] max-[640px]:text-[31px]">
          DESIGNING HOMES WITH
          <br />
          PURPOSE, PRECISION &amp;
          <br />
          PASSIONG
        </h1>

        <p className="mb-[13px] w-[337px] max-w-full text-[14px] font-light capitalize leading-[1.32] tracking-[-0.01em] text-[#2f2b27]">
          SSDS By Subhashini Singhala Is A Premium Interior Design Studio
          Delivering Thoughtfully Crafted Spaces Through Structured Planning,
          Refined Aesthetics, And Disciplined Execution.
        </p>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden bg-[#f4efe6]">
        <div className="pointer-events-none absolute left-1/2 top-[-245px] z-10 h-[292px] w-[150vw] -translate-x-1/2 rounded-[0_0_50%_50%] bg-[#f4efe6]" />

        <div className="flex h-full w-max gap-[15px]">
          {heroImages.map((image) => (
            <div
              key={image.src}
              className={`h-full shrink-0 overflow-hidden ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-[-180px] left-1/2 z-10 h-[238px] w-[150vw] -translate-x-1/2 rounded-[50%_50%_0_0] bg-[#f4efe6]" />
      </div>
    </section>
  )
}

export default AboutHero
