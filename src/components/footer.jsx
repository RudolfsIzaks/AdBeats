import React from "react";
import { Link } from "react-router-dom";
import '../index.css';
import AdBeats from '../assets/AdBeats.png';


function Footer() {

    return(
        <>
         <hr className="bg-stone-400 h-0 border-stone-700" />
         <nav className="flex justify-between p-10">
            <img src={AdBeats} className="w-1/6" />
            <div className="flex flex-col items-center gap-2 flex-grow">
                <Link className="underline text-stone-300" to="/faq">FAQs</Link>
                <Link className="underline text-stone-300" to="/privacy">Privacy Policy</Link>
                <Link className="underline text-stone-300" to="/terms">Terms & Conditions</Link>
                <Link className="underline text-stone-300" to="/">Homepage</Link>
            </div>
            <div className="flex flex-col items-center gap-2 flex-grow">
                <Link className="underline text-stone-300" to="/partners">Helping Hands</Link>
                <Link className="underline text-stone-300" to="/contanct-help">Contact For Help</Link>
                <Link className="underline text-stone-300" to="/affiliates">Affiliate Program</Link>
                <Link className="underline text-stone-300" to="/qualify">Purchase AdBeats Plan</Link>
            </div>
         </nav>
         <hr className="bg-stone-400 h-0 border-stone-700" />
         <p className="text-center text-stone-400 py-4">All Rights Reserved. Since 2024. Truly Yours, Adbeats :)</p>
        </>
    )
}

export default Footer;