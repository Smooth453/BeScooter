import { Container } from '@/components/utilities/Container'
import { useState,useEffect } from 'react'
import Image from 'next/image'
import thumbnail from '../../images/pics/thumbnail.jpg'
import playLogo from '../../images/pics/playbutton.png'
import Observer from 'tailwindcss-intersect'
import { useRouter } from "next/navigation";
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'



export function PrimaryFeatures() {
  const router = useRouter();

  const [showVideo, setShowVideo] = useState(false)

  const handleVideoClick = () => {
    setShowVideo(true)
  }

  
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="sm:py-32 relative overflow-hidden bg-gradient-to-b from-blue-400 to-green-500 pt-20 pb-16 "
    >

  
     
     <AnimationOnScroll classNameInView={"opacity-100 translate-y-0 transition duration-[1s]"} classNameNotInView={"opacity-0 translate-y-10"}> 
     <Container className="relative">
        <div className="xl:max-w-none max-w-6xl md:mx-auto md:text-center">
          <h2 className="sm:text-4xl font-display text-3xl tracking-wide text-white md:text-5xl ">
            BE-SCOOTER®
          </h2>
          <h2 className="sm:text-4xl font-display text-3xl tracking-normal text-white md:mt-3 md:text-5xl ">
            E-SCOOTER KAUFT MAN NICHT IRGENDWO!
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100 ">
            Warum? Das zeigen wir Euch in unserem neuen Film. Weiterhin gibt es
            einen Überblick über unser Angebot und die Leistungen und wir
            begleiten einen unserer Kunden auf dem Weg zur Arbeit mit seinem
            E-SCooTER. Viel Spaß und Film ab ...
          </p>
        </div>
      </Container>
     </AnimationOnScroll>
     
     <AnimationOnScroll classNameInView={"opacity-100 translate-y-0 transition duration-[2s] delay1-150"} classNameNotInView={"opacity-0 translate-y-10"}> 
      <div className="mt-10 flex items-center justify-center opacity-0 translate-y-10 intersect:opacity-100 intersect:translate-y-0 transition duration-[2s] delay-200">
        {!showVideo && (
          <div className="relative h-80 w-80 md:h-[500px] md:w-[900px]">
            <Image
              className="h-full w-full rounded-3xl object-cover hover:shadow-2xl"
              src={thumbnail}
              alt="Video thumbnail"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <Image
                src={playLogo}
                height={100}
                width={100}
                alt="Play button"
                className=" cursor-pointer bg-transparent"
                onClick={handleVideoClick}
              /> 
            </div>
          </div>
        )}


        {showVideo && (
          <div className="relative h-80 w-80 md:h-[500px] md:w-[900px] ">
            <iframe
              src="https://www.youtube.com/embed/I63_LUhrq2c"
              allowFullScreen
              className="h-80 w-80 md:h-[500px] md:w-[900px] rounded-3xl hover:shadow-2xl"
            ></iframe>
          </div>
        )}
      </div>
      </AnimationOnScroll>

      <div className="xl:max-w-none max-w-6xl md:mx-auto md:text-center text-lg font-encode ">
      <AnimationOnScroll classNameInView={"opacity-100 translate-y-0 transition duration-[1s]"} classNameNotInView={"opacity-0 translate-y-10"}> 
        <p className="text-bold m-6 text-lg tracking-tight text-[#FFFFFF] pt-5 opacity-0 translate-y-10 intersect:opacity-100 intersect:translate-y-0 transition duration-1000">
          Unser &quot;SToRE!&quot; in Heuchelheim wird zu 100 % mit ÖKO-STROM aus Hessen
          betrieben und wir verwenden bei der Reinigung unserer Fahrzeuge
          ausschließlich biologisch abbaubare Reinigungsmittel in zu 100 %
          recycelten PET-Behältern. Diese Maßnahmen unterstreichen unser
          Verständnis für NACHHALTIGKEIT und UMWELTSCHUTZ. Wir sind
          leidenschaftlich darin, namhafte Marken zu führen und gleichzeitig
          innovative Lösungen zu entdecken, die noch keinen so bekannten Namen
          haben. Genau mit dieser Mischung möchten wir die URBANE MOBILITÄT in
          Zukunft mitgestalten und verändern. Wir bieten und stehen für:
        </p>
        </AnimationOnScroll>
        <div className="md:grid md:grid-cols-3 gap-1 rounded-3xl text-left ">
          <AnimationOnScroll classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 " classNameInView={"opacity-100 translate-y-0 transition duration-[1s] delay-100"} classNameNotInView={"opacity-0 md:-translate-y-full"} >
          
          • Umweltfreundliche, zuverlässige und wiederaufladbare
            Mobilitätslösungen
       
          </AnimationOnScroll>
          <AnimationOnScroll classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 " classNameInView={"opacity-100 translate-y-0 transition duration-[1s] delay-150"} classNameNotInView={"opacity-0 md:-translate-x-full"}>
        
          • Zwei- und Dreiräder die für SPASS an der Bewegung und Beweglichkeit
            des ganzen Körpers stehen
         
          </AnimationOnScroll>
          <AnimationOnScroll classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 " classNameInView={"opacity-100 translate-x-0 transition duration-[1s] delay-200"} classNameNotInView={"opacity-0 md:-translate-x-full"}>
         
          • Unser Ziel bei BE-SCooTER® ist es, dass sich unsere Kunden wohl fühlen, durch eine kundenorientierte Arbeitsweise und einem Mehr an Service.
      
          </AnimationOnScroll>
          <AnimationOnScroll classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 " classNameInView={"opacity-100 translate-x-0 transition duration-[1s] delay-100"} classNameNotInView={"opacity-0 md:-translate-y-full"}>
          
          • Praktisches im Alltag erprobtes Zubehör für E-SCooTER,
            Fahrräder/eBikes und vielen anderen Fahrzeugen.
        
          </AnimationOnScroll>
          <AnimationOnScroll classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 " classNameInView={"opacity-100 translate-x-0 transition duration-[1s] delay-150"} classNameNotInView={"opacity-0 md:-translate-x-full"}>
         
          •  Ersatzteilservice für all unsere geführten Marken
        
          </AnimationOnScroll>
          <AnimationOnScroll classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 " classNameInView={"opacity-100 translate-x-0 transition duration-[1s] delay-200"} classNameNotInView={"opacity-0 md:-translate-x-full"}>
      
          • Wir bieten nachhaltige Produkte, Dienstleistungen und Events, die unbeschwerte und nachhaltig begeisternde Momente bieten. 
       
          </AnimationOnScroll>
        </div>
      </div>
      
    </section>
  )
}
