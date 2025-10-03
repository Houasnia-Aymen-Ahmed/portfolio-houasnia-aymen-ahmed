import Title from "./Title";
import { certificates } from "../data";
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <section
      id="Certificates"
      className="flex items-start justify-center flex-col pt-section pb-lg px-lg md:px-2xl overflow-hidden"
    >
      <div className="flex flex-col w-full">
        <Title>Certificates & Achievements</Title>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg sm:gap-xl md:gap-lg mt-xl">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-light-bg-alt dark:bg-dark-bg-alt p-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-h5 font-poppins font-semibold text-accent-primary dark:text-accent-primary-light mb-md">
                {cert.title}
              </h3>
              <p className="text-body-sm text-light-text-secondary dark:text-dark-text-secondary mb-lg font-inter">
                {cert.date}
              </p>
              <p className="text-body-sm text-light-text-primary dark:text-dark-text-primary flex-grow font-inter">
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
