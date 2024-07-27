'use client'
import React, {  useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import Image, { StaticImageData } from 'next/image';
import { X } from 'lucide-react';
import imageClinica from '../../app/image.png'
import imageBeebrain from '../../app/image2.png'



export default function Galeria() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<StaticImageData | null>(null);
  const [project, setProjects] = useState<{ src: string; width: number; height: number; }[]>([imageClinica,imageBeebrain]);

  return (
    <div>  
        <>
          <Carousel             
            opts={{ align: "center", loop:true }}
            className=" max-w-full mt-8"
          >
            <CarouselContent>
              {project.map((project, index: number) => (
                <CarouselItem
                  key={index}
                  className="flex min-h-[300px]  items-center pl-4 justify-center sm:basis-full md:basis-1/3 lg:basis-1/3"
                >
                  <div onClick={() => {
                    setIsFullScreen(true);
                    setFullScreenImage(project);
                  }} key={index}>
                    <div
                      key={index}
                      className="  flex flex-col items-center justify-center rounded-lg shadow-lg gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
                    >
                      <Image
                        src={project}
                        alt={"Galeria"}
                        width={720}
                        height={500}
                        className="rounded-lg object-cover mb-4 max-h-[400px]"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
        
          </Carousel>
          
       
        </>
     
    </div>
  );
}
