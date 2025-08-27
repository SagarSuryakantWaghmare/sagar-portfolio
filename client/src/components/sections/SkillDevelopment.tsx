import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  BookOpen, 
  Route, 
  LineChart, 
  Award, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface StageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  index: number;
}

// StageCard Component
const StageCard: React.FC<StageCardProps> = ({ icon, title, description, status, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const statusColors: Record<string, string> = {
    completed: 'bg-green-500',
    'in-progress': 'bg-primary-500',
    upcoming: 'bg-gray-300 dark:bg-gray-600'
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: index * 0.1 + 0.2
      }
    }
  };

  const checkmarkVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.5
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full overflow-visible"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{ maxWidth: '100%', transformOrigin: 'center' }}
    >
      <motion.div 
        className="card p-6 hover:shadow-lg transition-all duration-300 w-full"
        whileHover={{
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
        }}
        style={{ maxWidth: '100%', overflow: 'hidden' }}
      >
        <div className="flex items-start gap-4">
          <motion.div 
            variants={iconVariants}
            className={`p-3 rounded-lg ${
              status === 'completed' ? 'bg-green-100 dark:bg-green-900/30' :
              status === 'in-progress' ? 'bg-primary-100 dark:bg-primary-900/30' :
              'bg-gray-100 dark:bg-gray-800'
            }`}
          >
            {icon}
          </motion.div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              <motion.span 
                className={`w-2 h-2 rounded-full ${statusColors[status]}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              />
            </div>
            <p className="text-dark-600 dark:text-dark-300">{description}</p>
          </div>
        </div>
        
        {status === 'completed' && (
          <motion.div
            className="absolute -top-1 -right-1 bg-green-500 text-white p-1 rounded-full"
            variants={checkmarkVariants}
            initial="hidden"
            animate="visible"
          >
            <CheckCircle size={16} />
          </motion.div>
        )}
      </motion.div>
      
      {index < 5 && (
        <div className="hidden md:flex items-center justify-center my-4 overflow-hidden">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.5
              }
            } : {}}
            style={{ width: 24, height: 24, overflow: 'hidden' }}
          >
            <ArrowRight className="text-primary-500 dark:text-primary-400" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

// SkillDevelopment Component
const SkillDevelopment = () => {
  const stages = [
    {
      icon: <Target className="text-primary-600 dark:text-primary-400" size={24} />,
      title: "Assessment Phase",
      description: "Evaluate current skill level and identify areas for improvement through comprehensive testing.",
      status: 'completed'
    },
    {
      icon: <BookOpen className="text-primary-600 dark:text-primary-400" size={24} />,
      title: "Goal Setting",
      description: "Define clear, measurable objectives and create a timeline for skill acquisition.",
      status: 'completed'
    },
    {
      icon: <Route className="text-primary-600 dark:text-primary-400" size={24} />,
      title: "Learning Path",
      description: "Customize your learning journey based on assessment results and career goals.",
      status: 'in-progress'
    },
    {
      icon: <LineChart className="text-primary-600 dark:text-primary-400" size={24} />,
      title: "Progress Tracking",
      description: "Monitor advancement through interactive dashboards and regular check-ins.",
      status: 'in-progress'
    },
    {
      icon: <Award className="text-primary-600 dark:text-primary-400" size={24} />,
      title: "Skill Evaluation",
      description: "Regular assessment of acquired skills through practical projects and challenges.",
      status: 'upcoming'
    },
    {
      icon: <CheckCircle className="text-primary-600 dark:text-primary-400" size={24} />,
      title: "Achievement Milestones",
      description: "Celebrate progress and unlock new opportunities as you reach key milestones.",
      status: 'upcoming'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="section-padding bg-dark-50 dark:bg-dark-800/50 overflow-hidden">
      <div className="container-custom overflow-hidden">
        <SectionTitle 
          title="Skill Development Process" 
          subtitle="A structured approach to mastering new skills and achieving your goals"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          style={{ maxWidth: '100%', overflow: 'visible', willChange: 'transform' }}
        >
          {stages.map((stage, index) => (
            <StageCard
              key={stage.title}
              icon={stage.icon}
              title={stage.title}
              description={stage.description}
              status={stage.status}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillDevelopment;
