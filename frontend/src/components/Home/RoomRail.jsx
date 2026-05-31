import { motion } from 'framer-motion'

const rooms = [
  {
    title: 'Kitchen Home',
    image: '/home/roomrail/image1.jpg',
  },
  {
    title: 'Elegant Family Home Redesign',
    image: '/home/roomrail/image2.jpg',
  },
  {
    title: 'Elegant Family Redesign',
    image: '/home/roomrail/image3.jpg',
  },
  {
    title: 'Bedroom Setting',
    image: '/home/roomrail/image4.jpg',
  },
]

const RoomRail = () => {
  return (
    <section className="relative flex min-h-[560px] items-start overflow-hidden bg-[#f4efe6] py-[45px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif] max-[640px]:min-h-[430px] max-[640px]:py-8">
      <motion.div
        className="flex w-max will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 24,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="flex shrink-0 gap-[22px] pr-[22px]"
            aria-hidden={groupIndex === 1}
          >
            {rooms.map((room) => (
              <article
                key={`${room.title}-${groupIndex}`}
                className="w-[468px] shrink-0 max-[1536px]:w-[420px] max-[1280px]:w-[360px] max-[900px]:w-[300px] max-[640px]:w-[245px]"
              >
                <div className="h-[388px] overflow-hidden max-[1536px]:h-[360px] max-[1280px]:h-[310px] max-[900px]:h-[270px] max-[640px]:h-[220px]">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h3 className="mt-[15px] text-[20px] font-light leading-none text-[#4d4943] max-[1280px]:text-[16px] max-[640px]:text-[13px]">
                  {room.title}
                </h3>

                <div className="mt-[14px] h-px w-full bg-[#cfc8ba]" />
              </article>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default RoomRail
