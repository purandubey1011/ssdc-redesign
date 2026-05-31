const Review = () => {
  return (
    <section className="relative h-[573px] overflow-hidden bg-[#f4efe6] px-4 pt-[37px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif] max-[900px]:h-auto max-[900px]:px-6 max-[900px]:py-12">
      <div className="relative mx-auto h-full max-w-[1122px] max-[900px]:flex max-[900px]:flex-col">
        <div className="h-[488px] w-[81.7%] overflow-hidden max-[900px]:h-[360px] max-[900px]:w-full max-[640px]:h-[260px]">
          <img
            src="/home/review/reviewimg1.jpg"
            alt="Luxury living room interior"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="absolute right-0 top-[58px] flex h-[372px] w-[411px] flex-col justify-between bg-[#fbfbfa] px-[27px] pb-[31px] pt-[29px] max-[900px]:relative max-[900px]:right-auto max-[900px]:top-auto max-[900px]:h-auto max-[900px]:w-full max-[900px]:min-h-[280px]">
          <p className="max-w-[330px] text-[21px] font-light leading-[1.45] tracking-[-0.02em] text-[#5c5853] max-[640px]:text-[18px]">
            WOW helped us transform facility conditions - our downtime reduced,
            and product consistency improved. Exceptional support and service.
          </p>

          <h3 className="text-[27px] font-semibold leading-none tracking-[-0.04em] text-[#353231] max-[640px]:text-[23px]">
            Rajesh Kumar
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Review
