'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Lightbulb, Wrench, Palette, Users } from 'lucide-react';

const reasons = [
  {
    icon: Lightbulb,
    title: 'Creative ideas',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu.',
  },
  {
    icon: Wrench,
    title: 'Expert in tools',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu.',
  },
  {
    icon: Palette,
    title: 'Pixel-perfect design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu.',
  },
  {
    icon: Users,
    title: 'Clean & minimal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu.',
  },
];

// Individual card component with subtle parallax
function ReasonCard({ reason, index, isInView }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const Icon = reason.icon;

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: 0.08 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-shadow"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{
          duration: 0.4,
          delay: 0.08 * index + 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <Icon className="w-8 h-8 text-slate-900 mb-4" strokeWidth={1.5} />
      </motion.div>
      <h3 className="text-2xl font-semibold text-slate-900 mb-3">{reason.title}</h3>
      <p className="text-slate-600 leading-relaxed">{reason.description}</p>
    </motion.div>
  );
}

export default function WhyChooseMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Why choose me?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center gap-2 text-slate-900 font-medium group cursor-pointer hover:gap-4 transition-all"
          >
            <span className="hidden md:block">See Resume</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Cards Grid with Sequential Staggered Animation */}
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              reason={reason}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
