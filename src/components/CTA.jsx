import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="max-w-[800px] mx-auto px-gutter py-[120px] text-center" id="buy">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-surface-container rounded-2xl p-lg border border-primary/30 shadow-[0_0_60px_rgba(75,142,255,0.1)] relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
        <h2 className="font-space text-[48px] font-semibold leading-[56px] text-on-surface relative z-10 mb-4">Eleve Sua Rotina Hoje.</h2>
        <p className="font-inter text-lg text-on-surface-variant mb-8 relative z-10">Aproveite o preço de lançamento por tempo limitado.</p>
        <div className="flex flex-col items-center justify-center gap-2 mb-8 relative z-10">
          <span className="font-space text-2xl text-on-surface-variant line-through opacity-60">De R$ 289,00</span>
          <span className="font-space text-[64px] leading-none text-primary font-bold">R$ 187,00</span>
        </div>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block w-full sm:w-auto bg-inverse-primary text-on-primary font-space text-2xl font-semibold px-12 py-5 rounded-lg bg-glow hover:bg-primary-container transition-colors relative z-10 shadow-lg" 
          href="#"
        >
          Compre Agora
        </motion.a>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-on-surface-variant font-inter text-xs font-semibold uppercase tracking-widest relative z-10">
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">local_shipping</span> Frete Grátis</span>
          <span className="w-1 h-1 bg-outline rounded-full mx-2 hidden sm:block"></span>
          <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">security</span> Compra Segura</span>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
