import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { UseFormData } from "@/Types/hooksType/useForm";


const ContactSection = () => {
  const { register, handleSubmit, formState: { errors  } } = useForm<UseFormData>();

  const onSubmit = () => {

  };

  return (
    <motion.section
      className="py-16 px-8 md:px-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Reach Us</h2>
      <div className="max-w-md mx-auto md:max-w-xl bg-white bg-opacity-90 rounded-lg p-8">
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            className="p-4 border border-purple-500 rounded-lg focus:outline-none"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">
              {errors.name.message}
            </span>
          )}
          <input
            type="email"
            className="p-4 border border-purple-500 rounded-lg focus:outline-none"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message}
            </span>
          )}
          <textarea
            className="p-4 border border-purple-500 rounded-lg focus:outline-none"
            rows={5}
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
          <motion.button
            type="submit"
            className="bg-purple-500 text-white font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-purple-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
