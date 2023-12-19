import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-24">
        <div className="container mx-auto flex flex-col items-center md:justify-between md:flex-row">
            <div>
            <ul className="flex space-x-12">
                <li>
                <Link to="/" className="hover:text-gray-500 text-sm">
                    Home
                </Link>
                </li>
                <li>
                <Link to="/about" className="hover:text-gray-500 text-sm">
                    About
                </Link>
                </li>
                <li>
                <Link to="/projects" className="hover:text-gray-500 text-sm">
                    Projects
                </Link>
                </li>
                <li>
                <Link to="/contact" className="hover:text-gray-500 text-sm">
                    Contact
                </Link>
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
