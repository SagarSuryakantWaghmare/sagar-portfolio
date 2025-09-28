/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        robotoSlab: ['Roboto Slab', 'serif'],
      },
      colors: {
        primary: {
          50: '#fff7ed',   // Very light orange
          100: '#ffedd5',  // Light orange
          200: '#fed7aa',  // Soft orange
          300: '#fdba74',  // Medium orange
          400: '#fb923c',  // Bright orange
          500: '#f97316',  // Main orange
          600: '#ea580c',  // Deep orange
          700: '#c2410c',  // Darker orange
          800: '#9a3412',  // Very dark orange
          900: '#7c2d12',  // Deepest orange
        },
        dark: {
          50: '#f8fafc',   // Almost white
          100: '#f1f5f9',  // Very light gray
          200: '#e2e8f0',  // Light gray
          300: '#cbd5e1',  // Medium light gray
          400: '#94a3b8',  // Medium gray
          500: '#64748b',  // Gray
          600: '#475569',  // Dark gray
          700: '#334155',  // Darker gray
          800: '#1e293b',  // Very dark gray
          900: '#0f172a',  // Almost black
        },
        surface: {
          50: '#fafbfc',   // Lightest surface
          100: '#f4f6f8',  // Light surface
          200: '#e6eaef',  // Medium light surface
          300: '#d1d9e0',  // Medium surface
          400: '#9ca3af',  // Medium dark surface
          500: '#6b7280',  // Dark surface
          600: '#4b5563',  // Darker surface
          700: '#374151',  // Very dark surface
          800: '#1f2937',  // Almost black surface
          900: '#111827',  // Black surface
        },
        accent: {
          blue: '#3b82f6',
          green: '#10b981',
          purple: '#8b5cf6',
          pink: '#ec4899',
          yellow: '#f59e0b',
        },
      },
      spacing: {
        '8px': '8px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '40px': '40px',
        '48px': '48px',
        '56px': '56px',
        '64px': '64px',
      },
      borderRadius: {
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
      },
      boxShadow: {
        card: '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
        nav: '0 10px 30px -10px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};