import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-100 dark:bg-dark-800 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Sagar.dev</h3>
            <p className="text-dark-600 dark:text-dark-300">Full Stack Developer | UI/UX Enthusiast</p>
          </div>
          
          <div className="flex space-x-4">
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a 
              href="mailto:contact@example.com" 
              className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-700 text-center">
          <p className="text-dark-500 dark:text-dark-400">
            &copy; {currentYear} Sagar Suryakant Waghmare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
