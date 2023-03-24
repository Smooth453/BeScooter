
import 'intl-tel-input/build/css/intlTelInput.css'
import ContactForm from "../homepage/ContactForm";
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function Faqs() {
  return (
    <section
      id="kontakt"
      className="body-font relative bg-[url('../images/background-auth.png')] bg-opacity-90 bg-cover text-gray-600 overflow-hidden"
    >
      <div className="mx-auto md:grid md:grid-cols-2 px-5 md:py-20 py-5">
        <AnimationOnScroll classNameInView={"opacity-100 translate-x-0 transition duration-1000"} classNameNotInView={"opacity-0 -translate-x-20"}>
          <div className="lg:h-[720px] md:h-[620px] relative md:flex md:flex-col items-end justify-start rounded-lg bg-gray-300 p-10 md:w-full">
            <iframe
              className="grayscale-20 contrast-60 absolute inset-0 h-full w-full opacity-50 filter "
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40535.961992898876!2d8.618078193528083!3d50.58070350022497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc5d92577d2761%3A0x46980a3067659349!2sBE-SCooTER%20...FUNsport%20erFAHREN*21!5e0!3m2!1sen!2sde!4v1677988427154!5m2!1sen!2sde"
            ></iframe>
  
            <div className="md:absolute flex flex-wrap rounded bg-white py-6 shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  ADDRESS
                </h2>
                <p className="mt-1">Rodheimer Str. 126, 35452 Heuchelheim</p>
              </div>
              <div className="lg:w-1/2 lg:mt-0 mt-4 px-6">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-indigo-500">info@be-scooter.de</a>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  TELEFON
                </h2>
                <p className="leading-relaxed">+49 641 93923404</p>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  MOBIL
                </h2>
                <p className="leading-relaxed">+49 176 51567370</p>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
        
        <div classnames='mb-10'>
        <ContactForm />
        </div>
        
        
      </div>

    </section>
 
  )
}
