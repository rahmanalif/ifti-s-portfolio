'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Can you work with wordpress or any existing design?',
    answer: 'Yes, I can work with WordPress and any existing design. I have extensive experience adapting and improving existing systems.',
  },
  {
    question: 'I have an agency. Can I outsource work to you?',
    answer: 'Absolutely! I frequently collaborate with agencies on various projects and can seamlessly integrate into your workflow.',
  },
  {
    question: 'What happens after the design is ready, I support it?',
    answer: 'Yes, I provide ongoing support after the design is completed. We can discuss a maintenance plan that fits your needs.',
  },
  {
    question: 'What do I need to give you to get started?',
    answer: 'I typically need your brand guidelines, content, any existing assets, and a clear understanding of your goals and target audience.',
  },
  {
    question: 'Do you charge for additional revisions?',
    answer: 'The initial package includes a set number of revisions. Additional revisions beyond that can be discussed and may incur extra charges.',
  },
  {
    question: 'Can I collaborate hands-on you? I have an agency',
    answer: 'Yes, I welcome hands-on collaboration and can work closely with your agency team throughout the project.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="glass-card rounded-3xl p-8 md:p-12">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-slate-900"
          >
            FAQ
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 text-slate-900 font-medium group cursor-pointer hover:gap-4 transition-all"
          >
            <span className="hidden md:block">Get in touch</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200">
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
