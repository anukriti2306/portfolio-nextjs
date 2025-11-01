'use client'
import React from 'react'
import { 
  FaBriefcase, FaCalendarAlt, FaCode, FaServer, FaTools, FaGraduationCap, 
  FaChevronRight, FaPython, FaJava, FaJs, FaLaptopCode, FaDatabase, 
  FaGitAlt, FaReact, FaNodeJs, FaFlask, FaLaptop, FaCodeBranch, FaDownload
} from 'react-icons/fa' 
import { 
  SiCplusplus, SiHtml5, SiCss3, SiMysql, SiNumpy, SiPandas, SiStreamlit, 
  SiExpress, SiMongodb, SiVercel, SiRender, SiGithub, SiTypescript, 
  SiNextdotjs, SiLangchain, SiScikitlearn, SiMui, SiMapbox, SiPostgresql, 
  SiSupabase, SiFirebase, SiDocker,  SiJupyter 
} from 'react-icons/si';

// Helper for consistent card styling
const cardClassName = `
  bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm 
  border border-gray-200 dark:border-gray-800 
  p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300
  h-full flex flex-col // Added h-full and flex-col for equal height
`;

// Helper for consistent section titles
const sectionTitleClassName = "text-3xl font-bold mb-6 pb-2 border-b-2 border-primary/20";

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8'>
      
      {/* --- HERO BIO SECTION (Button Removed) --- */}
      <section className='text-center mb-20'>
        <h1 className='text-5xl font-extrabold mb-6'>About Me</h1>
        <p className='text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed'>
          I’m a self-driven Computer Science student passionate about building impactful web and AI/ML applications. I am constantly learning and seeking internship opportunities to apply my skills and grow professionally.
        </p>
      </section>

      {/* --- Main Content: Research & Education in a 2-Col Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        
        {/* Research Experience (Left Column) */}
        <section>
          <h2 className={sectionTitleClassName}>Research Experience</h2>
          <div className={cardClassName}>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
              <FaBriefcase className="text-primary text-2xl" /> Research Paper
            </h3>
            <p className="text-primary mb-3 flex items-center gap-2 text-lg">
              <FaCalendarAlt /> IEEE Digital Xplore • <a href="https://ieeexplore.ieee.org/document/10816781" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark transition-colors">View Paper</a>
            </p>
            <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-none pl-0">
              <li className="flex items-start gap-2">
                <FaChevronRight className="text-primary mt-1 flex-shrink-0" />
                <span>
                  Co-authored and presented <strong>“An Automated Alert System for Financial Fraud Detection with Learning-Based Models”</strong> at IEEE CSITSS 2024.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaChevronRight className="text-primary mt-1 flex-shrink-0" />
                <span>
                  Published in IEEE Xplore on Jan 1, 2025. 
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* --- UPDATED EDUCATION SECTION --- */}
        <section>
          <h2 className={sectionTitleClassName}>Education</h2>
          <div className={cardClassName}>
            
            <h3 className="text-2xl font-semibold mb-3 flex !items-start gap-3">
              <FaGraduationCap className="text-primary text-2xl mt-1" /> 
              <span>Bachelor of Engineering</span>
            </h3>

            <h4 className="text-2xl font-semibold mb-3 flex !items-start gap-3">
              <FaLaptop className="text-primary text-2xl mt-1" /> 
              <span>Computer Science and Engineering</span>
            </h4>
            
            <p className="text-primary mb-3 flex items-center gap-2 text-lg">
              <FaCalendarAlt /> 2023 – 2027
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3 text-lg">
              RV Institute of Technology and Management, affiliated to Visvesvaraya Technological University
            </p>
            
            {/* Highlighted CGPA */}
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              <strong>CGPA: 9.46</strong>
            </p>

            {/* --- UPDATED ACHIEVEMENTS LIST --- */}
            <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-none pl-0 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
              <li className="flex items-start gap-2">
                <FaChevronRight className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>RSST Merit Award 2025:</strong> Topped Semester 1 at RVITM with a <strong>9.65 SGPA</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaChevronRight className="text-primary mt-1 flex-shrink-0" />
                <span>
                  <strong>School Topper (Class 12):</strong> Achieved an aggregate of <strong>96.8%</strong> and was the Computer Science topper (98/100). <a href="https://www.brigadeschools.edu.in/the-brigade-school-millenium-jp-nagar/toppers-speak-2" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark transition-colors">[View Recognition]</a>
                </span>
              </li>
            </ul>
          </div>
        </section>
        {/* --- END OF UPDATED EDUCATION SECTION --- */}
      </div> 

      {/* --- Open Source Contributions Section --- */}
      <section className="mb-20">
        <h2 className={sectionTitleClassName}>Open Source Contributions</h2>
        <div className={cardClassName}>
          <h3 className="text-2xl font-semibold mb-3 flex items-center gap-3">
            <FaCodeBranch className="text-primary text-2xl" />
            Hacktoberfest 2025 Participant
          </h3>
          <p className="text-primary mb-3 flex items-center gap-2 text-lg">
            <SiGithub /> <a href="https://github.com/anukriti2306" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark transition-colors">View on GitHub</a>
          </p>
          <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-none pl-0">
            <li className="flex items-start gap-2">
              <FaChevronRight className="text-primary mt-1 flex-shrink-0" />
              <span>
                Actively contributed bug fixes and feature enhancements to <strong>8+ public repositories</strong>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaChevronRight className="text-primary mt-1 flex-shrink-0" />
              <span>
                <strong>Merged PR:</strong> Fixed a broken footer link and improved accessibility on the Personal Finance Tracker project. <a href="https://github.com/neeraj542/Personal-Finance-Tracker/pull/74" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-dark transition-colors">[View PR #74]</a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaChevronRight className="text-primary mt-1 flex-shrink-0" />
              <span>
                Demonstrated full-stack workflow, from raising issues and fixing UI/UX bugs to implementing new features and improving styling.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaChevronRight className="text-primary mt-1 flex-shrink-0" />
              <span>
                Earned the <strong>&quot;Level 1 Contributor&quot;</strong> Holopin badge for active participation.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section>
        <h2 className={sectionTitleClassName}>Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Programming Languages */}
          <div className={cardClassName}>
            <FaCode className='h-10 w-10 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-3'>Programming Languages</h3>
            <ul className='text-gray-700 dark:text-gray-300 space-y-2 list-none pl-0'>
              <li className="flex items-center gap-2"><FaPython className="text-blue-600" /> Python</li>
              <li className="flex items-center gap-2"><FaJava className="text-red-600" /> Java</li>
              <li className="flex items-center gap-2"><FaJs className="text-yellow-500" /> JavaScript</li>
              <li className="flex items-center gap-2"><SiTypescript className="text-blue-500" /> TypeScript</li>
              <li className="flex items-center gap-2"><SiCplusplus className="text-blue-500" /> C / C++</li>
              <li className="flex items-center gap-2"><SiMysql className="text-blue-400" /> SQL</li>
            </ul>
          </div>

          {/* Card 2: Web Frameworks & UI */}
          <div className={cardClassName}>
            <FaReact className='h-10 w-10 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-3'>Web Frameworks & UI</h3>
            <ul className='text-gray-700 dark:text-gray-300 space-y-2 list-none pl-0'>
              <li className="flex items-center gap-2"><FaReact className="text-blue-400" /> React.js</li>
              <li className="flex items-center gap-2"><SiNextdotjs className="text-black dark:text-white" /> Next.js</li>
              <li className="flex items-center gap-2"><FaNodeJs className="text-green-500" /> Node.js</li>
              <li className="flex items-center gap-2"><SiExpress className="text-gray-700 dark:text-white" /> Express.js</li>
              <li className="flex items-center gap-2"><FaFlask className="text-gray-700 dark:text-white" /> Flask</li>
              <li className="flex items-center gap-2"><SiHtml5 className="text-orange-500" /> HTML5</li>
              <li className="flex items-center gap-2"><SiCss3 className="text-blue-500" /> CSS3</li>
              <li className="flex items-center gap-2"><SiMui className="text-blue-500" /> Material UI</li>
            </ul>
          </div>

          {/* Card 3: AI, ML & Data */}
          <div className={cardClassName}>
            <FaLaptopCode className='h-10 w-10 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-3'>AI, ML & Data</h3>
            <ul className='text-gray-700 dark:text-gray-300 space-y-2 list-none pl-0'>
              <li className="flex items-center gap-2"><SiLangchain className="text-purple-600" /> LangChain</li>
              <li className="flex items-center gap-2"><SiScikitlearn className="text-orange-500" /> Scikit-learn</li>
              <li className="flex items-center gap-2"><SiNumpy className="text-purple-600" /> NumPy</li>
              <li className="flex items-center gap-2"><SiPandas className="text-blue-800" /> Pandas</li>
              <li className="flex items-center gap-2"><SiMapbox className="text-blue-600" /> Mapbox GL</li>
            </ul>
          </div>

          {/* Card 4: Databases, Tools & Cloud */}
          <div className={cardClassName}>
            <FaDatabase className='h-10 w-10 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-3'>Databases, Tools & Cloud</h3>
            <ul className='text-gray-700 dark:text-gray-300 space-y-2 list-none pl-0'>
              <li className="flex items-center gap-2"><SiPostgresql className="text-blue-500" /> PostgreSQL (PostGIS)</li>
              <li className="flex items-center gap-2"><SiMongodb className="text-green-600" /> MongoDB</li>
              <li className="flex items-center gap-2"><SiFirebase className="text-yellow-500" /> Firebase</li>
              <li className="flex items-center gap-2"><SiSupabase className="text-green-600" /> Supabase</li>
              <li className="flex items-center gap-2"><FaGitAlt className="text-orange-600" /> Git & GitHub</li>
              <li className="flex items-center gap-2"><SiDocker className="text-blue-500" /> Docker (Basic)</li>
              <li className="flex items-center gap-2"><SiVercel className="text-black dark:text-white" /> Vercel</li>
              <li className="flex items-center gap-2"><SiRender className="text-green-500" /> Render</li>
              <li className="flex items-center gap-2"><SiStreamlit className="text-red-500" /> Streamlit</li>
              <li className="flex items-center gap-2"><SiJupyter className="text-orange-500" /> Jupyter Notebooks</li>
              
            </ul>
          </div>

        </div>
      </section>

    </div> 
  )
}

export default About;