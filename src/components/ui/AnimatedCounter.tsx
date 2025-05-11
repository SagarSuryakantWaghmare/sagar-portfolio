import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2000,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(from);
  const countRef = useRef<NodeJS.Timeout | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const step = Math.abs(to - from) / (duration / 50);
      let current = from;
      
      if (countRef.current) {
        clearInterval(countRef.current);
      }
      
      countRef.current = setInterval(() => {
        current += step;
        
        if ((from < to && current >= to) || (from > to && current <= to)) {
          setCount(to);
          if (countRef.current) clearInterval(countRef.current);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);
      
      return () => {
        if (countRef.current) {
          clearInterval(countRef.current);
        }
      };
    }
  }, [inView, from, to, duration]);

  return (
    <div ref={ref} className="font-bold text-3xl md:text-4xl text-primary-600 dark:text-primary-400">
      {prefix}{count}{suffix}
    </div>
  );
};

export default AnimatedCounter;