"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // importando motion do framer-motion
import logo from "./logo_blue.png";
import { Button } from "@/components/ui/button";
import Felipe from "./DrawKit Vector Illustration Team Work (17).svg";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import AboutMeSection from "@/components/layout/about-me";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-[90vh] p-2 flex-col items-center">
      <motion.header
        initial={{ y: -250, opacity: 0 }} // animação inicial
        animate={{ y: 0, opacity: 1 }} // animação ao aparecer
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 120,
        }} // configuração da transição
        className={` flex items-center justify-between container`}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Image src={logo} alt="Logo" className="object-cover h-40 w-40 " />
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
        className="flex container gap-8 flex-grow bg-red-100 rounded-md justify-center items-center"
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

      <AboutMeSection />

      <section className="bg-red-200 mt-16 text-black min-h-[70vh] flex gap-16 items-center justify-center flex-col w-screen rounded-tr-[550px] p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h1 className="text-4xl font-semibold">
            What Services I’m Providing
          </h1>
          <p className="text-lg mt-2  ">
            I’m Web Developer Natalie E. Watson Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <div className="w-24 h-[0.2rem] bg-primary mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex  gap-12 justify-center max-w-4xl"
        >
          {[
            {
              title: "Web Development",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
              image:
                "https://websitedemos.net/personal-portfolio-08/wp-content/uploads/sites/1021/2021/02/settings.png",
            },
            {
              title: "App Development",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
              image:
                "https://websitedemos.net/personal-portfolio-08/wp-content/uploads/sites/1021/2021/02/settings.png",
            },
            {
              title: "UI/UX Design",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
              image:
                "https://websitedemos.net/personal-portfolio-08/wp-content/uploads/sites/1021/2021/02/settings.png",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="flex flex-col items-center gap-2 bg-white  p-6 rounded-lg shadow-lg text-center w-72 transition-transform duration-300"
            >
              <Image
                src={service.image}
                width={100}
                height={100}
                alt={service.title}
                className="h-24 w-24 object-contain"
              />
              <h2 className="text-xl mb-2   font-semibold">{service.title}</h2>
              <p className="text-sm  ">{service.description}</p>
              <ArrowRight
                size={20}
                className="border-2 p-4 border-black w-14 h-[0.2rem]4 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative flex bg-center bg-no-repeat bg-hero-pattern bg-cover h-96 w-screen items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center text-white">
          <ArrowRight
            size={20}
            className="border-2 p-4 border-white w-14 h-[0.2rem]4 rounded-full mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Working Process</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </section>
      <div className="w-screen h-screen  rounded-tl-[850px]  rounded-t-[500px] bg-slate-200 pt-32 flex flex-col  gap-8   ">
        <div className="flex items-center flex-col">
          <h1 className="text-4xl font-semibold mb-4">Work Experience</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="w-24 h-[0.2rem] bg-primary mt-4"></div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col max-w-xl rounded-md gap-2 p-10 bg-white">
            <h1 className="font-medium text-xl ">Web Developer</h1>
            <span className="text-primary text-lg mt-4">2015-2018​</span>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex flex-col max-w-xl rounded-md gap-2 p-10 bg-white">
            <h1 className="font-medium text-xl ">Web Developer</h1>
            <span className="text-primary text-lg mt-4">2015-2018​</span>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>

      <section className="w-screen flex flex-col items-center h-[70vh]">
        <div className= "flex flex-col items-center justify-center" >
                <h1 className="text-4xl font-semibold">My portfolio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="w-44 h-[0.2rem] bg-primary mt-4"></div>

        </div>

      </section>
    </main>
  );
}
