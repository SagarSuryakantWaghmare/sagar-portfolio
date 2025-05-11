import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowDown, Download } from 'lucide-react';
import Typed from 'typed.js';
import profile from '../Assets/profile.png';
import resume from '../Assets/sagar_waghmare.pdf';
const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: [
          'Full Stack Developer',
          'UI/UX Enthusiast',
          'MERN Stack Expert'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-primary-600 dark:text-primary-400 font-semibold mb-2 block">
                Hello, I'm
              </span>

              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Sagar Waghmare
              </motion.h1>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="text-xl md:text-2xl font-medium text-dark-600 dark:text-dark-300">
                  I'm a <span ref={typedRef}></span>
                </span>
              </motion.div>

              <motion.p 
                className="text-base sm:text-lg mb-8 max-w-2xl text-dark-600 dark:text-dark-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                I build scalable full-stack applications and design intuitive user experiences with 
                a passion for modern, impactful development.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button href="#projects">
                  View My Work
                </Button>
                <Button 
                  variant="outline" 
                  href={resume} 
                  download={true} 
                  className="flex items-center gap-2"
                >
                  Download Resume <Download size={16} />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
            >
              <img 
                src={profile} 
                alt="Profile" 
                className="absolute z-10 inset-0 w-full h-full object-cover rounded-full bg-cover bg-center "
                // style={{ filter: 'grayscale(100%) brightness(0.8)' }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <a href="#about" className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
