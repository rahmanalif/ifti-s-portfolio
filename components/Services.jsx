'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Branding',
    tags: ['Logo Design', 'Brand Guidelines', 'Identity System'],
  },
  {
    title: 'Product Design',
    tags: ['UI/UX Design', 'Prototyping', 'User Research'],
  },
  {
    title: 'Art Direction',
    tags: ['Brand Direction', 'Creative Strategy', 'Visual Concept'],
  },
  {
    title: 'Motion Design',
    tags: ['2D Animation', '3D Motion Graphics', 'Video Editing'],
  },
];

function ServiceItem({ service, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="border-b border-slate-200/50 pb-6 last:border-b-0"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h3 className="text-2xl font-semibold text-slate-900 min-w-[200px]">
          {service.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {service.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section id="services" className="py-20 md:py-32" ref={ref}>
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
            Services
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
            <span className="hidden md:block">See All Services</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
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
