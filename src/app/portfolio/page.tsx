/* eslint-disable @next/next/no-img-element */
'use client';
import { motion } from 'framer-motion';
import data from '@/lib/dataProjects';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Portfolio() {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    return (
        <div className="flex flex-col items-center justify-center py-8">
            <motion.div
                className="text-center mb-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1 className="text-4xl font-bold" variants={itemVariants}>
                    Portfólio
                </motion.h1>
                <motion.div
                    className="w-20 h-1 bg-primary mx-auto my-4"
                    variants={itemVariants}
                ></motion.div>
            </motion.div>

            <div className="container mx-auto px-4">
                <PhotoProvider>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((item) => (
                            <motion.div
                                key={item.id}
                                className="relative overflow-hidden rounded-lg group transform transition-transform duration-500 hover:scale-105"
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5 }}
                            >
                                <PhotoView src={item.img}>
                                    <img
                                        src={item.img}
                                        alt={item.Descricao}
                                        className="w-full h-full object-cover"
                                    />
                                </PhotoView>
                                <div className="absolute inset-0 flex p-4 items-center justify-center bg-black bg-opacity-85 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <p className="text-center text-white bg-primary rounded-lg text-lg">{item.Descricao}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
        </div>
    );
}
