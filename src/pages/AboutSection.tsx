import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { Heart, Leaf, Award, Globe } from 'lucide-react';
import { useEffect } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration: 2, ease: 'easeOut' });
    }
  }, [isInView, target, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const values = [
  {
    icon: Heart,
    title: 'Passion First',
    description: 'Every cup is crafted with love and dedication by our experienced baristas.',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50',
  },
  {
    icon: Leaf,
    title: 'Sustainably Sourced',
    description: 'We partner with ethical farms to bring you the finest, responsibly grown beans.',
    color: 'from-emerald-500 to-green-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the top 3% of coffee beans worldwide make it into our blends.',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Globe,
    title: 'Community Driven',
    description: 'Building connections, one cup at a time, in communities around the world.',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50',
  },
];

const stats = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: 'K+', label: 'Happy Customers' },
  { value: 120, suffix: '+', label: 'Store Locations' },
  { value: 30, suffix: '+', label: 'Coffee Varieties' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white to-cream-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-coffee-900 mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-coffee-600 to-amber-600 bg-clip-text text-transparent">
              Promise
            </span>
          </h2>
          <p className="text-coffee-400 text-lg max-w-2xl mx-auto">
            More than coffee — we're a community dedicated to extraordinary experiences.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white border border-coffee-100/60 hover:shadow-xl hover:shadow-coffee-200/20 transition-all duration-500 text-center"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon
                  size={24}
                  className={`bg-gradient-to-r ${item.color} [background-clip:text] [-webkit-background-clip:text]`}
                  style={{ color: 'transparent', fill: 'none', stroke: 'url(#gradient)' }}
                />
                {/* Fallback: use the color from the gradient's "from" value */}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="currentColor" />
                      <stop offset="100%" stopColor="currentColor" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="font-semibold text-coffee-900 mb-2">{item.title}</h3>
              <p className="text-sm text-coffee-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl bg-gradient-to-br from-coffee-800 via-coffee-900 to-espresso-800 p-10 lg:p-14"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-coffee-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
