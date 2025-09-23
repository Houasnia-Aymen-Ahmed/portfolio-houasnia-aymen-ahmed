import Title from "./Title";
import { skills } from "../data";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "General Skills",
      skills: skills.general,
      color: "text-blue-500"
    },
    {
      title: "Technical Skills", 
      skills: skills.technical,
      color: "text-green-500"
    },
    {
      title: "Frameworks & Tools",
      skills: skills.frameworks,
      color: "text-purple-500"
    }
  ];

  return (
    <section
      id="Skills"
      className="flex items-start justify-center flex-col pt-20 pb-6 px-6 md:px-12 overflow-hidden"
    >
      <div className="flex flex-col w-full">
        <Title>Skills</Title>
      </div>
      
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            className="bg-light-bg-alt dark:bg-dark-bg-alt p-6 rounded-lg shadow-lg border border-light-border dark:border-dark-border"
          >
            <h3 className={`text-xl font-semibold ${category.color} mb-4 text-center`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: categoryIndex * 0.2 + skillIndex * 0.05 
                  }}
                  className="px-3 py-1 bg-accent-primary/10 dark:bg-accent-primary/20 text-accent-primary dark:text-accent-primary text-sm rounded-full border border-accent-primary/20 dark:border-accent-primary/30 hover:bg-accent-primary/20 dark:hover:bg-accent-primary/30 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
