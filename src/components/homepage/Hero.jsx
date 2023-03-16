import { CheckIcon } from '@heroicons/react/20/solid'
import React  from 'react'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'
import { useState } from 'react';
import Image from 'next/Image';
import thumbnail from '../../images/info/Agb.jpg'



export function Hero() {

    const [expandedCard, setExpandedCard] = useState(null);

  const data = [
    { id: 1, title: 'Title 1', image: {thumbnail}, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 2, title: 'Title 2', image: {thumbnail}, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { id: 3, title: 'Title 3', image: {thumbnail}, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { id: 4, title: 'Title 4', image: {thumbnail}, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { id: 5, title: 'Title 5', image: {thumbnail}, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    { id: 6, title: 'Title 6', image: {thumbnail}, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' },
    // ... add more cards as needed
  ];

  return (
    <div className=" mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {data.map((card, index) => (
          <div
            key={card.id}
            className={`  relative overflow-hidden transform transition-all duration-300 ease-in-out ${expandedCard === card.id ? 'col-span-2 ' : ''}`}
            onMouseEnter={() => setExpandedCard(card.id)}
            onMouseLeave={() => setExpandedCard(null)}
          >
            <img
              src={card.image}
              alt={card.title}
              className={`w-full h-64 object-cover ${expandedCard === card.id ? 'brightness-75' : 'brightness-50'}`}
            />
            <div
              className={`absolute inset-0 flex flex-col justify-center items-center p-4 ${expandedCard === card.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}
            >
              <h2
                className={`text-black text-2xl font-semibold mb-4 transition-all duration-300 ease-in-out ${index < 3 ? 'top-0 mt-4' : 'bottom-0 mb-4'} absolute`}
              >
                {card.title}
              </h2>
              {expandedCard === card.id && (
                <>
                  <p className="text-black text-lg mb-4">{card.content}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">Click me</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
    // <section className="">
    //   <div
    //     className="isolate overflow-hidden
    //     bg-[#7e92a575] px-3 py-10 text-center "
    //   >
    //     <div className="lg:px-7 h-2/4 font-poppins md:mx-3 md:px-6">
    //       <div className="lg:max-w-5xl mx-auto md:grid md:grid-cols-3 md:gap-5 ">
    //         <div className="sm:p-10 mb-10 h-[700px] justify-between rounded-3xl bg-[url('../images/pics/reparatur.jpg')] bg-cover bg-center bg-no-repeat p-8 shadow-xl md:flex md:h-[780px] md:flex-col">
    //           <div className="mb-6 text-center text-2xl font-bold leading-tight text-[#FFFFFF] md:mb-0 md:text-3xl">
    //             E-SCooTER REPARATUR
    //           </div>
    //           <p className="text-center  font-bold leading-7 text-[#FFFFFF] md:mt-6  md:text-base">
    //             Unser Ziel ist es, dass ihr stets sicher und sorgenfrei
    //             unterwegs seid. Wir kümmern uns um euren E-Scooter und bieten
    //             euch einen umfassenden Service, damit ihr euch auf das Fahren
    //             konzentrieren könnt. Dazu gehört:
    //           </p>
    //           <ul
    //             role="list"
    //             className="text-sm space-y-2 whitespace-nowrap text-left font-semibold text-slate-100"
    //           >
    //             <li className="mt-24 flex gap-x-3 md:mt-0 ">
    //               <CheckIcon
    //                 className="h-6 w-5 flex-none text-slate-100"
    //                 aria-hidden="true"
    //               />
    //               eine Reifenpanne zu beheben
    //             </li>
    //             <li className="flex gap-x-3">
    //               <CheckIcon
    //                 className="h-6 w-5 flex-none text-slate-100"
    //                 aria-hidden="true"
    //               />
    //               einen Schaden zu beheben
    //             </li>
    //             <li className="flex gap-x-3">
    //               <CheckIcon
    //                 className="h-6 w-5 flex-none text-slate-100"
    //                 aria-hidden="true"
    //               />
    //               Verschleißteile zu erneuern
    //             </li>
    //             <li className="flex gap-x-3">
    //               <CheckIcon
    //                 className="h-6 w-5 flex-none text-slate-100"
    //                 aria-hidden="true"
    //               />
    //               Probleme zu analysieren und eine Lösung zu finden.
    //             </li>
    //             <li className="flex gap-x-3">
    //               <CheckIcon
    //                 className="h-6 w-5 flex-none text-slate-100"
    //                 aria-hidden="true"
    //               />
    //               Original-Ersatzteile zu beschaffen
    //             </li>
    //             <li className="flex gap-x-3">
    //               <CheckIcon
    //                 className="h-6 w-5 flex-none text-slate-100"
    //                 aria-hidden="true"
    //               />
    //               eine persönliche Note in Form von Pulverbeschichtungen
    //             </li>
    //           </ul>
    //           <a
    //             href="#"
    //             className="mt-8 block rounded-md border-[#4a6d92] bg-[#4a6d92] py-3 px-4 font-bold text-white hover:bg-[#3f5872] hover:-translate-y-1 transition duration-300"
    //           >
    //             Reparaturtermin Online Buchen
    //           </a>
    //         </div>

    //         <div
    //           className="sm:p-10 relative mb-10 flex-col justify-between rounded-3xl bg-[url('../images/pics/verkauf.jpeg')] bg-cover bg-center bg-no-repeat
    //         p-8 shadow-xl ring-1 ring-gray-900/10 md:flex "
    //         >
    //           <div className="mb-4 text-center text-3xl font-bold leading-tight text-[#FFFFFF]">
    //             VERKAUF
    //           </div>
    //           <p className="text-center text-lg font-bold leading-7 text-[#FFFFFF] md:mt-8">
    //             Komme doch einfach bei uns im &quot;SToRE!&quot; in Heuchelheim
    //             vorbei und lasse dich von uns persönlich beraten. Wir helfen dir
    //             gerne dabei, den perfekten E-Scooter für deine Bedürfnisse zu
    //             finden und bieten dir sogar eine kostenlose Probefahrt an. Wenn
    //             du bereits weißt, welchen E-Scooter du haben möchtest, kannst du
    //             auch direkt in unserem &quot;SToRE ONLINE!&quot; bestellen. Wir
    //             freuen uns darauf, dich kennenzulernen und dir dabei zu helfen,
    //             mobil und umweltbewusst unterwegs zu sein.
    //           </p>

    //           <a
    //             href="https://store.be-scooter.de/"
    //             className="mt-8 block rounded-md border-[#4a6d92] bg-[#4a6d92] py-3 px-4 font-bold text-white hover:bg-[#3f5872] hover:-translate-y-1 transition duration-300"

    //           >
    //             E-Scooter Kaufen
    //           </a>
    //         </div>

    //         <div
    //           className="sm:p-10 mb-10 flex flex-col justify-between rounded-3xl bg-white bg-[url('../images/pics/verleih.jpeg')] bg-cover bg-center
    //         bg-no-repeat p-8 shadow-xl ring-1 ring-gray-900/10"
    //         >
    //           <div className="mb-4 text-center text-3xl font-bold leading-tight text-[#FFFFFF]">
    //             VERLEIH
    //           </div>
    //           <div className="mb-4 text-center text-xl leading-tight text-[#FFFFFF]">
    //             E-Scooter muss mit!
    //           </div>
    //           <p className=" text-center text-lg font-bold leading-7 text-[#FFFFFF]">
    //             Ob für einen Tag, ein Wochenende oder den Urlaub an der See
    //             sowie dem Campingplatz - erfahre mit einem unserer
    //             Leih-E-Scooter, zahlreiche Vorteile, spare bares Geld und habe
    //             Spaß.
    //           </p>

    //           <a
    //             href="/e-scooter-leihen"
    //             className="mt-8 block rounded-md border-[#4a6d92] bg-[#4a6d92] py-3 px-4 font-bold text-white hover:bg-[#3f5872] hover:-translate-y-1 transition duration-300"
    //           >
    //             Jetzt Leihen
    //           </a>
    //         </div>

          
            
    //         <AnimationOnScroll classnames="sm:p-10 mb-10 flex flex-col justify-between rounded-3xl bg-[url('../images/pics/business.jpeg')] bg-cover bg-center bg-no-repeat p-8" classNameInView={"opacity-100 translate-y-0 transition duration-500"} classNameNotInView={"opacity-0 translate-y-10"}>
    //           <div className="mb-4 text-center text-3xl font-bold leading-tight text-[#FFFFFF]">
    //             BUSINESS-MOBILITÄT
    //           </div>
            
              
    //           <p className="mt-6 text-center text-base font-bold leading-7 text-[#FFFFFF]  transition-opacity duration-300">
    //             Unser Angebot für Unternehmen: Starten Sie gemeinsam mit Ihren
    //             Mitarbeitern und Kunden in das neue Zeitalter der
    //             Elektromobilität. Ihre eigene Firmenflotte oder Dienst-E-Scooter
    //             für Ihre Mitarbeiter - setzen Sie ein Zeichen und profitieren
    //             von zahlreichen Vorteilen.
    //           </p>

    //           <a
    //             href="#"
    //             className="mt-8 block rounded-md border-[#4a6d92] bg-[#4a6d92] py-3 px-4 font-bold text-white hover:bg-[#3f5872] hover:-translate-y-1 transition duration-300"
    //           >
    //             Info-Gespräch Veinbaren
    //           </a>
    //           </AnimationOnScroll>
            
           

    //           <AnimationOnScroll classnames="sm:p-10 mb-10 flex flex-col justify-between rounded-3xl bg-[url('../images/pics/events.jpeg')] bg-cover bg-center bg-no-repeat p-8" classNameInView={"opacity-100 translate-y-0 transition duration-500"} classNameNotInView={"opacity-0 translate-y-10"}>
    //           <div className="mb-4 text-center text-3xl font-bold leading-tight text-[#FFFFFF]">
    //             EVENTS
    //           </div>

    //           <p className="mt-6 text-center text-xl font-bold leading-7 text-[#FFFFFF] ">
    //             Ob Betriebsausflug, Firmenevent oder Geburtstagsfeier - erlebe
    //             ein ganz besonderes Event mit jeder Menge Spaß individuell nach
    //             Deinen Wünschen.
    //           </p>

    //           <a
    //             href="/events"
    //             className="mt-8 block rounded-md border-[#4a6d92] bg-[#4a6d92] py-3 px-4 font-bold text-white hover:bg-[#3f5872] hover:-translate-y-1 transition duration-300"
    //           >
    //             Events Entdecken
    //           </a>
    //         </AnimationOnScroll>
    //         <AnimationOnScroll classnames="sm:p-10 mb-10 flex flex-col justify-between rounded-3xl bg-[url('../images/pics/tours.jpeg')] bg-cover bg-center bg-no-repeat p-8" classNameInView={"opacity-100 translate-y-0 transition duration-500"} classNameNotInView={"opacity-0 translate-y-10"}>
    //           <div className="mb-4 text-center text-3xl font-bold leading-tight text-[#FFFFFF]">
    //             TOUREN
    //           </div>

    //           <p className="mt-6 text-center text-lg font-bold leading-7 text-[#FFFFFF]">
    //             Entdecke unser vielseitiges Tourenangebot und erlebe puren
    //             Fahrspaß mit Familie, Freunden oder Kollegen. Ob bei einem
    //             Betriebsausflug, einer Tour mit den Teamkollegen/innen aus dem
    //             Verein oder einem ganz privaten Picknick mit Eurem
    //             Lieblingsmenschen, regional wie überregional werden Euch unsere
    //             Touren nachhaltig begeistern.
    //           </p>

    //           <a
    //             href="https://store.be-scooter.de/collections/touren-1"
    //             className="mt-8 block rounded-md border-[#4a6d92] bg-[#4a6d92] py-3 px-4 font-bold text-white hover:bg-[#3f5872] hover:-translate-y-1 transition duration-300"
    //           >
    //             Tour Buchen
    //           </a>
    //         </AnimationOnScroll>
    //       </div>
    //     </div>
    //   </div>
    // </section>
 // )
//}
