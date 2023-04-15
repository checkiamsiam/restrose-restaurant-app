import logoSrc from "@/assets/svg/chef-restaurant-logo-publicdomainvectors.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-900">
      <motion.div
        className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ loop: Infinity, duration: 1.5 }}>
          <Image src={logoSrc} alt="Logo" className="h-16 w-16 mr-4" />
        </motion.div>
        <motion.div className="text-2xl font-semibold text-indigo-900" initial={{ scale: 1.2 }} animate={{ opacity: 1 }}>
          Loading...
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;
