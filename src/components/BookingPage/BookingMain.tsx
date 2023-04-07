import { BookingData } from "@/Types/Interface/Service";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TableBooking = () => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [table, setTable] = useState<string>("");
  const [bookedSlots, setBookedSlots] = useState<BookingData[]>([]);
  const [bookedTables, setBookedTables] = useState<BookingData[]>([]);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !date || !time || !table) {
      alert("Please fill in all the fields.");
      return;
    }
    const booking: BookingData = { name, date, time, table };
    const bookedSlotsFromLocalStorage: BookingData[] = JSON.parse(localStorage.getItem("bookedSlots") || "[]");
    localStorage.setItem("bookedSlots", JSON.stringify([...bookedSlotsFromLocalStorage, booking]));
    const bookedTablesFromLocalStorage: BookingData[] = JSON.parse(localStorage.getItem("bookedTables") || "[]");
    localStorage.setItem("bookedTables", JSON.stringify([...bookedTablesFromLocalStorage, booking]));
    setBookedSlots([...bookedSlots, booking]);
    setBookedTables([...bookedTables, booking]);
    setName("");
    setDate("");
    setTime("");
    setTable("");
  };

  useEffect(() => {
    const bookedSlotsFromLocalStorage: BookingData[] = JSON.parse(localStorage.getItem("bookedSlots") || "[]");
    setBookedSlots(bookedSlotsFromLocalStorage);
    const bookedTablesFromLocalStorage: BookingData[] = JSON.parse(localStorage.getItem("bookedTables") || "[]");
    setBookedTables(bookedTablesFromLocalStorage);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Table Booking</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4">Book a Table</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-1">
                Name
              </label>
              <input type="text" id="name" className="w-full border-gray-300 rounded-md p-2" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block font-bold mb-1">
                Date
              </label>
              <input type="date" id="date" className="w-full border-gray-300 rounded-md p-2" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block font-bold mb-1">
                Time
              </label>
              <input type="time" id="time" className="w-full border-gray-300 rounded-md p-2" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="table" className="block font-bold mb-1">
                Table
              </label>
              <select id="table" className="w-full border-gray-300 rounded-md p-2" value={table} onChange={(e) => setTable(e.target.value)}>
                <option value="">Select a table</option>
                <option value="Table 1">Table 1</option>
                <option value="Table 2">Table 2</option>
                <option value="Table 3">Table 3</option>
                <option value="Table 4">Table 4</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Book Table
            </button>
          </form>
        </div>
        <div className="bg-gray-100 p-6 rounded-md">
          <h3 className="text-xl font-bold mb-4">Booked Slots</h3>
          {bookedSlots.length > 0 ? (
            <ul>
              {bookedSlots.map((booking, index) => (
                <motion.li
                  key={index}
                  className="mb-2 bg-white rounded-md p-2 shadow-md flex justify-between items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div>
                    <div className="font-bold">{booking.name}</div>
                    <div>
                      {booking.date} at {booking.time}
                    </div>
                    <div>Table: {booking.table}</div>
                  </div>
                  <div>
                    <button
                      className="text-red-500 hover:text-red-600"
                      onClick={() => {
                        // Remove booked slot from local storage
                        const updatedBookedSlots = bookedSlots.filter((slot) => slot !== booking);
                        localStorage.setItem("bookedSlots", JSON.stringify(updatedBookedSlots));

                        // Update state
                        setBookedSlots(updatedBookedSlots);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div>No booked slots.</div>
          )}
        </div>
      </div>
      <div className="mt-6 bg-gray-100 p-6 rounded-md">
        <h3 className="text-xl font-bold mb-4">My Booked Tables</h3>
        {bookedTables.length > 0 ? (
          <ul>
            {bookedTables.map((booking, index) => (
              <motion.li
                key={index}
                className="mb-2 bg-white rounded-md p-2 shadow-md flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <div>
                  <div className="font-bold">{booking.name}</div>
                  <div>
                    {booking.date} at {booking.time}
                  </div>
                  <div>Table: {booking.table}</div>
                </div>
                <div>
                  <button
                    className="text-red-500 hover:text-red-600"
                    onClick={() => {
                      // Remove booked table from local storage
                      const updatedBookedTables = bookedTables.filter((table) => table !== booking);
                      localStorage.setItem("bookedTables", JSON.stringify(updatedBookedTables));

                      // Update state
                      setBookedTables(updatedBookedTables);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          <div>No booked tables.</div>
        )}
      </div>
    </div>
  );
};

export default TableBooking;
