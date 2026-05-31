import CtaBanner from '../Home/CtaBanner'
import Footer from '../common/Footer'
import ContactFaq from './ContactFaq'
import ContactForm from './ContactForm'
import ContactHero from './ContactHero'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div className="overflow-x-hidden bg-[#f4f4f4]">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactFaq />
      <div className="bg-[#F4F4F4] py-[7vh]">
        <CtaBanner />
      </div>
      <Footer background="#F4F4F4" />
    </div>
  )
}

export default Contact
