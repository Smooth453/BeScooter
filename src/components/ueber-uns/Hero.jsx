import Image from 'next/image'
import team1 from '../../images/team/team (1).jpg'
import team2 from '../../images/team/team (2).jpg'
import team3 from '../../images/team/team (3).jpg'
import team4 from '../../images/team/team (4).jpg'
import team5 from '../../images/team/team (5).jpg'
import team6 from '../../images/team/team (6).jpg'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export function Hero() {
  return (
    <>
      <section className="section h-full bg-[#7e92a575] pt-4 ">
        <h2 className="mx-auto mt-2  flex max-w-5xl items-center justify-center break-words text-center md:text-4xl text-3xl font-bold tracking-widest text-[#333333] mb-10">
          WER BRAUCHT SCHON DAS A-TEAM, WENN ER DAS &quot;BE&quot; SCOOTER-TEAM
          HAT !
        </h2>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper-container lg:h-full  font-poppins h-[400px] md:h-[500px]"
        >
          <SwiperSlide>
            <Image
              className="lg:h-[680px] md:h-[450px] h-[350px] w-full object-scale-down "
              src={team2}
              alt="image slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="lg:h-[680px] md:h-[450px] h-[350px] w-full object-contain"
              src={team1}
              alt="image slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="lg:h-[680px] md:h-[450px] h-[350px] w-full object-scale-down"
              src={team3}
              alt="image slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="lg:h-[680px]  md:h-[450px] h-[350px] w-full object-contain"
              src={team4}
              alt="image slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="lg:h-[735px] md:h-[450px] h-[350px] w-full object-scale-down"
              src={team5}
              alt="image slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              className="lg:h-[735px] md:h-[450px] h-[350px] w-full object-scale-down"
              src={team6}
              alt="image slide 1"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}
