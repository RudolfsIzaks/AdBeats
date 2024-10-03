import React from "react";
import { Link } from "react-router-dom";
import '../index.css';
import AdBeats from '../assets/AdBeats.png';


function Footer() {

    return(
        <>
         <hr className="bg-stone-400 h-0 border-stone-700" />
         <nav className="flex tablet:flex-wrap sm:flex-col sm:items-center justify-between px-10 sm:py-10 md:py-32">
            <img src={AdBeats} className="md:w-1/6 sm:w-64" />
            <div className="flex sm:flex-col gap-10">
            <div className="flex flex-col items-center gap-2">
                <Link className="text-stone-300 text-left md:w-96" to="/faq">FAQs</Link>
                <Link className="text-stone-300 text-left md:w-96" to="/privacy-policy">Privacy Policy</Link>
                <Link className="text-stone-300 text-left md:w-96" to="/terms-conditions">Terms & Conditions</Link>
                <Link className="text-stone-300 text-left md:w-96" to="/">Homepage</Link>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Link className="text-stone-300 text-left md:w-96" to="/partners">Helping Hands</Link>
                <Link className="text-stone-300 text-left md:w-96" to="/contact">Contact For Help</Link>
                <Link className="text-stone-300 text-left md:w-96" to="/affiliates">Affiliate Program</Link>
                <Link className="text-stone-300 text-left md:w-96" to="/qualify">Purchase AdBeats Plan</Link>
            </div>
            </div>
         </nav>
         <hr className="bg-stone-400 h-0 border-stone-700" />
         <p className="text-center text-stone-400 py-4 sm:text-xs">All Rights Reserved. Since 2024. Truly Yours, Adbeats :)</p>
        </>
    )
}

export default Footer;