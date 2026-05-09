import { motion } from 'framer-motion';

const Connectivity = () => {
  return (
    <section className="bg-surface-container-low border-y border-outline-variant/30 py-xl mt-xl" id="connectivity">
      <div className="max-w-container mx-auto px-gutter">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-lg"
        >
          <h2 className="font-space text-[48px] font-semibold leading-[56px] text-on-surface">Nunca Perca o que é Importante.</h2>
          <p className="font-inter text-md text-on-surface-variant mt-xs max-w-2xl mx-auto">Mantenha-se conectado ao seu mundo sem precisar tirar o telefone do bolso.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-center">
          <div className="lg:col-span-1 flex flex-col gap-md">
            {[
              { icon: 'chat', title: 'WhatsApp & Redes', desc: 'Receba notificações em tempo real do WhatsApp, Instagram e outras redes sociais diretamente no pulso.' },
              { icon: 'call', title: 'Chamadas Bluetooth', desc: 'Atenda ou rejeite chamadas com um toque. Qualidade de áudio cristalina para conversas em movimento.' }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-surface-container p-md rounded-lg border border-outline-variant/50 hover:border-primary/50 transition-all group"
              >
                <span className="material-symbols-outlined text-primary mb-xs text-3xl group-hover:scale-110 transition-transform">{feature.icon}</span>
                <h3 className="font-space text-[24px] font-semibold text-on-surface">{feature.title}</h3>
                <p className="font-inter text-md text-on-surface-variant mt-2">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative w-full aspect-square md:aspect-[4/3] bg-surface-dim rounded-xl overflow-hidden border border-outline-variant/30"
          >
            <img 
              alt="Notificações no Smartwatch" 
              className="w-full h-full object-cover opacity-80" 
              src="/img2.jpg"
              onError={(e) => {
                e.target.src = "https://lh3.googleusercontent.com/aida/ADBb0uhi5dGnOGNx3EbOtBcrdBpLE5mIgxKqJ6qC3BEJ48YiGs1JISFKos-1lpt-PIw_GEZ8HpNKjXCo0ovMdDspblFQeqoh2e-qzYkNPLcUMVWRx0yBVF5MloYYMgyhHU6y7_mHo4ARNDOgAuDfFB3xfYHvJjWMab65mz0W1ifrjAqaL5sFnKCtwdKBvUK9zGztM-ZgbwE0-NpRIvX_8NHXT9P3yJCZX6jH-nrB_be40HyHZlyhzvmj8vs5uMNPUBqtUOblbUVepLG9cg";
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connectivity;
