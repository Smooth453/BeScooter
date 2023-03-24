import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/info/Hero'
import Head from 'next/head'

export default function Info() {
  return (
    <>
    <Head>
      <title>Information</title>
    </Head>
    <Header />
    <main>
    <Hero />
    </main>
    <Footer />
    </>
  )
}