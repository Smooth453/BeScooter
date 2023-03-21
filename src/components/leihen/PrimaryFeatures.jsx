import React, { useState } from 'react'
import Image from 'next/image'
import ninebotMax from '../../images/leihen/ninebotMax.png'
import ScotexH10SXT from '../../images/leihen/ScotextH10SXT.jpg'
import sxtlogo from '../../images/avatars/logo(16).png'
import segwaylogo from '../../images/leihen/segwaylogo.png'
import verleihlogo from '../../images/leihen/verleihlogo.png'

export function PrimaryFeatures() {
  const [isHovered1, setIsHovered1] = useState('')
  const [isHovered2, setIsHovered2] = useState('')

  const onMouseEnter1 = () => {
    setIsHovered1(true)
  }

  const onMouseEnter2 = () => {
    setIsHovered2(true)
  }

  const onMouseLeave = () => {
    setIsHovered1(false)
    setIsHovered2(false)
  }

  return (
    <>
      <div className="relative mt-0 flex h-[225px] w-full items-center justify-center bg-gradient-to-b from-blue-400 to-green-500 brightness-[0.88]">
        <Image  src={verleihlogo} alt="verleihlogo" width={410} height={500} />
      </div>
      <div className="relative h-[800px] w-full">
        <div
          className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-1000 ease-in-out  ${
            isHovered1 ? 'z-10 w-full' : ''
          }`}
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave}
        >
          <div className="relative h-full w-full object-fill brightness-50">
            <Image
              src={ninebotMax}
              alt="Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* logo */}
          <div className="z-2 absolute top-20 left-4 rounded-xl border-4 border-gray-400 brightness-100 md:top-[20px] md:left-6">
            <Image src={segwaylogo} alt="Logo" width={180} height={180} />
          </div>

          {/* second card */}
          <div
            className={`z-1 absolute inset-0 flex flex-col items-center justify-center px-4 text-center  ${
              isHovered1 ? 'hidden' : ''
            }`}
          >
            <h2 className=" mt-0 mb-4 text-2xl font-semibold text-white lg:text-5xl">
              NINEBOY MAX G30D + G30D II
            </h2>
          </div>
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 text-center transition-all duration-1000 ease-in-out ${
              isHovered1 ? '' : 'hidden'
            }`}
          >
            {/* title and powered by Segway */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white lg:text-5xl">
              NINEBOY MAX G30D + G30D II
            </h2>
            <h2 className="mb-20 text-2xl font-semibold text-white lg:text-4xl">
              Powered by Segway
            </h2>

            {/* bullet points */}
            <div className="text-left">
              <ul className="mb-10 list-disc pl-6 text-lg font-semibold text-white md:text-sm lg:text-2xl ">
                <li className="leading-10">
                  MAXIMALE GESCHWINDIGKEIT BIS ZU 20 KM/H
                </li>
                <li className="leading-10">
                  REICHWEITE BIS ZU CA. 65 KM DANK LANGLEIBIGEM AKKU
                </li>
                <li className="leading-10">GEWICHT : 19,9 KG</li>
                <li className="leading-10">MOTORLEISTUNG: 350W</li>
                <li className="leading-10">
                  EINGEBAUTER ADAPTER FÜR SCHNELLES UND EINFACHS AUFLADEN
                </li>
                <li className="leading-10">10-ZOLL SCHLAUCHLOSE LUFTREIFEN</li>
                <li className="leading-10">
                  20% STEIGUNGSWINKEL FÜR BEQUEMES FAHREN
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* second card */}
        {/* <div className="rotate-30 absolute top-0 left-1/2 h-full w-0 -translate-x-1/2 transform border-4 border-[#000000]"></div> */}

        <div
          className={`absolute top-0 right-0 h-full w-1/2 transition-all duration-1000 ease-in-out ${
            isHovered2 ? 'z-100 w-full' : ''
          }`}
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave}
        >
          <div className="relative h-full w-full brightness-50">
            <Image
              src={ScotexH10SXT}
              alt="Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* logo */}
          <div className="z-2 absolute top-20 left-4 rounded-xl border-4 border-black brightness-100 md:top-[20px] md:left-6">
            <Image src={sxtlogo} alt="Logo" width={180} height={180} />
          </div>

          <div
            className={`z-1 absolute inset-0 flex flex-col items-center justify-center px-4 text-center  ${
              isHovered2 ? 'hidden' : ''
            }`}
          >
            <h2 className=" mt-0 mb-4 text-2xl font-semibold text-white lg:text-5xl">
              SCOTEX H10
            </h2>
          </div>
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 text-center transition-all duration-1000 ease-in-out ${
              isHovered2 ? '' : 'hidden'
            }`}
          >
            {/* title and powered by Segway */}
            <h2 className="mt-10 mb-4 text-2xl font-bold text-white lg:text-5xl">
              SCOTEX H10
            </h2>
            <h2 className="mb-20 text-2xl font-semibold text-white lg:text-4xl">
              Powered by SXT
            </h2>

            {/* bullet points */}
            <div className="text-left">
              <ul className="mb-10 list-disc pl-6 text-lg font-semibold text-white md:text-sm lg:text-2xl ">
                <li className="leading-10">
                  MAXIMALE GESCHWINDIGKEIT BIS ZU 20 KM/H
                </li>
                <li className="leading-10">
                  REICHWEITE BIS ZU CA. 65 KM DANK LANGLEIBIGEM AKKU
                </li>
                <li className="leading-10">GEWICHT : 19,9 KG</li>
                <li className="leading-10">MOTORLEISTUNG: 350W</li>
                <li className="leading-10">
                  EINGEBAUTER ADAPTER FÜR SCHNELLES UND EINFACHS AUFLADEN
                </li>
                <li className="leading-10">10-ZOLL SCHLAUCHLOSE LUFTREIFEN</li>
                <li className="leading-10">
                  20% STEIGUNGSWINKEL FÜR BEQUEMES FAHREN
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
