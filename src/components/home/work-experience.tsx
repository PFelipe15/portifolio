import { motion } from "framer-motion";

const WorkExperienceSession = () => {
  return (
    <div className="container rounded-tl-[450px]   rounded-t-[500px]   bg-slate-200 p-10  flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center flex-col"
      >
        <h1 className="text-4xl font-semibold mb-4">Experiência Profissional</h1>
        <p>Experiências e conquistas que moldaram minha carreira como desenvolvedor.</p>
        <div className="w-24 h-[0.2rem] bg-primary mt-4"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex items-center justify-center gap-8 flex-wrap"
      >
        {[
          {
            title: "Programador Junior - Focare Consultoria",
            duration: "2023 - 2024",
            description:
              "Criação de RPA e manipulação de RPA, construção de sistemas de gestão para Desktop e ferramentas para empresas de telemarketing e call-centers. Utilizando Visual Basic e C#.",
          },
          {
            title: "Desenvolvedor - Freelancer Beelive Solutions / Clínica Urovida",
            duration: "2024",
            description:
              "Criação de plataforma web responsiva, com blog interno e páginas dinâmicas, com integração a Notion-Api CMS para incremento de postagens.",
          },
          {
            title: "Desenvolvedor e Técnico em Informática - Exército Brasileiro - Engenharia",
            duration: "2021 - 2022",
            description:
              "Desenvolvimento de componentes para o sistema interno do batalhão e manutenção de computadores.",
          },
        ].map((experience, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col max-w-xl rounded-md gap-2 p-10 bg-white shadow-lg"
          >
            <h1 className="font-medium text-xl">{experience.title}</h1>
            <span className="text-primary text-lg mt-4">{experience.duration}</span>
            <p className="text-lg">{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkExperienceSession;
