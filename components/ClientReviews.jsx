'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    name: 'Daniel Jackson',
    role: 'CEO, Dribbble',
    avatar: '/ifti.jpg',
    rating: 5,
    text: 'They were very receptive to feedback and willing to make changes. The designs are top-notch. They are amazing!',
  },
  {
    name: 'Michael Brown',
    role: 'CEO, Insta Corp',
    avatar: '/ifti2.jpg',
    rating: 5,
    text: 'This is a way too easy imagination! she is truly imaginative and knows her work! Even tho it is her first experience or whatever! she is surely recommended!',
  },
  {
    name: 'Logan mzize',
    role: 'CEO, Abstract',
    avatar: '/ifti3.jpg',
    rating: 5,
    text: 'Well loved the dedication and management structure. The designer is very thorough and very talented. highly recommended',
  },
  {
    name: 'Daniel Hummel',
    role: 'CEO, Dribble',
    avatar: '/ifti1.jpg',
    rating: 5,
    text: 'There was idea according to the initial concept. The designer stayed reliable and got a lot of creativity on every step. The designer was extremely professional and really enjoyed collaborating',
  },
];

export default function ClientReviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
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
            Client Reviews
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
            <span className="hidden md:block">See All Reviews</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{
                duration: 0.8,
                delay: 0.15 * (index + 1),
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all"
            >
              {/* Header with Avatar and Name */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-200 relative overflow-hidden">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{review.name}</h4>
                    <p className="text-sm text-slate-600">{review.role}</p>
                  </div>
                </div>
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              {/* Review Text */}
              <p className="text-slate-600 leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
