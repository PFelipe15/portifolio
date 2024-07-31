/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Criamos soluções web personalizadas que atendem às suas necessidades e objetivos, garantindo uma experiência de usuário excepcional.",
    image:
      "https://websitedemos.net/personal-portfolio-08/wp-content/uploads/sites/1021/2021/02/settings.png",
  },
  {
    title: "Desenvolvimento de Aplicativos",
    description:
      "Desenvolvemos aplicativos móveis intuitivos e funcionais para diversas plataformas, melhorando a acessibilidade e a interação com os usuários.",
    image:
      "https://websitedemos.net/personal-portfolio-08/wp-content/uploads/sites/1021/2021/02/settings.png",
  },
  {
    title: "Desenvolvimento Desktop",
    description:
      "Criamos aplicações desktop robustas e seguras, que atendem às necessidades específicas de negócios e proporcionam uma experiência de usuário eficiente.",
    image:
      "https://websitedemos.net/personal-portfolio-08/wp-content/uploads/sites/1021/2021/02/settings.png",
  },
  {
    title: "Automação de Processos Robóticos (RPA)",
    description:
      "Implementamos soluções de RPA para automatizar processos repetitivos e aumentar a eficiência operacional, liberando tempo para tarefas mais estratégicas.",
    image:
      "https://websitedemos.net/personal-portfolio-08/wp-content/uploads/sites/1021/2021/02/settings.png",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-red-200 mt-16 text-black min-h-[70vh] flex flex-col items-center p-8 w-screen rounded-tr-[550px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-8"
      >
        <h1 className="text-4xl font-semibold">Meus Serviços</h1>
        <p className="text-lg mt-2">
          Ofereço uma gama de serviços para atender às suas necessidades tecnológicas e criar soluções que realmente fazem a diferença.
        </p>
        <div className="w-24 h-[0.2rem] bg-primary mt-4"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-wrap gap-12 justify-center max-w-7xl"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, translateY: -5 }}
            className="flex flex-col items-center gap-4 bg-white p-4 rounded-lg shadow-lg text-center max-w-sm transition-transform duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-24 w-24 object-contain"
            />
            <h2 className="text-xl mb-2 font-semibold">{service.title}</h2>
            <p className="text-sm">{service.description}</p>
            <BsArrowRight
              size={20}
              className="border-2 p-2 border-black w-12 h-12 rounded-full cursor-pointer"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceSection;
