// app/components/Confirmation.jsx
"use client";
import { useState } from "react";

export default function Confirmation({ prevStep, selectedService, selectedDate, selectedTime }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleConfirm = () => {
    // Handle form submission and save the data
    // For example, you could save to a database or localStorage
    console.log("Confirmed Data:", formData, selectedService, selectedDate, selectedTime);
    // Redirect to dashboard or handle data saving logic
  };

  return (
    <div className="max-w-4xl w-full p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Make your appointment</h1>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Left Column: Form */}
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

        {/* Right Column: Order Summary */}
        <div className="w-full">
          <div className="p-4 border rounded-lg shadow-md">
            <p className="font-bold text-lg mb-4">Order Summary</p>
            <div className="mb-2">
              <span className="font-bold">Service: </span>
              <span>{selectedService}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold">Date: </span>
              <span>{selectedDate}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold">Time: </span>
              <span>{selectedTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-sm"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="bg-orange-500 text-white px-6 py-2 rounded-md shadow-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
