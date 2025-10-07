'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const processes = [
  {
    step: '01 /04',
    title: 'Brief concept',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor aliquam posuere tortor.',
  },
  {
    step: '02 /04',
    title: 'Price evaluation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor aliquam posuere tortor.',
  },
  {
    step: '03 /04',
    title: 'Work together',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor aliquam posuere tortor.',
  },
  {
    step: '04 /04',
    title: 'Meet editor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor aliquam posuere tortor.',
  },
];

// Individual process card with smooth staggered animation
function ProcessCard({ process, index, isInView }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: 0.1 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="glass p-8 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2"
    >
      <motion.div style={{ y }} className="pointer-events-none">
        <div className="text-sm text-indigo-600 font-semibold mb-4">
          {process.step}
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
          {process.title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {process.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function WorkingProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div style={{ y }} className="glass-card rounded-3xl p-8 md:p-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(10px)' }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            Working process
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-center gap-2 text-slate-900 font-medium group cursor-pointer hover:gap-4 transition-all"
          >
            <span className="hidden md:block">See Resume</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Process Grid with Cascading Staggered Animation */}
        <div className="grid md:grid-cols-2 gap-8">
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              process={process}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
}
