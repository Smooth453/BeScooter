import Image from 'next/image'
import Erget from '../../images/pics/Erget.png'
import { useState } from 'react'
import thumbnail from '../../images/pics/thumbnail2.jpg'
import playLogo from '../../images/pics/playbutton.png'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function Knausgaard() {
  const [showVideo, setShowVideo] = useState(false)

  const handleVideoClick = () => {
    setShowVideo(true)
  }
  return (
    <div className="overflow-hidden bg-[#7e92a575] py-10 md:py-24">
    <div className="lg:px-8 mx-auto max-w-7xl px-6">
      <AnimationOnScroll classNameInView={"opacity-100 translate-y-0 transition duration-1000"} classNameNotInView={"opacity-0 translate-y-10"}>
        <div className="sm:gap-y-20 lg:mx-0 lg:max-w-none mx-auto grid-cols-2 gap-y-16 gap-x-8 md:grid">
        <Image
            src={Erget}
            alt="Product screenshot"
            className="md:hidden lg:ml-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 md:h-[600px] md:w-[700]"
          />
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg h-[598px] flex-col justify-between font-poppins flex">
              <div>
                <h2 className="sm:text-4xl mt-2 break-words text-3xl font-bold tracking-widest	 text-[#333333]">
                  AUTHORIZED SERVICE <br /> FÜR EGRET
                </h2>
              </div>
              <p className="text-md mt-6 leading-8 text-[#333333] md:text-lg">
                Nach der erfolgreichen Teilnahme an der Produkt-, Service- und
                Reparaturschulung in Hamburg gibt es bei uns in Heuchelheim nun
                auch den Service für die E-SCooTER von unserem langjährigen
                Partner EGRET. Auch Kunden die Ihren &quot;EGRET&quot; nicht bei
                uns erworben haben, können sich bei Problemen oder Fragen an uns
                wenden. Wir freuen uns sehr über die noch engere Zusammenarbeit
                mit dem Unternehmen aus Hamburg, der für höchste
                Qualitätsansprüche und Fahrzeuge der Spitzenklasse steht.
              </p>
            <button className="mt-3 rounded-xl border-b-4 border-[#35495e] bg-[#35495e] py-3 px-4 font-bold text-white hover:opacity-90 animate hover:-translate-y-1">
                <a href="https://store.be-scooter.de/">ERGET E-SCooTER IM &quot;SToRE ONLINE!&quot;</a>
                
              </button>
            </div>
          </div>
          <div className='hidden md:block'> 
          <Image
            src={Erget}
            alt="Product screenshot"
            className="lg:ml-auto rounded-xl shadow-xl ring-1 ring-gray-400/10 md:h-[600px] md:w-[700]"
          />
          </div>

          </div>
        </AnimationOnScroll>
        <AnimationOnScroll classNameInView={"opacity-100 translate-y-0 transition duration-1000"} classNameNotInView={"opacity-0 translate-y-10"}>
          <div className="sm:gap-y-20 lg:mx-0 lg:max-w-none mx-auto mt-28 grid-cols-2 gap-y-16 gap-x-8 md:grid">
            <div className="mt-10 flex items-center justify-center">
            {!showVideo && (
              <div className="relative h-full w-full md:h-[565px] md:w-[900px]">
                <Image
                  className="md:h-[550px] h-[195px] w-full rounded-3xl object-cover hover:shadow-2xl"
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
              <div className="relative h-[205px] w-full md:h-[565px] md:w-[900px]">
                <iframe
                  src="https://www.youtube.com/embed/MWbKcs8W_qo"
                  allowFullScreen
                  className="md:h-[550px] h-[195px] w-full rounded-3xl hover:shadow-2xl  md:w-[600px]"
                ></iframe>
              </div>
            )}
          </div>
          <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg flex-col justify-between font-poppins flex">
              <div>
                <h2 className="sm:text-4xl mt-2 break-words text-3xl font-bold tracking-widest	 text-[#333333]">
                  TRITTBRETT:
                </h2>
                <h2 className="sm:text-4xl mt-2  text-3xl font-bold tracking-widest  text-[#333333]">
                  PAUL - DAS KRAFTPAKET
                </h2>
              </div>
              <p className="text-md mt-6 leading-8 ttext-[#333333] md:text-lg">
                Der Paul von Trittbrett mit Leistungsstarkem 500W / 48V Motor
                von Bosch, riesige Reichweite von 75 km, mehr Sicherheit durch
                teilhydraulische Bremsen und bauartgenehmigte Blinker, breite
                11-Zoll Tubeless Reifen und einer eigens entwickelten
                Trittbrett-App mit innovativem Display! Wir freuen uns auf Euren
                Besuch zur Probefahrt im &quot;SToRE!&quot; in Heuchelheim.
              </p>
              <h2 className="sm:text-4xl mt-2  text-3xl font-bold tracking-tight  text-[#333333]">
                DEMNÄCHST &quot;PAUL 2023&quot; ... DA ROLLT WAS AUF UNS ZU!
              </h2>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
      </div>
      
    </div>
  )
}
