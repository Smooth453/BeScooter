import React, { useState } from 'react'
import Image from 'next/image'
import ninebotMax from '../../images/leihen/ninebotMax.png'
import ScotexH10SXT from '../../images/leihen/ScotextH10SXT.jpg'
import verleihlogo from '../../images/leihen/verleihlogo.png'
import yedoo1616 from '../../images/leihen/yedoo1616.jpg'
import yedoo2016 from '../../images/leihen/yedoo2016.jpg'
import yedoo2020 from '../../images/leihen/yedoo2020.jpg'
import yedoo2620 from '../../images/leihen/yedoo2620.jpg'
import { Transition } from '@headlessui/react'
const images = [
  {
    id: 1,
    title: 'NINEBOT MAX G30D + G30D II',
    src: ninebotMax,
    list: [
      '• MAXIMALE GESCHWINDIGKEIT BIS ZU 20 KM/H',
      '• REICHWEITE BIS ZU CA. 65 KM DANK LANGLEIBIGEM AKKU',
      '• GEWICHT : 19,9 KG',
      '• MOTORLEISTUNG: 350W',
      '• EINGEBAUTER ADAPTER FÜR SCHNELLES UND EINFACHS AUFLADEN',
      '• 10-ZOLL SCHLAUCHLOSE LUFTREIFEN',
      '',
    ],
  },
  {
    id: 2,
    title: 'SCOTEX H10  POWERED BY SXT',
    src: ScotexH10SXT,
    list: [
      '• MAXIMALE GESCHWINDIGKEIT BIS ZU 20 KM/H',
      '• REICHWEITE BIS ZU CA. 30KM',
      '• GEWICHT : 14,8 KG',
      '• MOTORLEISTUNG : BIS ZU 540W',
      '• HOCHKONTRAST LCD DISPLAY ',
      '• 8,5" ZOLL LUFTREIFEN',
      '• WARTUNGSFREIER TROMMELBREMSE VORNE + ELKTR, BREMSE AN ANTRIEBSACHSE HINTEN',
    ],
  },
  {
    id: 3,
    title: 'YEDOO S1616',
    src: yedoo1616,
    list: [
      '• TRAGFÄHIGKEIT : 150 KG',
      '• GEWICHT 8,4 KG',
      '• 16" / 16" ZOLL LUFTREIFEN',
    ],
  },
  {
    id: 4,
    title: 'YEDOO S2016',
    src: yedoo2016,
    list: [
      '• TRAGFÄHIGKEIT : 150 KG',
      '• GEWICHT 9 KG',
      '• 20" / 16" ZOLL LUFTREIFEN',
    ],
  },
  {
    id: 5,
    title: 'YEDOO S2020',
    src: yedoo2020,
    list: [
      '• TRAGFÄHIGKEIT : 150 KG',
      '• GEWICHT 9,3 KG',
      '• 20" / 20" ZOLL LUFTREIFEN',
    ],
  },
  {
    id: 6,
    title: 'YEDOO S2620',
    src: yedoo2620,
    list: [
      '• TRAGFÄHIGKEIT : 150 KG',
      '• GEWICHT 9,2 KG',
      '• 26" / 20" ZOLL LUFTREIFEN',
    ],
  },
]

export function PrimaryFeatures() {
  const [selectedImage, setSelectedImage] = useState(images[0])

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="relative mt-0 flex w-full items-center  justify-center bg-gradient-to-b from-blue-400 to-green-500 brightness-[0.9] md:h-[170px] lg:h-[225px] h-[120px]">
        <Image
          className="md:w-[410px] w-[290px]"
          src={verleihlogo}
          alt="verleihlogo"
        />
      </div>
      
      <div className="bg-[#6b7f9175] flex md:h-[632px] lg:h-[900px]">
      
        <div className="hidden p-4 md:block w-[600px] overflow-x-hidden overflow-y-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative mb-4 cursor-pointer overflow-hidden rounded p-2 transition duration-500 ease-in-out  hover:scale-110"
              onClick={() => handleImageClick(image)}
            >
              <div className="relative mt-0 flex h-[112px] w-full items-center justify-center rounded-[100px] bg-gradient-to-b from-blue-400 to-green-500 brightness-[0.9]">
                <Image
                  className="h-[105px] w-[580px] rounded-[100px] object-cover brightness-[0.6]"
                  src={image.src}
                  alt={image.title}
                />
              </div>
              <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white">
                {image.title}
              </h3>
              {image.id == 1 && (
                <h3 className="absolute inset-0 top-14 flex items-center justify-center text-xl font-semibold text-white">
                  POWERED BY SEGWAY
                </h3>
              )}
            </div>
          ))}
         
        </div>
      
        
        <div className="w-full p-4 md:w-2/3 ">
          <Transition
            key={selectedImage.id}
            show={true}
            appear={true}
            enter="transition-all ease-in duration-500"
            enterFrom="opacity-80 transform scale-90 "
            enterTo="opacity-100 transform scale-100"
            leave="transition-all ease-out duration-300"
            leaveFrom="opacity-100 transform scale-100"
            leaveTo="opacity-80 transform scale-90"
          >
            {selectedImage &&
              (selectedImage.id === 1 || selectedImage.id === 2) && (
                <div className="hidden md:relative md:block">
                  <Image
                    className="h-[500px] w-full rounded-[100px] object-cover brightness-50 md:h-[590px] lg:h-[845px]"
                    src={selectedImage.src}
                    alt={selectedImage.title}
                  />

                  <h2 className="absolute top-16 left-[22%] mb-4 font-bold text-white md:text-3xl lg:text-5xl">
                    {selectedImage.title}
                  </h2>
                  {selectedImage.list && (
                    <ul className="absolute top-[30%] left-[15%] mt-4 space-y-2 font-semibold text-white md:text-xl lg:text-3xl">
                      {selectedImage.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

            {selectedImage &&
              (selectedImage.id === 3 ||
                selectedImage.id === 4 ||
                selectedImage.id === 5 ||
                selectedImage.id === 6) && (
                <div className="relative hidden md:block">
                  <Image
                    className="w-full rounded-[100px] object-cover brightness-50 md:h-[590px] lg:h-[845px]"
                    src={selectedImage.src}
                    alt={selectedImage.title}
                  />
                  <h2 className="absolute top-20 left-[35%] mb-4 font-bold text-white md:text-3xl lg:text-5xl">
                    {selectedImage.title}
                  </h2>
                  {selectedImage.list && (
                    <ul className="absolute top-[40%] left-[30%] mt-4 space-y-2 font-semibold  text-white md:text-2xl lg:text-3xl">
                      {selectedImage.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            <div className="flex flex-col items-center space-y-4 md:hidden">
              {images.map((image) => (
                <div key={image.id} className="relative w-full">
                  <Image
                    className="h-[500px] w-full rounded-[50px] object-cover brightness-50"
                    src={image.src}
                    alt={image.title}
                  />
                  {image.id === 1 || image.id === 2 ? (
                    <>
                      <h2 className="absolute top-6 left-[14%] mb-4 text-2xl font-bold text-white">
                        {image.title}
                      </h2>
                      {image.list && (
                        <ul className="absolute top-[25%] left-[8%] mt-4 space-y-2 text-md font-semibold text-white">
                          {image.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <>
                      <h2 className="absolute top-20 left-[25%] mb-4 text-2xl font-bold text-white">
                        {image.title}
                      </h2>
                      {image.list && (
                        <ul className="absolute top-[40%] left-[20%] mt-4 space-y-2 text-lg font-semibold text-white">
                          {image.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </Transition>
        </div>
      </div>
      
    </>
  )
}
