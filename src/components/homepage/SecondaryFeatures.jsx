import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import news1 from '../../images/pics/news1.png'
import news2 from '../../images/pics/news2.png'
import news3 from '../../images/pics/news3.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export function SecondaryFeatures() {
  return (
    <section className="section h-[850px] bg-[#7e92a575] pt-4 ">
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction:true,
        }}
        pagination={{
          clickable: true,
        }}
        

        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-container h-full  font-poppins "
      >
        <SwiperSlide className="md:relative z-0 md:px-20 px-5 pt-5 opacity-0 translate-y-10 intersect:opacity-100 intersect:translate-y-0 transition duration-1000">
          <div className="grid lg:h-[750px] md:h-[700px] h-[750px] md:grid-cols-2 lg:grid-cols-2 grid-rows-2 md:grid-rows-none overflow-hidden rounded-3xl bg-gray-300 shadow-md hover:shadow-2xl">
            <div className="md:flex md:flex-col flex-row justify-center md:p-8 p-1 order-2">
              <h2 className="md:mb-10 mb-2 text-left md:text-5xl text-md font-bold text-black">
                CRUSSIS: Komfort und Sicherheit durch wertigste Komponenten
              </h2>
              <p className=" md:text-base text-sm text-[#333333] ">
                Ziel ist es, dass CRUSSIS-Produkte die bestmöglichen
                Fahreigenschaften bieten, weshalb sie immer präzise konstruiert
                und mit hochwertigen Komponenten ausgestattet sind und sein
                werden, um den Anforderungen des Sportreitens sowie des
                Ganztagesfahrens gerecht zu werden. Dabei muss es eine einfache,
                komfortable und sichere Fahrt bieten. Daher verwenden wir nur
                Markenkomponenten von Weltherstellern, die eine hohe Qualität
                und lange Lebensdauer garantieren.
              </p>

              <button className="w-full md:mt-5 md:p-4 self-start rounded-3xl bg-[#3A3A3A] p-2 py-4 mt-4  font-bold text-white hover:bg-opacity-80 md:text-md text-sm"><a href="https://store.be-scooter.de/products/crussis-cobra-4-1-scooterbike?_pos=11&_sid=4078cab7c&_ss=r">CRUISSIS SCooTERBIKES-JETZT ENTDECKEN!</a>
              </button>
            </div>
            <div className="relative">
              <Image
                src={news1}
                alt="Image"
                className="absolute top-0 left-0 md:h-full md:w-full h-[375px] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="md:relative z-0 md:px-20 px-5 pt-5 ">
          <div className="grid lg:h-[750px] md:h-[700px] h-[750px] md:grid-cols-2 lg:grid-cols-2 grid-rows-2 md:grid-rows-none overflow-hidden rounded-3xl bg-gray-300 shadow-md hover:shadow-2xl">
            <div className="flex flex-col md:justify-center md:p-8 order-2 p-1">
              <h2 className="md:mb-10 text-left md:text-5xl text-md font-bold mb-3 text-black">
                NEUE LIEFERUNG : Stunt-Scooter und Cityroller von Soke
              </h2>
              <p className="md:text-base text-sm text-[#333333] ">
                Rechtzeitig zum Weihnachtsgeschenke-Shoppen haben wir wieder
                viele Modelle der beliebten STUNTSCOOTER und CITYROLLER von SOKE
                vorrätig. Auch Ersatzteile von SOKE wie neue Rollen, Bremsen,
                Griffe oder GRIP-TAPES sind wieder in großer Auswahl vor Ort.
                Bei der Entwicklung der Marke SOKE war von Beginn an das Ziel,
                dass sie junge Rollerfahrer vom Erlernen der ersten Tricks bis
                zu den fortschrittlichsten Tricks begleitet. Mit SOKE werden
                Champions geboren.
              </p>
              <button className="w-full md:mt-5 self-start rounded-3xl bg-[#3A3A3A] p-4 mt-3 font-bold text-white hover:bg-opacity-80 md:text-md text-sm"><a href="https://store.be-scooter.de/collections/soke">Soke SCooTERBIKES Entdecken</a>
                
              </button>
            </div>
            <div className="relative">
              <Image
                src={news2}
                alt="Image"
                className="absolute top-0 left-0 md:h-full w-full h-[375px] object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="md:relative z-0 md:px-20 px-5 pt-5 ">
          <div className="grid lg:h-[750px] md:h-[700px] h-[750px] md:grid-cols-2 lg:grid-cols-2 grid-rows-2 md:grid-rows-none overflow-hidden rounded-3xl bg-gray-300 shadow-md hover:shadow-2xl">
            <div className="flex flex-col md:justify-center md:p-8 md:order-1 order-2 p-1">
              <h2 className="md:mb-10 mb-3 text-left md:text-5xl text-md font-bold text-black">
                JEDOO EMOJI : Laufräder und Tretroller
              </h2>
              <p className="md:text-base text-sm text-[#333333] ">
                „Schick ein ❤️, wenn´s Spaß macht! Und ein 😈, wenn du vor
                Freude quietschst!“ Wir zischen ab. Kurze Bildergeschichten
                erzählen, wie ihr auf zwei Rädern die Zeiger jeder 🕒, besiegt,
                wenn ihr wie der ⚡ davonsaust, oder wie es euer Magen findet,
                wenn ihr euch in kurzer Zeit 🥐🍔 und 🍦 reinzieht. Strahlende
                Farben und Emoticons, das ist das unverwechselbare Design dieser
                Geräte, die Kinder mit Sicherheit raus an die ☀️ locken. Wenn
                die kleinen Fahrer dann von ihrem Tag berichten, sollten es
                viele 😍🔝👍🏻🌈 geben.
              </p>
              <button className="w-full md:mt-5 self-start rounded-3xl bg-[#3A3A3A] p-4 mt-3 font-bold text-white hover:bg-opacity-80 md:text-md text-sm">
                <a href="https://store.be-scooter.de/products/yedoo-laufrad-tootoo-emoji?_pos=1&_psq=emoji%2B&_ss=e&_v=1.0">HIER GEHTS ZUM KACKHÄUFCHEN👍🏻</a>
                
              </button>
            </div>
            <div className="relative">
              <Image
                src={news3}
                alt="Image"
                className="absolute top-0 left-0 h-full w-full  object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
