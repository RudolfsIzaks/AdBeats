import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import Adbeats from "../assets/AdBeats.png";
import AG1 from "../assets/ag1.webp";
import AG1Logo from "../assets/ag1logo.svg";
import Manscaped from "../assets/Manscaped.avif";
import Manscaped_logo from "../assets/Manscaped_logo.svg";
import Equinox_logo from '../assets/Equinox-Logo-1.svg';
import Equinox from '../assets/Equinox.png';
import Skillshare from '../assets/Skillshare.png';
import Skillshare_logo from '../assets/Skillshare_logo.svg';
import Petco from '../assets/Petco.png';
import Petco_logo from '../assets/Petco_logo.svg';
import Northface from '../assets/Northface.webp';
import Northface_logo from '../assets/Northface_logo.svg';
import Uber from '../assets/Uber.webp';
import Uber_logo from '../assets/Uber_logo.svg';
import Nike from '../assets/Nike.webp';
import Nike_logo from '../assets/Nike_logo.svg';
import sideImg1 from "../assets/sideImg1.png";
import email_img from "../assets/email.png";
import exl from "../assets/exl.png";
import sideIMG3 from "../assets/sideIMG3.png";
import sideIMG4 from "../assets/sideIMG4.png";
import sideIMG5 from "../assets/sideIMG5.png";
import sideIMG6 from "../assets/sideIMG6.png";
import sideIMG7 from "../assets/sideIMG7.png";
import sideIMG8 from "../assets/sideIMG8.png";
import sideIMG9 from "../assets/sideIMG9.png";
import sideIMG10 from "../assets/sideIMG10.png";
import sampleAudio from "../assets/sample.mp3";
import Petco_audio from '../assets/Petco_audio.mp3';
import NorthFace_audio from '../assets/NorthFace.mp3';
import Equinox_audio from '../assets/Equinox.mp3';
import SkillshareAudio from '../assets/SkillshareAudio.mp3';
import UberAudio from  '../assets/UberAudio.mp3';
import AG1Audio from '../assets/AG1Audio.mp3';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(null); // Track which audio is playing
  const audioRefs = useRef([]); // Array of audio refs

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    website: "",
    targetAudience: "",
    problem: "",
    product: "",
    emotion: "",
    goal: "",
    additionalInfo: "",
    status: "User Submitted",
  });

  const questions = [
    {
      question: "What’s your name?",
      type: "text",
      name: "name",
      image: AG1,
      imageLogo: AG1Logo,
      songName: "AG1 Supplements",
      sideImg: sideImg1,
      audio: AG1Audio,
    },
    {
      question: "What’s your best email?",
      type: "email",
      name: "email",
      image: Manscaped,
      imageLogo: Manscaped_logo,
      songName: "Manscaped Grooming",
      sideImg: email_img,
      audio: sampleAudio,
    },
    {
      question: "Brand Name:",
      type: "text",
      name: "brandName",
      sideImg: sideIMG3,
      image: Equinox,
      imageLogo: Equinox_logo,
      songName: "Equinox Fitness",
      audio: Equinox_audio,
    },
    {
      question: "Website (URL):",
      type: "url",
      name: "website",
      sideImg: sideIMG4,
      image: Skillshare,
      imageLogo: Skillshare_logo,
      songName: "Skillshare Education",
      audio: SkillshareAudio,
    },
    {
      question: "What’s your primary target audience?",
      type: "text",
      name: "targetAudience",
      sideImg: sideIMG5,
      image: Petco,
      imageLogo: Petco_logo,
      songName: "Petco Goods",
      audio: Petco_audio,
    },
    {
      question: "What problem are you solving for them?",
      type: "text",
      name: "problem",
      sideImg: sideIMG6,
      image: Northface,
      imageLogo: Northface_logo,
      songName: "NorthFace Clothing",
      audio: NorthFace_audio,
    },
    {
      question: "What product are you selling, and what makes it unique?",
      type: "text",
      name: "product",
      sideImg: sideIMG7,
      image: Uber,
      imageLogo: Uber_logo,
      songName: "Uber Transportation",
      audio: UberAudio,
    },
    {
      question: "What emotion should the ad/track convey?",
      type: "text",
      name: "emotion",
      sideImg: sideIMG8,
      image: Nike,
      imageLogo: Nike_logo,
      songName: "Nike Footwear",
    },
    {
      question: "What’s the goal of the ad?",
      type: "radio",
      name: "goal",
      options: ["Sales", "Engagement", "Brand Recognition", "Other"],
      sideImg: sideIMG9,
    },
    {
      question:
        "Is there anything else we need to know about the ad? (Optional)",
      type: "textarea",
      name: "additionalInfo",
      sideImg: sideIMG10,
    },
  ];

  const imageList = [
    Adbeats,
    AG1,
    AG1Logo,
    Manscaped,
    Manscaped_logo,
    Skillshare,
    Skillshare_logo,
    Equinox,
    Equinox_logo,
    Uber,
    Uber_logo,
    Petco,
    Petco_logo,
    Northface,
    Northface_logo,
    sideImg1,
    email_img,
    exl,
    sideIMG3,
    sideIMG4,
    sideIMG5,
    sideIMG6,
    sideIMG7,
    sideIMG8,
    sideIMG9,
    sideIMG10,
  ];

  useEffect(() => {
    // Preload all images
    const preloadImages = imageList.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    // When all images are loaded, set loading to false
    Promise.all(preloadImages)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load images", err);
        setLoading(false); // You may still want to hide the loader even if some images fail to load
      });
  }, []);

  useEffect(() => {
    if (isPlaying === null) {
      const interval = setInterval(() => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % questions.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [questions.length, isPlaying]);

  const handleAudioPlayPause = (index) => {
    const currentAudioRef = audioRefs.current[index];
    if (currentAudioRef) {
      if (isPlaying === index) {
        currentAudioRef.pause();
        setIsPlaying(null);
      } else {
        if (isPlaying !== null) {
          audioRefs.current[isPlaying].pause(); // Pause the currently playing audio
        }
        currentAudioRef.play();
        setIsPlaying(index);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextQuestion = () => {
    const currentField = questions[currentQuestion].name;
    
    // Check if the current field is required and if it is empty
    if (!formData[currentField]) {
      alert("Please fill out this field before continuing.");
      return; // Stop here if the field is empty
    }
    
    setCurrentQuestion((prevQuestion) =>
      Math.min(prevQuestion + 1, questions.length - 1)
    );
    setIsPlaying(false); // Stop playing when moving to the next question
  };
  

  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
    setIsPlaying(false); // Stop playing when moving to the previous question
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Ensure the status field is always set to 'User Submitted'
    const submissionData = {
      ...formData,
      status: "User Submitted", // Hardcoded status field
    };
  
    console.log("Form Data Submitted:", submissionData);
  
    try {
      // Make the POST request with the hardcoded status
      const response = await axios.post(
        'https://aqueous-tor-91749-7319d44de38a.herokuapp.com/form-submit', 
        submissionData
      );
  
      // Reset the form data after successful submission
      setFormData({
        name: "",
        email: "",
        brandName: "",
        website: "",
        targetAudience: "",
        problem: "",
        product: "",
        emotion: "",
        goal: "",
        additionalInfo: "",
        status: "User Submitted", // Reset status field
      });
  
      console.log(response);
  
      // Navigate to the confirmation page with the response data
      navigate("/pricing", { state: { response: response.data } });
    } catch (error) {
      // Handle any error that occurs during the API call
      console.error("Error submitting the form:", error);
    }
  };
  
  

  // Calculate the progress as a percentage
  const progress = (currentQuestion / (questions.length - 1)) * 100;

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <div className="relative">
            <div className="animate-pulse">
              <img src={Adbeats} alt="Logo" className="w-64" />
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bg-black">
          <img src={exl} className="absolute md:top-10 md:left-10 md:w-32 sm:hidden" alt="" />
          <div className="fixed inset-0 bg-black z-50 animate-split"></div>
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50 animate-split-reverse">
            <div className="animate-pulse-slow">
              <img src={Adbeats} alt="Logo" className="w-64" />
            </div>
          </div>
          <div className="md:w-auto sm:h-[80dvh] sm:w-full sm:p-5 md:h-full bg-stone-900 md:m-10 rounded-md flex sm:flex-col-reverse md:flex-row-reverse items-center sm:justify-center md:justify-between">
            <div className="flex-1 h-[90dvh] ml-5">
            <img
              src={questions[currentQuestion].sideImg}
              alt=""
              className="h-full md:w-full object-cover sm:hidden rounded-r-md"
            />
            </div>
            <form
              onSubmit={handleSubmit}
              className="md:p-10 sm:p-2 rounded-md text-left sm:w-full md:w-1/2"
            >
              <div className="w-full bg-stone-700 h-2 rounded-full mb-6 md:mx-10 sm:mx-0">
                <div
                  className="bg-blue h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {currentQuestion < questions.length ? (
                <div className="flex flex-col md:justify-between md:h-[60dvh] md:p-10">
                  <div className="mb-4">
                    <label className="block text-left text-white text-3xl font-bold mb-10">
                      {questions[currentQuestion].question}
                    </label>
                    {questions[currentQuestion].type === "text" ||
                    questions[currentQuestion].type === "email" ||
                    questions[currentQuestion].type === "url" ? (
                      <input
                        type={questions[currentQuestion].type}
                        name={questions[currentQuestion].name}
                        value={formData[questions[currentQuestion].name]}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-transparent text-white border-b focus:outline-none focus:border-blue"
                        required
                      />
                    ) : questions[currentQuestion].type === "radio" ? (
                      questions[currentQuestion].options.map(
                        (option, index) => (
                          <div
                            key={index}
                            className={`border flex items-center mb-2 rounded-md shadow-md w-64 p-3 border-blue cursor-pointer transition ${
                              formData[questions[currentQuestion].name] ===
                              option
                                ? "border bg-blue text-black transition"
                                : ""
                            }`}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                [questions[currentQuestion].name]: option,
                              })
                            }
                          >
                            <input
                              type="radio"
                              name={questions[currentQuestion].name}
                              value={option}
                              required
                              checked={
                                formData[questions[currentQuestion].name] ===
                                option
                              }
                              onChange={handleChange}
                              className="hidden" // Hides the radio input
                            />
                            <span className="text-stone-200">{option}</span>
                          </div>
                        )
                      )
                    ) : questions[currentQuestion].type === "textarea" ? (
                      <textarea
                        name={questions[currentQuestion].name}
                        value={formData[questions[currentQuestion].name]}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border-b bg-transparent text-white appearance-none focus:outline-none focus:border-blue"
                      />
                    ) : null}
                  </div>
                  <div>
                    <h2 className="text-white md:text-2xl font-inter font-bold mb-3">
                      Ads That <i className="font-black text-blue">Beat</i> The
                      System...
                    </h2>
                    <div className="bg-stone-800 p-4 rounded-md mb-6 overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                          transform: `translateX(-${carouselIndex * 100}%)`,
                          width: `${questions.length * 100}%`,
                        }}
                      >
                        {questions.map((q, i) => (
                          <div
                            key={i}
                            className="flex-shrink-0 flex w-full items-center"
                          >
                            <div className="flex items-center justify-center relative">
                            <img
                              src={q.image}
                              alt=""
                              className="w-20 h-20 object-cover rounded-md mr-4 opacity-50"
                            />
                            {q.audio && (
                                <div className="absolute right-[40%]">
                                  <audio ref={(el) => (audioRefs.current[i] = el)} src={q.audio} />
                                  <FontAwesomeIcon
                                    icon={isPlaying === i ? faPause : faPlay}
                                    onClick={() => handleAudioPlayPause(i)}
                                    className="cursor-pointer text-blue-500 text-4xl text-stone-200"
                                  />
                                </div>
                              )}
                            </div>
                            <div>
                              <img
                                src={q.imageLogo}
                                alt=""
                                className="w-16 mb-2"
                              />
                              <p className="text-stone-200 font-semibold">
                                {q.songName}
                              </p>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                  <div className="">
                    {currentQuestion > 0 && (
                      <button
                        type="button"
                        onClick={handlePrevQuestion}
                        className="bg-amber-500 comic_btn_inv font-comic text-2xl font-black px-5 py-2 hover:bg-black border border-amber-500 transition hover:text-amber-500 mr-10"
                      >
                        Back
                      </button>
                    )}

                    <button
                      type={
                        currentQuestion === questions.length - 1
                          ? "submit"
                          : "button"
                      }
                      onClick={
                        currentQuestion === questions.length
                          ? handleSubmit
                          : handleNextQuestion
                      }
                      className="bg-blue comic_btn font-comic text-2xl font-bold px-5 py-2 border hover:bg-black border-blue transition hover:text-blue hover:scale-110"
                    >
                      {currentQuestion === questions.length
                        ? "Submit"
                        : "Continue"}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <p className="mb-4 text-gray-700">
                    Thank you for completing the quiz!
                  </p>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              )}
              
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;