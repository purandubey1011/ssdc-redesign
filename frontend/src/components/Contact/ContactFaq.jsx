import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const faqs = [
  {
    question: 'What Happens After You Enquire?',
    answer: [
      'Our team connects with you within 24 hours',
      'Requirement understanding & consultation',
      'Site visit (if needed)',
      'Design proposal & next steps',
    ],
  },
  {
    question: 'What are the payment options?',
    answer: [
      'Payments are usually milestone-based according to project scope.',
      'Detailed payment terms are shared before project confirmation.',
    ],
  },
  {
    question: 'What is your cancellation policy?',
    answer: [
      'Cancellation terms depend on the project stage and work already initiated.',
      'Our team shares clear terms before onboarding.',
    ],
  },
]

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#fbfbfa] pb-[40px] pt-[48px] text-black [font-family:'Helvetica_Neue',Arial,sans-serif]">
      <div className="mx-auto flex w-[88vw] justify-between gap-12 max-[860px]:flex-col">
        <h2 className="text-[40px] font-semibold leading-none tracking-[-0.045em] text-[#262321] max-[640px]:text-[34px]">
          Questions in your mind?
        </h2>

        <div className="w-[46vw] min-w-[468px] max-w-full space-y-[24px] max-[860px]:w-full max-[860px]:min-w-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const Icon = isOpen ? FiChevronUp : FiChevronDown

            return (
              <div key={faq.question} className="rounded-[6px] bg-[#f3f3f3]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className={`flex w-full items-start justify-between gap-4 px-[25px] text-left ${
                    isOpen ? 'pb-0 pt-[27px]' : 'h-[78px] items-center'
                  }`}
                >
                  <span
                    className={`text-[18px] leading-none tracking-[-0.02em] ${
                      isOpen
                        ? 'font-semibold text-black'
                        : 'font-light text-[#5d5852]'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <Icon className="h-[18px] w-[18px] shrink-0 stroke-[1.7] text-[#262321]" />
                </button>

                {isOpen && (
                  <ul className="pb-[25px] pl-[58px] pr-[25px] pt-[43px] text-[16px] font-light leading-[1.55] tracking-[-0.01em] text-[#8a8682]">
                    {faq.answer.map((item) => (
                      <li key={item} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactFaq
