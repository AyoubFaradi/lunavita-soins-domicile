import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Statistics from './components/Statistics';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && typeof window.tailwind !== 'undefined') {
      window.tailwind.refresh?.();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="font-sans antialiased">
        <Navbar />
        <Hero />
        <WhyChoose />
        <Benefits />
        <Statistics />
        <Testimonials />
        <FAQ />
        <Newsletter />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
