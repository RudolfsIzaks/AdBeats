import React from "react";
import "../index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Confirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const apiResponse = location.state?.response;

  const [formData, setFormData] = useState({
    email: "",
    order_id: apiResponse.id
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendOut = async (e) => {
    e.preventDefault();
    try {
        // Make the POST request using async/await
        const response = await axios.post(
          'https://aqueous-tor-91749-7319d44de38a.herokuapp.com/auto-mail-order', 
          formData
        );
    
        // Reset the form data after successful submission
        setFormData({
          email: "",
          order_id: apiResponse.id
        });
    
        console.log(response);
    
        // Navigate to the confirmation page with the response data
        navigate("/done");
      } catch (error) {
        // Handle any error that occurs during the API call
        console.error("Error submitting the form:", error);
      }
    };


  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="p-10 flex flex-col gap-5 bg-stone-800 border-stone-600">
          <h1 className="text-blue font-comic font-bold text-headline-2">
            Free Song Order Confirmed!
          </h1>
          <p className="text-white font-montserrat text-subheadline-4">
            Your Order ID is: {apiResponse.id}
          </p>
          <form onSubmit={handleSendOut} action="submit" className="flex flex-col items-center gap-10">
            <div className="flex gap-5 items-center">
            <label htmlFor="email" className="text-white font-montserrat text-lg">Your email to recieve Order ID:</label>
            <input
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent outline-none border-b border-b-blue"
            />
            </div>
            <button
              type="submit"
              className="bg-blue comic_btn font-comic text-2xl font-bold px-5 py-2 border hover:bg-black border-blue transition hover:text-blue hover:scale-110"
            >
              Send ID
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Confirm;
