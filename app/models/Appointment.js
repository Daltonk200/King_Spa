import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    services: {
      type: [String], // Array of services
      required: true,
    },
    date: {
      type: Date, // Date object
      required: false,
    },
    time: {
      type: String, // Store time as a string
      required: false,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  },
);

// Compile the schema into a model, checking if it already exists
const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);

export default Appointment;
