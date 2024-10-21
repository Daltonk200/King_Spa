"use client"; // Needed for fetching data in Next.js client-side
import React, { useState, useEffect } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import { toast } from "sonner";

const Dashboard = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the appointments from the backend
    const fetchAppointments = async () => {
      try {
        const res = await fetch("/api/appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/appointments`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setAppointments((prev) =>
          prev.filter((appointment) => appointment._id !== id),
        );
        toast.success("Appointment deleted")
      } else {
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 bg-gray-100 p-6">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-800">
            Appointments List
          </h2>
          <p className="mb-4 text-gray-600">
            As an administrator, you can view and manage customer appointments.
            Access to this area is restricted to admins.
          </p>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b p-2">Customer</th>
                <th className="border-b p-2">Email</th>
                <th className="border-b p-2">Phone Number</th>
                <th className="border-b p-2">Services</th>
                <th className="border-b p-2">Appointment Date</th>
                <th className="border-b p-2">Appointment Time</th>
                <th className="border-b p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((item, index) => (
                  <React.Fragment key={item._id}>
                    <tr
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => toggleRow(index)}
                    >
                      <td className="border-b p-2">{item.name}</td>
                      <td className="border-b p-2">{item.email}</td>
                      <td className="border-b p-2">{item.phone}</td>
                      <td className="border-b p-2">
                        {item.services.length > 1
                          ? `${item.services[0]}, ...`
                          : item.services[0]}
                      </td>
                      <td className="border-b p-2">
                        {new Date(item.date).toLocaleDateString()}
                      </td>
                      <td className="border-b p-2">{item.time}</td>
                      <td className="cursor-pointer border-b p-2">
                        <button
                          className="text-blue-500"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row toggle
                            console.log(item); // For debugging purposes
                          }}
                        >
                          View
                        </button>
                        {" | "}
                        <button
                          className="text-red-500"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent row toggle
                            handleDelete(item._id);
                          }}
                        >
                          Done
                        </button>
                      </td>
                    </tr>
                    {expandedRow === index && (
                      <tr>
                        <td colSpan="7" className="bg-gray-50 p-4">
                          <strong>Services:</strong> {item.services.join(", ")}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="p-4 text-center">
                    No appointments available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
