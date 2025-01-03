import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import base_url from "../Api/service";
import toast from "react-hot-toast";

export default function UpdateAppointment() {
  const location = useLocation();
  const navigate = useNavigate();
  const appointment = location.state?.appointment || {};

  const [formData, setFormData] = useState({
    id: appointment.id || "",
    name: appointment.name || "",
    appointmentDate: appointment.appointmentDate || "",
    appointmentTime: appointment.appointmentTime || "",
    doctorName: appointment.doctorName || "",
    phoneNumber: appointment.phoneNumber || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${base_url}/appointments/${formData.id}`, formData);
      toast.success("Appointment updated successfully!");
      navigate("/appointment"); // Redirect back to MyAppointments
    } catch (error) {
      console.error("Error updating appointment:", error);
      toast.success("Failed to update the appointment.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
        Update Appointment
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 shadow rounded-lg">
        <div>
          <label className="block font-medium text-gray-700">Patient Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Appointment Date</label>
          <input
            type="date"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Appointment Time</label>
          <input
            type="time"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Doctor Name</label>
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md shadow hover:bg-blue-600 transition"
        >
          Update Appointment
        </button>
      </form>
    </div>
  );
}
