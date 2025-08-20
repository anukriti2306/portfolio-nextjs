import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaCode, FaServer, FaTools, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>

      {/* bio section */}
      <section className='mb-16'>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>
          description of me
        </p>
      </section>

      {/* skills section */}
      <section className='mb-16'>
        <h2 className='section-title'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
          {/* Frontend Card */}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-secondary space-y-2'>
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>

          {/* Backend Card */}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaServer className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-secondary space-y-2'>
              <li>Node.js / Express</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>REST APIs / GraphQL</li>
            </ul>
          </div>

          {/* Tools & Others Card */}
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaTools className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='text-secondary space-y-2'>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Firebase</li>
              <li>Vercel / Render</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* experience */}
      <section className="mb-16">
        <h2 className="section-title">Experiences</h2>

        <div className="max-w-3xl mx-auto space-y-8">

          {/* Internship Experience */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
              <FaBriefcase className="text-primary" /> Software Development Intern
            </h3>
            <p className="text-primary mb-2 flex items-center gap-2">
              <FaCalendarAlt /> Motiveminds • Jun 2024 – Aug 2024
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Worked on building and maintaining a MERN stack web application for internal tools.</li>
              <li>Assisted in developing REST APIs and integrating them with the frontend.</li>
              <li>Collaborated with a small team of 4 developers, gaining hands-on startup experience.</li>
            </ul>
          </div>     

        </div>
      </section>

      {/* education */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-8">

          {/* Education Card */}
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
            <p className="text-secondary mb-2">
              CGPA: 9.41
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Data Structures and Applications</li>
              <li>Probability and Statistics</li>
              <li>OOPS Using Java</li>
              <li>Database Management Systems (DBMS)</li>
              <li>Analysis and Design of Algorithms</li>
              <li>Linear Algebra</li>
              <li>Computer Networks</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About;
