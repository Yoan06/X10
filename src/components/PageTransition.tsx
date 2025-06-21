import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      scale: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const isServicesPage = location.pathname.includes('/services/');

  // Effet pour scroller vers le haut lors des changements de page
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const getCustomVariants = () => {
    if (isServicesPage) {
      return {
        ...pageVariants,
        initial: {
          ...pageVariants.initial,
          x: 50, // Entrée par la droite pour les pages de services
        },
        exit: {
          ...pageVariants.exit,
          x: -50, // Sortie par la gauche pour les pages de services
        },
      };
    }
    return pageVariants;
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={getCustomVariants()}
        className={`page-content ${isServicesPage ? 'services-page' : ''}`}
        onAnimationStart={() => {
          // Assure un scroll instantané au début de l'animation
          window.scrollTo(0, 0);
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 