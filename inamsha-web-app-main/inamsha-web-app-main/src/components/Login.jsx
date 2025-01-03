// import React, { useState } from "react";
// import axios from "axios";

// const Login = ({ setIsLoggedIn }) => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);

//   const sendOtp = async () => {
//     try {
//       await axios.post("/api/auth/send-otp", { phoneNumber });
//       setIsOtpSent(true);
//       alert("OTP sent to your phone!");
//     } catch (error) {
//       alert("Error sending OTP. Try again.");
//     }
//   };

//   const verifyOtp = async () => {
//     try {
//       const response = await axios.post("/api/auth/verify-otp", { phoneNumber, otp });
//       if (response.data) {
//         setIsLoggedIn(true);
//         alert("Logged in successfully!");
//       } else {
//         alert("Invalid OTP. Try again.");
//       }
//     } catch (error) {
//       alert("Error verifying OTP. Try again.");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Login</h2>
//       <div className="mb-3">
//         <label>Phone Number:</label>
//         <input
//           type="text"
//           className="form-control"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//       </div>
//       {isOtpSent && (
//         <div className="mb-3">
//           <label>OTP:</label>
//           <input
//             type="text"
//             className="form-control"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//         </div>
//       )}
//       {!isOtpSent ? (
//         <button className="btn btn-primary" onClick={sendOtp}>
//           Send OTP
//         </button>
//       ) : (
//         <button className="btn btn-success" onClick={verifyOtp}>
//           Verify OTP
//         </button>
//       )}
//     </div>
//   );
// };

// export default Login;
