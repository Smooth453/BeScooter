import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/jobs/Hero'
import { PrimaryFeautures } from '@/components/jobs/PrimaryFeatures'


export default function jobs() {
  return (
    <>
    <Header />
    <main>
    <Hero />
    <PrimaryFeautures />
    </main>
    <Footer />
    </>
  )
}