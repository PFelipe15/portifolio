import { motion } from "framer-motion";
import { Button } from "../ui/button";

const StayInTouchSection = () => {
  return (
    <section className="w-screen h-[40vh] flex items-center justify-center flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center items-center gap-4 flex-col"
      >
        <h1 className="font-semibold text-2xl">Fique em Contato</h1>
        <p className="max-w-lg text-center">
          Mantenha-se atualizado com nossas novidades e atualizações. Entre em contato e não perca nada!
        </p>
        <div className="w-24 h-[0.1rem] bg-primary mt-4"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex gap-4"
      >
        <input
          className="text-base font-normal border-2 border-primary p-2"
          placeholder="Digite seu endereço de e-mail"
          type="email"
        />
        <Button>Inscrever-se</Button>
      </motion.div>
    </section>
  );
};

export default StayInTouchSection;
