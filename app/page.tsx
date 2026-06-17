import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Programs from '@/components/Programs';
import About from '@/components/About';
import Process from '@/components/Process';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Programs />
      <About />
      <Process />
      <Results />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
