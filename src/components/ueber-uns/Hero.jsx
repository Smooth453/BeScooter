import Image from 'next/image'
import team1 from '../../images/team/team (1).jpg'
import team2 from '../../images/team/team (2).jpg'
import team3 from '../../images/team/team (3).jpg'
import team4 from '../../images/team/team (4).jpg'
import team5 from '../../images/team/team (5).jpg'
import team6 from '../../images/team/team (6).jpg' 

export function Hero() {
  return (
    <div className="bg-[#7e92a575] lg:py-16 lg:px-20  mx-auto px-4 py-9 md:py-12">
      <div className="lg:flex-row flex flex-row justify-between gap-8">
        <div className="lg:w-5/12 flex w-full flex-col justify-center">
          <h1 className="lg:text-4xl pb-4 text-3xl font-bold leading-9 text-gray-800">
            About Us
          </h1>
          <p className="text-base font-normal leading-6 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable
          </p>
        </div>
        <div className="lg:w-7/12 lg:order-first order-last">
          <Image
            className="w-full rounded-lg object-cover object-center shadow-lg"
            src={team4}
            alt="A group of People"
          />
        </div>
      </div>
      <div className="lg:flex-row flex flex-row justify-between gap-8 pt-12">
        <div className="lg:w-5/12 flex w-full flex-col justify-center">
          <h1 className="lg:text-4xl pb-4 text-3xl font-bold leading-9 text-gray-800">
            Our Story
          </h1>
          <p className="text-base font-normal leading-6 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readabl
          </p>
        </div>
        <div className="lg:w-7/12 lg:pt-8 w-[4900px]">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex flex-col items-center justify-center p-4">
              <Image
                className="hidden h-full w-[300px] rounded-lg object-cover object-center shadow-lg md:block"
                src={team1}
                alt="Alexa featured Img"
              />
              <p className="mt-4 text-xl font-medium leading-5 text-gray-800">
                Alexa
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Image
              width={300}
              height={300}
                className="hidden h-full w-full rounded-lg object-cover object-center shadow-lg md:block"
                src={team1}
                alt="Alexa featured Img"
              />
              <p className="mt-4 text-xl font-medium leading-5 text-gray-800">
                Alexa
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Image
              width={300}
              height={300}
                className="hidden h-full w-full rounded-lg object-cover object-center shadow-lg md:block"
                src={team1}
                alt="Alexa featured Img"
              />
              <p className="mt-4 text-xl font-medium leading-5 text-gray-800">
                Alexa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
