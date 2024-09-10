import React, { useEffect, useState } from "react";
import "../index.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Confirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const apiResponse = location.state?.orderId || location.state?.response; // Handle both free and paid cases

  const [formData, setFormData] = useState({
    email: "",
    order_id: apiResponse,
  });

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send email with the order ID after confirmation
  const handleSendOut = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://aqueous-tor-91749-7319d44de38a.herokuapp.com/auto-mail-order",
        formData
      );

      // Reset form data after successful submission
      setFormData({
        email: "",
        order_id: apiResponse,
      });

      console.log(response);

      // Navigate to the "done" page after success
      navigate("/done");
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  useEffect(() => {
    // You can check for the order_id in case of a stripe payment
    if (!apiResponse) {
      navigate("/"); // Redirect to homepage if no order_id is found
    }
  }, [apiResponse, navigate]);

  return (
    <>
      <div className="flex items-center justify-center my-10">
        <div className="p-10 flex flex-col gap-5 bg-stone-800 border-stone-600">
          <h1 className="text-blue font-comic font-bold sm:text-subheadline-3 md:text-headline-2">
            {apiResponse ? "Your Order is Confirmed!" : "No Order Found!"}
          </h1>
          <p className="text-white font-montserrat sm:text-sm md:text-subheadline-4 text-center">
            Your Order ID is: {apiResponse}
          </p>
          <form onSubmit={handleSendOut} action="submit" className="flex flex-col items-center gap-10">
            <div className="flex sm:flex-col gap-5 items-center">
              <label htmlFor="email" className="text-white font-montserrat text-lg">
                Your email to receive Order ID:
              </label>
              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent outline-none border-b border-b-blue text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-blue comic_btn font-comic sm:text-lg md:text-2xl font-bold px-5 py-2 border hover:bg-black border-blue transition hover:text-blue hover:scale-110"
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
