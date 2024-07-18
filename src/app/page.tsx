"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // importando motion do framer-motion
import logo from "./logo_blue.png";
import { Button } from "@/components/ui/button";
import Felipe from "./DrawKit Vector Illustration Team Work (17).svg";
import { BsInstagram, BsLink45Deg, BsLinkedin } from "react-icons/bs";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-[90vh] p-4  text-white  flex-col items-center ">
      <motion.header
        initial={{ y: -250, opacity: 0 }} // animação inicial
        animate={{ y: 0, opacity: 1 }} // animação ao aparecer
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 120,
        }} // configuração da transição
        className={`${open_sans.className} flex items-center justify-between container`}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image src={logo} alt="Logo" width={80} height={60} />
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
        >
          <Button className="font-bold">Contrate-me</Button>
        </motion.div>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex container gap-8 flex-grow justify-center items-center"
      >
        <motion.nav
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col gap-10"
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <BsInstagram size={30} />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            <BsLinkedin size={30} />
          </motion.div>
        </motion.nav>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="max-w-4xl flex flex-col gap-8 items-start"
        >
          <h1 className="text-7xl">I’m Web Developer Natalie E. Watson</h1>
          <p>
            I’m Web Developer Natalie E. Watson Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper
            mattis, pulvinar dapibus leop llamcorper, lorem ipsum.
          </p>

          <Button>Ver Mais</Button>
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

      <section className="flex bg-slate-900  w-screen  items-center justify-center  ">
        <div className="flex  gap-5 flex-col items-center ">

        <h1 className="text-4xl ">About-me</h1>
        <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    </main>
  );
}
