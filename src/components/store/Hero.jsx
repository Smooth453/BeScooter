import Image from 'next/image'
import storepic from '../../images/store/beScooterStore.png'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'




export function Hero() {
  return (
    <section className="body-font bg-[#7e92a575] font-poppins md:h-[833px]">
      <div className="md:container mx-auto flex flex-col items-center justify-center px-5  py-7">
      <h1 className="title-font md:text-3xl leading-wide mb-5 lg:mb-8 lg:text-4xl text-4xl font-bold text-gray-900 text-center">
            JETZT VIRTUELLES SHOPPING IM BE-SCOOTER® &quot;STORE!&quot; IN
            HEUCHELHEIM.
          </h1>
        <Image
          className="lg:w-[445px] mb-10 md:w-[360px] rounded object-cover object-center "
          alt="hero"
          src={storepic}
        />
        <div className="lg:w-2/3 w-full text-center">
        <AnimationOnScroll
          classNameInView={'opacity-100 translate-y-0 transition duration-[1s]'}
          classNameNotInView={'opacity-0 translate-y-10'}
        >
          
          <p className="mb-8 leading-relaxed text-lg">
            Unser neuer Service bietet Euch die Möglichkeit, von zu Hause aus in
            aller Ruhe durch unseren &quot;SToRE!&quot; zu schlendern und einen
            großen Teil unseres Angebotes genau zu begutachten. Viel Spaß beim
            virtuellen Besuch in unserem &quot;SToRE!&quot;.
          </p>
          
          <div className="flex justify-center">
            <button className="inline-flex w-9/12 justify-center rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                <a href="https://my.matterport.com/show/?m=Bqq8LBrojFY">Virtuelle Ansicht Shopping</a>
              
            </button>
           
          </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  )
}
