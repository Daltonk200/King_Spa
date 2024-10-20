"use client"
import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';

const Dashboard = () => {
  const [expandedRow, setExpandedRow] = useState(null);

  const data = [
    { customer: 'Nabilah', email: 'mbengthelvis875@gmail.com', phone: '+237 683 39 97 09', services: ['Massage', 'Facial', 'Manicure'], date: '6 November 2022', time: '09:00 AM' },
    { customer: 'Eka Tedja', email: 'mbengbessong25@gmail.com', phone: '+62-878-55...', services: ['Perawatan', 'Hair Spa'], date: '6 November 2022', time: '10:00 AM' },
    { customer: 'Susila Su', email: 'mbengelvis05@gmail.com', phone: '+62-814-55...', services: ['Spa'], date: '27 September', time: '01:00 PM' },
    { customer: 'Agus Ra', email: 'tabejudith87@gmail.com', phone: '+62-878-55...', services: ['Spa', 'Body Scrub'], date: '26 September', time: '03:00 PM' },
    { customer: 'Sonny Ira', email: 'mbengbright3@mail.com', phone: '+62-878-55...', services: ['Massage', 'Therapy'], date: '26 September', time: '08:00 AM' },
    { customer: 'Cahaya', email: 'Kingdeku207@gmail.com', phone: '+62-856-55...', services: ['Massage'], date: '25 September', time: '08:00 AM' },
  ];

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="flex">
      <DashboardSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800">Daftar Janji</h2>
          <p className="text-gray-600 mb-4">
            Sebagai administrator, Anda dapat melihat dan mengedit janji temu pelanggan jika perlu.
            Akses ke area ini terbatas. Hanya admin yang dapat menggunakannya.
          </p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b p-2">Customer</th>
                <th className="border-b p-2">Email</th>
                <th className="border-b p-2">Nomor Telepon</th>
                <th className="border-b p-2">Services</th>
                <th className="border-b p-2">Tanggal dipesan</th>
                <th className="border-b p-2">Waktu yang dipesan</th>
                <th className="border-b p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <tr
                    className="hover:bg-gray-100 cursor-pointer"
                    onClick={() => toggleRow(index)}
                  >
                    <td className="border-b p-2">{item.customer}</td>
                    <td className="border-b p-2">{item.email}</td>
                    <td className="border-b p-2">{item.phone}</td>
                    <td className="border-b p-2">
                      {item.services.length > 1 ? `${item.services[0]}, ...` : item.services[0]}
                    </td>
                    <td className="border-b p-2">{item.date}</td>
                    <td className="border-b p-2">{item.time}</td>
                    <td className="border-b p-2 text-pink-dark cursor-pointer">Lihat</td>
                  </tr>
                  {expandedRow === index && (
                    <tr>
                      <td colSpan="7" className="bg-pink-50 p-4">
                        <strong>Services:</strong> {item.services.join(', ')}
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
