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
        {/* <div className="w-1/3">
          <p className="font-bold">Pick a date</p>
          <input
            type="date"
            className="border rounded p-2"
            value={selectedDate || ""}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div> */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          <Timepicker selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
        </div>
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
          Back
        </button>
        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
}
