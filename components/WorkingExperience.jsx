'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    year: '2016',
    role: 'UI/UX Designer',
    company: 'Dribble Freelance',
    period: '2015 - 2016',
  },
  {
    year: '2017',
    role: 'Product Designer',
    company: 'Early Financial Group',
    period: '2017 - 2018',
  },
  {
    year: '2019',
    role: 'Art Director',
    company: '*Twice Health IT Solutions',
    period: '2019 - 2021',
  },
  {
    year: '2021',
    role: 'Motion Designer',
    company: 'Digi-Farm Ecommerce',
    period: '2021 - 2022',
  },
  {
    year: '2023',
    role: 'Brand Designer',
    company: 'GoDigital Creative',
    period: '2022 - Present',
  },
];

export default function WorkingExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="glass-card rounded-3xl p-8 md:p-12">
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
            Working experience
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
            <span className="hidden md:block">See LinkedIn</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{
                duration: 0.8,
                delay: 0.1 * (index + 3),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-b border-slate-200/50 pb-6 last:border-b-0 group hover:translate-x-2 transition-transform"
            >
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-12 md:col-span-2 text-slate-500 font-medium">
                  {exp.year}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{exp.role}</h3>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <p className="text-slate-600">{exp.company}</p>
                </div>
                <div className="col-span-12 md:col-span-2 text-right">
                  <p className="text-slate-500 text-sm">{exp.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
