import React from 'react';

const GlobalStyles: React.FC = () => (
  <style jsx global>{`
    /* Base Animation Keyframes */
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(0.98);
      }
    }

    @keyframes shine {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    @keyframes glow {
      0%, 100% {
        filter: drop-shadow(0 0 0.75rem rgba(var(--primary-500), 0.5));
      }
      50% {
        filter: drop-shadow(0 0 1.5rem rgba(var(--primary-500), 0.8));
      }
    }

    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
    }

    @keyframes typewriter {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blink {
      from { border-right-color: rgba(var(--primary-500), 0.8); }
      to { border-right-color: transparent }
    }

    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 0.8;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /* Component Animation Classes */
    .floating {
      animation: float 6s ease-in-out infinite;
    }

    .floating-slow {
      animation: float 8s ease-in-out infinite;
    }

    .floating-fast {
      animation: float 4s ease-in-out infinite;
    }

    .pulsate {
      animation: pulse 3s ease-in-out infinite;
    }

    .shine-effect {
      position: relative;
      overflow: hidden;
    }
    
    .shine-effect::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      background-size: 200% 100%;
      animation: shine 8s infinite;
      pointer-events: none;
      z-index: 1;
    }

    .glow-effect {
      animation: glow 3s ease-in-out infinite;
    }

    .ripple-effect {
      position: relative;
    }

    .ripple-effect::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: inherit;
      opacity: 0;
      transform: scale(0);
      background: rgba(255, 255, 255, 0.3);
    }

    .ripple-effect:hover::after {
      animation: ripple 1s ease-out;
    }

    .spin-effect {
      transition: transform 0.6s ease-in-out;
    }

    .spin-effect:hover {
      transform: rotate(360deg);
    }

    .typewriter {
      overflow: hidden;
      border-right: 0.15em solid rgba(var(--primary-500), 0.8);
      white-space: nowrap;
      margin: 0;
      animation: 
        typewriter 4s steps(40) 1s forwards,
        blink 0.75s step-end infinite;
    }

    .smooth-transition {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
    }

    /* Mobile/Performance Optimization */
    @media (prefers-reduced-motion: reduce) {
      .floating, .floating-slow, .floating-fast, .pulsate, .shine-effect::before,
      .glow-effect, .ripple-effect::after, .spin-effect, .typewriter {
        animation: none !important;
        transition: none !important;
      }
    }

    /* Subtle UI Animations */
    .hover-lift {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .hover-lift:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    .hover-grow {
      transition: transform 0.3s ease;
    }

    .hover-grow:hover {
      transform: scale(1.05);
    }
  `}</style>
);

export default GlobalStyles;