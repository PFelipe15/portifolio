'use client'
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaBehance, FaWhatsapp } from 'react-icons/fa';

export default function About() {
  const skills = [
    { name: 'JavaScript', level: 85 },
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 75 },
    { name: 'Visual Basic', level: 70 },
    { name: 'C#', level: 65 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkHover = {
    whileHover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  const iconHover = {
    whileHover: { color: "#0073b1", transition: { duration: 0.2 } },
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className="text-4xl font-bold" variants={itemVariants}>
          Sobre Mim
        </motion.h1>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto my-4"
          variants={itemVariants}
        ></motion.div>
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between max-w-6xl w-full px-4">
        <motion.div
          className="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/3"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.img
            src="./Solutions.png"
            alt="Foto de perfil"
            className="rounded-lg shadow-lg w-full"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div
          className="lg:w-2/3 lg:pl-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-semibold mb-4"
            variants={itemVariants}
          >
            Prazer, eu sou Paulo Felipe Torres Araujo, tenho 22 anos
          </motion.h2>
          <motion.p className="mb-4" variants={itemVariants}>
            Sou um desenvolvedor apaixonado por criar soluções de software inovadoras. Busco constantemente aprender e aplicar novas tecnologias, e tenho experiência em desenvolvimento tanto frontend quanto backend. Atualmente, estou em busca de uma posição desafiadora como Programador, onde possa aplicar minhas habilidades e colaborar com uma equipe dinâmica.
          </motion.p>
          <motion.p className="mb-4" variants={itemVariants}>
            Tenho formação técnica em Informática para Internet, com foco em desenvolvimento web e mobile. Minhas principais habilidades incluem JavaScript, HTML, CSS, Visual Basic e C#. Já trabalhei em diversas áreas, desde criação de sistemas de gestão até plataformas web responsivas com integração de APIs.
          </motion.p>
          <motion.p className="mb-4 font-bold" variants={itemVariants}>
            paulofelipet15@gmail.com
          </motion.p>
          <motion.p className="mb-4 font-bold" variants={itemVariants}>
            (86) 98803-4600
          </motion.p>
          <motion.p className="mb-4 font-bold" variants={itemVariants}>
            www.linkedin.com/in/pauloofer
          </motion.p>

          <motion.div
            className="flex gap-4 items-center mt-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.a 
                href="./CurriculoReformulado-Dev.pdf" 
                download 
                className="bg-primary text-white py-2 px-6 rounded-full"
                {...linkHover}
              >
                Baixar CV
              </motion.a>
            </motion.div>

            <motion.div className="flex space-x-4" variants={itemVariants}>
              <motion.a href="www.linkedin.com/in/pauloofer" className="text-primary" {...iconHover}>
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a href="#" className="text-primary" {...iconHover}>
                <FaInstagram size={24} />
              </motion.a>
              <motion.a href="https://wa.me/5586988034600" className="text-primary" {...iconHover}>
                <FaWhatsapp size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="max-w-6xl w-full mt-12 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl font-semibold mb-4" variants={itemVariants}>
          Desenvolvedor Frontend e Backend
        </motion.h2>
        <motion.p className="mb-8" variants={itemVariants}>
          Minha experiência inclui o desenvolvimento de componentes para sistemas internos, criação de plataformas web responsivas, e integração de ferramentas como APIs. No meu último trabalho, atuei como programador em uma consultoria, desenvolvendo sistemas de gestão e ferramentas para empresas de telemarketing e call-centers, utilizando Visual Basic e C#. Atualmente, realizo trabalhos como freelancer, desenvolvendo plataformas web dinâmicas e responsivas.
        </motion.p>
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {skills.map(skill => (
            <motion.div key={skill.name} variants={itemVariants}>
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  className="bg-primary h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
