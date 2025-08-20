'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion';
import { 
  scaleIn, fadeInUp, fadeInDown, fadeIn, 
  slideInLeft, slideInRight, staggerContainer, 
  cardHoverSmall 
} from '@/utils/animations';

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className='max-w-3xl mx-auto text-center mb-4'
      >
        {/* Profile Image */}
        <motion.div 
          {...scaleIn}
          transition={{ delay: 0.2 }}          
          className='flex flex-col items-center mb-4'
        >
          <Image
            src={"/profile.avif"}
            alt='profile image'
            width={100}
            height={100}
            className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'
          />
        </motion.div>

        {/* Name */}
        <motion.h1 
          className='text-4xl md:text-6xl font-bold mb-6'
          {...fadeInUp}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm <motion.span 
            className='text-primary'
            {...fadeInDown}
            transition={{ delay: 0.8 }}
          >
            Anukriti Sharma
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'
          {...fadeInUp}
          transition={{ delay: 0.4 }}
        >
          Fullstack Development | Agentic AI | Student @ RVITM
        </motion.p>

        {/* Social Links */}
        <motion.div 
          className='flex justify-center space-x-4 mb-8'
          {...slideInLeft}
          transition={{ delay: 0.5 }}
        >
          <motion.a 
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.9 }} 
            transition={{ type: 'spring', stiffness: 300 } as any}
            href="/" 
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.9 }} 
            transition={{ type: 'spring', stiffness: 300 } as any}
            href="/" 
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.9 }} 
            transition={{ type: 'spring', stiffness: 300 } as any}
            href="/" 
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
          >
            <FaTwitter />
          </motion.a>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          className='flex flex-col md:flex-row justify-center gap-4'
          {...slideInRight}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 } as any}
          >
            <Link
              href={"/projects"}
              className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors'
            >
              View Projects
            </Link>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 } as any}
          >
            <Link
              href={"/contact"}
              className='bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-300 hover:text-primary transition-colors'
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero;
