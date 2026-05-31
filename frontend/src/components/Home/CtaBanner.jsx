const CtaBanner = () => {
  return (
    <section className="bg-[#fbfbfa] px-[6.1vw] py-[45px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto flex max-w-[1020px] items-center justify-between gap-10 max-[800px]:flex-col max-[800px]:items-start">
        <h2 className="max-w-[520px] text-[35px] font-light uppercase leading-[1.34] tracking-[-0.045em] max-[640px]:text-[29px]">
          LET’S DESIGN YOUR DREAM
          <br />
          HOME THE RIGHT WAY
        </h2>

        <div className="w-[367px] max-w-full">
          <p className="text-[16px] font-light capitalize leading-[1.32] text-[#5a5550]">
            Book A Free Consultation And Get Expert Guidance On Planning,
            Design, Budgets And Timelines.
          </p>

          <button className="mt-[21px] h-[46px] w-[187px] bg-black text-[14px] font-light text-white transition-opacity hover:opacity-85">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
