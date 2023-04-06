import { motion } from "framer-motion";
import Link from "next/link";
import { FiUsers } from 'react-icons/fi';
import { FaLaptopMedical } from 'react-icons/fa';
import { HiStatusOnline } from 'react-icons/hi';

const OurStory = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="md:h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center justify-center relative py-5"
    >
      <div className="md:flex container mx-auto gap-10 md:px-10 px-5 z-20">
        <div className="md:w-1/2 flex items-center justify-center">
          <div>
            <div>
              <Link href="/" className="flex items-center transition duration-1000 text-primary hover:text-secondary">
                <div className="font-semibold">
                  <p className="normal-case sm:text-2xl text-lg">RestRose Valley</p>
                  <p className="sm:text-sm text-xs text-neutral">Ordering & Delivery</p>
                </div>
              </Link>
            </div>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-black mt-5 text-xl md:text-2xl italic"
            >
              Welcome to the RestRose Valley, where you can easily order and have your favorite meals delivered right to your door. We are dedicated to
              providing our customers with a seamless and convenient ordering experience while reducing wait times and providing top-notch customer
              service.
            </motion.p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="cursor-pointer md:p-6 py-6 bg-transparent rounded-lg"
            >
              <div>
                <h5 className="mb-2 uppercase text-2xl font-bold tracking-tight text-primary dark:text-black flex items-center">
                  <FiUsers className="text-3xl text-primary mr-2" />
                  OUR TEAM
                </h5>
                <p className="italic font-normal text-black dark:text-gray-400">
                  Our team of expert chefs, delivery drivers, and customer service representatives work together to ensure your dining experience is
                  nothing short of excellent. We take pride in providing exceptional service to our valued customers.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="cursor-pointer md:p-6 py-6 bg-transparent rounded-lg"
            >
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-accent dark:text-black flex items-center">
                  <FaLaptopMedical className="text-3xl text-accent mr-2" />
                  TRUSTED BY TH
                </h5>
                <p className="italic  font-normal text-black dark:text-gray-400">
                  Our loyal customers trust us for their meal deliveries, and we are committed to maintaining their trust by consistently providing
                  high-quality meals, on-time deliveries, and excellent customer service. Join us today and experience the convenience and reliability
                  of the RestRose Valley.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="cursor-pointer md:p-6 py-6 bg-transparent rounded-lg"
            >
              <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-success dark:text-black flex items-center">
                  <HiStatusOnline className="text-3xl text-success mr-2" />
                  EASY ONLINE ORDERING
                </h5>
                <p className="italic font-normal text-black dark:text-gray-400">
                  With our user-friendly online ordering system, you can easily browse our menu, customize your order, and securely place your order
                  for pickup or delivery. Say goodbye to waiting on hold or standing in line, and say hello to convenient online ordering with the
                  RestRose Valley.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurStory;
