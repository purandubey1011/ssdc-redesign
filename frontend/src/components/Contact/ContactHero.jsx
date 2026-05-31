const ContactHero = () => {
  return (
    <section className="relative h-[285px] overflow-hidden bg-black text-white [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <img
        src="/contact/contacthero.jpg"
        alt="Bedroom interior"
        className="absolute inset-0 h-full w-full object-cover object-[center_48%]"
      />
      <div className="absolute inset-0 bg-black/62" />

      <header className="relative z-10 h-[56px] pt-[23px]">
        <nav className="mx-auto flex h-[33px] w-[88vw] min-w-0 items-start justify-between border-b border-white/25 max-[640px]:w-[90vw]">
          <a
            href="/"
            className="text-[15px] font-semibold leading-none tracking-[-0.01em] text-white max-[640px]:text-[13px]"
          >
            LOGO HERE
          </a>

          <div className="hidden items-start gap-[31px] text-[14px] font-light leading-none text-white/75 sm:flex">
            <a href="/" className="transition-colors hover:text-white">
              Home
            </a>
            <a href="/about" className="transition-colors hover:text-white">
              About
            </a>
            <a href="/project" className="transition-colors hover:text-white">
              Project
            </a>
            <a href="/contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 flex h-[229px] items-center justify-center pb-[16px] text-center">
        <h1 className="max-w-[660px] text-[38px] font-semibold uppercase leading-[1.38] tracking-[-0.04em] max-[640px]:text-[30px]">
          BOOK YOUR FREE DESIGN
          <br />
          CONSULTATION
        </h1>
      </div>
    </section>
  )
}

export default ContactHero
