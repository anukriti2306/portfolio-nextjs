import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Portfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Right section - social icons */}
          <div className="flex space-x-6">
            <Link
              href="https://github.com/"
              target="_blank"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://linkedin.com/"
              target="_blank"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
