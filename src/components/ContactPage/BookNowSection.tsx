import { motion } from "framer-motion";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const ReservationSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Make A Reservation</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <motion.input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <DatePicker
              selected={date}
              onChange={(date: Date) => setDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Date & Time"
              className="bg-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
          <motion.button
            type="submit"
            className="block mx-auto mt-8 bg-indigo-600 hover:bg-indigo-700 transition duration-300 rounded-lg px-6 py-2 text-white focus:outline-none focus:ring focus:ring-indigo-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.button>
        </form>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div className="bg-white rounded-lg p-8 max-w-md text-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <h3 className="text-2xl font-semibold mb-4">Reservation Confirmed!</h3>
              <p className="text-gray-600 mb-6">Thank you for making a reservation with us. Your table has been booked for the following details:</p>
              <p className="text-gray-800">
                <span className="font-semibold">Name:</span> {name}
              </p>
              <p className="text-gray-800">
                <span className="font-semibold">Email:</span> {email}
              </p>
              <p className="text-gray-800">
                <span className="font-semibold">Date & Time:</span>{" "}
                {date.toLocaleString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })}
              </p>
              <motion.button
                onClick={closeModal}
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 transition duration-300 rounded-lg px-6 py-2 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReservationSection;
