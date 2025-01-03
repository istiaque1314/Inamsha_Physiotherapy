import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import base_url from "../Api/service";
import { useAuth } from "../appwrite/AuthContext";

export default function MyAppointment() {
  const [appointments, setAppointments] = useState([]);
  const { isAuthenticated, keycloak } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // React Router navigate function

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!keycloak?.tokenParsed?.email) {
        console.error("Email not found in Keycloak token.");
        setAppointments([]);
        setLoading(false);
        return;
      }

      try {
        const email = keycloak.tokenParsed.email;
        console.log("Fetching appointments for email:", email);

        const response = await axios.get(`${base_url}/appointments`, {
          headers: {
            Authorization: `Bearer ${keycloak.token}`,
          },
          params: { emailId: email },
        });

        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setAppointments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [keycloak, isAuthenticated]);

  const deleteAppointment = async (appointmentId) => {
    try {
      await axios.delete(`${base_url}/appointments/${appointmentId}`);
      setAppointments(
        appointments.filter((appointment) => appointment.id !== appointmentId)
      );
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading appointments...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-8">
        My Appointments
      </h1>

      {appointments.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-lg font-medium text-gray-500">
            You don't have any booked appointments.
          </p>
          <button
            onClick={() => navigate("/book")}
            className="mt-6 px-6 py-3 bg-color text-white py-2 px-4 rounded-lg"
          >
            Book an Appointment
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded-xl shadow-md transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-t-xl p-4">
                <h2 className="text-xl font-bold">
                  Appointment ID: {appointment.id}
                </h2>
                <p className="text-sm">Patient: {appointment.name}</p>
              </div>
              <div className="p-4 space-y-3">
                <p className="text-gray-600">
                  <strong>Doctor:</strong> {appointment.doctorName}
                </p>
                <p className="text-gray-600">
                  <strong>Date:</strong> {appointment.appointmentDate}
                </p>
                <p className="text-gray-600">
                  <strong>Time:</strong> {appointment.appointmentTime}
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> {appointment.phoneNumber}
                </p>
              </div>
              <div className="px-4 py-2 bg-gray-100 rounded-b-xl flex justify-between items-center">
                <button
                  className="px-4 py-2 text-sm font-medium text-white bg-color rounded-md shadow-md hover:bg-color transition duration-300 ease-in-out ml-4"
                  onClick={() =>
                    navigate("/update-appointment", { state: { appointment } })
                  }
                >
                  Update
                </button>
                <button
                  onClick={() => deleteAppointment(appointment.id)}
                  className="px-4 ml-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 transition duration-300 ease-in-out mr-4"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
