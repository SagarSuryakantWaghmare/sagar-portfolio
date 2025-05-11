import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SkillRoadmap from '../ui/SkillRoadmap';
import { 
  Code2, 
  Database, 
  FileJson, 
  Figma,
  Github,
  Globe,
  Layout,
  Library,
  Laptop,
  MonitorSmartphone,
  PenTool,
  Server,
  Terminal,
  Webhook
} from 'lucide-react';

interface SkillItemProps {
  icon: React.ReactNode;
  name: string;
  color: string;
  proficiency?: number;
}

const SkillItem = ({ icon, name, color, proficiency = 85 }: SkillItemProps) => (
  <motion.div 
    className={`skill-item group ${color} dark:text-white relative overflow-hidden`}
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ 
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    }}
  >
    <motion.div 
      className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-white via-primary-200 to-transparent"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
    />
    
    <motion.div 
      className="text-2xl mb-2 relative z-10"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {icon}
    </motion.div>
    
    <span className="text-sm font-medium relative z-10">{name}</span>
    
    <motion.div 
      className="absolute bottom-0 left-0 h-1 bg-primary-500 dark:bg-primary-400"
      initial={{ width: 0 }}
      whileInView={{ width: `${proficiency}%` }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    
    <div className="particles absolute inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="particle absolute w-1 h-1 rounded-full bg-white"
          initial={{ 
            x: "50%", 
            y: "50%", 
            scale: 0,
            opacity: 0 
          }}
          whileHover={{ 
            x: [null, `${Math.random() * 100}%`],
            y: [null, `${Math.random() * 100}%`],
            scale: [0, 1],
            opacity: [0, 0.8, 0] 
          }}
          transition={{ 
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <FileJson size={32} />, color: "bg-yellow-100 dark:bg-yellow-900/40 hover:bg-yellow-500", proficiency: 90 },
        { name: "TypeScript", icon: <Code2 size={32} />, color: "bg-blue-100 dark:bg-blue-900/40 hover:bg-blue-500", proficiency: 85 },
        { name: "HTML", icon: <Layout size={32} />, color: "bg-orange-100 dark:bg-orange-900/40 hover:bg-orange-500", proficiency: 95 },
        { name: "CSS", icon: <PenTool size={32} />, color: "bg-purple-100 dark:bg-purple-900/40 hover:bg-purple-500", proficiency: 88 },
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        { name: "React.js", icon: <Globe size={32} />, color: "bg-cyan-100 dark:bg-cyan-900/40 hover:bg-cyan-500", proficiency: 92 },
        { name: "Node.js", icon: <Server size={32} />, color: "bg-green-100 dark:bg-green-900/40 hover:bg-green-500", proficiency: 85 },
        { name: "Express.js", icon: <Webhook size={32} />, color: "bg-gray-100 dark:bg-gray-900/40 hover:bg-gray-500", proficiency: 80 },
        { name: "React Native", icon: <MonitorSmartphone size={32} />, color: "bg-indigo-100 dark:bg-indigo-900/40 hover:bg-indigo-500", proficiency: 75 },
        { name: "Tailwind CSS", icon: <Library size={32} />, color: "bg-teal-100 dark:bg-teal-900/40 hover:bg-teal-500", proficiency: 90 },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <Database size={32} />, color: "bg-emerald-100 dark:bg-emerald-900/40 hover:bg-emerald-500", proficiency: 85 },
        { name: "Firebase", icon: <Server size={32} />, color: "bg-amber-100 dark:bg-amber-900/40 hover:bg-amber-500", proficiency: 80 },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <Terminal size={32} />, color: "bg-red-100 dark:bg-red-900/40 hover:bg-red-500", proficiency: 88 },
        { name: "GitHub", icon: <Github size={32} />, color: "bg-violet-100 dark:bg-violet-900/40 hover:bg-violet-500", proficiency: 85 },
        { name: "VS Code", icon: <Laptop size={32} />, color: "bg-sky-100 dark:bg-sky-900/40 hover:bg-sky-500", proficiency: 90 },
        { name: "Figma", icon: <Figma size={32} />, color: "bg-pink-100 dark:bg-pink-900/40 hover:bg-pink-500", proficiency: 75 },
      ]
    }
  ];

  return (
    <>
      <section id="skills" className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="My Skills" 
            subtitle="A showcase of my technical abilities and expertise"
          />
          
          <div className="card p-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8 last:mb-0">
                <h3 className="text-xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
                  {category.title}
                </h3>
                <div className="skills-container">
                  <div className="skills-track">
                    {[...category.skills, ...category.skills].map((skill, index) => (
                      <SkillItem
                        key={`${skill.name}-${index}`}
                        icon={skill.icon}
                        name={skill.name}
                        color={skill.color}
                        proficiency={skill.proficiency}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24">
            <SectionTitle 
              title="My Journey" 
              subtitle="The path of continuous learning and growth"
            />
            <SkillRoadmap />
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark-50 dark:bg-dark-800/50">
        <div className="container-custom">
          <SectionTitle 
            title="My Skill Development Process" 
            subtitle="How I continuously improve and grow as a developer"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Daily Practice",
                desc: "I dedicate time to practicing coding challenges on platforms like LeetCode to strengthen problem-solving abilities."
              },
              {
                title: "Project-Based Learning",
                desc: "I learn best by building real-world projects, allowing me to apply theoretical knowledge in practical scenarios."
              },
              {
                title: "Continuous Learning",
                desc: "I stay updated with the latest technologies and frameworks through online courses and documentation."
              },
              {
                title: "Code Reviews",
                desc: "I actively participate in code reviews to learn from peers and improve my coding standards."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-dark-600 dark:text-dark-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
