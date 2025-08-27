import { useEffect, useState } from 'react';

export const useOptimizedScroll = (callback: (scrollY: number) => void, delay: number = 16) => {
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastExecTime = 0;

    const throttledScroll = (scrollY: number) => {
      const currentTime = Date.now();

      if (currentTime - lastExecTime > delay) {
        callback(scrollY);
        lastExecTime = currentTime;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          callback(scrollY);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };

    const handleScroll = () => throttledScroll(window.scrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [callback, delay]);
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
