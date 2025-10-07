'use client';
import { motion, useMotionValue, useTransform, animate, useScroll } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Counter({ value, duration = 2 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (value.includes('+')) {
      return Math.round(latest) + '+';
    } else if (value.includes('%')) {
      return Math.round(latest) + '%';
    } else if (value.includes('M')) {
      return Math.round(latest) + 'M+';
    }
    return Math.round(latest);
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      const controls = animate(count, numericValue, { duration });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { number: '12', label: 'Years of experience' },
  { number: '60+', label: 'Projects completed' },
  { number: '08', label: 'Award winner' },
  { number: '98%', label: 'Satisfied clients' },
  { number: '14+', label: 'Team members' },
  { number: '8M+', label: 'Revenue per project' },
];

export default function Numbers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

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
            Numbers
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

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.8,
                delay: 0.15 * (index + 1),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-center md:text-left"
            >
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
                <Counter value={stat.number} />
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex justify-center"
        >
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 hover:scale-105 text-white px-8 py-6 text-base rounded-full transition-all">
            Download CV
          </Button>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
