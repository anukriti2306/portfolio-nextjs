"use client";

import { projects } from '@/contents/projects';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100,
    }
  },
};

const Projects = () => {
  return (
    <section className="py-24 container max-w-7xl mx-auto px-4">
      
      
    {/* --- Section Header --- */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
         Here are some of my recent projects. Click on the links to view the
          source code or the live demo.
        </p>
      </div>
      {/* 1. UPDATED CONTAINER: Use flex-wrap, justify-center, and negative margin */}
      <motion.div 
        className="flex flex-wrap justify-center -m-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          // 2. WRAPPER: Add this new motion.div for padding and width
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="w-full md:w-1/2 lg:w-1/3 p-4" // 2 cols on md, 3 on lg
          >
            {/* 3. ORIGINAL CARD: Now inside the wrapper. Add h-full */}
            <article
              className="h-full group bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm 
                        border border-gray-200 dark:border-gray-800 
                        rounded-lg shadow-md
                        transition-all duration-300 ease-in-out
                        hover:shadow-xl hover:border-primary/50 hover:-translate-y-1
                        flex flex-col" // Add flex-col to make footer stick to bottom
            >
              <div className="relative aspect-video mb-4 rounded-t-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-300 ease-in-out 
                            grayscale-[50%] group-hover:grayscale-0
                            group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* 4. CONTENT WRAPPER: Add flex-1 to push footer down */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 min-h-[6rem]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 5. FOOTER: Add mt-auto to stick to bottom */}
                <div className="flex gap-4 mt-auto pt-2">
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Code</span>
                    </Link>
                  )}

                  {project.demoLink && (
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                      <span>Live Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;