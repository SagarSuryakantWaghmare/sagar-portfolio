import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "AlumniSynergy",
      description: "A MERN + React Native project for an Alumni platform (SIH1653), where I served as Team Lead, ranking 4th in the college SIH.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      projectUrl: "#",
      tags: ["React", "Node.js", "MongoDB", "React Native"]
    },
    {
      title: "BoostText",
      description: "A text transformation web app with multiple functionalities to manipulate and enhance text content.",
      image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg",
      projectUrl: "#",
      tags: ["JavaScript", "React", "CSS"]
    },
    {
      title: "InstaNews",
      description: "Instant bite-sized news delivery platform with the slogan 'Instant News, Lasting Impact.'",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
      projectUrl: "#",
      tags: ["React", "News API", "Responsive Design"]
    },
    {
      title: "MaharashtraWonders",
      description: "Tourism-based travelism website with advanced search and filter functionality for exploring Maharashtra.",
      image: "https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg",
      projectUrl: "#",
      tags: ["React", "Node.js", "Express", "MongoDB"]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-dark-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <SectionTitle 
          title="My Projects" 
          subtitle="Check out some of my recent work"
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              projectUrl={project.projectUrl}
              tags={project.tags}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
