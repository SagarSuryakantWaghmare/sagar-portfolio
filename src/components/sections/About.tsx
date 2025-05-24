import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { Code, Laptop, PenTool, Terminal } from 'lucide-react';
import Work from '../Assets/Work.png';
interface FeatureCardProps {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <motion.div
    className="card p-6 shine-effect"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    whileHover={{ 
      y: -10, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "rgba(var(--primary-500), 0.3)"
    }}
  >
    <motion.div 
      className="mb-4 text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-3 rounded-lg inline-block"
      whileHover={{ 
        rotate: [0, -10, 10, -5, 5, 0], 
        scale: 1.1,
        transition: { duration: 0.5 }
      }}
    >
      <Icon size={24} />
    </motion.div>
    <motion.h3 
      className="text-xl font-semibold mb-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {title}
    </motion.h3>
    <motion.p 
      className="text-dark-600 dark:text-dark-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      {description}
    </motion.p>
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-5  w-20 h-20 border-2 border-primary-300 dark:border-primary-700 rounded-lg z-0"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
              
              {/* Image wrapper with animations */}
              <motion.div 
                className="rounded-lg overflow-hidden z-10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
                
                <motion.img
                  src={Work}
                  alt="Developer coding"
                  className="w-full rounded-lg relative z-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Overlay decorative element */}
                <motion.div 
                  className="absolute -bottom-3  w-16 h-16 bg-primary-400 dark:bg-primary-600 rounded-full z-[-1] opacity-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6 }}
                />
              </motion.div>
              
              {/* Label badge */}
              <motion.div
                className="absolute -bottom-6  bg-white dark:bg-dark-800 px-5 py-3 rounded-lg shadow-lg z-20"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ 
                  y: -3, 
                  boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)"
                }}
              >
                <motion.p 
                  className="font-semibold text-primary-600 dark:text-primary-400"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Computer Science Student
                </motion.p>
              </motion.div>
              
              {/* Years experience badge */}
              <motion.div
                className="absolute -top-4 right-8 bg-primary-500 dark:bg-primary-600 text-white px-3 py-2 rounded-full shadow-lg z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200,
                  delay: 0.8 
                }}
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <span className="text-sm font-semibold">3+ Years Coding</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 50 }}
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
                I lead and contribute to impactful real-world projects—including Smart India Hackathon prototypes (4th place) and scalable web platforms built with the MERN stack. I'm a third-year Computer Science and Engineering student at Deogiri College of Engineering, striving for a good package as a fresher.
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
              // @ts-ignore
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
