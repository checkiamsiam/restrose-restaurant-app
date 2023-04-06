import { ButtonProps } from "@/Types/Interface/ComponentProps/ButtonProps";
import { motion } from "framer-motion";
const ThemeButton = ({ onClick, title }: ButtonProps) => {
  return (
    <motion.button
    className="block mx-auto mt-8 bg-indigo-600 hover:bg-indigo-700 transition duration-300 rounded-lg px-6 py-2 text-white focus:outline-none focus:ring focus:ring-indigo-500"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    >
      {title}
    </motion.button>
  );
};

export default ThemeButton;
