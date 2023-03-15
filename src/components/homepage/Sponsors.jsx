import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'
SwiperCore.use([Autoplay, Pagination, Navigation])
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'
import Image from 'next/image'
import logo1 from '../../images/avatars/logo(1).png'
import logo2 from '../../images/avatars/logo(2).png'
import logo3 from '../../images/avatars/logo(3).png'
import logo4 from '../../images/avatars/logo(4).png'
import logo5 from '../../images/avatars/logo(5).png'
import logo6 from '../../images/avatars/logo(6).png'
import logo7 from '../../images/avatars/logo(7).png'
import logo8 from '../../images/avatars/logo(8).png'
import logo9 from '../../images/avatars/logo(9).png'
import logo10 from '../../images/avatars/logo(10).png'
import logo11 from '../../images/avatars/logo(11).png'
import logo12 from '../../images/avatars/logo(12).png'
import logo13 from '../../images/avatars/logo(13).png'
import logo14 from '../../images/avatars/logo(14).png'
import logo15 from '../../images/avatars/logo(15).png'
import logo16 from '../../images/avatars/logo(16).png'
import logo17 from '../../images/avatars/logo(17).png'
import bePartners from '../../images/avatars/bePartners.png'

const sponsorLogos = [
  '/images/avatars/logo(1).png',
  '/images/avatars/logo(2).png',
  '/images/avatars/logo(3).png',
  '/images/avatars/logo(4).png',
  '/images/avatars/logo(5).png',
  '/images/avatars/logo(6).png',
  '/images/avatars/logo(7).png',
  '/images/avatars/logo(8).png',
  '/images/avatars/logo(9).png',
  '/images/avatars/logo(10).png',
  '/images/avatars/logo(11).png',
  '/images/avatars/logo(12).png',
  '/images/avatars/logo(13).png',
  '/images/avatars/logo(14).png',
  '/images/avatars/logo(15).png',
  '/images/avatars/logo(16).png',
  '/images/avatars/logo(17).png',
]

export function Sponsors() {
  return (
    <section className="section bg-[#7e92a575]">
      <AnimationOnScroll classNameInView={"opacity-100 translate-y-0 transition duration-1000"} classNameNotInView={"opacity-0 translate-y-10"}>
      <div className="row">
        <Image className='mb-10 mx-auto' src={bePartners} alt={bePartners}></Image>
        
        <br />
        <div className="animate from-right col-12">
          <Swiper
            loop={true}
            slidesPerView={3}
            breakpoints={{
              866: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={40}
            modules={[Autoplay]}
            autoplay={{ delay: 1700,
            disableOnInteraction: false }}
          >
            <SwiperSlide className="lg:px-10 md:mt-5 mt-3 cursor-pointer  ">
              <div className="relative h-full">
                <Image
                  className="object-contain "
                  src={logo1}
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 cursor-pointer   ">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo2}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 mt-5 cursor-pointer  ">
              <div className="relative h-full">
                <Image
                  className="object-contain "
                  src={logo3}
                  sizes="100vw"
                  alt=""
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 m-5  cursor-pointer  ">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo4}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20  cursor-pointer   ">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo5}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer    mt-1">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo6}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer   ">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo7}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer    mt-3">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo8}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer    mt-4">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo9}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer    mt-4">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo10}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer    mt-5">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo11}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer    mt-4">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo12}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer    mt-2">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo13}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer    mt-2">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo14}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer   ">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo15}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer   ">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo16}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" lg:px-10 h-20 cursor-pointer    mt-4">
              <div className="relative h-full">
                <Image
                  className="object-contain"
                  src={logo17}
                  sizes="100vw"
                  alt=""
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </AnimationOnScroll>
    </section>
  )
}
