'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, TrendingUp, Award, Users, Target } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Transformation',
    client: 'RetailCo',
    description: 'Led digital transformation initiative resulting in 300% revenue growth in 18 months.',
    metrics: ['300% Revenue Growth', '50K+ New Customers', '15 Markets Expanded'],
    testimonial: 'Ifti\'s strategic insights transformed our business model and opened new revenue streams.',
  },
  {
    title: 'Startup Acceleration Program',
    client: 'TechVenture',
    description: 'Mentored 25+ early-stage startups through product-market fit and Series A fundraising.',
    metrics: ['$12M+ Raised', '25 Startups', '80% Success Rate'],
    testimonial: 'His mentorship was instrumental in securing our Series A funding.',
  },
  {
    title: 'Market Entry Strategy',
    client: 'GlobalBrand',
    description: 'Designed and executed entry strategy for South Asian market with localized approach.',
    metrics: ['5 Countries', '2M+ Reach', '45% Market Share'],
    testimonial: 'A masterclass in understanding local markets while maintaining global standards.',
  },
  {
    title: 'Operational Excellence',
    client: 'ManufactureCorp',
    description: 'Streamlined operations and supply chain, reducing costs by 40% while improving quality.',
    metrics: ['40% Cost Reduction', '25% Quality Improvement', '$5M Saved'],
    testimonial: 'The ROI from his recommendations exceeded all our expectations.',
  },
  {
    title: 'Digital Marketing Overhaul',
    client: 'BrandStudio',
    description: 'Reimagined digital presence and customer acquisition strategy for B2B SaaS company.',
    metrics: ['500% Lead Growth', '60% Conversion Rate', '3X Pipeline'],
    testimonial: 'His data-driven approach revolutionized our go-to-market strategy.',
  },
  {
    title: 'Strategic Partnership',
    client: 'FinTech Innovate',
    description: 'Facilitated strategic partnerships and ecosystem development for fintech platform.',
    metrics: ['12 Partnerships', '100K+ Users', '5X Growth'],
    testimonial: 'Connected us with the right partners at the right time.',
  },
];

function ProjectCard({ project, index, isInView, hoveredIndex, setHoveredIndex }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Reduced parallax for smoothness
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden border border-slate-200 hover:border-indigo-300 hover:scale-[1.02] bg-white">
        {/* Gradient Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-sky-50/50 -z-10"
        />

        <CardContent className="p-6 space-y-4">
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [20, -20]) }}
            className="flex items-start justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-600 transition-colors text-slate-900">
                {project.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium">{project.client}</p>
            </div>
            <motion.div
              animate={{ scale: hoveredIndex === index ? 1.2 : 1, rotate: hoveredIndex === index ? 15 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </motion.div>
          </motion.div>

          <motion.p
            style={{ y: useTransform(scrollYProgress, [0, 1], [15, -15]) }}
            className="text-slate-600 leading-relaxed"
          >
            {project.description}
          </motion.p>

          {/* Metrics */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [10, -10]) }}
            className="flex flex-wrap gap-2 pt-2"
          >
            {project.metrics.map((metric, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full font-medium"
              >
                {metric}
              </span>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: hoveredIndex === index ? 'auto' : 0,
              opacity: hoveredIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-l-2 border-indigo-600 pl-4 mt-4">
              <p className="text-sm italic text-slate-600">"{project.testimonial}"</p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Portfolio & Case Studies</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Real results for real businesses across diverse industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: TrendingUp, label: 'Projects Completed', value: '50+' },
            { icon: Users, label: 'Happy Clients', value: '35+' },
            { icon: Award, label: 'Success Rate', value: '95%' },
            { icon: Target, label: 'Years Experience', value: '8+' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
