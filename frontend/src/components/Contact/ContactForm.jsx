import { FiChevronDown } from 'react-icons/fi'

const Field = ({ label, placeholder }) => (
  <label className="block">
    <span className="text-[14px] font-light leading-none tracking-[-0.015em] text-[#282522]">
      {label}
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-[16px] h-[26px] w-full border-0 border-b border-[#d8d8d8] bg-transparent px-1 pb-[9px] text-[14px] font-light outline-none placeholder:text-[#9d9a96]"
    />
  </label>
)

const SelectField = ({ label, value }) => (
  <label className="block">
    <span className="text-[14px] font-light leading-none tracking-[-0.015em] text-[#282522]">
      {label}
    </span>
    <div className="mt-[16px] flex h-[26px] items-start justify-between border-b border-[#d8d8d8] px-1 pb-[9px] text-[15px] font-semibold tracking-[-0.015em] text-[#171514]">
      {value}
      <FiChevronDown className="h-[18px] w-[18px] stroke-[1.6]" />
    </div>
  </label>
)

const ContactForm = () => {
  return (
    <section className="bg-[#f4f4f4] py-[56px] [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <form className="mx-auto w-[88vw] bg-white px-[32px] pb-[47px] pt-[47px] max-[640px]:px-6">
        <div className="grid grid-cols-2 gap-x-[120px] gap-y-[36px] max-[760px]:grid-cols-1 max-[760px]:gap-y-8">
          <Field label="Full Name" placeholder="Please enter your name." />
          <Field label="Email Address" placeholder="Please enter your email ID." />
          <Field label="City / Location" placeholder="Please enter your city" />
          <SelectField label="Property Type" value="Apartment" />
          <SelectField label="Scope of Work" value="Full Home Interior" />
          <SelectField label="Estimated Budget Range" value="₹5L - ₹10L" />
        </div>

        <label className="mt-[38px] block">
          <span className="text-[14px] font-light leading-none tracking-[-0.015em] text-[#282522]">
            Message
          </span>
          <input
            type="text"
            placeholder="Tell us about your project..."
            className="mt-[17px] h-[31px] w-full border-0 border-b border-[#d8d8d8] bg-transparent px-1 pb-[9px] text-[14px] font-light outline-none placeholder:text-[#9d9a96]"
          />
        </label>

        <div className="mt-[38px] flex justify-end">
          <button className="h-[42px] w-[180px] bg-black text-[13px] font-light text-white transition-opacity hover:opacity-85">
            Send Enquire
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
