import { motion } from "framer-motion";
import Galeria from './galeria';

const PortfolioSection = () => {
  return (
    <section className="max-w-screen   justify-center relative flex pt-8 flex-col items-center h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="text-2xl md:text-4xl font-semibold">Meu Portfólio</h1>
        <p className=" p-4  text-center md:p-0 md:text-justify">Veja alguns dos projetos e trabalhos que desenvolvi ao longo da minha carreira.</p>
        <div className="w-44 h-[0.2rem] bg-primary mt-4"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col items-center justify-center"
      >
        <Galeria />
      </motion.div>
    </section>
  );
};

export default PortfolioSection;
