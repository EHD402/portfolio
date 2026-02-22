"use client";

import Container from "./components/Container";
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "motion/react";

export default function Home() {
  return (
  <Container>
    <h1 className="text-neutral-100 text-4xl font-primary mt-16 md:mt-32">Erik Hedlund</h1>

    <div className="text-neutral-400 text-lg font-secondary space-y-4 mt-8">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >Hej! I'm Erik Hedlund, a 22-year old web developer from Uppsala, Sweden.</motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
      >I'm currently studying <a className="text-neutral-100 underline underline-offset-4 decoration-neutral-600" href="https://www.uu.se/utbildning/program/kandidatprogram-systemvetenskap-systemutveckling">Software Sciences</a> at Uppsala university, where I primarily learn about the process of developing information systems that can support businesses.</motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
      >Before university I started to learn about programming during high school, where I learned about front-end development. Since then I have primarily worked with tools like <a className="text-neutral-100 underline underline-offset-4 decoration-neutral-600" href="https://react.dev/">React</a>, <a className="text-neutral-100 underline underline-offset-4 decoration-neutral-600" href="https://nextjs.org/">Next.js</a> and <a className="text-neutral-100 underline underline-offset-4 decoration-neutral-600" href="https://tailwindcss.com/">Tailwind</a>. Since starting university I have shifted my focus towards learning back-end development, preferably with <a className="text-neutral-100 underline underline-offset-4 decoration-neutral-600" href="https://dotnet.microsoft.com/en-us/apps/aspnet">ASP.NET</a>.</motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
      >Besides programming during my freetime, I am a big fan of games in the ARPG genre and listening to different genres of metal.</motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
      >If you want to find out more about me, please check out the links below.</motion.p>
      <motion.ul 
        className="text-neutral-100 flex flex-wrap gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.5 }}
      >
        <li className="flex gap-4">
          <a 
            className="flex gap-x-2 items-center border-b border-neutral-600 pb-[2px] w-fit"
            href="https://www.linkedin.com/in/ehedlund/"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
        </li>
        <li>
          <a 
            className="flex gap-x-2 items-center border-b border-neutral-600 pb-[2px] w-fit"
            href="https://github.com/EHD402"
          >
            <FaGithub size={20} />
            Github
          </a>
        </li>
        <li>
          <a 
            className="flex gap-x-2 items-center border-b border-neutral-600 pb-[2px] w-fit"
            href="/ERIK HEDLUND CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileAlt size={20} />
            Resume
          </a>
        </li>
        <li>
          <a 
            className="flex gap-x-2 items-center border-b border-neutral-600 pb-[2px] w-fit"
            href="mailto:erik.hedlund2@proton.me"
          >
            <FaEnvelope size={20} />
            Mail
          </a>
        </li>
      </motion.ul>
    </div>
  </Container>
  );
}
