import { HeroCarousel, HeaderSizedBox, Statistics, Testimonials, Hero, Partners, Services, Footer, Contact } from "@/components"

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
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
