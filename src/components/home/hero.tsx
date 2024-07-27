/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="relative flex bg-center bg-no-repeat bg-cover h-[450px] w-screen items-center justify-center text-center bg-hero-pattern">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative   flex flex-col items-center text-white p-4 md:p-8"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center z"
        >
          <BsArrowRight
            size={24}
            className="border-2 p-3 border-white w-16 h-16 rounded-full mb-4 cursor-pointer"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Processo de Trabalho</h1>
          <p className="text-base md:text-lg leading-relaxed bg-primary p-2">
            "A verdadeira inovação começa quando desafiamo-nos a pensar diferente."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
