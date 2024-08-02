/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // importando motion do framer-motion
import logo from "./logo_blue.png";
import { Button } from "@/components/ui/button";
import Felipe from "./DrawKit Vector Illustration Team Work (17).svg";
import { BsInstagram, BsLinkedin, BsQuote } from "react-icons/bs";
import AboutMeSection from "@/components/home/about-me";
import { ArrowRight } from "lucide-react";
import Galeria from "@/components/home/galeria";
import ServiceSection from "@/components/home/services";
import HeroSection from "@/components/home/hero";
import WorkExperience from "@/components/home/work-experience";
import PortfolioSection from "@/components/home/portfolio";
import TestimonialsSection from "@/components/home/testimonials";
import StayInTouchSection from "@/components/home/stay-in";
import Footer from "@/components/home/footer";
import BannerSection from "@/components/home/banner-home";

export default function Home() {
  return (
    <main className="flex min-h-[90vh] p-2 flex-col items-center">
    
<BannerSection />

 


      <AboutMeSection />

      <ServiceSection />

      <HeroSection />

      <WorkExperience />

      <PortfolioSection />
      

<TestimonialsSection/>
      
<StayInTouchSection />
     
     </main>
  );
}
