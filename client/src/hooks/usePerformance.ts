import { useEffect } from 'react';

export const usePerformance = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalAssets = () => {
      const criticalImages = [
        '/src/components/Assets/profile.png',
        '/src/components/Assets/Work.png'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize scroll performance
    const optimizeScrolling = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    // Add performance observer for Core Web Vitals
    const observePerformance = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            // Log performance metrics in development
            if (process.env.NODE_ENV === 'development') {
              console.log(`${entry.name}: ${entry.duration}ms`);
            }
          });
        });
        
        observer.observe({ entryTypes: ['measure', 'navigation'] });
      }
    };

    preloadCriticalAssets();
    optimizeScrolling();
    observePerformance();
  }, []);
};
