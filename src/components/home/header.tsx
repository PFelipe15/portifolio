/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

export default function HeaderSection() {

    return (
        <motion.header
            initial={{ y: -250, opacity: 0 }} // animação inicial
            animate={{ y: 0, opacity: 1 }} // animação ao aparecer
            transition={{
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
            }} // configuração da transição
            className={`flex items-center z-10 sticky justify-between flex-grow container mx-auto bg-white md:justify-between gap-2 flex-col lg:flex-row top-0 shadow mb-10`}
        >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img src='./logo_blue.png' alt="Logo" className="object-cover h-32 w-32" />
            </motion.div>

            <motion.nav
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex gap-4"
            >
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/"
                >
                    Home
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/about"
                >
                    About
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/portfolio"
                >
                    Portfolio
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="/contact"
                >
                    Contact
                </motion.a>
            </motion.nav>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex gap-4 items-center"
            >
                <Button className="px-4 py-2 ">Contrate-me</Button>
                <a
                    href="/curriculo.pdf" // URL do seu currículo
                    download
                    className="flex items-center justify-center bg-primary text-white px-4 py-2 rounded-md  hover:bg-primary-dark transition duration-300"
                >
                    Baixar Currículo
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=SEUNUMERODEWHATSAPP" // Substitua pelo seu número de WhatsApp
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition duration-300"
                >
                    <FaWhatsapp size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/seuperfil/" // Substitua pelo seu perfil do LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition duration-300"
                >
                    <FaLinkedinIn size={24} />
                </a>
            </motion.div>
        </motion.header>
    );
}
