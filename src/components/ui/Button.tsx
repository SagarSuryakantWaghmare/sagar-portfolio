import React from 'react';
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

const Button: React.FC<ButtonProps> = ({
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
        : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
    },
    tap: { scale: 0.98 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        download={download}
        target={target}
        rel={rel}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonMotion}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonMotion}
    >
      {children}
    </motion.button>
  );
};

export default Button;