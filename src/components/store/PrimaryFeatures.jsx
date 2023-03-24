import AnimationOnScroll from '../animationOnScroll/animationOnScroll'
import Image from 'next/image'
import ErgetScooter from '../../images/store/ErgetScooter.jpg'

export function PrimaryFeatures() {
  return (
    <section className="relative flex flex-col  items-center justify-center py-0 px-3 text-center text-white md:h-screen">
      <div className="video-docker absolute top-0 left-0 h-full w-full overflow-hidden">
        <iframe
          className="absolute hidden min-h-full min-w-full scale-125 object-cover md:block"
          src="https://www.youtube-nocookie.com/embed/voTsG7PR_LM?rel=0&showinfo=0&modestbranding=1&disablekb=1&enablejsapi=1&autoplay=1&controls=0&mute=1&loop=1&playsinline=1&playlist=voTsG7PR_LM"
          allowfullscreen
          repeat
          width="100%"
          height="100%"
        ></iframe>

        <Image
          className="h-full w-full rounded object-cover object-center md:hidden brightness-50"
          alt="hero"
          src={ErgetScooter}
        />
      </div>

      <div className="video-content space-y-11">
        <h1 className="text-sm font-light md:text-6xl">
          EGRET &quot;PRO&quot; DIESE POWER HAST DU NOCH NICHT ERLEBT
        </h1>
        <h3 className="text-xs font-light md:text-3xl">
          Die Motorleistung des Egret Pro setzt neue Maßstäbe: 27 Nm sorgen für
          eine noch kraftvollere Beschleunigung und eine beeindruckende
          Performance auch bei Steigung oder höherer Zuladung. Teste dieses
          Kraftpaket bei uns im &quot;SToRE!&quot; in Heuchelheim. Natürlich ist
          der PRO bei uns als Fachhändler von EGRET auch noch verfügbar.
        </h3>
        <button className="inline-flex justify-center rounded border-0 bg-slate-200 py-1 px-6 text-sm text-black ring-1 ring-white hover:opacity-80 focus:outline-none md:w-1/3  md:bg-black md:py-2 md:text-lg md:text-white">
          <a href="https://store.be-scooter.de/collections/frontpage/products/egret-pro-jetzt-inkl-versicherung-bis-zum-28-02-2023-von-be-scooter%C2%AE%EF%B8%8F">
            SICHERE DIR DEINEN PRO
          </a>
        </button>
      </div>
    </section>
  )
}
