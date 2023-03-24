import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/events/Hero'
import Head from 'next/head'
export default function Events() {
  return (
    <>
     <Head>
      <title>Events</title>
    </Head>
    
    <Header />
    <main>
    <Hero />
    </main>
    <Footer />
    </>
  )
}