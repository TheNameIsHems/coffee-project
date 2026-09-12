import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'High-Altitude Sourcing',
    subtitle: 'SHADE GROWN ORIGINS',
    desc: 'Hand-picked arabica cherries from volcanic soils 1,800 meters above sea level in Sidamo and Huila.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
  },
  {
    step: '02',
    title: 'Small-Batch Roasting',
    subtitle: 'THERMAL MASTERY',
    desc: 'Slow roasted in cast-iron drum roasters to unlock deep notes of dark chocolate, berry, and wildflower honey.',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?auto=format&fit=crop&q=80&w=800',
  },
  {
    step: '03',
    title: 'Precision Extraction',
    subtitle: 'PERFECT CREMA',
    desc: 'Extracted at 9.2 bars of pressure with mineralized spring water for silky body and complex aromatic crema.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800',
  },
];

export default function CoffeeOrigin() {
  return (
    <section id="origin" className="py-24 lg:py-36 bg-[#140d0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#c89d66] font-semibold font-sans"
          >
            OUR JOURNEY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl sm:text-7xl font-light text-[#f7f2ea] tracking-tight leading-[0.95]"
          >
            FROM BEAN <br />
            <span className="font-normal italic text-gold-gradient">TO MOMENT.</span>
          </motion.h2>

          <p className="text-base sm:text-lg text-[#f7f2ea]/70 font-light max-w-xl mx-auto leading-relaxed">
            Every step in our craft is guided by uncompromising reverence for the bean.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((st, idx) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="rounded-3xl glass-card border border-[#e0cda8]/15 p-6 flex flex-col justify-between space-y-6 hover:border-[#c89d66]/40 transition-all duration-500 shadow-luxury group"
            >
              <div className="space-y-4">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#1b120e]">
                  <img
                    src={st.image}
                    alt={st.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full glass-card border border-[#e0cda8]/20 flex items-center justify-center font-serif text-sm font-bold text-[#c89d66]">
                    {st.step}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#c89d66] font-semibold">
                    {st.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#f7f2ea]">
                    {st.title}
                  </h3>
                </div>

                <p className="text-xs text-[#f7f2ea]/65 font-light leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
