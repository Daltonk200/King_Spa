// app/components/Confirmation.jsx
"use client";
import { useState } from "react";
import { useBooking } from "../context/BookingContext";

export default function Confirmation({ prevStep }) {
  const { selectedServices, selectedDate, selectedTime } = useBooking();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleConfirm = () => {
    console.log("Confirmed Data:", formData, selectedServices, selectedDate, selectedTime);
  };

  return (
    <div className="max-w-4xl w-full p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Make your appointment</h1>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="w-full">
          <p className="font-bold text-lg mb-2">Confirmation</p>
          <p className="mb-4">Enter your data for the reservation.</p>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="block w-full border p-2 mb-4 rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="block w-full border p-2 mb-4 rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="block w-full border p-2 mb-4 rounded-md"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="notes"
            placeholder="Notes"
            className="block w-full border p-2 mb-4 rounded-md"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="w-full">
          <div className="p-4 border rounded-lg shadow-md">
            <p className="font-bold text-lg mb-4">Order Summary</p>
            <div className="mb-4">
              <p className="font-bold">Services:</p>
              {selectedServices.length > 0 ? (
                selectedServices.map((service, index) => <p key={index}>{service}</p>)
              ) : (
                <p>No services selected.</p>
              )}
            </div>
            <div className="mb-4">
              <p className="font-bold">Date:</p>
              {selectedDate ? <p>{selectedDate}</p> : <p>No date selected.</p>}
            </div>
            <div className="mb-4">
              <p className="font-bold">Time:</p>
              {selectedTime ? <p>{selectedTime}</p> : <p>No time selected.</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
          Back
        </button>
        <button onClick={handleConfirm} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Confirm
        </button>
      </div>
    </div>
  );
}
