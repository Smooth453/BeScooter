import Image from 'next/image'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'
import fahrstunde from '../../images/events/Fahrstunde.jpg'
import birthdayCruise from '../../images/events/birthdayCruise.jpg'

export function Hero() {
  return (
    <div className="md:flex overflow-hidden bg-[#7e92a575] md:h-full h-full md:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimationOnScroll
          classNameInView={'opacity-100 translate-y-0 transition duration-1000'}
          classNameNotInView={'opacity-0 translate-y-10'}
        >
             <div className="md:hidden block mt-10 items-center justify-center">
            <Image
              src={fahrstunde}
              alt="Product screenshot"
              className="rounded-xl object-contain md:h-[700px] md:w-[800px] lg:ml-auto"
            />
          </div>
          <div className="mx-auto md:mt-20 grid-cols-2 gap-y-16 gap-x-8 sm:gap-y-20 md:grid">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:mt-10 md:mt-20 flex-grow flex flex-col justify-between font-poppins text-center">
                <div>
                  <h2 className="break-words text-3xl font-normal tracking-widest text-[#333333]">
                    BE-SCOOTER® -
                  </h2>
                  <h2 className="mt-2 break-words text-3xl font-bold tracking-widest text-[#333333]">
                    FAHRSICHERHEITSTRAINING „BASIC“ MIT EINEM E-SCOOTER
                  </h2>
                </div>
                <p className="text-md md:text-lg mt-10 leading-8 text-[#333333]">
                  (elektrounterstützter Tretroller). Das Ziel ist es, das
                  Sicherheitsgefühl beim Führen von elektrounterstützten
                  Fahrzeugen zu erhöhen und für die neue
                  Fortbewegungsmöglichkeit der kommenden Jahre: ELEKTROMOBILITÄT
                  zu sensibilisieren! In 60 Minuten erläutern wir das
                  Basiswissen zu den Voraussetzungen und Regeln der Teilnahme am
                  Straßenverkehr, informieren über Wartung und Pflege des
                  Fahrzeuges / Akku und weiterhin gibt es eine
                  Sicherheitsempfehlung und natürlich Zeit für individuelle
                  Fragen.
                </p>
                <button className="lg:mt-16 md:mt-10 inline-flex justify-center rounded border-2 border-white  bg-black py-4 px-6   text-white transition duration-500 ease-in-out hover:opacity-90 focus:outline-none w-full md:py-3 text-lg">
                  <a href="https://store.be-scooter.de/products/fahrsicherheitstraining-basic-mit-einem-e-scooter?_pos=1&_psq=fahrsicher&_ss=e&_v=1.0">
                    Fahrsicherheitstraining Online Buchen
                  </a>
                </button>
              </div>
            </div>
            <div className="hidden md:block mt-1 items-center justify-center">
              <Image
                src={fahrstunde}
                alt="Product screenshot"
                className="rounded-xl object-contain md:h-[700px] md:w-[800px] lg:ml-auto"
              />
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          classNameInView={'opacity-100 translate-y-0 transition duration-1000'}
          classNameNotInView={'opacity-0 translate-y-10'}
        >
          <div className="mx-auto mt-20 grid-cols-2 gap-y-16 gap-x-8 sm:gap-y-20 md:grid">
            <div className="md:mt-14 flex items-center justify-center">
              <Image
                src={birthdayCruise}
                alt="Product screenshot"
                className="rounded-xl object-scale-down shadow-xl md:h-[594px] md:w-[800px] lg:ml-auto"
              />
            </div>
            <div className="lg:pr-8 lg:pt-4">
              <div className="mt-10 flex-grow flex flex-col justify-between font-poppins  text-center">
                <div>
                  <h2 className="lg:mt-2 md:mt-10 break-words text-3xl font-bold tracking-widest text-[#333333] ">
                    &quot;... BIRTHDAY CRUISEN!&quot; - Die
                    Geburtstags-(TOR)TOUR
                  </h2>
                </div>
                <p className="md:text-lg text-md  mt-6 leading-8 text-[#333333]">
                  DU FEIERST DEMNÄCHST DEINEN 14. (15.,16.,17.,18.,19.,20. oder
                  21.) GEBURTSTAG UND WILLST MIT DEINEN FREUNDEN MAL WAS GANZ
                  NEUES ERLEBEN? DANN SOLLTEST DU DIR UNSER HIGHLIGHT FÜR EURE
                  ELEKTROUNTERSTÜTZTE GEBURTSTAGS-PARTY FÜR ALLE VON 14 - 21
                  JAHREN SICHERN. Erlebe endlich wieder FRISCHLUFT und entdecke
                  unsere Heimat beim elektrounterstützten Tretrollern! Unter
                  Anleitung und mit Begleitung eines TOURGUIDE von BE-SCooTER®,
                  heisst es dann gemeinsam FUN und MOMENTE erleben, die Dich und
                  Deine Freunde nachhaltig begeistern werden. Sei Dir sicher von
                  diesem Event, wird man noch lange sprechen! Wir nennen es ganz
                  lässig: &quot;...BIRTHDAY CRUISEN!&quot;
                </p>
                <button className=" lg:mt-9 md:mt-16 mb-5 inline-flex justify-center rounded border-2 border-white  bg-black py-4 px-6  text-white transition duration-500 ease-in-out hover:opacity-90 focus:outline-none w-full md:py-3  text-lg">
                  <a href="https://store.be-scooter.de/collections/e-scooter-events/products/hollyday-cruise-one-summer-2020">
                    Birthdaycruise Online Buchen
                  </a>
                </button>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  )
}
