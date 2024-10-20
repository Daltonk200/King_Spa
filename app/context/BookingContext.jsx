"use client"
// app/context/BookingContext.jsx
import { createContext, useContext, useState } from "react";

// Create the context
const BookingContext = createContext();

// Custom hook to use the BookingContext
export const useBooking = () => useContext(BookingContext);

// Context provider component
export const BookingProvider = ({ children }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <BookingContext.Provider
      value={{
        selectedServices,
        setSelectedServices,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
