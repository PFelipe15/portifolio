import Image from 'next/image';
import photo from '../../app/photo-2.jpg';
import { motion } from 'framer-motion';

export default function AboutMeSection() {
  return (
    <section className="flex flex-col gap-8  text-black items-center mt-44 p-8 min-h-[80vh] w-screen  bg-slate-200 ">
      <div className="flex flex-col items-center w-full mb-8">
        <motion.h1
          className="text-5xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-2xl   text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </motion.p>
        <motion.div
          className="w-24 m-8 h-1 bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full container   gap-10">

        <div className="flex flex-col max-w-2xl items-start w-full gap-4 lg:w-2/3">
          <motion.h1
            className="text-3xl mb-2 max-w-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Developing With a Passion While Exploring The World.
          </motion.h1>

          <motion.div
          className="w-24 h-1 bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
          <motion.div
            className=" h-1 bg-primary mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className=" mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className="  mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </motion.div>
          <motion.button
            className="px-4 py-2 bg-secondary font-semibold  rounded-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
          Entre em Contato
          </motion.button>
        </div>
        <motion.div
          className="w-full lg:w-1/3"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative rounded-lg  border-r-8 border-primary   overflow-hidden ">
            <Image src={photo} alt="Workstation" className="object-contain h-96  " />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
