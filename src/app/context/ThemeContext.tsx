"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useLayoutEffect } from 'react';

// Use useLayoutEffect on client, fall back to useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isThemeLoaded: boolean;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Start with 'light' theme for SSR to ensure consistency
  const [theme, setTheme] = useState<Theme>('light');
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  // Use effect to determine and set theme on the client side only
  useIsomorphicLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    setIsThemeLoaded(true);

    const root = window.document.documentElement;
    if (initialTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);

  // Effect to handle theme changes after initial load
  useEffect(() => {
    if (!isThemeLoaded) return;
    
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme, isThemeLoaded]);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isThemeLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
};
