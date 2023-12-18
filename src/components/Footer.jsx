import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-24">
        <div className="container mx-auto flex flex-col items-center md:justify-between md:flex-row">
            <div>
            <ul className="flex space-x-12">
                <li>
                <a href="/" className="hover:text-gray-500 text-sm">
                    Home
                </a>
                </li>
                <li>
                <a href="/about" className="hover:text-gray-500 text-sm">
                    About
                </a>
                </li>
                <li>
                <a href="/projects" className="hover:text-gray-500 text-sm">
                    Projects
                </a>
                </li>
                <li>
                <a href="/contact" className="hover:text-gray-500 text-sm">
                    Contact
                </a>
                </li>
            </ul>
        </div>
        <div>
          <p className="text-md font-bold">Dung Pham 2024</p>
          <p className="text-sm">Student & Developer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
