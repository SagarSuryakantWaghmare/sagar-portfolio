import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionTitle = ({ 
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
      <motion.div className="relative inline-block">
        <motion.span 
          className="absolute -top-6 -left-6 text-5xl opacity-10 text-primary-500 font-bold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title.charAt(0)}
        </motion.span>
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
        <motion.span 
          className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-primary-500/10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ 
            duration: 0.6, 
            delay: 0.5,
            type: "spring",
            stiffness: 200
          }}
        />
      </motion.div>
      
      {subtitle && (
        <motion.p 
          className="mt-4 text-dark-600 dark:text-dark-300 text-lg max-w-2xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;