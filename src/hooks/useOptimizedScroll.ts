import { useEffect, useState, useCallback } from 'react';

// Throttle function to limit scroll event frequency
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: any[]) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

export const useOptimizedScroll = (callback: (scrollY: number) => void, delay: number = 16) => {
  const throttledCallback = useCallback(throttle(callback, delay), [callback, delay]);
  
  useEffect(() => {
    const handleScroll = () => throttledCallback(window.scrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttledCallback]);
};

export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useOptimizedScroll((position: number) => {
    setScrollY(position);
  });
  
  return scrollY;
};

// Smooth scroll with better performance
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed navbar
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};
