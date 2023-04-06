import iftarBanner from "@/assets/image/Green Yellow Iftar Party Invitation Banner.png";
import iftarBanner2 from "@/assets/image/Brown Beige Simple Islamic Happy Iftar Banner.png";
import happyFood from "@/assets/image/yellow minimalist healthy food banner.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import ThemeButton from "../Common/Button";

const HomeBanner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      <div className="relative z-10 h-screen">
        <Image className="absolute w-full h-full object-cover" src={iftarBanner} alt="Banner 1" />
        <motion.div
          className="absolute z-10 text-center text-white bottom-1/4 sm:left-[15%] md:left-1/4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Restaurant</h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Delicious Food Awaits You
          </motion.p>
          <ThemeButton title="View Menu" />
        </motion.div>
      </div>
      <div className="relative h-screen">
        <Image className="absolute w-full h-full object-cover" src={iftarBanner2} alt="Banner 2" />
        <motion.div
          className="absolute z-10 text-center text-white bottom-1/4 sm:left-[15%] md:left-1/4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">Indulge in Culinary Delights</h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Taste the Best Dishes
          </motion.p>
          <ThemeButton title="View Menu" />
        </motion.div>
      </div>
      <div className="relative h-screen">
        <Image className="absolute w-full h-full object-cover" src={happyFood} alt="Banner 3" />
        <motion.div
          className="absolute z-10 text-center text-white bottom-1/4 sm:left-[15%] md:left-1/4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">Indulge in Culinary Delights</h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Unforgettable Dining Experience
          </motion.p>
          <ThemeButton title="View Menu" />
        </motion.div>
      </div>
    </Slider>
  );
};

export default HomeBanner;
