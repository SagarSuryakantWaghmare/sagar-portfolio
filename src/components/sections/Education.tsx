import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-dark-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications"
        />
        
        {/* Bachelor of Engineering */}
        <motion.div 
          className="max-w-3xl mx-auto card p-8 mb-8 hover-lift shine-effect"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-3 rounded-full">
              <BookOpen size={28} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl md:text-2xl font-semibold">Bachelor of Engineering in Computer Science</h3>
                <span className="px-2 py-1 bg-primary-100 dark:bg-dark-700 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                  Present
                </span>
              </div>
              <div className="flex items-center text-dark-500 dark:text-dark-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>2022 - 2026 (Expected)</span>
              </div>
              <p className="text-dark-600 dark:text-dark-300 mb-4">
                Currently in the third year of my Computer Science and Engineering degree at Deogiri College of Engineering, Maharashtra.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium">Key Achievements:</h4>
                <ul className="list-disc list-inside text-dark-600 dark:text-dark-300 space-y-1">
                  <li>Maintained excellent academic standing throughout the program</li>
                  <li>Participated in multiple hackathons and coding competitions</li>
                  <li>Led technical workshops for junior students</li>
                  <li>College topper in competitive programming contests</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* HSC (12th) */}
        <motion.div 
          className="max-w-3xl mx-auto card p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-3 rounded-full">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Higher Secondary Education (HSC) - Science
              </h3>
              <div className="flex items-center text-dark-500 dark:text-dark-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>2020 - 2022</span>
              </div>
              <p className="text-dark-600 dark:text-dark-300 mb-2">
                Completed my 12<sup>th</sup> grade in Science (PCM with Computer Science) from <strong>Deogiri College, Chhatrapati Sambhajinagar</strong>.
              </p>
              <p className="text-dark-600 dark:text-dark-300">
                <strong>Percentage:</strong> 86.17%
              </p>
            </div>
          </div>
        </motion.div>

        {/* SSC (10th) */}
        <motion.div 
          className="max-w-3xl mx-auto card p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex gap-4 md:gap-6 items-start">
            <div className="text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-dark-700 p-3 rounded-full">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Secondary School Education (SSC)
              </h3>
              <div className="flex items-center text-dark-500 dark:text-dark-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>2019 - 2020</span>
              </div>
              <p className="text-dark-600 dark:text-dark-300 mb-2">
                Completed my 10<sup>th</sup> grade from <strong>Dnyanesh Vidya Mandir, Chhatrapati Sambhajinagar</strong>.
              </p>
              <p className="text-dark-600 dark:text-dark-300">
                <strong>Percentage:</strong> 91.40%
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
0