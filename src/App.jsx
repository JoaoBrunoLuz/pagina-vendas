import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Connectivity from './components/Connectivity';
import Health from './components/Health';
import Specs from './components/Specs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20 md:pt-32">
        <Hero />
        <Connectivity />
        <Health />
        <Specs />
        <CTA />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-surface-container/90 backdrop-blur-lg border-t border-outline-variant/30 md:hidden z-50"
      >
        <a 
          className="block w-full bg-inverse-primary text-on-primary font-space font-semibold text-[18px] text-center px-6 py-4 rounded-lg bg-glow shadow-lg" 
          href="#buy"
        >
          Compre Agora - R$ 187,00
        </a>
      </motion.div>
    </div>
  )
}

export default App
