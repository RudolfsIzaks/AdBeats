import React from "react";
import "../index.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [descriptionText, setdescriptionText] = useState("");
  const [nameText, setnameText] = useState("");
  const [emailText, setemailText] = useState("");

  const navigate = useNavigate();
   // State for feedback text

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      description: descriptionText,
      name: nameText,
      email: emailText,
    };

    try {
      await axios.post(
        "https://aqueous-tor-91749-7319d44de38a.herokuapp.com/submitContact",
        formData
      );
      navigate("/thanks-contact");
    } catch {
      console.log("Something went wrong.");
    }
  };

  return (
    <>
      <div className="absolute">
        <nav
          data-aos="fade-down"
          className="flex justify-center items-center p-5"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/adbeats-e1fd0.appspot.com/o/email-images%2FAdBeats.png?alt=media&token=7a97447e-5bac-4750-b298-cd24e7810b5f"
            className="w-48"
          />
        </nav>
        <div
          data-aos="fade-down"
          className="w-screen h-[1px] hr-gradient"
        ></div>
      </div>
      <div className="flex items-center justify-center h-screen w-full">
        <form className="flex flex-col gap-5 border border-stone-600 p-10 redish2-shadow">
          <div>
            <p className="font-monsterrat font-black text-white text-headline-2">
              Contact Us
            </p>
            <p className="font-comic text-white font-bold">
              For any further questions and support, you can drop us a line
              here!
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="font-comic text-white">
              Email
            </label>
            <input
              type="email"
              className="border-b p-3 text-stone-300 border-blue outline-none bg-transparent"
              onChange={setemailText}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="font-comic text-white">
              Name
            </label>
            <input
              type="text"
              className="border-b p-3 text-stone-300 border-blue outline-none bg-transparent"
              onChange={setnameText}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="font-comic text-white">
              Description
            </label>
            <textarea
              rows="5"
              type="text"
              onChange={setdescriptionText}
              className="border-b p-3 text-stone-300 border-blue outline-none bg-transparent"
            />
          </div>
          <button
            onClick={handleContactSubmit}
            className="border-blue border bg-blue text-white font-comic text-headline-3 font-bold hover:bg-transparent hover:text-blue hover:scale-110 transition"
          >
            Submit
          </button>
          <p className="text-stone-400 text-sm">
            We try to respond to inquiries as soon as possible, so hang tight
            and we'll help!
          </p>
        </form>
      </div>
    </>
  );
}

export default Contact;
