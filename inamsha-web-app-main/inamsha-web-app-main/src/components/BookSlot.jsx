import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import base_url from '../Api/service';
import appointmentImg1 from "../assets/Inamsha-logo.png";
import { useAuth } from '../appwrite/AuthContext';
import toast from "react-hot-toast";
// import keycloak from '../appwrite/keyclock';


export default function BookSlot() {

    const { isAuthenticated, keycloak } = useAuth();
    const doctorOptions = ['Dr. Smith', 'Dr. Johnson', 'Dr. Lee', 'Dr. Patel'];
    const navigate = useNavigate();

    // use this useEffect to get the email value from keycloak directly in the email field.
    useEffect(() => {
        if (keycloak && keycloak.tokenParsed && keycloak.tokenParsed.email) {
            setFormData((prev) => ({
                ...prev,
                emailId: keycloak.tokenParsed.email,
            }));
        }
    }, [keycloak]);

    const [formData, setFormData] = useState({
        // id: '',
        name: '',
        emailId: '',
        appointmentDate: '',
        appointmentTime: '',
        doctorName: '',
        phoneNumber: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        const today = new Date();
        const selectedDate = new Date(formData.appointmentDate);
        const selectedTime = formData.appointmentTime;

        // if (!formData.id) errors.id = "Booking Id is required."

        if (!formData.name.trim()) errors.name = "Name is required.";

        if (!formData.emailId.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
            errors.emailId = "Enter a valid Gmail address (e.g., example@gmail.com).";
        }


        if (!formData.appointmentDate) {
            errors.appointmentDate = "Date is required.";
        } else if (selectedDate < today.setHours(0, 0, 0, 0)) {
            errors.appointmentDate = "Booking date cannot be in the past.";
        } else if (selectedDate.getDay() === 0) {
            errors.appointmentDate = "Appointments cannot be booked on Sundays.";
        }

        if (!selectedTime) {
            errors.appointmentTime = "Time is required.";
        } else {
            const [hours, minutes] = selectedTime.split(":").map(Number);
            if (hours < 10 || (hours >= 20 && minutes > 0)) {
                errors.appointmentTime = "Time must be between 10:00 AM and 8:00 PM.";
            }
        }

        if (!formData.doctorName) errors.doctorName = "Doctor name is required.";

        if (!formData.phoneNumber.match(/^\d{10}$/)) {
            errors.phoneNumber = "Enter a valid 10-digit phone number.";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value || '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isAuthenticated) {
            toast.error("Please log in to book an appointment.");
            if (keycloak) {
                try {
                    await keycloak.login(); // Redirects to Keycloak login
                } catch (error) {
                    console.error("Error redirecting to Keycloak login", error);
                }
            }
            return;
        }
        // Validate the form
        if (validateForm()) {
            try {
                // Retrieve the token from Keycloak

            const response = await axios.post(
                `${base_url}/appointments`,
                formData,
            );
                toast.success("Booking is successful!");
                setFormData({
                    name: '',
                    emailId: '',
                    appointmentDate: '',
                    appointmentTime: '',
                    doctorName: '',
                    phoneNumber: '',
                });
                navigate('/appointment'); // Redirect to appointment page
                setErrors({});



            } catch (error) {
                toast.error("Failed to book appointment. Please try again.");
                console.error("Error:", error.response || error.message);
            }
        }
    };

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-color sm:rounded-lg relative">

                            <h1 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                                APPOINTMENT FORM
                            </h1>

                            <div className="mt-6 flex justify-center items-center">
                                <img
                                    src={appointmentImg1}
                                    alt="Appointment"
                                    className="w-full h-auto max-w-screen-lg bg-transparent"
                                />
                            </div>
                        </div>


                        <form onSubmit={handleSubmit} className="space-y-2 ml-12 justify-center items-center">

                            {/* <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Appointment Id</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg ${errors.id ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.id && <p className="text-red-500 text-sm">{errors.id}</p>}
                </div> */}

                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Patient Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Patient Email</label>
                                <input
                                    type="text"
                                    name="emailId"
                                    value={formData.emailId}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.emailId ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.emailId && <p className="text-red-500 text-sm">{errors.emailId}</p>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Appointment Date</label>
                                <input
                                    type="date"
                                    name="appointmentDate"
                                    value={formData.appointmentDate}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.appointmentDate ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.appointmentDate && <p className="text-red-500 text-sm">{errors.appointmentDate}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Appointment Time</label>
                                <input
                                    type="time"
                                    name="appointmentTime"
                                    value={formData.appointmentTime}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.appointmentTime ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.appointmentTime && <p className="text-red-500 text-sm">{errors.appointmentTime}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Doctor Name</label>
                                <select
                                    name="doctorName"
                                    value={formData.doctorName || ''}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.doctorName ? "border-red-500" : "border-gray-300"
                                        }`}
                                >
                                    <option value="">Select Doctor</option>
                                    <option value="Dr. Smith">Dr. Smith</option>
                                    <option value="Dr. Johnson">Dr. Johnson</option>
                                    <option value="Dr. Lee">Dr. Lee</option>
                                </select>
                                {errors.doctorName && <p className="text-red-500 text-sm">{errors.doctorName}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                                        }`}
                                />
                                {errors.phoneNumber && (
                                    <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-color text-white py-2 px-4 rounded-lg"
                            >
                                Book Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}