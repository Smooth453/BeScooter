import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/leihen/Hero'
import { PrimaryFeatures } from '@/components/leihen/PrimaryFeatures'
import Head from 'next/head'
export default function Escooterleihen() {
  return (
    <>
     <Head>
      <title>E-SCooTER leihen</title>
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