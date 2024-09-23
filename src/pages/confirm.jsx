import React, { useEffect, useState } from "react";
import "../index.css";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Confirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const orderId = location.state?.orderId || searchParams.get("orderId"); // Fetch from location or query params


  useEffect(() => {
    if (!orderId) {
      navigate("/"); // Redirect to homepage if no orderId is found
    }
  }, [orderId, navigate]);

  return (
    <>
      <div className="flex h-screen mx-5 items-center justify-center">
        <div className="p-10 flex flex-col gap-5 bg-stone-800 border-stone-600">
          <h1 className="text-blue font-comic font-bold sm:text-subheadline-3 md:text-headline-2">
            {orderId ? "Your Order is Confirmed!" : "No Order Found!"}
          </h1>
          <p className="text-white font-montserrat sm:text-sm md:text-subheadline-4">
            Your Order ID is: {orderId}
          </p>
          <p className="text-stone-300 font-comic md:text-lg">
            We have recieved your order and are working on your song right now! <br /><br /> 
            We will send you an email when the song is complete and ready to be claimed.
          </p>
          <Link className="py-2 px-5 bg-red-500 text-white font-comic font-bold text-center red-shadow sm:w-64 md:w-96" to="/">Continue Browsing</Link>
        </div>
      </div>
    </>
  );
}

export default Confirm;
