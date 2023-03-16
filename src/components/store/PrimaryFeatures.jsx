
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'
import Image from 'next/image'
import ErgetScooter from '../../images/store/ErgetScooter.jpg'


export function PrimaryFeatures() {
  return (
    <section className="relative flex md:h-screen h-[280px]  flex-col items-center justify-center py-0 px-3 text-center text-white">
      <div className="video-docker absolute top-0 left-0 h-full w-full overflow-hidden">
        <iframe
          className="hidden md:block absolute min-h-full min-w-full scale-125 object-cover"
          src="https://www.youtube-nocookie.com/embed/voTsG7PR_LM?rel=0&showinfo=0&modestbranding=1&disablekb=1&enablejsapi=1&autoplay=1&controls=0&mute=1&loop=1&playsinline=1&playlist=voTsG7PR_LM"
          allowfullscreen
          repeat
          width="100%"
          height="100%"
        ></iframe>
        
        <Image
          className="md:hidden first-letter:lg:w-2/6 md:mb-10 w-full rounded object-cover object-center md:opacity-70 md:h-full md:w-full"
          alt="hero"
          src={ErgetScooter}
        />
      </div>
     
          <div className="video-content space-y-11">
        <h1 className="md:text-6xl text-sm font-light">
          EGRET &quot;PRO&quot; DIESE POWER HAST DU NOCH NICHT ERLEBT
        </h1>
        <h3 className="md:text-3xl text-xs font-light">
          Die Motorleistung des Egret Pro setzt neue Maßstäbe: 27 Nm sorgen für
          eine noch kraftvollere Beschleunigung und eine beeindruckende
          Performance auch bei Steigung oder höherer Zuladung. Teste dieses
          Kraftpaket bei uns im &quot;SToRE!&quot; in Heuchelheim. Natürlich ist der PRO
          bei uns als Fachhändler von EGRET auch noch verfügbar.
        </h3>
        <button className="inline-flex md:w-1/3 justify-center rounded border-0 md:bg-black bg-slate-200 md:py-2 py-1 px-6 md:text-lg text-sm md:text-white text-black  hover:opacity-80 focus:outline-none ring-1 ring-white">
                <a href="https://store.be-scooter.de/collections/frontpage/products/egret-pro-jetzt-inkl-versicherung-bis-zum-28-02-2023-von-be-scooter%C2%AE%EF%B8%8F">SICHERE DIR DEINEN PRO</a>
              
            </button>
            </div>

    </section>
  )
}
