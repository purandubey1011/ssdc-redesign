import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaRegEnvelope,
} from 'react-icons/fa'
import {
  FaXTwitter,
} from 'react-icons/fa6'

const socials = [FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn]

const ContactInfo = () => {
  return (
    <section className="bg-[#f4f4f4] px-[6vw] pb-[83px] pt-[18px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto flex max-w-[740px] gap-[56px] max-[760px]:flex-col max-[760px]:gap-8">
        <h2 className="w-[194px] shrink-0 text-[39px] font-semibold leading-[1.2] tracking-[-0.035em] max-[640px]:text-[33px]">
          We’re Here
          <br />
          to Help
        </h2>

        <div className="flex-1">
          <div className="flex gap-[18px] border-b border-[#d2d2d2] pb-[19px]">
            <FaMapMarkerAlt className="mt-[2px] h-[18px] w-[18px] shrink-0" />
            <div>
              <h3 className="text-[18px] font-semibold leading-none tracking-[-0.025em]">
                Visit or Reach Out to Us
              </h3>
              <p className="mt-[17px] text-[13px] font-light leading-none tracking-[-0.015em] text-[#4d4945]">
                GFS Realtors Office - Head Office
              </p>
              <p className="mt-[20px] text-[13px] font-light leading-none tracking-[-0.015em] text-[#4d4945]">
                Sanat Trade Centre, Sevoke Road, Siliguri, West Bengal - 734001
              </p>
            </div>
          </div>

          <div className="flex gap-[18px] border-b border-[#d2d2d2] py-[20px]">
            <FaRegClock className="mt-[1px] h-[18px] w-[18px] shrink-0" />
            <div>
              <h3 className="text-[18px] font-semibold leading-none tracking-[-0.025em]">
                Open Hours
              </h3>
              <p className="mt-[17px] text-[13px] font-light leading-none tracking-[-0.015em] text-[#4d4945]">
                Mon–Sat | 10:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[44px] border-b border-[#d2d2d2] py-[22px] max-[640px]:grid-cols-1">
            <div className="flex gap-[18px]">
              <FaPhoneAlt className="mt-[1px] h-[17px] w-[17px] shrink-0" />
              <div>
                <h3 className="text-[18px] font-semibold leading-none tracking-[-0.025em]">
                  Contact Details
                </h3>
                <p className="mt-[17px] text-[12px] font-light leading-none tracking-[-0.015em] text-[#77736f]">
                  Booking Inquiries: +91-99320 66666
                </p>
                <p className="mt-[20px] text-[12px] font-light leading-none tracking-[-0.015em] text-[#77736f]">
                  Support: +91-9733038888
                </p>
              </div>
            </div>

            <div className="flex gap-[18px]">
              <FaRegEnvelope className="mt-0 h-[19px] w-[19px] shrink-0" />
              <div>
                <h3 className="text-[18px] font-semibold leading-none tracking-[-0.025em]">
                  Email Us
                </h3>
                <p className="mt-[17px] text-[12px] font-light leading-none tracking-[-0.015em] text-[#77736f]">
                  Bookings: contact@ssdc.com
                </p>
                <p className="mt-[20px] text-[12px] font-light leading-[1.45] tracking-[-0.015em] text-[#77736f]">
                  General Inquiries:
                  <br />
                  contact@ssdc.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[31px] flex items-center gap-[20px]">
            <p className="text-[22px] font-light leading-none tracking-[-0.035em]">
              Follow Us :
            </p>
            <div className="flex items-center gap-[12px]">
              {socials.map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  aria-label={`Social ${index + 1}`}
                  className="flex h-[29px] w-[29px] items-center justify-center rounded-full border border-[#6d6a66] text-[#202020]"
                >
                  <Icon className="h-[13px] w-[13px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
