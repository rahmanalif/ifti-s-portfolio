// Subtle Apple-like scroll animation configs
export const scrollAnimationVariants = {
  // Subtle fade up - for headings
  fadeUp: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // Apple's default easing
    },
  },

  // Subtle fade in - for text content
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },

  // Scale in - for cards
  scaleIn: {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },

  // Slide from left - for list items
  slideLeft: {
    initial: { opacity: 0, x: -16 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },

  // Slide from right - for accents
  slideRight: {
    initial: { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0 },
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Stagger children config
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08, // Subtle stagger
    },
  },
};
