import { motion } from 'framer-motion';

const Health = () => {
  return (
    <section className="max-w-container mx-auto px-gutter py-xl" id="health">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-lg"
      >
        <h2 className="font-space text-[48px] font-semibold leading-[56px] text-on-surface">Seu Assistente de Bem-Estar 24/7.</h2>
        <p className="font-inter text-md text-on-surface-variant mt-xs">Monitoramento avançado para otimizar sua rotina e saúde.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-md md:grid-rows-[minmax(300px,_auto)_minmax(300px,_auto)]">
        {/* Large Image Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-8 md:row-span-2 relative rounded-xl overflow-hidden border border-outline-variant/30 group"
        >
          <img 
            alt="Monitoramento Cardíaco" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" 
            src="/img3.jpg"
            onError={(e) => {
              e.target.src = "https://lh3.googleusercontent.com/aida/ADBb0uhkuD2wgt-kSqxAbSSQdhSKCrZf1_6igzFqPI8amt8itOlXhI2MmhtiM8KdxhYQR27Q1JMiWOEmrJ1SRuR0lhMfQjFUDt3LCsclcwVQ8FMsSnbthVMnDmL84Y2CSHY3s0fuPkoLv9FcT3-ti2_kFGhkSRzzU26GAQe32WctEWgS9Ya2T__1oBACRTDQErwDr5g-ArQM5FJAQNPBgGJY-udgW5hpEKZ0L3EwYtbGP20PgpgNOEUfXn_TmNNSzFH0SofPHJ0u4sctXA";
            }}
          />
          <div className="absolute bottom-0 left-0 p-lg bg-gradient-to-t from-surface via-surface/80 to-transparent w-full">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <span className="material-symbols-outlined icon-fill">favorite</span>
              <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.08em]">MONITORAMENTO CONTÍNUO</span>
            </div>
            <h3 className="font-space text-[32px] font-medium leading-[40px] text-on-surface">Frequência Cardíaca & Pressão</h3>
            <p className="font-inter text-md text-on-surface-variant max-w-md mt-2">Sensores ópticos de última geração garantem precisão clínica para seus dados vitais em tempo real.</p>
          </div>
        </motion.div>

        {/* Sleep Tracking Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 bg-surface-container rounded-xl p-md border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container-high transition-colors group"
        >
          <div>
            <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">bedtime</span>
            </div>
            <h4 className="font-space text-2xl font-semibold text-on-surface">Análise de Sono</h4>
            <p className="font-inter text-md text-on-surface-variant mt-2">Rastreamento detalhado de fases do sono: profundo, leve e REM.</p>
          </div>
          <div className="mt-4 pt-4 border-t border-outline-variant/30 flex justify-between items-end">
            <div>
              <span className="font-inter text-[12px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant block mb-1">SCORE MÉDIO</span>
              <span className="font-space text-[40px] leading-tight text-primary font-bold">85</span>
            </div>
            <img 
              alt="Dados de Sono" 
              className="w-16 h-16 rounded-lg object-cover opacity-80 mix-blend-screen" 
              src="/img4.jpg"
              onError={(e) => {
                e.target.src = "https://lh3.googleusercontent.com/aida/ADBb0ui4TRerQZZoZavtX0B7Dham22yeqoMcn82x7L2QFKOD01fYrIqzGBnK4mt2RiHVn5BvncUmYW4vmT52PqnX6uCDO15hzn-OqLKqDxqMuTKfSoGq0xDY8XZj5oH--K__SJLKeSHB-mUNC0PSu2D4GcG2MEstZtkvVPHFqRpDQHmZa9bWUq8GW1nRlzO2DyjY2-81jWvhdoF4d3ImGDH0et4teixeK4EGrGTcHuU2JO6q0hHHaS7c_TL9gbUzQlPAk2ijLLZEag3Nxg";
              }}
            />
          </div>
        </motion.div>

        {/* Reminders Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 bg-surface-container rounded-xl p-md border border-outline-variant/30 flex flex-col justify-between hover:bg-surface-container-high transition-colors group"
        >
          <div>
            <div className="w-12 h-12 rounded-full bg-surface-bright flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <h4 className="font-space text-2xl font-semibold text-on-surface">Lembretes Inteligentes</h4>
            <p className="font-inter text-md text-on-surface-variant mt-2">Alertas customizáveis para hidratação, medicação e sedentarismo.</p>
          </div>
          <div className="mt-4 flex gap-2">
            {['ÁGUA', 'MEDICAÇÃO', 'MOVIMENTO'].map(tag => (
              <span key={tag} className="font-inter text-[10px] font-semibold tracking-wider px-2 py-1 bg-surface-bright rounded border border-outline-variant/50 text-on-surface-variant">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Health;
