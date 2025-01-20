import React from 'react';
import SideNav from './SideNav';

const PrescriptionManagement = ({ prescriptions }) => {
  return (
    <div className="flex flex-col md:flex-row font-noto">
      {/* Sidebar */}
      <SideNav />
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Prescription Management</h2>
      {prescriptions.map((prescription) => (
        <div key={prescription.id} className="bg-white p-4 rounded-md shadow-md mb-4">
          <p>Doctor: {prescription.doctor}</p>
          <p>Medicine: {prescription.medicine}</p>
          <p>Uploaded on: {prescription.uploaded}</p>
        </div>
      ))}
      <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Upload Prescription</button>
    </section>
    </div>
  );
};

export default PrescriptionManagement;
