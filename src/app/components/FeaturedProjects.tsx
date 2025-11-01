"use client";

import { projects } from '@/contents/projects'; // Your project data
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';

// --- Animation Variants ---
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

// --- Helper for the modern card styling ---
const cardClassName = `
  w-full max-w-md h-full group bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm 
  border border-gray-200 dark:border-gray-800 
  rounded-lg shadow-md
  transition-all duration-300 ease-in-out
  hover:shadow-xl hover:border-primary/50 hover:-translate-y-1
  flex flex-col
`;

const FeaturedProjects = () => {
  // Get only the first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    // Add padding to separate it from the Hero section
    <section className="pt-12 pb-24 container max-w-7xl mx-auto px-4">
     {/* --- Section Header --- */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Here are a few of my recent projects. Click the button in my bio to see them all.
        </p>
      </div>

      {/* --- Responsive Grid (same as your /projects page) --- */}
      <motion.div 
        className="grid gap-8 justify-items-center grid-cols-[repeat(auto-fit,minmax(350px,1fr))]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Map over just the 3 featured projects */}
        {featuredProjects.map((project) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            className={cardClassName}
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
          </motion.article>
        ))}
      </motion.div>

      {/* --- "View All" Button REMOVED --- */}
      
    </section>
  );
};

export default FeaturedProjects;