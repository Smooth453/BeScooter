import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/jobs/Hero'
import { PrimaryFeautures } from '@/components/jobs/PrimaryFeatures'
import Head from 'next/head'

export default function Jobs() {
  return (
    <>
    <Head>
      <title>Jobs</title>
    </Head>
    <Header />
    <main>
    <Hero />
    <PrimaryFeautures />
    </main>
    <Footer />
    </>
  )
}