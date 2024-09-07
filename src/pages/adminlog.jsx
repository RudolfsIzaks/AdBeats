import React from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://aqueous-tor-91749-7319d44de38a.herokuapp.com/admin/login",
        { email, password }
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
          <h1 className="text-headline-2 font-black font-montserrat">
            Ad Beats Admin
          </h1>
          <form onSubmit={handleAdminLogin} action="submit">
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
              className="border-b border-blue outline-none text-white font-comic "
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
              className="border-b border-blue outline-none text-white font-comic"
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
