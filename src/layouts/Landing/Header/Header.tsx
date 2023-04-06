import { LandingLayoutHeaderProps } from "@/Types/Interface/ComponentProps/LayoutsProps";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = ({ logoSrc, navConfig }: LandingLayoutHeaderProps) => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  const [transparent, setTransparent] = useState<Boolean>(false);
  const [show, setShow] = useState<Boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const controlNavbar1 = () => {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar

        setShow(true);
      } else {
        // if scroll up show the navbar
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    };

    const controlNavbar2 = () => {
      if (window.scrollY >= 500) {
        setTransparent(true);
      } else {
        setTransparent(false);
      }
    };

    window.addEventListener("scroll", controlNavbar1);
    window.addEventListener("scroll", controlNavbar2);

    return () => {
      window.removeEventListener("scroll", controlNavbar1);
      window.removeEventListener("scroll", controlNavbar2);
    };
  }, [lastScrollY]);
  return (
    <motion.header
      className={`${transparent ? "bg-transparent" : "bg-white"} backdrop-blur-lg shadow fixed top-0 w-full z-50 ${!show ? "shadow-md" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: !show ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container px-4 py-4 mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={logoSrc} alt="Logo" width={50} height={50} />
          <span className="ml-2 text-xl font-bold">RestRose Valley</span>
        </Link>
        <div className="md:block hidden">
          <ul className="flex items-center ">
            {navConfig.map((navOp) => (
              <li key={navOp.label} className="ml-4">
                <Link href={navOp.link} className="text-black hover:text-gray-600 font-medium">
                  {navOp.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:hidden">
          <button type="button" className="text-black hover:text-gray-600 focus:outline-none focus:text-black" onClick={() => setShowMenu(!showMenu)}>
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              {showMenu ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M4 7h16v2H4V7zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M4 7h16v2H4V7zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
              )}
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:flex md:items-center w-full md:w-auto"
            >
              <ul className="flex flex-col md:flex-row list-none md:ml-auto">
                {navConfig.map((navOpt) => (
                  <motion.li
                    key={navOpt.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="mt-3 md:mt-0 md:ml-6"
                  >
                    <Link href={navOpt.link} className="text-black hover:text-gray-600 font-medium">
                      {navOpt.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
