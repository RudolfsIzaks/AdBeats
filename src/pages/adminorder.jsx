import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import '../index.css';

function AdminOrder() {
  const { id } = useParams();
  const [order, setOrder] = useState(null); // Initial state is null
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          `https://aqueous-tor-91749-7319d44de38a.herokuapp.com/orders/${id}`
        );
        setOrder(response.data); // Set order data after successful fetch
      } catch (error) {
        console.error("Error fetching order:", error);
        // Optional: Navigate to an error page or show an error message
      }
    };

    fetchOrder();
  }, [id]);

  // Check if order is still null (loading state)
  if (!order) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg_comic">
      <div className="w-3/5 bg-stone-950 border border-stone-500 rounded-md p-12 flex flex-col gap-6">
        <Link className="text-blue font-montserrat" to="/admin/dashboard">Go Back</Link>
        <h1 className="font-comic text-headline-1 text-white">Order: {order.id}</h1>
        <p className="text-white font-bold font-montserrat text-subheadline-3">Brand: {order.brand}</p>
        <p className="text-white font-bold font-montserrat text-subheadline-3">Website: {order.website}</p>
        <p className="text-stone-200 font-montserrat text-subheadline-4">Email: {order.email}</p>
        <p className="text-stone-200 font-montserrat text-subheadline-4">Name: {order.name}</p>
        <p className="text-stone-200 font-montserrat text-subheadline-4">Emotion: {order.emotion}</p>
        <p className="text-stone-200 font-montserrat text-subheadline-4">Problem: {order.problem}</p>
        <p className="text-stone-200 font-montserrat text-subheadline-4">Goal: {order.goal}</p>
      </div>
    </div>
  );
}

export default AdminOrder;
