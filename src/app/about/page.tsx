'use client'
import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaCode, FaServer, FaTools, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>

      {/* Bio section */}
      <section className='mb-16'>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
          I’m a self-driven Computer Science student passionate about building impactful web and AI/ML applications. I am constantly learning and seeking internship opportunities to apply my skills and grow professionally.
        </p>
      </section>

      {/* Skills section */}
      <section className='mb-16'>
        <h2 className='section-title'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {/* Programming Languages */}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Programming Languages</h3>
            <ul className='text-secondary space-y-2'>
              <li>Python, Java, JavaScript</li>
              <li>C / C++</li>
              <li>SQL, HTML, CSS</li>
            </ul>
          </div>

          {/* Technologies & Libraries */}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaServer className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Technologies & Libraries</h3>
            <ul className='text-secondary space-y-2'>
              <li>NumPy, Pandas</li>
              <li>Flask, Streamlit</li>
              <li>React, Node.js, Express</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Tools & Deployment */}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaTools className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Other Skills</h3>
            <ul className='text-secondary space-y-2'>
              <li>Deployment: Vercel, Render, Railway</li>
              <li>Version Control: Git, GitHub</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Research Experience */}
<section className="mb-16">
  <h2 className="section-title">Research Experience</h2>

  <div className="max-w-3xl mx-auto space-y-8">
    <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <FaBriefcase className="text-primary" /> Research Paper
      </h3>
      <p className="text-primary mb-2 flex items-center gap-2">
        <FaCalendarAlt /> IEEE Digital Xplore • <a href="https://ieeexplore.ieee.org/document/10816781" target="_blank" rel="noopener noreferrer" className="text-primary underline">View Paper</a>
      </p>
      <ul className="text-secondary space-y-2 list-disc list-inside">
        <li>
          Co-authored and presented <strong>“An Automated Alert System for Financial Fraud Detection with Learning-Based Models”</strong> at IEEE CSITSS 2024.
        </li>
        <li>
          Published in IEEE Xplore on Jan 1, 2025. 
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* Education */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaGraduationCap className="text-primary" /> Bachelor of Engineering, Computer Science and Engineering
            </h3>
            <p className="text-primary mb-2 flex items-center gap-2">
              <FaCalendarAlt /> 2023 – 2027
            </p>
            <p className="text-secondary mb-2">
              RV Institute of Technology and Management, affiliated to Visvesvaraya Technological University
            </p>
            <p className="text-secondary mb-2">CGPA: 9.41</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
