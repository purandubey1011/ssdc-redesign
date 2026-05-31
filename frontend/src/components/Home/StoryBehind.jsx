const StoryBehind = () => {
  return (
    <section className="relative h-[78vh] min-h-[560px] max-h-[690px] overflow-hidden bg-[#f4efe6] text-black [font-family:'Helvetica_Neue',Arial,sans-serif] max-[900px]:h-auto max-[900px]:max-h-none max-[900px]:py-14">
      <div className="absolute left-[-106px] top-[80px] h-[420px] w-[420px] rounded-full bg-[#f8ecd7]" />

      <div className="relative mx-auto flex h-full w-full items-center justify-between gap-[6.5vw] pr-[10vw] max-[900px]:h-auto max-[900px]:flex-col max-[900px]:gap-8 max-[900px]:px-6">
        <div className="relative -ml-[42px] h-[520px] w-[47vw] min-w-[560px] max-w-[680px] shrink-0 overflow-visible max-[1200px]:min-w-[520px] max-[900px]:ml-0 max-[900px]:h-auto max-[900px]:w-full max-[900px]:min-w-0">
          <img
            src="/home/storybehind/chairtable.png"
            alt="Classic cream sofa with wooden side table and vase"
            className="absolute left-0 top-1/2 w-full -translate-y-1/2 object-contain max-[900px]:relative max-[900px]:top-auto max-[900px]:translate-y-0"
          />
        </div>

        <div className="mb-[8px] w-[535px] max-w-full">
          <h2 className="text-[34px] font-light uppercase leading-none tracking-[-0.055em] text-[#16130f] max-[1200px]:text-[30px] max-[640px]:text-[24px]">
            THE STORY BEHIND SSDS
          </h2>

          <div className="mt-[17px] h-px w-[392px] bg-[#bfb8ab] max-[640px]:w-full" />

          <p className="mt-[21px] max-w-[535px] text-[15px] font-normal capitalize leading-[1.36] text-[#57514b] max-[1200px]:text-[14px] max-[640px]:text-[14px]">
            Born From A Belief That Homes Should Feel As Good As They Look, SSDS
            Simplifies Interiors With Clarity, Precision, And Trust.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StoryBehind
