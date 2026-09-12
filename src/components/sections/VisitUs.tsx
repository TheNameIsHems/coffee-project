import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visit" className="py-24 lg:py-36 bg-[#140d0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Store Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c89d66] font-semibold font-sans">
                FLAGSHIP ROASTERY
              </span>

              <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#f7f2ea] tracking-tight leading-[0.95]">
                VISIT OUR <br />
                <span className="font-normal italic text-gold-gradient">SANCTUARY.</span>
              </h2>

              <p className="text-base text-[#f7f2ea]/75 font-light leading-relaxed">
                Step into a warm space designed around ambient lighting, acoustic acoustics, and the irresistible scent of freshly roasted arabica.
              </p>
            </div>

            {/* Details List */}
            <div className="space-y-5 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card border border-[#e0cda8]/10">
                <div className="w-10 h-10 rounded-full bg-[#c89d66]/20 flex items-center justify-center text-[#c89d66] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#c89d66] font-semibold">LOCATION</h4>
                  <p className="font-serif text-lg text-[#f7f2ea] mt-0.5">142 Artisan Way, Soho</p>
                  <p className="text-xs text-[#f7f2ea]/60 font-light">New York, NY 10013</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card border border-[#e0cda8]/10">
                <div className="w-10 h-10 rounded-full bg-[#c89d66]/20 flex items-center justify-center text-[#c89d66] shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#c89d66] font-semibold">OPENING HOURS</h4>
                  <p className="font-serif text-base text-[#f7f2ea] mt-0.5">Mon – Fri: 6:30 AM – 8:00 PM</p>
                  <p className="font-serif text-base text-[#f7f2ea]">Sat – Sun: 7:00 AM – 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-card border border-[#e0cda8]/10">
                <div className="w-10 h-10 rounded-full bg-[#c89d66]/20 flex items-center justify-center text-[#c89d66] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-[#c89d66] font-semibold">CONTACT & RESERVATIONS</h4>
                  <p className="text-sm text-[#f7f2ea] mt-0.5">+1 (212) 555-0198</p>
                  <p className="text-xs text-[#f7f2ea]/60 font-light">hello@cafearoma.com</p>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3.5 px-8 py-4 rounded-full bg-[#c89d66] text-[#140d0a] font-sans font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#f7f2ea] hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
            >
              <Navigation size={16} />
              <span>GET DIRECTIONS</span>
            </a>

          </motion.div>

          {/* Right Atmospheric Cafe Interior Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-[#e0cda8]/20 shadow-luxury group bg-[#1b120e]">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200"
                alt="Café Aroma Luxury Interior"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140d0a] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
