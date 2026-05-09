import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="max-w-container mx-auto px-gutter py-xl relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-md z-10"
        >
          <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.08em] text-primary border border-outline-variant px-3 py-1 rounded-full w-max">
            NOVO LANÇAMENTO
          </span>
          <h1 className="text-display-xl text-on-surface">
            Conectividade Total, Saúde em Foco: O Novo Smartwatch Premium.
          </h1>
          <p className="font-inter text-lg text-on-surface-variant max-w-xl leading-[28px]">
            O assistente pessoal que você precisa para uma vida mais produtiva e saudável.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm mt-sm">
            <a 
              className="bg-inverse-primary text-on-primary font-space font-semibold text-2xl px-8 py-4 rounded-lg bg-glow hover:bg-primary-container transition-all flex items-center justify-center gap-2 group" 
              href="#buy"
            >
              Compre Agora - R$ 187,00
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">shopping_cart</span>
            </a>
          </div>
          <div className="flex items-center gap-2 mt-4 text-on-surface-variant font-inter text-xs font-semibold tracking-widest uppercase">
            <span className="material-symbols-outlined icon-fill text-primary">verified</span>
            Garantia de Autenticidade - 100% Original
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-square bg-surface-container rounded-xl overflow-hidden border border-outline-variant shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          <img 
            alt="Smartwatch Premium" 
            className="w-full h-full object-cover mix-blend-lighten opacity-90 hover:scale-105 transition-transform duration-700" 
            src="/img1.jpg"
            onError={(e) => {
              e.target.src = "https://lh3.googleusercontent.com/aida/ADBb0uiBW-BlNQUo79R9q_ZFsUWNOpObhNZ93hQz4sR2MMyKa-AHn6xyqvFRy0tkujJ_f8YgNUFglWmMbsZpEy9hwV6sC2HX5_SPN0zFOM7OQAHaKPV15gv7EBpUlXUvKlAmMFwmCxmHTYKLaKx8i4NV7nN9XBR_fJlyJmL3MThYSWTOxznOiQOyRWKL1B74jHmBYW1RRB_RXfmkQjkyr-j_CkAeb_b_oF_bEldnmrKGQ2yLiBmLnJ1a37Eqm1RbVeTNGkNIEfKxoggs";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
