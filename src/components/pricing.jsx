import React from "react";
import "../index.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import splash_grey from '../assets/splash_grey.png';
import splash_red from '../assets/splash_red.png';
import splash_purple from '../assets/splash_purple.png';
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51O0SSFLpY4qbPyJ5MYTt1NVM1KHQJEMFFdngJ5lOcoV8YxYLp8NEYfcd758Ffpxn0IRTuoQhyHSH7P68VMQVArnX00hSmeOIaE");

function Pricing() {
  const navigate = useNavigate();
  const location = useLocation();
  const apiResponse = location.state?.response; // Pre-generated Order ID

  // Handle Free Starter Pack (navigate directly to confirmation page)
  const handleFreeStarterPack = () => {
    navigate("/confirmation", { state: { id: apiResponse.id } });
  };

  // if(apiResponse.id == null) {
  //   navigate("/qualify")
  // }

  // Handle Stripe Checkout for Pro and Elite plans
  const handleCheckout = async (priceId) => {
    const stripe = await stripePromise;

    try {
      // Create a payment session from the backend
      const { data } = await axios.post("https://aqueous-tor-91749-7319d44de38a.herokuapp.com/create-checkout-session", {
        priceId, // Pass the Stripe Price ID
        orderId: apiResponse.id, // Pass the pre-generated Order ID for tracking
      });

      // Redirect to Stripe's checkout page
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId, // Get the sessionId from backend response
      });

      if (error) {
        console.error("Stripe checkout error:", error.message);
      }
    } catch (error) {
      console.error("Error initiating checkout:", error);
    }
  };


  return (
    <>
      <div>
        <p className="font-montserrat text-white font-black text-headline-1 text-center mb-5">
          PRICING
        </p>
        <hr className="bg-stone-400 h-0 border-stone-700" />
        <p className="text-sm font-normal text-white text-center">
          Potential order id: {apiResponse?.id}
        </p>
        <div className="flex justify-evenly items-center h-screen">
          
          {/* Starter Plan (Free) */}
          <div className="bg-stone-800 py-5 px-10 w-96 min-h-[60dvh] flex flex-col justify-between relative">
            <div>
              <p className="font-bold font-comic text-purple-400 text-headline-2">Starter</p>
              <div className="flex items-center justify-start relative">
              <p className="font-black font-montserrat text-stone-200 text-headline-1 z-0">77$</p>
              <span className="absolute z-10 -left-5 w-32 h-1 bg-red-500 -rotate-45"></span>
              </div>
            </div>
            <p className="font-black font-montserrat text-white text-headline-1 z-0">0$</p>
            <ul className="mt-10 flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <FontAwesomeIcon icon={faMusic} className="text-2xl text-white" />
                <p className="font-comic text-white">One high-quality fully custom track</p>
              </div>
              <div className="flex gap-3 items-center">
                <FontAwesomeIcon icon={faMusic} className="text-2xl text-white" />
                <p className="font-comic text-white">Delivered in less than 48 hours</p>
              </div>
              <div className="flex gap-3 items-center">
                <FontAwesomeIcon icon={faMusic} className="text-2xl text-white" />
                <p className="font-comic text-white">100% SoundSuccess* Guarantee</p>
              </div>
            </ul>
            <button 
              onClick={handleFreeStarterPack} // Handle free starter pack
              className="bg-amber-400 px-5 py-3 font-comic font-bold text-subheadline-4 mt-10 purple-shadow">
              Get Starter For Free
            </button>
            <img src={splash_purple} alt="" className="absolute -top-10 -right-10" />
          </div>

          {/* Pro Plan (Stripe Checkout) */}
          <div>
            <div className="bg-stone-800 py-5 px-10 w-96 min-h-[60dvh] flex flex-col justify-between relative">
              <div>
                <p className="font-bold font-comic text-red-500 text-headline-2">Pro</p>
                <p className="font-black font-montserrat text-white text-headline-1">120$</p>
              </div>
              <ul className="mt-10 flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faMusic} className="text-2xl text-white" />
                  <p className="font-comic text-white">Two high-quality fully custom tracks</p>
                </div>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faMusic} className="text-2xl text-white" />
                  <p className="font-comic text-white">Delivered in less than 48 hours</p>
                </div>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faMusic} className="text-2xl text-white" />
                  <p className="font-comic text-white">Three Optimization Revisions</p>
                </div>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faMusic} className="text-2xl text-white" />
                  <p className="font-comic text-white">100% SoundSuccess* Guarantee</p>
                </div>
              </ul>
              <button 
                onClick={() => handleCheckout('price_1PxSVxLpY4qbPyJ5mPb2eRFR')} // Use correct Stripe Price ID
                className="bg-blue px-5 py-3 font-comic font-bold text-subheadline-4 mt-10 redish-shadow">
                Get Pro (50% OFF)
              </button>
              <img src={splash_red} alt="" className="absolute -top-10 -right-10" />
            </div>
            <div className="bg-red-500 p-3 text-center rounded-b-md">
              <p className="text-white font-semibold font-comic text-xl">Most Popular</p>
            </div>
          </div>

          {/* Elite Plan (Placeholder for now) */}
          <div className="bg-stone-800 py-5 px-10 w-96 min-h-[60dvh] flex flex-col justify-between relative">
            <img src={splash_grey} alt="" className="absolute -top-10 -right-10" />
            <div>
              <p className="font-bold font-comic text-white text-headline-2">Elite</p>
              <p className="font-black font-montserrat text-white text-headline-3 mt-8">By Contract</p>
            </div>
            <p className="text-white font-comic text-subheadline-3">
              Looking for a guaranteed way of making your ads a show-stopper?
            </p>
            <button className="bg-stone-100 px-5 py-3 font-comic font-bold text-subheadline-2 mt-10 black-shadow">
              Get Elite
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
