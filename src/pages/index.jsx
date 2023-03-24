import Head from 'next/head'
import {Sponsors } from '@/components/homepage/Sponsors'
import { Faqs } from '@/components/homepage/Faqs'
import { Footer } from '@/components/utilities/Footer'
import { Header } from '@/components/utilities/Header'
import { Hero } from '@/components/homepage/Hero'
import { Knausgaard  } from '@/components/homepage/Knausgaard'
import { PrimaryFeatures } from '@/components/homepage/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/homepage/SecondaryFeatures'
import { Testimonials } from '@/components/homepage/Testimonials'

export default function Home() {


  return (
    <>
    <Head>
      <title>Be-SCooTER</title>
      
    </Head>
       <Header />  
      <main >
     
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        
        <Testimonials />
        <Knausgaard />
        <Faqs />
        <Sponsors />

      </main>
      <Footer />
    </>
  )
}
