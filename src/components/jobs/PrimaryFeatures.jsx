import Image from 'next/image'
import jobs from '../../images/jobs/jobs2.jpg'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'



export function PrimaryFeautures() {
  return (
    <div className="sm:py-32 overflow-hidden bg-[#7e92a575] py-10 md:py-24 font-poppins">
      <div className="lg:px-8 mx-auto max-w-7xl px-0 ">
      <AnimationOnScroll
          classNameInView={'opacity-100 translate-y-0 transition duration-[1s]'}
          classNameNotInView={'opacity-0 translate-y-10'}
        >
        <div className="sm:gap-y-20 lg:mx-0 lg:max-w-none mx-auto grid-cols-2 gap-y-16 gap-x-8 md:grid">
          <Image
            src={jobs}
            width={700}
            height={700}
            alt="Product screenshot"
            className="lg:ml-auto  object-cover shadow-xl ring-1 ring-gray-400/10 md:hidden"
          />
          <div cclassName="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg h-[598px] flex-col justify-between font-poppins md:flex text-center">
              <div>
                <h2 className=" text-grey-500 mt-5 break-words md:text-3xl text-2xl font-bold tracking-widest">
                  ❗ WIR SUCHEN DICH ❗
                </h2>
                <p className="text-md text-grey-200 mt-6 leading-8 md:text-lg">
                  Zur weiteren Verstärkung unseres Teams suchen wir aktuell ab
                  SOFORT
                </p>
                <h2 className="sm:text-4xl text-grey-500  mt-2 text-2xl font-bold  tracking-widest">
                  Promoter und Servicekräfte (m, w, d) Verkäufer/in Aushilfe/n
                  im &quot;SToRE!&quot; Mitarbeiter/in für die Reparatur von
                  E-SCooTERN
                </h2>
              </div>
              <p className="text-md text-grey-200 leading-8 md:text-lg ">
                Wir verleihen und verkaufen elektrounterstützte Tretroller /
                E-SCooTER von den weltweit führenden Unternehmen im Bereich
                zweirädriger Elektromobilität. Weiterhin sind wir auf Touren und
                Events rund um Elektrokleinstfahrzeuge spezialisiert. Auch in
                diesen Bereichen können zukünftig die Aufgabenfelder Deiner
                Tätigkeit angesiedelt sein. Die aktuellen Stellen sind zunächst
                auf 450 € - Basis / Aushilfsbasis bzw. auf Basis „Vorübergehende
                Beschäftigung“ geplant (die Beschäftigung ist auf drei Monate
                oder auf 70 Arbeitstage im Kalenderjahr im Voraus begrenzt).
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src={jobs}
              alt="Product screenshot"
              className="lg:ml-auto rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10 md:h-[650px] md:w-[750]"
            />
          </div>
        </div>
        </AnimationOnScroll>
 
         

        <div className="mt-28 border-b border-slate-500 "></div>

        <div className="container mx-auto flex flex-col justify-center text-center">
        <AnimationOnScroll
          classNameInView={'opacity-100 translate-y-0 transition duration-[1s]'}
          classNameNotInView={'opacity-0 -translate-y-10'}
        >
          <div className="lg:max-w-lg justify-center pt-10 text-center font-poppins md:flex">
            <div className="sm:text-4xl text-grey-200 mt-2 flex flex-col break-words md:text-3xl text-lg font-bold tracking-normal">
              <h2>Du bist</h2>
              <h2>✅ pünktlich und verantwortungsbewusst</h2>
              <h2 className="md:mr-12 mr-7">✅ aufgeschlossen und kontaktfreudig</h2>
              <h2>✅ arbeitest gerne mit und für Menschen?</h2>
            </div>
          </div>

          <p className=" text-md text-grey-200 mt-14 flex flex-col text-center leading-8 md:text-lg">
            Du hast ein gepflegtes und sicheres Auftreten und die Bereitschaft
            am Wochenende zu arbeiten? Wenn Du auch noch einen gültigen
            Autoführerschein besitzt und mindestens 18 Jahre alt bist, dann
            bewirb Dich bei uns!
          </p>

          <div className="text-md text-grey-200 mt-14 flex flex-row text-center leading-8 md:text-lg">
            <p>
              Dich erwartet ein{' '}
              <span className="font-bold">
                hochmotiviertes, kollegiales und engagiertes Team
              </span>{' '}
              eines seit 2019 am Markt platzierten Unternehmens - welches das
              Ziel hat, unsere Kunden für unsere Fahrzeugen und Angeboten zu
              begeistern. Frischluft ist in der Frühlings- und Sommerzeit auch
              garantiert, da je nach Aufgabengebiet der Einsatz auch im Freien
              stattfinden kann (beispielsweise als TourGuide bei unseren
              geführten Touren).
            </p>
          </div>
          </AnimationOnScroll>
          <div className="text-md text-grey-200 mt-14 text-center leading-8 md:text-lg">
            <span className="text-xl font-bold">BEWIRB DICH BEI UNS</span>
            <p>
              eines seit 2019 am Markt platzierten Unternehmens - welches das
              Ziel hat, unsere Kunden für unsere Fahrzeugen und Angeboten zu
              begeistern. Frischluft ist in der Frühlings- und Sommerzeit auch
              garantiert, da je nach Aufgabengebiet der Einsatz auch im Freien
              stattfinden kann (beispielsweise als TourGuide bei unseren
              geführten Touren).
            </p>
          </div>

          <div className="bg-gradient-to-tr from-blue-300 via-green-300 to-purple-300 bg-contain mt-10 grid space-between rounded-xl  py-6 shadow-md "> 
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font text-md font-semibold tracking-widest text-gray-900">
                ADDRESSE
              </h2>
              
              <p className="mt-1">Rodheimer Str. 126, 35452 Heuchelheim</p>
            </div>
            <div className="lg:w-1/2 lg:mt-0 mt-4 px-6">
              <h2 className="title-font text-md font-semibold tracking-widest text-gray-900">
              Bewerbungen per 📧 an
              </h2>
              <a className="leading-relaxed">bjoernseibert@be-scooter.de</a>
              <h2 className="title-font mt-4 text-md font-semibold tracking-widest text-gray-900">
                TELEFON
              </h2>
              <p className="leading-relaxed">☎   0641 - 93923404</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
