'use client'

// We only need the icons
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  return (
    // Increased vertical padding for a more spacious feel
    <div className="container max-w-7xl mx-auto py-24 px-4">
      <h1 className="text-5xl font-extrabold mb-8 text-center">
        Contact Me
      </h1>
      
      {/* Centered the content container */}
      <div className="max-w-2xl mx-auto text-center">
        
        {/* "Get in Touch" Text */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities. The best way to reach me is by email.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          
          {/* Email Card (Clickable) */}
          <a 
            href="mailto:anukriti2306@gmail.com" 
            className="group bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm 
                       border border-gray-200 dark:border-gray-800 
                       p-6 rounded-lg shadow-md hover:shadow-lg transition-all 
                       flex items-center gap-4 hover:border-primary/50"
          >
            <FaEnvelope className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <div>
              <h3 className="font-semibold text-lg text-left">Email Me</h3>
              <p className="text-secondary text-left">
                anukriti2306@gmail.com
              </p>
            </div>
          </a>
          
          {/* Location Card (Not clickable) */}
          <div 
            className="group bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm 
                       border border-gray-200 dark:border-gray-800 
                       p-6 rounded-lg shadow-md
                       flex items-center gap-4"
          >
            <FaMapMarkerAlt className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-lg text-left">Location</h3>
              <p className="text-secondary text-left">Bengaluru, Karnataka, India</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}