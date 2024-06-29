import { HeroCarousel, HeaderSizedBox, Statistics, Testimonials, Hero } from "@/components"

const Home: React.FC = () => {
  return (
    <main className="">
      <HeaderSizedBox id="" />
      <HeroCarousel />
      <HeaderSizedBox id="pfuev" />
      <Hero />
      <HeaderSizedBox id="kundenbewertungen" />
      <Testimonials />
      <Statistics />
      <HeaderSizedBox id="" />
    </main>
  )
}

export default Home
