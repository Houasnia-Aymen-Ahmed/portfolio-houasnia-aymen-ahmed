import Title from "./Title";
import { certificates } from "../data";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <section
      id="Certificates"
      className="flex items-start justify-center flex-col pt-20 pb-6 px-6 md:px-12 overflow-hidden"
    >
      <div className="flex flex-col w-full">
        <Title>Certificates & Achievements</Title>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light-bg-alt dark:bg-dark-bg-alt p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-accent-primary dark:text-accent-primary mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-3">
                {cert.date}
              </p>
              <p className="text-sm text-light-text-primary dark:text-dark-text-primary flex-grow">
                {cert.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
