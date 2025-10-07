'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="glass-card rounded-3xl p-8 md:p-12">
        {/* Large Name Display */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
              <Image
                src="/ifti.jpg"
                alt="Mehidi Hasan Ifti"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-slate-900">
              Mehidi <span className="block">Hasan Ifti</span>
            </h2>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-slate-600 text-sm"
        >
          <p>© {new Date().getFullYear()} - Mehidi Hasan. All rights reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">
              Made by Alif
            </a>
          </div>
        </motion.div>
        </div>
      </div>
    </footer>
  );
}
