import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/Image'
import verkauf from '../../images/pics/verkauf.jpeg'
import reparatur from '../../images/pics/reparatur.jpg'
import verleih from '../../images/pics/verleih.jpeg'
import events from '../../images/pics/events.jpeg'
import business from '../../images/pics/business.jpeg'
import tours from '../../images/pics/tours.jpeg'

const data = [
  {
    id: 1,
    title: 'E-SCooTER REPARATUR',
    image: reparatur,
    content:
      '',
    buttonText: 'Reparaturtermin Online Buchen',
    href: '#',
  },
  {
    id: 2,
    title: 'VERKAUF',
    image: verkauf,
    content:
      '',
    buttonText: 'E-Scooter Kaufen',
    href: 'https://store.be-scooter.de/',
  },
  {
    id: 3,
    title: 'VERLEIH',
    image: verleih,
    content:
      'E-SCooTER muss mit! Ob für einen Tag, ein Wochenende oder den Urlaub an der See sowie dem Campingplatz - erfahre mit einem unserer Leih-E-Scooter, zahlreiche Vorteile, spare bares Geld und habe Spaß.',
    buttonText: 'Jetzt Leihen',
    href: '/e-scooter-leihen',
  },
  {
    id: 4,
    title: 'BUSINESS-MOBILITÄT',
    image: business,
    content:
      'Unser Angebot für Unternehmen: Starten Sie gemeinsam mit Ihren Mitarbeitern und Kunden in das neue Zeitalter der Elektromobilität. Ihre eigene Firmenflotte oder Dienst-E-Scooter für Ihre Mitarbeiter - setzen Sie ein Zeichen und profitieren von zahlreichen Vorteilen.',
    buttonText: 'Info-Gespräch Veinbaren',
    href: '#',
  },
  {
    id: 5,
    title: 'EVENTS',
    image: events,
    content:
      'Entdecke die Stadt auf eine neue Art und Weise mit unseren eScooter-events! Wir bieten eine umweltfreundliche und schnelle Möglichkeit, um zu verschiedenen Orten zu gelangen und die Umgebung zu erkunden. Unsere erfahrenen Guides stehen Dir zur Seite, um sicherzustellen, dass Dein Event reibungslos verläuft und Du eine unvergessliche Erfahrung machst.',
    buttonText: 'Events Entdecken',
    href: '/events',
  },
  {
    id: 6,
    title: 'TOUREN',
    image: tours,
    content:
      'Entdecke unser vielseitiges Tourenangebot und erlebe puren Fahrspaß mit Familie, Freunden oder Kollegen. Ob bei einem Betriebsausflug, einer Tour mit den Teamkollegen/innen aus dem Verein oder einem ganz privaten Picknick mit Eurem Lieblingsmenschen, regional wie überregional werden Euch unsere Touren nachhaltig begeistern.',
    buttonText: 'Tour Buchen',
    href: 'https://store.be-scooter.de/collections/touren-1',
  },
];

// Helper function to check if the display is mobile or not
const isMobileDisplay = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 766;
};

