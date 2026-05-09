import { motion } from 'framer-motion';

const Specs = () => {
  return (
    <section className="bg-surface-container-lowest py-xl" id="specs">
      <div className="max-w-container mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative rounded-xl overflow-hidden aspect-square border border-outline-variant/20 shadow-[0_0_50px_rgba(75,142,255,0.05)]"
        >
          <img 
            alt="Carregamento Smartwatch" 
            className="w-full h-full object-cover mix-blend-lighten opacity-80" 
            src="/img5.jpg"
            onError={(e) => {
              e.target.src = "https://lh3.googleusercontent.com/aida/ADBb0uiTEetxTDjKaro80vNeh8jbMmjEkUI47ujGF-sDdZdpGYW68Y8uRUT-Ojts4fVoCbcsgA77uK1n2R_9bmJ8O98n1L6afdpN6IdvdkvCM0yj81R62QrwsoGki8qm52Dz5f7l9dWpQRm5UJDKgcjY-3VgZB6qskzB5tGTk4xbCAioxiSvfUEClz9PdOUK-marzzqLk5TRkZq1irW84E0qLnorGdefoQXC3pNfSlAgCQ7UtBJs1uH1TLDBsfiEM3dxrO58HYzyAPdL1Q";
            }}
          />
        </motion.div>
        
        <div className="order-1 lg:order-2 flex flex-col gap-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-space text-[48px] font-semibold leading-[56px] text-on-surface mb-2">Especificações Técnicas</h2>
            <p className="font-inter text-md text-on-surface-variant">Engenharia de precisão para performance ininterrupta.</p>
          </motion.div>
          
          <ul className="flex flex-col gap-4">
            {[
              { icon: 'battery_charging_full', title: 'Bateria de Longa Duração', desc: 'Carregamento magnético rápido. Dias de uso contínuo com uma única carga.' },
              { icon: 'globe', title: 'Suporte Multi-idiomas', desc: 'Interface completa em Português, Inglês e mais de 10 outros idiomas.' },
              { icon: 'apps', title: 'Compatibilidade Universal', desc: 'Sincronização perfeita com iOS e Android. Todos os principais apps suportados.' }
            ].map((spec, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-surface-container/50 border border-outline-variant/20 hover:border-primary/30 transition-all group"
              >
                <span className="material-symbols-outlined text-primary mt-1 group-hover:scale-110 transition-transform">{spec.icon}</span>
                <div>
                  <strong className="font-space text-[20px] font-semibold block text-on-surface">{spec.title}</strong>
                  <span className="font-inter text-md text-on-surface-variant">{spec.desc}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Specs;
