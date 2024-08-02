/* eslint-disable @next/next/no-img-element */
'use client';
import { FaClock, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md container mx-auto">
            {/* Contact Information Cards */}
            <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                {/* Card 1: Phone */}
                <motion.div
                    className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 ease-in-out"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <FaPhoneAlt className="text-red-500 text-3xl sm:text-4xl mb-4" />
                    <p className="text-base sm:text-lg font-semibold text-gray-800">(86) 98803-4600</p>
                    <p className="text-sm text-gray-600">Entre em contato a qualquer momento!</p>
                </motion.div>

                {/* Card 2: Location */}
                <motion.div
                    className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 ease-in-out"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <FaMapMarkerAlt className="text-red-500 text-3xl sm:text-4xl mb-4" />
                    <p className="text-base sm:text-lg font-semibold text-gray-800">Timon, MA, Brasil</p>
                    <p className="text-sm text-gray-600">Rua 18, Nº 540-Parque Piauí 2</p>
                </motion.div>

                {/* Card 3: Email */}
                <motion.div
                    className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md transition-transform duration-300 ease-in-out"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <FaEnvelope className="text-red-500 text-3xl sm:text-4xl mb-4" />
                    <p className="text-base sm:text-lg font-semibold text-gray-800">PauloFelipeT15@gmail.com</p>
                    <p className="text-sm text-gray-600">E-mail para contato</p>
                </motion.div>
            </div>

            {/* Contact Form and Message Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Entre em Contato</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Seu nome"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                        />
                        <input
                            type="email"
                            placeholder="Seu email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                        />
                        <textarea
                            placeholder="Sua mensagem"
                            className="w-full py-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                        ></textarea>
                        <button type="submit" className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition">
                            Enviar Mensagem
                        </button>
                    </form>
                </motion.div>

                {/* Right Column: Message Me Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='flex items-center flex-col justify-center'
                >
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">Me Envie uma Mensagem</h2>
                    <p className="text-gray-600 mb-4 text-center md:text-left">
                        Estou sempre disponível para discutir novos projetos, ideias criativas ou oportunidades para fazer parte de sua visão.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/pauloofer/" className="text-gray-600 hover:text-red-500 transition-colors duration-300 ease-in-out" aria-label="LinkedIn">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://www.instagram.com/paullofelipe_/" className="text-gray-600 hover:text-red-500 transition-colors duration-300 ease-in-out" aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://behance.net" className="text-gray-600 hover:text-red-500 transition-colors duration-300 ease-in-out" aria-label="Behance">
                            <FaBehance size={24} />
                        </a>
                        <a href="https://github.com/PFelipe15" className="text-gray-600 hover:text-red-500 transition-colors duration-300 ease-in-out" aria-label="GitHub">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
