"use client";
import React, { useState, useEffect } from "react";
import { Datepicker } from "flowbite-react";
import { useMediaQuery } from "react-responsive"; // Use media query for responsiveness
import { useBooking } from "../context/BookingContext"; // Using your BookingContext

export default function Timepicker() {
  // Get the context values from BookingContext
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } =
    useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [confirmedDateTime, setConfirmedDateTime] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 640 }); // Mobile screen width

  // Set initial value for selectedDate if it's null or undefined
  useEffect(() => {
    if (!selectedDate) {
      setSelectedDate(new Date()); // Set current date as default if no date is selected
    }
  }, [selectedDate, setSelectedDate]);

  // Debugging: Log the selectedDate and selectedTime when they change
  useEffect(() => {
    console.log("Selected Date: ", selectedDate);
    console.log("Selected Time: ", selectedTime);
  }, [selectedDate, selectedTime]);

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      // Ensure selectedDate is converted to a string format
      const formattedDate = selectedDate.toLocaleDateString(); // or use other formatting methods
      const appointmentDetails = `${formattedDate} at ${selectedTime}`;
      setConfirmedDateTime(appointmentDetails); // Save confirmed details
      setIsOpen(false); // Close modal on mobile
    } else {
      alert("Please select both date and time.");
    }
  };

  const handleDateChange = (date) => {
    console.log("Date selected: ", date); // Debugging: Log selected date
    if (date >= new Date()) {
      setSelectedDate(date); // Only allow future dates
    }
  };

  const dummyServiceHours = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  return (
    <div>
      {isMobile ? (
        <>
          {/* Mobile: Schedule Appointment Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center rounded-lg border border-pink-200 bg-pink px-5 py-2.5 text-center text-sm font-medium text-pink-500 hover:bg-pink-100 focus:outline-none focus:ring-4 focus:ring-pink-100 dark:border-pink-600 dark:bg-pink-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-pink-600"
          >
            Schedule appointment
          </button>

          {/* Modal for Mobile View */}
          {isOpen && (
            <div
              id="timepicker-modal"
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-scroll h-screen  "
            >
              <div className="relative w-full max-w-[23rem] rounded-lg bg-white p-4 shadow dark:bg-gray-800">
                <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Schedule an appointment
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="size-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="p-4 pt-0">
                  <div className="mx-auto my-5 flex justify-center sm:mx-0">
                    <Datepicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      inline
                      minDate={new Date()} // Disable past dates
                    />
                  </div>

                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Pick your time
                  </label>

                  <ul className="mb-5 grid w-full grid-cols-3 gap-2">
                    {dummyServiceHours.map((time) => (
                      <li key={time}>
                        <input
                          type="radio"
                          id={time}
                          className="peer hidden"
                          name="timetable"
                          value={time}
                          onChange={(e) => setSelectedTime(e.target.value)}
                        />
                        <label
                          htmlFor={time}
                          className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 peer-checked:border-pink-700 peer-checked:bg-pink-50 peer-checked:text-pink-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {time}
                        </label>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={handleConfirm}
                      className="rounded-lg bg-pink-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-800"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Show selected date and time on mobile after confirm */}
          {confirmedDateTime && (
            <p className="mt-4 text-sm text-gray-900">
              <strong>Selected:</strong> {confirmedDateTime}
            </p>
          )}
        </>
      ) : (
        // Desktop: Always visible
        <div className="mb-6 flex w-[54.5rem] justify-between">
          <div className="w-1/3">
            <p className="font-bold">Pick a date</p>
            <Datepicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              minDate={new Date()} // Disable past dates
            />
          </div>
          <div className="w-2/3">
            <p className="font-bold">Pick a time</p>
            <ul className="grid w-full grid-cols-4 gap-2">
              {dummyServiceHours.map((time) => (
                <li key={time}>
                  <input
                    type="radio"
                    id={time}
                    className="peer hidden"
                    name="timetable"
                    value={time}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                  <label
                    htmlFor={time}
                    className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-2 py-1 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 peer-checked:border-pink-700 peer-checked:bg-pink-50 peer-checked:text-pink-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {time}
                  </label>
                </li>
              ))}
            </ul>
            {/* Confirm Button for Desktop */}
            <button
              type="button"
              onClick={handleConfirm}
              className="mt-4 rounded-lg bg-pink-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-800"
            >
              Confirm
            </button>
            {/* Show confirmed date and time on desktop */}
            {confirmedDateTime && (
              <p className="mt-4 text-sm text-gray-900">
                <strong>Selected:</strong> {confirmedDateTime}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
