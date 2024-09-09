
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../index.css';
import axios from "axios";

function AdminDashboard() {
    const [Orders, setOrders] = useState([]);

    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await axios.get(
            "https://aqueous-tor-91749-7319d44de38a.herokuapp.com/orders"
          );
          setOrders(response.data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        }
      };
  
      fetchOrders();
    }, []);


    return(
        <>
        <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col gap-10 items-center md:w-1/2">
        {Orders.map((order) => (
          <div
            className="md:w-full flex flex-col p-10 shadow-lg border border-stone-600 mb-10 sm:mx-5"
            key={order.id}
          >
            <h1 className="text-2xl font-inter font-bold mb-5 text-white">{order.brand}</h1>
            <hr />
            <div className="flex sm:flex-col md:justify-between sm:items-start md:items-center p-5">
            <p className="md:text-xl text-stone-200 mt-5">
              {order.id}
            </p>
            <p className="text-xl text-stone-200 mt-5">
              Status: {order.status}
            </p>
            </div>
            <Link to={`/orders/${order.id}`} className="mt-5 bg-blue text-white font-inter w-80 py-2 px-4 text-center border border-blue hover:bg-transparent hover:text-blue transition">
              Read
            </Link>
          </div>
        ))}
      </div>
        </div>
        </>
    )
}

export default AdminDashboard;