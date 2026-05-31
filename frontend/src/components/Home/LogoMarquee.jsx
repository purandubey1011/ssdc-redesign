import { motion } from 'framer-motion'
import { SiAdobe, SiAirbnb, SiLoom } from 'react-icons/si'

const logos = [
  { name: 'loom', Icon: SiLoom },
  { name: 'Adobe', Icon: SiAdobe },
  { name: 'airbnb', Icon: SiAirbnb },
  { name: 'loom', Icon: SiLoom },
]

const LogoGroup = () => (
  <div className="flex shrink-0 items-center gap-[128px] pr-[128px] max-[900px]:gap-16 max-[900px]:pr-16">
    {logos.map(({ name, Icon }, index) => (
      <div
        key={`${name}-${index}`}
        className="flex shrink-0 items-center gap-[10px] text-[#45423f]"
      >
        <Icon className="h-[36px] w-[36px]" />
        <span className="text-[31px] font-semibold leading-none tracking-[-0.05em]">
          {name}
        </span>
      </div>
    ))}
  </div>
)

const LogoMarquee = () => {
  return (
    <section className="flex h-[113px] items-center overflow-hidden bg-[#f4efe6] [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <motion.div
        className="flex w-max will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 18,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <LogoGroup />
        <LogoGroup />
      </motion.div>
    </section>
  )
}

export default LogoMarquee
