
import Masthead from './components/Masthead'
import AboutUs from './components/aboutus'
import ContactUs from './components/contactus'
import Footer from './components/footer'
import Skills from './components/skills'
import TrustedBy from './components/trustedby'
import Works from './components/works'
import ScrollObserver from './utils/scroll-observer'
import SizeObserver from './utils/size-observer'

export default function Home() {
  return (
  <SizeObserver>
  <ScrollObserver>
  <Masthead  />
  <AboutUs />
  <Skills />
  <Works />
  <TrustedBy/>
  <ContactUs/>
  <Footer />
  </ScrollObserver>
  </SizeObserver>
  )
}
