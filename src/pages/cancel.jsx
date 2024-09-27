import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

function Cancel() {

    return(
        <>
        <div className="h-screen flex justify-center items-center">
            <div className="bg-stone-800 p-10 rounded-md">
            <h1 className="font-black text-white font-montserrat">Payment Cancelled!</h1>
            <p className="text-stone-200 text-sm">You cancelled the payment and the order has been aborted.</p>
            <Link className="py-2 px-5 bg-red-500 text-white font-comic font-bold text-center red-shadow sm:w-64 md:w-96" to="/">Continue Browsing</Link>
            </div>
            
        </div>
        </>
    )
}

export default Cancel;