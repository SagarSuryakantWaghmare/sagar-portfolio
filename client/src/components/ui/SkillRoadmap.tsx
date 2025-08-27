import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Trophy, Brain, Target, Star } from 'lucide-react';

interface Milestone {
  icon: React.ReactNode;
  title: string;
  description: string;
  year: string;
}

const milestones: Milestone[] = [
  {
    icon: <Code2 size={24} />,
    title: "Programming Origins",
    description: "Started my journey with web development, learning HTML, CSS, and JavaScript fundamentals.",
    year: "2022"
  },
  {
    icon: <Brain size={24} />,
    title: "Framework Mastery",
    description: "Mastered React.js and Node.js, building full-stack applications and understanding core concepts.",
    year: "2023"
  },
  {
    icon: <Trophy size={24} />,
    title: "First Major Project",
    description: "Led the development of AlumniSynergy, ranking 4th in Smart India Hackathon.",
    year: "2023"
  },
  {
    icon: <Target size={24} />,
    title: "UI/UX Experience",
    description: "Worked as a freelancer on multiple Figma designs for real-world applications.",
    year: "2024"
  },
  {
    icon: <Star size={24} />,
    title: "Advanced Skills",
    description: "Expanded expertise to include React Native, MongoDB, and modern development practices.",
    year: "2024"
  },
  {
    icon: <Rocket size={24} />,
    title: "Future Goals",
    description: "Aiming to master cloud technologies and contribute to open-source projects.",
    year: "2024"
  }
];

const SkillRoadmap: React.FC = () => {
  return (
    <div className="relative py-16">
      {/* Central timeline line with gradient */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400 to-primary-600" />

      {/* Milestones */}
      <div className="relative">
        {milestones.map((milestone, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              className={`relative mb-16 last:mb-0 ${index % 2 === 0 ? 'pr-1/2' : 'pl-1/2'
                }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Content container */}
              <div className={`relative ${index % 2 === 0 ? 'text-right mr-8' : 'ml-8'
                }`}>
                {/* Animated milestone circle */}
                <motion.div
                  className={`absolute top-0 ${index % 2 === 0 ? 'right-[-2.25rem]' : 'left-[-2.25rem]'
                    } w-12 h-12 rounded-full bg-white dark:bg-dark-800 border-4 border-primary-500 flex items-center justify-center`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.3
                  }}
                >
                  <motion.div
                    className="text-primary-600 dark:text-primary-400"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={inView ? { rotate: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {milestone.icon}
                  </motion.div>
                </motion.div>

                {/* Content card with animations */}
                <motion.div
                  className="card p-6 inline-block"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.4
                  }}
                >
                  <motion.div
                    className="text-sm text-primary-600 dark:text-primary-400 mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    {milestone.year}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    {milestone.title}
                  </motion.h3>
                  <motion.p
                    className="text-dark-600 dark:text-dark-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    {milestone.description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillRoadmap;