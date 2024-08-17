import { HeroCarousel, HeaderSizedBox, Statistics, Testimonials, Hero, Partners, Services, Footer, Contact, Pricing, FAQAccordion } from "@/components"

const Home: React.FC = () => {
  return (
    <main>
      <HeaderSizedBox id="" />
      {/* <HeroCarousel /> */}
      <HeaderSizedBox id="pfuev" />
      <Hero data={HERO_DATA} />
      <HeaderSizedBox id="kundenbewertungen" />
      <Testimonials />
      <HeaderSizedBox id="dienstleistungen" />
      <Services />
      <HeaderSizedBox id="partner" />
      <Partners />
      <HeaderSizedBox id="preise" />
      <Pricing />
      <HeaderSizedBox id="kontakt" />
      <Contact />
      { /* <Statistics /> */}
      <HeaderSizedBox id="FAQ" />
      <FAQAccordion />
      <Footer />
    </main>
  )
}

export default Home

const HERO_DATA = {
  title: 'PFÜV',
  subtitle: 'Pferdischer Überwachungsverein',
  description: 'Willkommen beim PFÜV, dem führenden Verein für die Überprüfung und Inspektion von Pferden. Wir sorgen dafür, dass Ihre Pferde stets in bester Verfassung sind.',
  cta: [
    { title: 'Jetzt Kontaktieren', href: '#kontakt' },
    { title: 'Partner', href: '#partner' }
  ],
  image: '/hero/logo.png',
}