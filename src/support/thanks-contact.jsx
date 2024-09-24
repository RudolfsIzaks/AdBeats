import React from "react";
import '../index.css';
import { useNavigate } from "react-router-dom";


function ThanksSupport() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    }

    return(
        <>
        <div className="h-screen w-full flex items-center justify-center" >
            <div className="text-center flex flex-col items-center justify-center">
                <p className="text-white font-black text-headline-1">Thank You!</p>
                <p className="text-stone-300 font-bold text-subheadline-3">We've noted your message and will respond soon...</p>
                <button className="border-blue border py-3 px-5 mt-10 bg-blue text-black font-comic text-subheadline-3 font-bold hover:bg-transparent hover:text-blue hover:scale-110 transition" onClick={handleNavigate}>Keep Browsing</button>
            </div>
        </div>
        </>
    )
}

export default ThanksSupport;