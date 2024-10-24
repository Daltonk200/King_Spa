import { useState } from "react";
import { useBooking } from "../context/BookingContext";
import { toast } from "sonner";
export default function Confirmation({ prevStep }) {
  const { selectedServices, selectedDate, selectedTime } = useBooking();
  console.log({ selectedDate, selectedTime });
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

  const handleConfirm = async () => {
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          notes: formData.notes,
          services: selectedServices,
          date: selectedDate ? selectedDate.toISOString() : null, // Correct date format
          time: selectedTime,
        }),
      });

      if (response.ok) {
        toast.success("Appointment created successfully");

      } else {
        toast.error("Error creating appointment:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl rounded-lg bg-white p-6 shadow">
      <h1 className="mb-6 text-2xl font-bold">Make your appointment</h1>

      <div className="mb-6 grid grid-cols-2 gap-6">
        <div className="w-full">
          <p className="mb-2 text-lg font-bold">Confirmation</p>
          <p className="mb-4">Enter your data for the reservation.</p>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="mb-4 block w-full rounded-md border p-2"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-4 block w-full rounded-md border p-2"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="mb-4 block w-full rounded-md border p-2"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="notes"
            placeholder="Notes"
            className="mb-4 block w-full rounded-md border p-2"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="w-full">
          <div className="rounded-lg border p-4 shadow-md">
            <p className="mb-4 text-lg font-bold">Order Summary</p>
            <div className="mb-4">
              <p className="font-bold">Services:</p>
              {selectedServices.length > 0 ? (
                selectedServices.map((service, index) => (
                  <p key={index}>{service}</p>
                ))
              ) : (
                <p>No services selected.</p>
              )}
            </div>
            <div className="mb-4">
              <p className="font-bold">Date:</p>
              {selectedDate ? (
                <p>{selectedDate.toLocaleDateString()}</p>
              ) : (
                <p>No date selected.</p>
              )}
            </div>
            <div className="mb-4">
              <p className="font-bold">Time:</p>
              {selectedTime ? <p>{selectedTime}</p> : <p>No time selected.</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="rounded-md bg-gray-200 px-4 py-2 text-gray-700"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
