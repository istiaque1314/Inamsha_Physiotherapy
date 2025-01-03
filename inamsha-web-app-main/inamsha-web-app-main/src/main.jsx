import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import MyAppointment from './components/MyAppointment.jsx';
import BookSlot from './components/BookSlot.jsx';
import UpdateAppointment from './components/UpdateAppointment.jsx';
import { Toaster } from "react-hot-toast";
// import Login from './components/Login.jsx';
import { AuthProvider } from './appwrite/AuthContext.jsx';


const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(

    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<MyAppointment />} />
          <Route path="/update-appointment" element={<UpdateAppointment />} />
          <Route path="/book" element={<BookSlot />} />
        </Route>
      </Routes>
      </AuthProvider>
    </BrowserRouter>
 
);



