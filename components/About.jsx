'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Subtle parallax
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div style={{ y }} className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(10px)' }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">About me</h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(10px)' }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-6"
          >
            <p className="text-slate-600 leading-relaxed text-lg">
              A visionary Business Strategist from Dhaka, Bangladesh, showcases a portfolio of visually stunning campaigns that blend artistry and innovation. Each project sports a distinct editorial style, keen eye for bold typography, striking imagery, and compelling storytelling.
            </p>
            <div className="flex items-center gap-2 text-slate-900 font-medium group cursor-pointer hover:gap-4 transition-all">
              <span>See Resume</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
