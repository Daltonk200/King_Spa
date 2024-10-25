// app/appointment/page.jsx
"use client";
import { useState } from "react";
import { Timeline, Button } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";
import ServiceSelection from "../components/ServiceSelection";
import DateSelection from "../components/DateSelection";
import Confirmation from "../components/Confirmation";

// Custom theme without TypeScript typing
const customTheme = {
  root: {
    direction: {
      horizontal: "sm:flex w-full", // Ensure the timeline stretches horizontally across the containe
      vertical: "relative border-l border-gray-200 dark:border-gray-700",
    },
  },
  item: {
    root: {
      horizontal: "relative mb-6 sm:mb-0 flex-1", // Flex-grow to ensure equal distribution of items
      vertical: "mb-10 ml-6",
    },
    content: {
      root: {
        base: "",
        horizontal: "mt-3 sm:pr-8",
        vertical: "",
      },
      body: {
        base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400",
      },
      time: {
        base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
      },
      title: {
        base: "text-lg font-semibold text-gray-900 dark:text-white",
      },
    },
    point: {
      horizontal: "flex items-center",
      line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
      marker: {
        base: {
          horizontal:
            "absolute -left-1.5 h-3 w-3 rounded-full border border-pink-500 bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          vertical:
            "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
        },
        icon: {
          base: "h-3 w-3 text-pink-600 dark:text-pink-300", // Customize the icon color to pink
          wrapper:
            "absolute flex h-6 w-6 items-center justify-center rounded-full bg-pink-200 ring-4 ring-pink-400  dark:bg-pink-900 dark:ring-pink-900", // Customize the wrapper to pink
        },
      },
      vertical: "",
    },
  },
};

export default function Appointment() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Select Service", "Pick a Date", "Confirmation"];

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="container mx-auto p-4  h-screen">
      <div className="py-4 mb-6 border-b-2 border-gray-200">
        <Timeline theme={customTheme} horizontal>
          {steps.map((step, index) => (
            <Timeline.Item key={index}>
              <Timeline.Point icon={HiCalendar} className={`${currentStep === index ? "text-pink-400" : ""} `}/>
              <Timeline.Content>
                <Timeline.Title className={`${currentStep === index ? "text-pink-400" : ""} pt-2 px-5`}>
                  {step}
                </Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>

      {currentStep === 0 && <ServiceSelection />}
      {currentStep === 1 && <DateSelection />}
      {currentStep === 2 && <Confirmation />}

      <div className="flex justify-between mt-4">
        <Button color="pink" onClick={prevStep} disabled={currentStep === 0}>
          Back
        </Button>
        <Button color="pink" onClick={nextStep} disabled={currentStep === steps.length - 1}>
          Next
        </Button>
      </div>
    </div>
  );
}
