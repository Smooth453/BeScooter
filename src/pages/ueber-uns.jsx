import Head from 'next/head'
import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/ueber-uns/Hero'
import { PrimaryFeatures } from '@/components/ueber-uns/PrimaryFeatures'


export default function Ueberuns() {
  return (
    <>
     <Head>
      <title>Ueber uns</title>
    </Head>
    <Header />
    <main>
    <Hero />
    <PrimaryFeatures />
    </main>
    <Footer />
    </>
  )
}