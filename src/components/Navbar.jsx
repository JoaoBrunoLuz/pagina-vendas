import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 glass-nav px-8 h-20 max-w-container mx-auto left-0 right-0 hidden md:flex justify-between items-center"
    >
      <div className="text-2xl font-black text-white tracking-tighter">HORIZON</div>
      <div className="flex gap-8">
        {['Performance', 'Health', 'Connectivity', 'Specs'].map((item) => (
          <a 
            key={item}
            className="text-on-surface-variant hover:text-white transition-colors duration-300 font-space uppercase tracking-widest text-xs" 
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </a>
        ))}
      </div>
      <a 
        className="text-primary font-space uppercase tracking-widest text-xs hover:bg-white/5 transition-all duration-200 px-4 py-2 rounded-DEFAULT border border-primary/30 scale-95 active:scale-90" 
        href="#buy"
      >
        Pre-order Now
      </a>
    </motion.nav>
  );
};

export default Navbar;
