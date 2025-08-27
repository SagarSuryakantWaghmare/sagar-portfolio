import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import portfolioImage from '../Assets/ProjectsImg/portfolio.png';
import freeflowImage from '../Assets/ProjectsImg/freeflow.png';
import leetcodeTrackerImage from '../Assets/ProjectsImg/leetcodeTracker.png';
import startupSphereImage from '../Assets/ProjectsImg/invowave.png';
import textBoosterImage from '../Assets/ProjectsImg/textbooster.png';
import NarutoImage from '../Assets/ProjectsImg/Naruto.png';

interface Project {
  title: string;
  description: string;
  image: string;
  projectUrl: string;
  tags: string[];
  label: string;
}

const Projects = () => {
  const projects: Project[] = [
  {
    title: "portfolio 💼",
    description: "A modern, responsive personal portfolio website of Sagar Suryakant Waghmare — Full Stack Developer | UI/UX Enthusiast | MERN Stack Developer — built using React, Tailwind CSS, and Framer Motion.",
    image: portfolioImage,
    projectUrl: "https://sagar-portfolio-dun.vercel.app",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    label: "live"
  },
  {
    title: "FreeFlow Chat",
    description: "Sounds like a great name for a peer-to-peer (P2P) communication platform that ensures seamless interaction without obstacles and no data storage. 🚀",
    image: freeflowImage,
    projectUrl: "https://freeflow-three.vercel.app/",
    tags: ["React", "P2P"],
    label: "live demo"
  },
  {
    title: "LeetCode Info Tracker",
    description: "A web application built with React and Vite to track LeetCode progress. It displays the number of questions solved in different difficulty levels: Easy, Medium, and Hard. Ideal for developers looking to visualize their coding journey and progress.",
    image: leetcodeTrackerImage,
    projectUrl: "https://leetcode-info-tracker.vercel.app",
    tags: ["React", "Vite"],
    label: "live demo"
  },
  {
    title: "StartupSphere",
    description: "StartupSphere is a dynamic platform designed to showcase innovative startups and their pitches to potential investors, partners, and enthusiasts. Whether you're a startup looking for exposure or an investor searching for the next big thing, StartupSphere connects innovators with opportunities.",
    image:startupSphereImage,
    projectUrl: "https://invowave.vercel.app",
    tags: ["React", "Startups"],
    label: "live demo"
  },
  {
    title: "textbooseter",
    description: "This web application allows users to input text and receive essential information about the sentences they type. It provides functionalities such as converting text to uppercase or lowercase, copying text to the clipboard, clearing the input, and removing extra spaces.",
    image: textBoosterImage,
    projectUrl: "https://text-booster.vercel.app",
    tags: ["JavaScript", "React"],
    label: "live demo"
  },
  {
    title: "Naruto Ninja Runner",
    description: "Experience the thrill of ninja adventure as Naruto dashes through obstacles in this addictive, offline-ready game, reminiscent of the classic dino runner! it is a beginner developer game.",
    image: NarutoImage,
    projectUrl: "https://action-game-of-naruto.vercel.app",
    tags: ["Game", "JavaScript"],
    label: "live demo"
  },
];

  return (
    <section id="projects" className="section-padding bg-dark-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <SectionTitle 
          title="My Projects" 
          subtitle="Check out some of my recent work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              projectUrl={project.projectUrl}
              tags={project.tags}
              label={project.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
