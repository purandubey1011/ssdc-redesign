const ProjectCta = () => {
  return (
    <section className="bg-[#fbfbfa] px-[6vw] py-[80px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto flex w-[88vw] items-center justify-between gap-10 max-[800px]:flex-col max-[800px]:items-start">
        <h2 className="max-w-[480px] text-[28px] font-semibold uppercase leading-[1.22] tracking-[-0.035em] max-[640px]:text-[24px]">
          LET’S CREATE SOMETHING
          <br />
          BEAUTIFUL TOGETHER
        </h2>

        <div className="w-[337px] max-w-full">
          <p className="text-[13px] font-light capitalize leading-[1.35] tracking-[-0.015em] text-[#5b5650]">
            Book A Consultation And Begin Your Journey Toward A Thoughtfully
            Designed Home.
          </p>

          <button className="mt-[18px] h-[34px] w-[145px] bg-black text-[11px] font-light text-white transition-opacity hover:opacity-85">
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectCta
