//app/components/DateSelection.jsx
"use client"
import { Button } from 'flowbite-react';
// import { Datepicker } from "flowbite-react";
import Timepicker from "./Timepicker"
export default function DateSelection({ nextStep, prevStep }) {
  return (
    <div className="max-w-4xl w-full p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Make your appointment</h1>

      <div className="flex justify-between mb-6">
        <div className="w-1/3">
          <p className="font-bold">Pick a date</p>
          <p>Pick the date and time that you want.</p>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-4">
          <Timepicker/>
        </div>
      </div>

    </div>
  );
}
