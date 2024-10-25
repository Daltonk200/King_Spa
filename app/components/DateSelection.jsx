// app/components/DateSelection.jsx
"use client";
import { useBooking } from "../context/BookingContext";
import Timepicker from "./Timepicker";

export default function DateSelection({ nextStep, prevStep }) {
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } = useBooking();

  return (
    <div className="max-w-4xl w-full p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Make your appointment</h1>
      <div className="flex justify-between mb-6">
        <div className="flex-1 grid grid-cols-3 gap-4">
          <Timepicker selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
        </div>
      </div>
    </div>
  );
}
