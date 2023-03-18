
import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/store/Hero'
import { Opentimes } from '@/components/store/Opentimes'
import { PrimaryFeatures } from '@/components/store/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/store/SecondaryFeatures'

export default function store() {
  return (
    <>
    <Header />
    <main>
    
    <Hero />
    <Opentimes />
    <PrimaryFeatures />
    <SecondaryFeatures />
    
    </main>
    <Footer />
    </>
  )
}
