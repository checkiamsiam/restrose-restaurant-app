import { motion } from "framer-motion";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4 mb-8">
          <div className="w-full   lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a leading technology company specializing in web and mobile app development. Our mission is to create innovative and
              user-friendly solutions that empower businesses and individuals.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              1234 Main Street
              <br />
              New York, NY 10001
              <br />
              info@example.com
              <br />
              +1 (123) 456-7890
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex">
              <li className="mr-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <FaFacebook className="text-2xl" />
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <FaTwitter className="text-2xl" />
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400 transition duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                className="flex-grow bg-gray-800 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-500"
                placeholder="Enter your email address"
              />
              <motion.button
                type="submit"
                className="
                bg-indigo-600 hover:bg-indigo-700 transition duration-300 rounded-r-md px-6 py-2 focus:outline-none focus:ring focus:ring-indigo-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-gray-400 text-center">
            &copy; 2023 Your Company. All rights reserved. |{" "}
            <a href="/privacy" className="text-indigo-600 hover:text-indigo-700 transition duration-300">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="text-indigo-600 hover:text-indigo-700 transition duration-300">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
