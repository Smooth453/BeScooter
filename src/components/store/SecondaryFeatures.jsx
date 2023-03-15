import Image from 'next/image'
import segway from '../../images/store/segway.jpg'

export function SecondaryFeatures() {
  return (
    <section className=" bg-[#8dd5e2] relative flex md:h-screen flex-col items-center justify-center py-0 md:px-3 text-center text-gray-900 font-poppins">
      <div className=" md:absolute top-0 left-0 h-full w-full overflow-hidden">
        <Image
          className="lg:w-2/6 md:mb-10 w-full rounded object-cover object-center md:opacity-70 md:h-full md:w-full"
          alt="hero"
          src={segway}
        />
      </div>
      <div className="video-content space-y-9 md:w-[900px] md:mt-20 mt-3 mb-4">
        <h1 className="md:text-6xl text-lg font-bold break-word">
          DIE NEUE F-SERIE VON NINEBOT POWERED BY SEGWAY IST DA!
        </h1>
        <h3 className="md:text-2xl font-light md:font-semibold">
          Als führender Anbieter zweirädriger Elektromobilität war es immer die
          Vision von Segway, umweltfreundliche Alternativfahrzeuge für kurze
          Strecken zu produzieren. Heute nutzen mehr und mehr Menschen Segway
          als umweltfreundliche Alternative für viele Kurzstrecken, die sonst
          mit dem PKW zurückgelegt werden. Davon abgesehen werden beim Fahren
          keine Emissionen freigesetzt, dadurch kann das Fahrzeug auch in
          Gebäuden verwendet werden. Die 3 Neuen Modelle sind natürlich im
          &quot;SToRE!&quot; erhältlich
        </h3>
        <button className="inline-flex md:w-2/3 justify-center rounded border-0 bg-black py-2 px-6 text-lg text-white hover:opacity-80 ring-1 ring-white focus:outline-none ">
          <a href="https://store.be-scooter.de/collections/frontpage/products/ninebot-kickscooter-f40d-by-segway-mit-vorbesteller-bonus">
            ENTDECKE DIE NEUE F-SERIE
          </a>
        </button>
      </div>
    </section>
  )
}
