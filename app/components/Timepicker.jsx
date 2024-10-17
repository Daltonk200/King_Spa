"use client";
import React, { useState } from "react";
import { Datepicker } from "flowbite-react";
import { useMediaQuery } from "react-responsive"; // Use media query for responsiveness

export default function Timepicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 640 }); // Mobile screen width
  const handleConfirm = () => {
    const appointmentDetails = `${startDate.toLocaleDateString()} at ${selectedTime}`;
    console.log("Selected appointment:", appointmentDetails);
    setIsOpen(false);
  };

  const handleDateChange = (date) => {
    if (date >= new Date()) {
      setStartDate(date); // Only allow future dates
    }
  };

  const dummyServiceHours = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
    "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"
  ];

  return (
    <div>
      {isMobile ? (
        <>
          {/* Mobile: Schedule Appointment Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="text-pink-900 bg-pink hover:bg-pink-100 border border-pink-200 focus:ring-4 focus:outline-none focus:ring-pink-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-pink-600 dark:bg-pink-800 dark:border-pink-700 dark:text-white dark:hover:bg-gray-700"
          >
            Schedule appointment
          </button>
          {/* Modal for Mobile View */}
          {isOpen && (
            <div
              id="timepicker-modal"
              className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
            >
              <div className="relative p-4 w-full max-w-[23rem] bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Schedule an appointment
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
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
                  <div className="mx-auto sm:mx-0 flex justify-center my-5">
                    <Datepicker
                      selected={startDate}
                      onChange={handleDateChange}
                      inline
                      minDate={new Date()} // Disable past dates
                    />
                  </div>

                  <label className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                    Pick your time
                  </label>

                  <ul className="grid w-full grid-cols-3 gap-2 mb-5">
                    {dummyServiceHours.map((time) => (
                      <li key={time}>
                        <input
                          type="radio"
                          id={time}
                          className="hidden peer"
                          name="timetable"
                          value={time}
                          onChange={(e) => setSelectedTime(e.target.value)}
                        />
                        <label
                          htmlFor={time}
                          className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 peer-checked:border-pink-700 peer-checked:bg-pink-50 peer-checked:text-pink-700 hover:bg-gray-50 dark:hover:bg-gray-600 peer-checked:bg-pink-900"
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
                      className="text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      Confirm
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        // Desktop and Tablet: Inline Layout
        <div className="flex justify-between mb-6">
          <div className="w-1/3">
            <p className="font-bold">Pick a date</p>
            <Datepicker
              selected={startDate}
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
                    className="hidden peer"
                    name="timetable"
                    value={time}
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                  <label
                    htmlFor={time}
                    className="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 peer-checked:border-pink-700 peer-checked:bg-pink-50 peer-checked:text-pink-700 hover:bg-gray-50 dark:hover:bg-gray-600 peer-checked:bg-pink-900"
                  >
                    {time}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
