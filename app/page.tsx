import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import Tarifs from '@/components/Tarifs'
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
      <Tarifs />
      <Footer />
    </>
  )
}