import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';
import { Award, Code, Laptop, Trophy } from 'lucide-react';

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  countValue?: number;
  countSuffix?: string;
  countPrefix?: string;
}

const AchievementCard = ({
  icon,
  title,
  description,
  countValue,
  countSuffix = '',
  countPrefix = '',
}: AchievementCardProps) => {
  return (
    <motion.div
      className="card text-center p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className="flex justify-center mb-4 text-primary-600 dark:text-primary-400">
        {icon}
      </div>

      {countValue ? (
        <AnimatedCounter
          from={0}
          to={countValue}
          suffix={countSuffix}
          prefix={countPrefix}
        />
      ) : null}

      <h3 className="text-xl font-semibold mt-2 mb-2">{title}</h3>
      <p className="text-dark-600 dark:text-dark-300">{description}</p>
    </motion.div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy size={40} />,
      title: '4th Rank in SIH',
      description:
        'Achieved 4th place in the Smart India Hackathon Internal Round with the AlumniSynergy project In the Internal Hackathon of the college.',
      countValue: 4,
      countSuffix: 'th',
    },
    {
      icon: <Award size={40} />,
      title: 'College Topper',
      description:
        'Recognized as College Topper 8 times on the Coding Ninjas Leaderboard.',
      countValue: 8,
      countSuffix: 'x',
    },
    {
      icon: <Code size={40} />,
      title: 'Daily Problem Solving',
      description:
        'Active on LeetCode to strengthen Data Structures, Algorithms, and logical thinking.',
      countValue: 365,
      countSuffix: '+',
    },
    {
      icon: <Laptop size={40} />,
      title: 'Project Leadership',
      description:
        'Successfully led multiple development teams on real-world projects.',
      countValue: 5,
      countSuffix: '+',
    },
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Achievements"
          subtitle="Recognitions and milestones in my development journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              countValue={achievement.countValue}
              countSuffix={achievement.countSuffix}
              countPrefix={achievement.countPrefix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
