import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowDown, Download } from 'lucide-react';
import Typed from 'typed.js';
import profile from '../../components/Assets/profile.png';
import resume from '../../components/Assets/SagarWaghmare.pdf';
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
              className="w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ maxWidth: '100%', overflow: 'hidden' }}
            >
              <motion.span 
                className="text-primary-600 dark:text-primary-400 font-semibold mb-2 block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Hello, I'm
              </motion.span>

              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.span 
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Sagar Waghmare
                </motion.span>
                <motion.span 
                  className="absolute -left-2 -bottom-2 w-20 h-2 bg-primary-500/30 dark:bg-primary-500/50 z-[-1] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "40%" }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </motion.h1>

              <motion.div
                className="mb-6 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                style={{ maxWidth: '100%', overflow: 'hidden' }}
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
                style={{ maxWidth: '100%', overflow: 'hidden' }}
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
                  className="flex flex-row items-center gap-2"
                >
                  <span>Download Resume</span>
                  <Download size={16} />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              style={{ maxWidth: '100%', overflow: 'hidden' }}
            >
              {/* Decorative background elements */}
              <motion.div 
                className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-4 w-28 h-28 rounded-full bg-primary-200 dark:bg-primary-800/30 z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              />
              <motion.div 
                className="absolute top-1/3 -right-10 w-16 h-16 rounded-full border-4 border-primary-300 dark:border-primary-700/40 z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
              
              {/* Profile image with glowing border */}
              <motion.div
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative z-10 glow-effect"
                animate={{ 
                  boxShadow: [
                    "0 0 10px 2px rgba(var(--primary-500), 0.3)",
                    "0 0 20px 6px rgba(var(--primary-500), 0.6)",
                    "0 0 10px 2px rgba(var(--primary-500), 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full" />
                <img 
                  src={profile} 
                  alt="Profile" 
                  className="absolute z-10 inset-0 w-full h-full object-cover rounded-full bg-cover bg-center"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-primary-600/30 z-20 mix-blend-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.span 
            className="text-xs font-medium text-dark-500 dark:text-dark-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-dark-800 
              shadow-md hover:shadow-lg transition-all duration-300"
            animate={{ 
              y: [0, -6, 0],
            }}
            transition={{ 
              y: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }
            }}
          >
            <a href="#about" className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400
              flex items-center justify-center w-full h-full">
              <ArrowDown size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
