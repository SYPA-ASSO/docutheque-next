import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import OtherServices from '@/components/OtherServices'
import Tarifs from '@/components/Tarifs'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import SchemaOrg from '@/components/SchemaOrg'

export default function Home() {
  return (
    <>
      <SchemaOrg />
      <Header />
      <Hero />
      <Categories />
      <About />
      <HowItWorks />
      <OtherServices />
      <Tarifs />
      <FAQ />
      <Footer />
    </>
  )
}