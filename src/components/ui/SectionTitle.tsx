import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div 
      className={`mb-12 ${alignmentClasses[align]} max-w-3xl`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-bold text-3xl md:text-4xl relative inline-block">
        {title}
        <motion.span 
          className="absolute bottom-0 left-0 h-1 bg-primary-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </h2>
      {subtitle && (
        <p className="mt-4 text-dark-600 dark:text-dark-300 text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;