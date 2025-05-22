import { motion } from 'framer-motion';
import Button from './Button';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  projectUrl: string;
  tags?: string[];
  label?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  projectUrl,
  tags = [],
  label,
}) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_CHARS = 120;
  const shouldTruncate = description.length > MAX_CHARS;
  const shortDescription = shouldTruncate ? 
    description.substring(0, MAX_CHARS) + '...' : 
    description;  return (
    <motion.div 
      className="project-card group h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        y: -15,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="glow-border"></div>
      <motion.div 
        className="relative w-full h-48 overflow-hidden rounded-t-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 z-10"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img 
          src={image} 
          alt={title}
          whileHover={{ scale: 1.1, rotate: -1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
          <motion.div 
          className="absolute top-4 right-4 z-20 flex gap-2 flex-wrap justify-end"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white 
                border border-white/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
        <motion.div 
        className="p-6 bg-white dark:bg-dark-800 relative z-20 flex-grow flex flex-col"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3 
          className="text-xl font-semibold mb-3"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.div 
          className="text-dark-600 dark:text-dark-300 mb-4 flex-grow"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>{expanded ? description : shortDescription}</p>
          {shouldTruncate && (
            <button 
              className="text-primary-500 hover:text-primary-600 font-medium flex items-center gap-1 mt-2 transition-colors"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>Show less <ChevronUp size={16} /></>
              ) : (
                <>Read more <ChevronDown size={16} /></>
              )}
            </button>
          )}
        </motion.div>
          <motion.div 
          className="flex gap-4 mt-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >          <Button 
            href={`${projectUrl}`}
            target={"_blank"}
            variant="outline"
            className="flex-1 justify-center group/btn"
          >
            <motion.span className="flex items-center gap-2">
              {label || "Live Demo"}
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ExternalLink size={16} />
              </motion.span>
            </motion.span>
          </Button>
          
          <Button 
            href={projectUrl}
            className="flex-1 justify-center group/btn"
          >
            <motion.span className="flex items-center gap-2">
              Source Code
              <motion.span
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Github size={16} />
              </motion.span>
            </motion.span>
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 -z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.15 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 -z-20 opacity-0 
          group-hover:opacity-50 blur-lg transition-all duration-300"
      />
    </motion.div>
  );
};

export default ProjectCard;