
import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/ueber-uns/Hero'
import { PrimaryFeatures } from '@/components/ueber-uns/PrimaryFeatures'


export default function store() {
  return (
    <>
    <Header />
    <main>
    <Hero />
    <PrimaryFeatures />
    </main>
    <Footer />
    </>
  )
}