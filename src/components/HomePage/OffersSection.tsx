import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaHamburger, FaPizzaSlice } from "react-icons/fa";
import pizza from "@/assets/image/pizza.jpg";
import dish from "@/assets/image/A_lunch_platter_of_Assamese_cuisine.jpg";
import burger from "@/assets/image/Classic-homemade-hamburger-1024x683.jpg";
import Image from "next/image";
import { Menu } from "@/Types/Interface/Service";

const MenuSection = () => {
  const menuData : Menu[] = [
    {
      title: "Specialty Dish",
      description: "Our chef's speciality dish made with fresh ingredients.",
      price: "$14.99",
      image: dish,
      icon: <FaUtensils />,
    },
    {
      title: "Classic Burger",
      description: "Juicy beef patty, lettuce, tomato, and cheese, thi-chicken",
      price: "$9.99",
      image: burger,
      icon: <FaHamburger />,
    },
    {
      title: "Margherita Pizza",
      description: "Freshly baked pizza with tomato, mozzarella, and basil.",
      price: "$12.99",
      image: pizza,
      icon: <FaPizzaSlice />,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">From Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-lg p-6 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative mb-4 h-40">
                <Image src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                <div className="absolute top-0 right-0 p-2 bg-yellow-400 text-white text-sm font-semibold rounded-tr-lg">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">{item.price}</p>
                <button className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-500 transition duration-300">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
