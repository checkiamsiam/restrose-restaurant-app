import { Service, ServiceData } from "@/Types/Interface/Service";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBox, FaClipboard, FaUtensils } from "react-icons/fa";

const servicesData: ServiceData[] = [
  {
    category: "Dine-in",
    services: [
      {
        title: "Gourmet Dining",
        description: "Experience the finest gourmet dining with our expert chefs and unique culinary creations.",
        icon: <FaUtensils size={40} />,
      },
      {
        title: "Elegant Ambience",
        description: "Indulge in the relaxed and elegant ambience of our restaurant with a sophisticated atmosphere.",
        icon: <FaUtensils size={40} />,
      },
      {
        title: "Fine Wines",
        description: "Enjoy a curated selection of fine wines from around the world, carefully chosen to complement your meal.",
        icon: <FaUtensils size={40} />,
      },
    ],
  },
  {
    category: "Takeout",
    services: [
      {
        title: "Convenient Takeout",
        description: "Quick and convenient takeout services to enjoy our delicious meals wherever you go.",
        icon: <FaBox size={40} />,
      },
      {
        title: "Easy Ordering",
        description: "Streamlined online ordering system for a seamless and hassle-free takeout experience.",
        icon: <FaBox size={40} />,
      },
      {
        title: "Safe Packaging",
        description: "Safe and hygienic packaging to ensure the quality and freshness of your takeout orders.",
        icon: <FaBox size={40} />,
      },
    ],
  },
  {
    category: "Catering",
    services: [
      {
        title: "Customized Catering",
        description: "Tailored catering services for special events, parties, and gatherings, customized to your preferences.",
        icon: <FaClipboard size={40} />,
      },
      {
        title: "Experienced Staff",
        description: "Experienced and professional catering team to ensure seamless execution of your events.",
        icon: <FaClipboard size={40} />,
      },
      {
        title: "Wide Menu Selection",
        description: "Wide range of menu options to choose from, including appetizers, main course, desserts, and more.",
        icon: <FaClipboard size={40} />,
      },
    ],
  },
];

const ServiceSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | undefined>("Dine-in");

  const handleCategoryChange = (category: string | undefined) => {
    setActiveCategory(category);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center mb-8">
          {servicesData.map((category) => (
            <motion.button
              key={category.category}
              className={`mr-4 mb-4 px-4 py-2 rounded-lg ${
                activeCategory === category.category ? "bg-indigo-600 text-white" : "bg-gray-300 text-gray-700"
              }`}
              onClick={() => handleCategoryChange(category.category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.category}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {servicesData
            .find((category: ServiceData) => category?.category === activeCategory)
            ?.services?.map((service: Service) => (
              <motion.div key={service?.title} className="bg-white rounded-lg p-6 shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="flex items-center justify-center mb-4">{service?.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service?.title}</h3>
                <p className="text-gray-600">{service?.description}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
