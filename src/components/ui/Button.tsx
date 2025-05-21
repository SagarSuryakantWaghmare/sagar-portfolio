import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  download,
  target,
  rel,
  type = 'button',
}) => {
  const baseClasses = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`;
    const buttonMotion = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: variant === 'primary' 
        ? '0 10px 15px -3px rgba(255, 137, 17, 0.3), 0 4px 6px -2px rgba(255, 137, 17, 0.1)' 
        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      y: -3
    },
    tap: { 
      scale: 0.98, 
      boxShadow: 'none',
      y: 0
    }
  };
  
  // For the ripple effect
  const rippleAnimation = {
    hidden: { 
      opacity: 0,
      scale: 0 
    },
    visible: { 
      opacity: [0, 0.5, 0], 
      scale: [0, 1.8, 2],
      transition: {
        duration: 0.8
      }
    }
  };
  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseClasses} relative overflow-hidden`}
        download={download}
        target={target}
        rel={rel}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonMotion}
        onClick={onClick}
      >
        <motion.span 
          className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none"
          initial="hidden"
          whileTap="visible"
          variants={rippleAnimation}
        >
          <span className="absolute inset-0 rounded-lg bg-white opacity-30"></span>
        </motion.span>
        <motion.span 
          className="relative z-10"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={`${baseClasses} relative overflow-hidden`}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonMotion}
    >
      <motion.span 
        className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none"
        initial="hidden"
        whileTap="visible"
        variants={rippleAnimation}
      >
        <span className="absolute inset-0 rounded-lg bg-white opacity-30"></span>
      </motion.span>
      <motion.span 
        className="relative z-10"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

export default Button;