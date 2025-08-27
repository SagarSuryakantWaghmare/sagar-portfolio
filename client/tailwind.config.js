/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          100: 'rgb(255, 243, 224)',
          200: 'rgb(254, 225, 177)',
          300: 'rgb(253, 208, 134)',
          400: 'rgb(253, 191, 96)',
          500: 'rgb(255, 170, 66)',
          600: 'rgb(255, 137, 17)',
          700: 'rgb(230, 121, 9)',
          800: 'rgb(188, 98, 6)',
          900: 'rgb(153, 80, 4)',
        },
        dark: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1', 
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
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