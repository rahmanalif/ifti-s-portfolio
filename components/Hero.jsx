'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Subtle parallax - reduced intensity for smoothness
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-16 px-4">
      <motion.div style={{ y, opacity }} className="container mx-auto max-w-6xl">
        {/* Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.1,
          }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-slate-900 text-center"
        >
          Bhai ki O'bostha' <span className="inline-block animate-wave">👋</span>
        </motion.h1>

        {/* Tilted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {/* Card 1 - Based in Location */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ rotate: 0, scale: 1.02, y: -4, transition: { duration: 0.3 } }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          >
            <Image
              src="/ifti2.jpg"
              alt="Based in Dhaka"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div>
                <p className="text-sm text-white/80 mb-1">Based in</p>
                <h3 className="text-2xl font-bold text-white">Dhaka</h3>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Main Profile */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ rotate: 0, scale: 1.02, y: -4, transition: { duration: 0.3 } }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 cursor-pointer flex flex-col"
          >
            {/* Text at top with background */}
            <div className="absolute top-0 left-0 right-0 p-6 z-10 bg-slate-900 rounded-t-3xl">
              <p className="text-sm text-white/90 mb-1">I'm</p>
              <h3 className="text-2xl font-bold text-white">Mehidi Hasan</h3>
              <h3 className="text-2xl font-bold text-white">Ifti</h3>
            </div>

            {/* Image at bottom - no tint overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-[80%] rounded-b-3xl overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/ifti.jpg"
                  alt="Mehidi Hasan Ifti"
                  fill
                  className="object-cover object-[center_15%]"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Digital Designer */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ rotate: 0, scale: 1.02, y: -4, transition: { duration: 0.3 } }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-amber-100 cursor-pointer"
          >
            <Image
              src="/ifti3.jpg"
              alt="Business Strategist"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Business</h3>
                <h3 className="text-2xl font-bold text-white">Strategist</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
        }
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
      `}</style>
    </section>
  );
}
