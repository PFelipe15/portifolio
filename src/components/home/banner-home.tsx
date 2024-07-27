/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import Image from 'next/image';
import Felipe from '../../app/DrawKit Vector Illustration Team Work (17).svg';
import Typed, { ReactTyped } from 'react-typed';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const wordVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

export default function BannerSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex container gap-8 flex-grow bg-gradient-to-r from-primary via-red-500 to-pink-700 rounded-md justify-center items-center p-8"
    >
      <motion.nav
        variants={containerVariants}
        className="flex flex-col gap-10"
      >
        <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }} variants={itemVariants}>
          <BsInstagram size={30} />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2, rotate: -10 }} whileTap={{ scale: 0.9 }} variants={itemVariants}>
          <BsLinkedin size={30} />
        </motion.div>
      </motion.nav>

      <motion.div
        variants={itemVariants}
        className="max-w-4xl flex flex-col gap-8 items-start"
      >
        <motion.h1
          className="text-7xl"
        >
          {['Sou', 'o', 'Desenvolvedor', 'Paulo', 'Felipe'].map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={wordVariants}
            >
              {word === 'Desenvolvedor' ? (
                <ReactTyped 
                  strings={['Desenvolvedor']}
                  typeSpeed={100}
                  showCursor={false}
                  className="bg-white rounded-md px-1"
                />
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p variants={itemVariants}>
          Sou desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Com experiência em desenvolvimento web e mobile, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
        </motion.p>

        <motion.div  variants={itemVariants} className='flex gap-4' >
          <Button className='bg-white text-primary'>Ver Mais</Button>
          <Button className='bg-white text-primary'>Baixar Curriculo</Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <Image
          src={Felipe}
          width={900}
          height={800}
          className="object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
