import React, { useState } from "react";
import '../index.css';
import axios from "axios";
import AdBeats from "../assets/AdBeats.png"; // Add path to your logo image

function OrderRecieve() {
  const [orderId, setOrderId] = useState(""); // State to store order ID
  const [audioUrl, setAudioUrl] = useState(""); // State to store audio URL
  const [errorMessage, setErrorMessage] = useState(""); // State for error handling
  const [loading, setLoading] = useState(false); // State for loading status

  const handleCTA = async () => {
    setLoading(true); // Start loading spinner
    setErrorMessage(""); // Clear previous errors
    setAudioUrl(""); // Clear previous audio URL

    try {
      const response = await axios.get(
        `https://aqueous-tor-91749-7319d44de38a.herokuapp.com/claim/${orderId}`
      );

      // Check if the response contains the audio URL
      if (response.data.audioUrl) {
        setAudioUrl(response.data.audioUrl);
      } else {
        setErrorMessage("No audio file found for this order.");
      }
    } catch (error) {
      console.error("Error retrieving order:", error);
      setErrorMessage("Order ID not found or no audio file associated with this order.");
    }

    setLoading(false); // Stop loading spinner
  };

  return (
    <>
      <div className="flowin">
        <div className="absolute">
          <nav className="flex justify-center items-center p-5">
            <img src={AdBeats} className="w-48" alt="AdBeats Logo" />
          </nav>
          <div className="w-screen h-[1px] hr-gradient"></div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="w-2/3 flex flex-col items-center">
            <p className="font-comic text-blue text-center text-2xl">
              If you got an email that your order is ready
            </p>
            <h2 className="font-montserrat text-headline-2 font-black text-white text-center">
              Claim Your Order Here
            </h2>
            <p className="font-comic text-stone-400 text-center mt-6 text-subheadline-3">
              Copy and paste your Order ID from the email we sent you after making the order.
            </p>

            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="mt-6 px-4 py-2 w-2/3 border border-stone-100 bg-transparent text-white font-comic"
              placeholder="Enter Your Order ID"
            />

            <button
              onClick={handleCTA}
              className="py-2 px-10 mt-6 bg-stone-100 text-black font-comic font-bold text-headline-3 text-center border border-stone-100 transition hover:bg-transparent hover:text-stone-100"
            >
              {loading ? "Loading..." : "Claim Your Song!"}
            </button>

            {errorMessage && (
              <p className="text-red-500 font-comic mt-4">{errorMessage}</p>
            )}

            {audioUrl && (
              <div className="mt-6">
                <p className="text-green-500 font-comic">
                  Your song is ready! Click below to listen or download:
                </p>
                <audio controls src={audioUrl} className="mt-4">
                  Your browser does not support the audio element.
                </audio>
                <br />
                <a
                  href={audioUrl}
                  download
                  className="text-blue-500 underline mt-4 block"
                >
                  Download Your Song
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderRecieve;
