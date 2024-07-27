import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 rounded-lg">
      <motion.div
        className="container mx-auto flex flex-col items-center justify-between gap-8 md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-semibold">Felipe Services</h1>
          <p className="mt-2 text-center md:text-left">
            Soluções completas em desenvolvimento e tecnologia para suas necessidades. Conecte-se conosco para transformar suas ideias em realidade.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <h2 className="text-xl font-medium">Siga-me</h2>
          <div className="flex gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-white"
            >
              <FaFacebookF size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-white"
            >
              <FaTwitter size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-white"
            >
              <FaLinkedinIn size={20} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-white"
            >
              <FaInstagram size={20} />
            </motion.a>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto mt-8 text-center border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Felipe Services. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
