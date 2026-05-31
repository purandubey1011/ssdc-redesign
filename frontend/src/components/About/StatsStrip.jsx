const stats = [
  { value: '80+', label: 'Homes Designed' },
  { value: '2000+', label: 'Sq Ft Executed' },
  { value: '150+', label: 'Happy Families' },
  { value: '15+', label: 'Multiple Ongoing Projects' },
]

const StatsStrip = () => {
  return (
    <section className="bg-[#070707] px-[7vw] py-[50px] text-white [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto grid max-w-[1010px] grid-cols-4 gap-8 text-center max-[760px]:grid-cols-2 max-[420px]:grid-cols-1">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-[43px] font-semibold leading-none tracking-[0.02em] max-[640px]:text-[36px]">
              {stat.value}
            </p>
            <p className="mt-[18px] text-[16px] font-light leading-none tracking-[-0.02em] text-[#ededed]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
