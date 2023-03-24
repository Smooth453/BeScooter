import Image from 'next/image'
import leihenbike from '../../images/leihen/leihenbike2.jpeg'


export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-0 px-3 text-center font-poppins text-white md:h-screen ">
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
        <Image
          className="h-full md:mb-10 w-full  md:object-cover object-cover object-center brightness-50 "
          alt="hero"
          src={leihenbike}
        />
      </div>
      <div className="video-content md:mt-15 space-y-2 md:w-[800px] my-3">
        <h1 className="break-word lg:text-2xl font-bold">TU ES EINFACH - ER WIRD AUCH DICH BEGEISTERN! </h1>
        <h3 className="text-lg font-semi-bold lg:text-3xl tracking-wide">
        <br />
          Teste jetzt einen PREMIUM E-SCooTER aus unsere BE-SCooTER verleihflotte. <br />
          <br />
          Faire Bedingungen und einen E-SCooTER der hält, was er erspricht. Ganz egal ob für den nächsten Urlaub, für einen Test in deinem persönlichn Alltag als Alternative zuum Auto oder einfach nur zum cruisen durch unsere großartige Heimat - auch dich wird der elektrounterstütze Tretroller begeistern.
        </h3>
        
      </div>
      <button className="video-content inline-flex justify-center rounded py-4 px-6 text-sm hover:opacity-90 focus:outline-none md:w-1/3 bg-black md:py-4  md:text-lg text-white mt-5 mb-5 md:mt-10 border-2 border-white transition duration-500 ease-in-out  hover:scale-110">
          <a href="https://store.be-scooter.de/collections/frontpage/products/egret-pro-jetzt-inkl-versicherung-bis-zum-28-02-2023-von-be-scooter%C2%AE%EF%B8%8F">
            JETZT LEIHEN
          </a>
        </button>
    </section>
    


  )
}
