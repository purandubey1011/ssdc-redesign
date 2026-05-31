import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

const footerColumns = [
  {
    title: 'Information',
    links: ['About', 'Product', 'Blog'],
  },
  {
    title: 'Company',
    links: ['Community', 'Career', 'Our story'],
  },
  {
    title: 'Contact',
    links: ['Getting Started', 'Pricing', 'Resources'],
  },
]

const socials = [FaFacebookF, FaTwitter, FaInstagram, FaTiktok]

const Footer = ({ background = '#f4efe6' }) => {
  return (
    <footer
      className="px-[18px] pb-[15px] pt-[102px] [font-family:'Helvetica_Neue',Arial,sans-serif]"
      style={{ background }}
    >
      <div className="mx-auto bg-black px-[40px] pb-[44px] pt-[44px] text-white max-[640px]:px-6">
        <div className="flex min-h-[166px] justify-between gap-10 max-[760px]:flex-col">
          <h2 className="font-serif text-[45px] font-bold uppercase leading-none tracking-[-0.04em]">
            LOGO
          </h2>

          <div className="grid grid-cols-3 gap-[48px] pr-[41px] max-[760px]:grid-cols-1 max-[760px]:pr-0">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[15px] font-semibold leading-none text-[#f3f3f3]">
                  {column.title}
                </h3>

                <ul className="mt-[27px] space-y-[20px]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="/"
                        className="text-[14px] font-light leading-none text-[#5a5a5a] transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[24px] h-px w-full bg-[#1d1d1d]" />

        <div className="mt-[39px] flex items-center justify-between gap-6 max-[640px]:flex-col max-[640px]:items-start">
          <p className="text-[14px] font-light text-[#5d5d5d]">
            2023 all Right Reserved Term of use Elsewhere.com
          </p>

          <div className="flex items-center gap-[12px]">
            {socials.map((Icon, index) => (
              <a
                key={index}
                href="/"
                aria-label={`Social link ${index + 1}`}
                className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white text-black transition-opacity hover:opacity-80"
              >
                <Icon className="h-[14px] w-[14px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
