"use client"
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "@/components/Skills";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease-out-back",
      duration : 1200,
      delay: 100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
    
      <Hero />
      <Projects />
      <Contact />
      <About />
     <Skills />
    </main>
  );
}
