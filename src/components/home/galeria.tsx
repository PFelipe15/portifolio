/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Image from 'next/image';
import { motion } from 'framer-motion';
import data from '@/lib/dataProjects';
import { X } from 'lucide-react';
import { FaReact, FaNode, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaJs, FaDatabase } from 'react-icons/fa'; // Adicione outros ícones conforme necessário
import Autoplay from "embla-carousel-autoplay"
import { SiFirebase, SiMongodb, SiNextdotjs, SiNotion, SiPuppeteer, SiVite } from 'react-icons/si';
import { MdAnimation } from 'react-icons/md';

interface Project {
  id: number;
  titulo: string;
  img: string;
  Descricao: string;
  link: string | null;
  linkBuild: string | null;
  tecnologias: string[];
}

const getIcon = (tech:string) => {
  switch (tech.toLowerCase()) {
    case 'react':
      return <FaReact />;
    case 'node':
      return <FaNodeJs />;
    case 'html':
      return <FaHtml5 />;
    case 'css':
      return <FaCss3Alt />;
    case 'javascript':
      return <FaJs />;
    case 'next.js':
      return <SiNextdotjs />;
    case 'firebase firestore':
      return <SiFirebase />;
    case 'vite.js':
      return <SiVite />;
    case 'framer motion':
      return <MdAnimation />;
    case 'cms':
      return <SiNotion />;
    case 'notionapi':
      return <SiNotion />;
    case 'mongodb':
      return <SiMongodb />;
    case 'nosql':
      return <FaDatabase />;
    case 'puppeteer':
      return <SiPuppeteer />;
    default:
      return null;
  }
};

export default function Galeria() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  useEffect(() => {
    setProjects(data); // Adicione .data aqui para acessar o array de projetos
    setIsLoading(false);
  }, []);

  const handleImageClick = (img: string) => {
    setFullScreenImage(img);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
    setIsFullScreen(false);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Carousel
            opts={{ loop: true }}
            className="w-screen mt-8"
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="flex min-h-[300px] items-center pl-4 justify-center sm:basis-full md:basis-1/3 lg:basis-1/3"
                >
                  <motion.div
                    key={project.id}
                    className="relative flex flex-col items-center justify-center rounded-lg shadow-lg gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={project.img}
                      alt={project.titulo}
                      className="rounded-lg object-cover mb-4 w-2xl  h-72 cursor-pointer"
                      onClick={() => handleImageClick(project.img)}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center p-4 rounded-lg text-white opacity-0"
                    >
                      <h3 className="text-lg font-bold">{project.titulo}</h3>
                      <p className="text-sm">{project.Descricao}</p>
                      <div className="flex gap-2 mt-2">
                        {project.tecnologias.map((tec) => (
                          <div key={tec} className="text-2xl">
                            {getIcon(tec)}
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-4">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-4 py-2 rounded"
                          >
                            Código
                          </a>
                        )}
                        {project.linkBuild && (
                          <a
                            href={project.linkBuild}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-white px-4 py-2 rounded"
                          >
                            Visualizar
                          </a>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {isFullScreen && fullScreenImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <button onClick={handleCloseFullScreen} className="absolute top-4 right-4 text-white">
                <X size={32} />
              </button>
              <Image
                src={fullScreenImage}
                alt="Full Screen"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
