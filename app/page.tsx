import { HeroCarousel, HeaderSizedBox, Statistics, Testimonials, Hero, Partners, Services, Footer, Contact, Pricing } from "@/components"

const Home: React.FC = () => {
  return (
    <main>
      <HeaderSizedBox id="" />
      <HeroCarousel />
      <HeaderSizedBox id="pfuev" />
      <Hero />
      <HeaderSizedBox id="kundenbewertungen" />
      <Testimonials />
      { /* <Statistics /> */ }
      <HeaderSizedBox id="dienstleistungen" />
      <Services />
      <HeaderSizedBox id="partner" />
      <Partners />
      <HeaderSizedBox id="preise" />
      <Pricing />
      <HeaderSizedBox id="kontakt" />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
