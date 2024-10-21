import { NextResponse } from "next/server";
import dbConnect from "@/app/utils/dbConnect";
import Appointment from "@/app/models/Appointment";

export const POST = async (req) => {
  try {
    const { name, email, phone, notes, services, date, time } =
      await req.json();

    console.log({ services, date, time });
    await dbConnect();

    // Create a new appointment instance
    const newAppointment = new Appointment({
      name,
      email,
      phone,
      notes,
      services, // Make sure this matches the model field
      date,
      time,
    });

    // Save the appointment to the database
    await newAppointment.save();

    return new NextResponse(JSON.stringify(newAppointment), { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const GET = async () => {
  try {
    await dbConnect();

    // Fetch all appointments sorted by creation date
    const appointments = await Appointment.find().sort({ createdAt: -1 });

    return new NextResponse(JSON.stringify(appointments), { status: 200 });
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (req) => {
  const { id } = await req.json();
  try {
    await dbConnect();
    await Appointment.findByIdAndDelete(id);
    return new NextResponse("Post deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Database Error", { status: 500 });
  }
};
