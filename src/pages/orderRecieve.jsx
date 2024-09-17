import React, { useState, useRef } from "react";
import '../index.css';
import axios from "axios";
import AdBeats from "../assets/AdBeats.png"; // Add path to your logo image
import discountis from '../assets/discountis.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

function OrderRecieve() {
  const [orderId, setOrderId] = useState(""); // State to store order ID
  const [audioUrl, setAudioUrl] = useState("");
  const [feedBack, setFeedback] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [feedWidth, setFeedWidth] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error handling
  const [loading, setLoading] = useState(false); // State for loading status
  const [feedbackText, setFeedbackText] = useState(""); // State for feedback text
  const [isPlaying, setIsPlaying] = useState(false); // State for play/pause
  const audioRef = useRef(null); // Reference to the audio element

  const handleReviews = async () => {
    setDiscount(true);
    setFeedWidth(true);

    // Create formData object
    const formData = {
      feedback: feedbackText,
      orderId: orderId,
    };

    try {
      // Placeholder Axios POST request for form submission
      await axios.post("https://aqueous-tor-91749-7319d44de38a.herokuapp.com/submitFeedback", formData);
      console.log("Feedback submitted successfully!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const handleCTA = async () => {
    setFeedback(false);
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
        setFeedback(true);
      } else {
        setErrorMessage("No audio file found for this order. It's likely that your order isn't finished yet.");
      }
    } catch (error) {
      console.error("Error retrieving order:", error);
      setErrorMessage("Order ID not found or no audio file associated with this order.");
    }

    setLoading(false); // Stop loading spinner
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  // Conditionally render feedDisplay and discountDisplay based on state
  const feedDisplay = feedBack ? 'md:-translate-y-[50%] z-0 opacity-100' : '-translate-y-[200%] z-0 opacity-0';
  const widthFeed = feedWidth ? 'md:w-3/5 sm:w-full sm:h-screen' : 'md:w-2/5 sm:w-full sm:h-auto';
  const discountDisplay = discount ? 'block' : 'hidden';

  return (
    <>
      <div className="">
        <div className="absolute z-50">
          <nav className="flex justify-center items-center p-5">
            <img src={AdBeats} className="w-48" href="/" alt="AdBeats Logo" />
          </nav>
          <div className="w-screen h-[1px] hr-gradient"></div>
        </div>
        <div className="h-[100dvh] flex items-center justify-center z-10 relative">
          <div className="md:w-2/3 sm:mx-5 bg-backgroundblack flex flex-col items-center">
            <p className="font-comic text-blue text-center sm:text-md md:text-2xl">
              If you got an email that your order is ready
            </p>
            <h2 className="font-montserrat sm:text-subheadline-2 md:text-headline-2 font-black text-white text-center">
              Claim Your Order Here
            </h2>
            <p className="font-comic text-stone-400 text-center mt-6 sm:text-md md:text-subheadline-3">
              Copy and paste your Order ID from the email we sent you after making the order.
            </p>

            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="mt-6 px-4 py-2 md:w-2/3 sm:w-full border border-stone-100 bg-transparent text-white font-comic"
              placeholder="Enter Your Order ID"
            />

            <button
              onClick={handleCTA}
              className="py-2 px-10 mt-6 bg-stone-100 text-black font-comic font-bold md:text-headline-3 sm:text-subheadline-3 text-center border border-stone-100 transition hover:bg-transparent hover:text-stone-100"
            >
              {loading ? "Loading..." : "Claim Your Song!"}
            </button>

            {errorMessage && (
              <p className="text-red-500 font-comic mt-4">{errorMessage}</p>
            )}

            {audioUrl && (
              <div className="mt-6 flex flex-col gap-2 md:w-96 p-10 sm:w-full sm:mx-5 rounded-md bg-stone-900">
                <p className="text-stone-200 font-comic">Song Order: {orderId}</p>
                <div className="flex items-center gap-5 justify-start">
                <button
                  onClick={handlePlayPause}
                  className=""
                >
                  <FontAwesomeIcon 
                    icon={isPlaying ? faPause : faPlay}
                    className="text-blue text-2xl hover:cursor-pointer hover:scale-110 transition"
                  />
                </button>
                <audio ref={audioRef} src={audioUrl} className="hidden" />
                <a
                download
                href={audioUrl}
                >
                  <FontAwesomeIcon 
                     icon={faDownload}
                     className="p-3 text-stone-200 text-2xl rounded-md hover:cursor-pointer hover:scale-110 transition"
                  />
                </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={`${widthFeed} flex sm:flex-col relative bg-stone-900 p-10 ${feedDisplay} gap-5 sm:mx-5 items-center justify-between m-10 transition-all duration-500 ease-in-out`}
          >
            <div className="flex flex-col gap-5">
              <h2 className="text-white font-montserrat font-black sm:text-subheadline-3 md:text-headline-3">Feedback Spotlight</h2>
              <p className="font-comic text-blue">Write Your opinion on Our product And Get A 50% discount on your next order!</p>
              <textarea
                name=""
                rows="5"
                placeholder="Write Your Feedback here..."
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                className="appearance-none bg-transparent text-stone-200 outline-none border border-white p-3 placeholder:text-gray-500"
              ></textarea>
              <button
                onClick={handleReviews}
                className="text-white text-subheadline-3 w-64 font-comic bg-red-500 py-2 px-4"
              >
                Submit Review
              </button>
            </div>
            <span className={`md:h-96 sm:h-[2px] sm:w-96 md:w-[2px] bg-white rounded-md ${discountDisplay}`}></span>
            <img src={discountis} className={`h-96 w-auto ${discountDisplay}`} alt="Discount offer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderRecieve;
