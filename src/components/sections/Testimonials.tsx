import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Elena Rostova',
    role: 'Architect & Coffee Collector',
    review: 'Café Aroma has transformed my morning routine into a work of art. The Nitro Velvet Cold Brew and French Croissants are unmatched anywhere in the city.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Marcus Thorne',
    role: 'Creative Director',
    review: 'The attention to origin detail is sublime. Every single-origin espresso shot exhibits distinct floral notes and velvety crema. Truly world-class.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Sophia Chen',
    role: 'Sommelier',
    review: 'As someone obsessed with flavor profiles, the Uji Matcha and Aroma Velvet Latte blew me away. The space, music, and aromas create pure harmony.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-36 bg-[#0d0806] relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#c89d66] font-semibold font-sans"
          >
            TESTIMONIALS
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl sm:text-7xl font-light text-[#f7f2ea] tracking-tight leading-[0.95]"
          >
            THEIR FAVORITE <br />
            <span className="font-normal italic text-gold-gradient">RITUAL.</span>
          </motion.h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="rounded-3xl glass-card border border-[#e0cda8]/15 p-8 flex flex-col justify-between space-y-6 hover:border-[#c89d66]/40 transition-all duration-500 shadow-luxury relative"
            >
              <Quote size={32} className="text-[#c89d66]/30 absolute top-6 right-6" />

              <div className="space-y-4">
                <div className="flex items-center gap-1 text-[#c89d66]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#c89d66]" />
                  ))}
                </div>

                <p className="text-sm text-[#f7f2ea]/80 font-light italic leading-relaxed">
                  "{rev.review}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#e0cda8]/10">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#c89d66]/40"
                />
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#f7f2ea]">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-[#c89d66] font-sans tracking-wider uppercase">
                    {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
