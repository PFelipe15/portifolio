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
                className="flex gap-4 items-center flex-col md:flex-row"
            >
                <a href="https://api.whatsapp.com/send?phone=5586988034600&text=Olá,%20estou%20interessado%20em%20seus%20serviços.%20Poderia%20me%20fornecer%20mais%20informações?" 
   target="_blank" 
   rel="noopener noreferrer"
   className="bg-primary text-white p-2 hover:scale-105 transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
   Contrate-me
</a>
                <a
                    href="./CurriculoReformulado-Dev.pdf" // URL do seu currículo
                    download
                    className="bg-primary text-white p-2  hover:scale-105 transition-all inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                    Baixar Currículo
                </a>

                <div className='flex gap-4 m-2'>

                <a
                  href="https://api.whatsapp.com/send?phone=5586988034600&text=Olá,%20estou%20interessado%20em%20seus%20serviços.%20Poderia%20me%20fornecer%20mais%20informações?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark hover:scale-105 transition duration-300"
                >
                    <FaWhatsapp size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/seuperfil/" // Substitua pelo seu perfil do LinkedIn
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition duration-300 hover:scale-105"
                >
                    <FaLinkedinIn size={24} />
                </a>
                </div>
            </motion.div>
        </motion.header>
    );
}
