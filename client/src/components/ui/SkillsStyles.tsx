import React from 'react';

const GlobalStyles: React.FC = () => (
  <style jsx global>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-50%));
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }

    @keyframes shine {
      0% {
        background-position: -100% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    .skills-track {
      display: inline-flex;
      will-change: transform;
      animation: scroll 30s linear infinite;
      white-space: nowrap;
    }

    .skills-track:hover {
      animation-play-state: paused;
    }    .skills-container {
      overflow: hidden;
      position: relative;
      width: 100%;
      -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
      mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
      border-radius: 0.5rem;
      margin: 1rem 0;
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
    
    .floating {
      animation: float 6s ease-in-out infinite;
    }
    
    .pulsate {
      animation: pulse 3s ease-in-out infinite;
    }
  `}</style>
);

export default GlobalStyles;
