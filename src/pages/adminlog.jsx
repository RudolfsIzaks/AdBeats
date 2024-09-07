import React from "react";
import "../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
        // Make the POST request using async/await
        const response = await axios.post(
          'https://aqueous-tor-91749-7319d44de38a.herokuapp.com/admin/login', 
          formData
        );
    
        setFormData({
          email: "",
          password: "",
        });
    
        console.log(response);
        navigate("/admin/dashboard");
      } catch (error) {
        // Handle any error that occurs during the API call
        console.error("Error submitting the form:", error);
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
              className="border-b border-blue outline-none text-white font-comic"
            />
            <button className="bg-blue py-2 px-5 border-blue hover:bg-transparent hover:text-blue transition">Log In</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
