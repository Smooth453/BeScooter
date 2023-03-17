import { useEffect, useState, useRef } from 'react'
import InputField from '../homepage/InputField'
import TextareaField from '../homepage/TextareaField'
import emailjs from 'emailjs-com'
import intlTelInput from 'intl-tel-input'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'
import { animate } from 'framer-motion'


const ContactForm = () => {
  const phoneInput = useRef(null)
  const [phoneNumber, setPhoneNumber] = useState('+49')

  useEffect(() => {
    intlTelInput(phoneInput.current, {
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    })
  }, [])

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value)
    setValues((values) => ({
      ...values,
      number: event.target.value,
    }))
  }

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .send('service_7wmxyya', 'template_qdfydjp', values, '4t9MKVWtL7QlKFUsk')
      .then(
        (response) => {
          console.log('SUCCESS!', response)
          setValues({
            fullName: '',
            email: '',
            phone: '',
            message: '',
          })
          setStatus('SUCCESS')
        },
        (error) => {
          console.log('FAILED...', error)
        }
      )
  }

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('')
      }, 3000)
    }
  }, [status])

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <AnimationOnScroll  classNameInView={"opacity-100 translate-x-0 transition duration-1000"} classNameNotInView={"opacity-0 translate-x-20 overflow-hidden"}>
    <div className="mt-8 w-full bg-transparent md:ml-auto md:mt-0 md:flex md:w-full md:flex-col lg:py-8 md:pl-10 overflow-hidden ">
      {' '}
      {status && renderAlert()}
      <h2 className="title-font mb-1 text-center font-bold text-gray-900 md:text-2xl lg:text-3xl">
        BE-SCOOTER® ...FUNSPORT ERFAHREN!
      </h2>
      <p className="md:mb-0 lg:mb-10 leading-relaxed text-black text-center">
        Bitte zögern Sie nicht, uns zu kontaktieren, falls Sie Fragen oder
        Anliegen haben. Wir sind gerne für Sie da und helfen Ihnen weiter. Sie
        können uns entweder per E-Mail, Telefon oder über das Kontaktformular
        auf dieser Seite erreichen.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div>
        <label className='text-slate-200 md:text-black text-sm '>Full Name :</label>
        <InputField
          value={values.fullName}
          handleChange={handleChange}
          
          name="fullName"
          type="text"
          placeholder="John Doe"
        />
        </div>
        <div>
        <label className='text-slate-200 md:text-black text-sm'>E-Mail Adresse :</label>
        <InputField
          value={values.email}
          handleChange={handleChange}
          
          name="email"
          type="email"
          placeholder="jphn@example.com"
        />
        </div>
        <div>
        <label className='text-slate-200 md:text-black text-sm '>Telefon Nummer : {' '}</label>
        <input
        
          className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700  outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ref={phoneInput}
          value={phoneNumber}
          onChange={(e) => {
            handlePhoneChange(e)
            handleChange(e)
          }}
          
          name="phone"
          type="tel"
        />
        </div>
        <div>
        <label className='text-slate-200 md:text-black text-sm'>Your Message Here :</label>
        <TextareaField 
          
          value={values.message}
          handleChange={handleChange}
          
          name="message"
        />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
        >
          Absenden
        </button>
      </form>
      <p className="text-sm md:text-md mt-3 md:text-gray-900 text-slate-200">
        Ich habe die
        <a
          href="https://www.be-scooter.de/datenschutz/"
          className="mx-1 underline"
        >
          Datenschutzerklärung
        </a>
        zur Kenntnis genommen und erkläre mich damit einverstanden.
      </p>
    </div>
    </AnimationOnScroll>
  )
}

const renderAlert = () => (
  <div className="mb-5 rounded bg-blue-100 px-4 py-3 text-center leading-normal text-blue-700">
    <p>your message submitted successfully</p>
  </div>
)

export default ContactForm