export function Hero() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [upperCardsClass, setUpperCardsClass] = useState('');
  const [LowerCardsClass, setLowerCardsClass] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Set initial isMobile state and handle window resize on the client-side
  useEffect(() => {
    const isMobile = isMobileDisplay();
    setIsMobile(isMobile);
    setShowContent(isMobile);

    const handleResize = () => {
      const isMobile = isMobileDisplay();
      setIsMobile(isMobile);
      setShowContent(isMobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (cardId) => {
    if (isMobile) return;

    setExpandedCard(cardId);
    if (cardId > 3) {
      setUpperCardsClass('move-up');
      setLowerCardsClass('move-down');
    } else {
      setUpperCardsClass('');
      setLowerCardsClass('');
    }
    setShowContent(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;

    setExpandedCard(null);
    setUpperCardsClass('');
    setLowerCardsClass('');
    setShowContent(false);
  };

  return (
    <div className="mx-auto bg-[#7e92a575] p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((card, index) => (
          <div
            key={card.id}
            className={`relative lg:h-[392px] h-[720px] md:h-[220px] w-full overflow-hidden rounded-3xl transition-all duration-700 ease-in-out ${
              expandedCard === card.id ? 'lg:h-[50rem] md:h-[29rem]' : ''
            }  ${index < 3 ? upperCardsClass : ''} ${
              index >= 3 ? LowerCardsClass : ''
            }`}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={card.image}
              alt={card.title}
              className={`h-full w-full object-cover ${
                expandedCard === card.id ? 'brightness-75' : 'brightness-50'
              }`}
            />
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ease-in-out ${
                expandedCard === card.id ? 'opacity-100' : 'md:opacity-0'
              }`}
            >
              <h2
                className={`mb-4 lg:text-3xl text-2xl font-semibold text-white top-4 absolute`}
              >
                {card.title}
              </h2>
              
              {(showContent || expandedCard === card.id) && (
                <>
               
                  <p
                    className="lg:text-xl text-lg md:text-sm lg:mb-24 md:mb-0  text-white mt-[230px] "
                    dangerouslySetInnerHTML={{ __html: card.content }}
                  ></p>
                  {card.id === 2 && (
                    <p
                    className="lg:text-xl text-lg md:text-sm  lg:mb-24 md:mt-10 md:mb-8  text-white "
                    
                  >
                    Komme doch einfach bei uns im &quot;SToRE!&quot; in Heuchelheim vorbei und lasse dich von uns persönlich beraten. Wir helfen dir gerne dabei, den perfekten E-Scooter für deine Bedürfnisse zu finden und bieten dir sogar eine kostenlose Probefahrt an. Wenn du bereits weißt, welchen E-Scooter du haben möchtest, kannst du auch direkt in unserem &quot;SToRE ONLINE!&quot; bestellen. Wir freuen uns darauf, dich kennenzulernen und dir dabei zu helfen, mobil und umweltbewusst unterwegs zu sein.</p>
                  )}
                  {card.id === 1 && (
                    <p
                    className="lg:text-xl md:text-sm  lg:mb-24 md:mt-10 lap:mb-8  text-white mt-[0px]"
                    
                  >
                    Unser Ziel ist es, dass ihr stets sicher und sorgenfrei unterwegs seid. Wir kümmern uns um euren E-Scooter und bieten euch einen umfassenden Service, damit ihr euch auf das Fahren konzentrieren könnt. Dazu gehört:</p>
                  )}
                  {card.id === 1 && (
                    <ul
                                    role="list"
                                    className="mr-auto text-md md:text-xs lg:text-lg mt-0 space-y-2 whitespace-nowrap font-semibold text-slate-100"
                                  >
                                    <li className="mt-24 flex gap-x-3 md:mt-0 ">
                                      <CheckIcon
                                        className="h-6 w-5 flex-none text-slate-100"
                                        aria-hidden="true"
                                      />
                                      eine Reifenpanne zu beheben
                                    </li>
                                    <li className="flex gap-x-3">
                                      <CheckIcon
                                        className="h-6 w-5 flex-none text-slate-100"
                                        aria-hidden="true"
                                      />
                                      einen Schaden zu beheben
                                    </li>
                                    <li className="flex gap-x-3">
                                      <CheckIcon
                                        className="h-6 w-5 flex-none text-slate-100"
                                        aria-hidden="true"
                                      />
                                      Verschleißteile zu erneuern
                                    </li>
                                    <li className="flex gap-x-3">
                                      <CheckIcon
                                        className="h-6 w-5 flex-none text-slate-100"
                                        aria-hidden="true"
                                      />
                                      Probleme zu analysieren und eine <br /> Lösung zu finden.
                                    </li>
                                    <li className="flex gap-x-3">
                                      <CheckIcon
                                        className="h-6 w-5 flex-none text-slate-100"
                                        aria-hidden="true"
                                      />
                                      Original-Ersatzteile zu beschaffen
                                    </li>
                                    <li className="flex gap-x-3">
                                      <CheckIcon
                                        className="h-6 w-5 flex-none text-slate-100"
                                        aria-hidden="true"
                                      />
                                      eine persönliche Note in Form von <br /> Pulverbeschichtungen
                                    </li>
                                  </ul>
                  )}
                  <div className='mt-auto mb-10 w-full text-center'>
                  <a
                href={card.href}
                className="mt-24 md:mt-12 block rounded-md border-[#4a6d92] bg-[#4a6d92] py-3 px-4 font-bold text-white hover:bg-[#3f5872] hover:-translate-y-1 transition duration-300"
              >
                {card.buttonText}
              </a>
              {card.id === 1 && (
                    <a
                    href={card.href}
                    className="lg:mt-44 mt-24 md:mt-32 block rounded-md border-[#4a6d92] bg-[#4a6d92] py-3 px-4 font-bold text-white hover:bg-[#3f5872] hover:-translate-y-1 transition duration-300"
                  >
                    {card.buttonText}
                  </a>
                  )}
                  {card.id === 2 && (
                    <a
                    href={card.href}
                    className="lg:mt-44 mt-20 md:mt-32 block rounded-md border-[#4a6d92] bg-[#4a6d92] py-3 px-4 font-bold text-white hover:bg-[#3f5872] hover:-translate-y-1 transition duration-300"
                  >
                    {card.buttonText}
                  </a>
                  )}
              </div>
                  
                </>
              )}
            </div>
            {!expandedCard && (
              <div className="hidden md:block absolute inset-x-0 top-1/2 mt-[-1.5em]">
                <h2 className=" text-center text-3xl font-semibold text-white">
                  {card.title}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}