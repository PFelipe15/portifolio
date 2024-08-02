/* eslint-disable @next/next/no-img-element */
'use client';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.div 
            className="bg-primary text-white py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Redes Sociais */}
                <div className="flex space-x-4 mb-4 md:mb-0">
                    {[
                        { href: "https://facebook.com", icon: FaFacebook, label: "Facebook" },
                        { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
                        { href: "https://www.linkedin.com/in/pauloofer/", icon: FaLinkedin, label: "LinkedIn" },
                        { href: "https://github.com/PFelipe15", icon: FaGithub, label: "GitHub" },
                        { href: "https://api.whatsapp.com/send?phone=5586988034600&text=Olá,%20estou%20interessado%20em%20seus%20serviços.%20Poderia%20me%20fornecer%20mais%20informações?", icon: FaWhatsapp, label: "WhatsApp" },
                        { href: "https://www.instagram.com/paullofelipe_/", icon: FaInstagram, label: "Instagram" }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <social.icon size={24} />
                        </motion.a>
                    ))}
                </div>

                {/* Logo */}
                <motion.div 
                    className="mb-4 md:mb-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img src="/logo_blue.png" alt="Logo" className="h-14 bg-white rounded" />
                </motion.div>

                {/* Email */}
                <motion.div
                    className="text-center md:text-right"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p>WhatsApp: (86) 98803-4600</p>
                    <p>Email: <a href="mailto:PauloFelipeT15@gmail.com" className="hover:underline">PauloFelipeT15@gmail.com</a></p>
                </motion.div>
            </div>

            {/* Linha divisória */}
            <motion.div 
                className="border-t border-gray-700 mt-6 pt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <p>Copyright © 2024 Personal Portfolio</p>
            </motion.div>
        </motion.div>
    );
}
