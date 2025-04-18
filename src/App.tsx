import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.div
          key="hero"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Hero />
        </motion.div>
        <motion.div
          key="about"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <About />
        </motion.div>
        <motion.div
          key="skills"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Skills />
        </motion.div>
        <motion.div
          key="portfolio"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Portfolio />
        </motion.div>
        <motion.div
          key="experience"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Experience />
        </motion.div>
        <motion.div
          key="contact"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Contact />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;