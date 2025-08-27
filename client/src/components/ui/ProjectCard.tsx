import Button from './Button';
import LazyImage from './LazyImage';
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
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const MAX_CHARS = 120;
  const shouldTruncate = description.length > MAX_CHARS;
  const shortDescription = shouldTruncate ? 
    description.substring(0, MAX_CHARS) + '...' : 
    description;

  return (
    <div className="project-card group h-full flex flex-col bg-white dark:bg-dark-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <LazyImage 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {label && (
          <div className="absolute top-4 right-4 z-20 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {label}
          </div>
        )}
        
        <div className="absolute top-4 left-4 z-20 flex gap-2 flex-wrap">
          {tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-dark-800 relative z-20 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-dark-900 dark:text-white">
          {title}
        </h3>
        
        <div className="text-dark-600 dark:text-dark-300 mb-4 flex-grow">
          <p>{expanded ? description : shortDescription}</p>
          {shouldTruncate && (
            <button 
              onClick={() => setExpanded(!expanded)}
              className="text-primary-500 hover:text-primary-600 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp size={14} />
                </>
              ) : (
                <>
                  Read More <ChevronDown size={14} />
                </>
              )}
            </button>
          )}
        </div>
        
        <div className="flex gap-4 mt-auto">
          <Button 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 flex-grow"
          >
            <span className="flex items-center gap-2">
              Visit Project
              <ExternalLink size={16} />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            href="#"
            className="flex items-center gap-2"
          >
            <span className="flex items-center gap-2">
              Code
              <Github size={16} />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
