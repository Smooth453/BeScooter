import Image from 'next/image'
import leihenbike from '../../images/leihen/leihenbike2.jpeg'

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-0 px-3 text-center font-poppins text-white md:h-[800px] ">
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
        <Image
          className="h-[310px] lg:w-2/6 md:mb-10 w-full rounded md:object-cover object-cover object-center brightness-50 md:h-full md:w-full"
          alt="hero"
          src={leihenbike}
        />
      </div>
      <div className="video-content md:mt-15 space-y-2 md:w-[800px] my-3">
        <h1 className="break-word text-2xl font-bold">Be-Leihen</h1>
        <h3 className="text-lg font-normal md:text-3xl tracking-wide">
          Ob für einen Tag, ein Wochenende oder den Urlaub an der See sowie dem
          Campingplatz - erfahre mit einem unserer Leih-E-Scooter, zahlreiche
          Vorteile, spare bares Geld und habe Spaß.
        </h3>
        
      </div>
      <button className="video-content inline-flex justify-center rounded py-1 px-6 text-sm hover:opacity-90 focus:outline-none md:w-1/3 bg-black md:py-2  md:text-lg text-white mt-5 mb-5 md:mt-10">
          <a href="https://store.be-scooter.de/collections/frontpage/products/egret-pro-jetzt-inkl-versicherung-bis-zum-28-02-2023-von-be-scooter%C2%AE%EF%B8%8F">
            JETZT LEIHEN
          </a>
        </button>
    </section>
  )
}
