import React, { useState } from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // Import required auth functions
import { auth } from "../firebaseConfig"; // Import your Firebase auth instance
import { initializeFirebase } from "../firebaseConfig"; 

// Call this in protected pages (e.g., admin pages)
const { auth } = initializeFirebase();


function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in using Firebase Authentication (Modular SDK)
      const userCredential = await signInWithEmailAndPassword(auth, email, password); // Correct usage of signInWithEmailAndPassword
      const user = userCredential.user;

      // Get the ID token from Firebase
      const idToken = await user.getIdToken();

      // Send the ID token to your backend for verification
      const response = await axios.post(
        "https://aqueous-tor-91749-7319d44de38a.herokuapp.com/admin/login",
        { idToken } // Send ID token instead of email and password
      );

      if (response.data.success) {
        // Store authentication state
        localStorage.setItem("adminAuth", JSON.stringify(response.data.user));
        // Redirect to admin dashboard
        navigate("/admin/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to log in. Please try again.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-10 rounded-md flex flex-col gap-5">
          <h1 className="text-headline-2 font-black font-montserrat text-white">
            Ad Beats Admin
          </h1>
          <form onSubmit={handleAdminLogin} action="submit" className="flex flex-col gap-5">
            <label
              htmlFor="email"
              className="text-subheadline-3 text-white font-montserrat font-bold mt-5 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-b border-blue outline-none text-white font-comic bg-transparent"
            />
            <label
              htmlFor="password"
              className="text-subheadline-3 text-white font-montserrat font-bold mt-5 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-b border-blue outline-none text-white font-comic bg-transparent"
            />
            <button className="bg-blue py-2 px-5 border-blue hover:bg-transparent hover:text-blue transition">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
