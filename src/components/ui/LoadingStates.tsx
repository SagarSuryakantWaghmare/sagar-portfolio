import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'image' | 'card';
}

export const LoadingSkeleton = ({ className = '', variant = 'text' }: LoadingSkeletonProps) => {
  const baseClasses = "bg-gray-200 dark:bg-gray-700 animate-pulse rounded";
  
  const variants = {
    text: "h-4 w-3/4",
    image: "w-full h-48",
    card: "w-full h-64"
  };

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      <motion.div
        className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
};

export const PageLoader = () => (
  <motion.div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-dark-900"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="text-center">
      <motion.div
        className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.p 
        className="text-gray-600 dark:text-gray-400"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  </motion.div>
);
