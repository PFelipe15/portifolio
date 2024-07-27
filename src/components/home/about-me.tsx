import Image from 'next/image';
import photo from '../../app/photo-2.jpg';
import { motion } from 'framer-motion';

export default function AboutMeSection() {
  return (
    <section className="flex flex-col gap-8 text-black items-center mt-44 p-8 min-h-[80vh] w-screen bg-slate-200">
      <div className="flex flex-col items-center w-full gap-2 mb-8">
        <motion.h1
          className="text-4xl font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Mim
        </motion.h1>
        <motion.p
          className="text-xl text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
      Estou comprometido em transformar desafios complexos em soluções criativas e eficazes.
        </motion.p>
        <motion.div
          className="w-24 m-8 h-1 bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full container gap-10">

        <div className="flex flex-col max-w-2xl items-start w-full gap-4 lg:w-2/3">
          <motion.h1
            className="text-3xl mb-2 max-w-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Desenvolvendo com Paixão Enquanto Exploro o Mundo.
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.div
            className="h-1 bg-primary mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="mb-4">
              Com uma formação sólida e experiência prática em desenvolvimento web e mobile, estou sempre em busca de novos desafios. Gosto de explorar novas tecnologias e metodologias para criar soluções eficazes e de alta qualidade.
            </p>
            <p className="mb-4">
              Meu objetivo é contribuir para projetos inovadores e colaborar com equipes dinâmicas, sempre focando no crescimento contínuo, tanto profissional quanto da empresa.
            </p>
          </motion.div>
          <motion.button
            className="px-4 py-2 bg-secondary font-semibold rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Entre em Contato
          </motion.button>
        </div>
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative rounded-lg border-r-8 border-primary overflow-hidden">
            <Image src={photo} alt="Workstation" className="object-contain h-96" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
