const Navbar = ({ background = '#f4efe6' }) => {
  return (
    <header className="h-[56px] pt-[23px]" style={{ background }}>
      <nav className="mx-auto flex h-[33px] w-[88vw] min-w-0 items-start justify-between border-b border-[#cfc8bb] max-[640px]:w-[90vw]">
        <a
          href="/"
          className="text-[15px] font-semibold leading-none tracking-[-0.01em] text-black max-[640px]:text-[13px]"
        >
          LOGO HERE
        </a>

        <div className="hidden items-start gap-[26px] text-[14px] font-light leading-none text-[#3d3a35] sm:flex">
          <a href="/" className="transition-colors hover:text-black">
            Home
          </a>
          <a href="/about" className="transition-colors hover:text-black">
            About
          </a>
          <a href="/project" className="transition-colors hover:text-black">
            Project
          </a>
          <a href="/contact" className="transition-colors hover:text-black">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
