import { motion } from 'framer-motion';
import { Award, Flame, Coffee, HeartHandshake } from 'lucide-react';

const stats = [
  { value: '12+', label: 'Signature Drinks', icon: Coffee },
  { value: '5', label: 'Roasting Origins', icon: Flame },
  { value: '100%', label: 'Freshly Brewed', icon: Award },
];

export default function AromaExperience() {
  return (
    <section id="experience" className="py-24 lg:py-36 bg-[#140d0a] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c89d66]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-[#c89d66] font-semibold font-sans"
          >
            OUR PHILOSOPHY
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl font-light text-[#f7f2ea] tracking-tight leading-[0.95]"
          >
            MORE THAN <br />
            <span className="font-normal italic text-gold-gradient">COFFEE.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-[#f7f2ea]/70 font-light max-w-xl mx-auto leading-relaxed"
          >
            Founded on the belief that a cup of coffee is not a quick caffeine fix, but a sacred pause in your day.
          </motion.p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Images Composition */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Large Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="col-span-8 relative rounded-3xl overflow-hidden shadow-2xl border border-[#e0cda8]/15 group aspect-[4/5]"
              >
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000"
                  alt="Café Aroma Roastery Atmosphere"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140d0a] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase tracking-widest text-[#c89d66] font-semibold">THE BARISTA CRAFT</span>
                  <p className="font-serif text-lg text-[#f7f2ea] mt-1">Hand-Poured Pour Over Precision</p>
                </div>
              </motion.div>

              {/* Smaller Offset Supporting Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="col-span-4 relative rounded-2xl overflow-hidden shadow-2xl border border-[#e0cda8]/15 aspect-[3/4] -mt-12 group"
              >
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800"
                  alt="Roaster at work"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140d0a]/80 to-transparent" />
              </motion.div>

            </div>

            {/* Subtle Overlay Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 right-6 lg:right-12 glass-card px-6 py-4 rounded-2xl border border-[#e0cda8]/20 shadow-luxury hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#c89d66]/20 flex items-center justify-center text-[#c89d66]">
                <HeartHandshake size={20} />
              </div>
              <div>
                <p className="text-xs font-serif text-[#f7f2ea]">Direct-Trade Certified</p>
                <p className="text-[10px] text-[#f7f2ea]/60">Ethical Farmer Partnerships</p>
              </div>
            </motion.div>
          </div>

          {/* Right Brand Story Text */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-[#f7f2ea] font-light leading-snug">
                Where Passion Meets Precision in Every Extract.
              </h3>
              <p className="text-sm sm:text-base text-[#f7f2ea]/75 font-light leading-relaxed">
                At Café Aroma, every bean is meticulously sourced from high-altitude micro-lots across Colombia, Ethiopia, Kenya, and Guatemala. We slow-roast in micro-batches to preserve the intricate floral, caramel, and berry tasting notes inherent to each terroir.
              </p>
            </motion.div>

            {/* Key Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e0cda8]/15"
            >
              {stats.map((stat) => {
                const IconComp = stat.icon;
                return (
                  <div key={stat.label} className="space-y-1">
                    <IconComp size={16} className="text-[#c89d66]" />
                    <p className="font-serif text-3xl sm:text-4xl text-[#c89d66] font-bold">
                      {stat.value}
                    </p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#f7f2ea]/60 font-sans">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
