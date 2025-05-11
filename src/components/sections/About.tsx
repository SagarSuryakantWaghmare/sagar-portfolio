import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Code, Laptop, PenTool, Terminal } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <motion.div
    className="card p-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
  >
    <div className="mb-4 text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-3 rounded-lg inline-block">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-dark-600 dark:text-dark-300">{description}</p>
  </motion.div>
);

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Building responsive and scalable applications using modern stacks like MERN and RESTful APIs."
    },
    {
      icon: PenTool,
      title: "UI/UX Enthusiast",
      description: "Designing intuitive user interfaces with pixel-perfect detail using Figma and CSS frameworks."
    },
    {
      icon: Laptop,
      title: "MERN Stack Expert",
      description: "Developed real-time dashboards, authentication systems, and admin panels using MongoDB, Express, React, and Node.js."
    },
    {
      icon: Terminal,
      title: "Problem Solver",
      description: "Solving 1–2 LeetCode problems daily with 8-time College Topper rank on Coding Ninjas Leaderboard."
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about me and what drives my passion for development"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
                  alt="Developer coding"
                  className="w-full rounded-lg"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 px-4 py-2 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="font-semibold text-primary-600 dark:text-primary-400">
                  Computer Science Student
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Full Stack Developer | UI/UX Enthusiast | DSA Proficient | Java Lover
            </h3>

            <div className="space-y-4 text-dark-600 dark:text-dark-300 mb-6">
              <p>
                I solve LeetCode problems daily to sharpen my DSA skills and have consistently ranked among the top, being the College Topper 8 times on the Coding Ninjas Leaderboard.
              </p>
              <p>
                I lead and contribute to impactful real-world projects—including Smart India Hackathon prototypes (4th place) and scalable web platforms built with the MERN stack. I'm a third-year Computer Science and Engineering student at Deogiri College of Engineering, striving for a 12 LPA package as a fresher.
              </p>
            </div>

            <p className="mt-6 text-lg font-medium text-primary-600 dark:text-primary-400">
              Currently open to internships and full-time roles. Let’s build something impactful together!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
