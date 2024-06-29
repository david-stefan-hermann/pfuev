import { HeroCarousel, HeaderSizedBox, Statistics, Testimonials, Hero } from "@/components"

export default function Home() {
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
