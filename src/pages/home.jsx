import React, { useEffect, useState } from "react";
import "../index.css";
import Adbeats from "../assets/AdBeats.png";
import AG1 from "../assets/ag1.webp";
import AG1Logo from "../assets/ag1logo.svg";
import Manscaped from "../assets/Manscaped.avif";
import Manscaped_logo from "../assets/Manscaped_logo.svg";
import sideImg1 from "../assets/sideImg1.png";
import email_img from '../assets/email.png';
import exl from '../assets/exl.png';
import sideIMG3 from "../assets/sideIMG3.png";
import sideIMG4 from "../assets/sideIMG4.png";
import sideIMG5 from "../assets/sideIMG5.png";
import sideIMG6 from "../assets/sideIMG6.png";
import sideIMG7 from "../assets/sideIMG7.png";
import sideIMG8 from "../assets/sideIMG8.png";
import sideIMG9 from "../assets/sideIMG9.png";
import sideIMG10 from "../assets/sideIMG10.png";

function Home() {
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

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
  });

    // Define the questions array
    const questions = [
      {
        question: "What’s your name?",
        type: "text",
        name: "name",
        image: AG1,
        imageLogo: AG1Logo,
        songName: "AG1 Supplements",
        sideImg: sideImg1,
      },
      {
        question: "What’s your best email?",
        type: "email",
        name: "email",
        image: Manscaped,
        imageLogo: Manscaped_logo,
        songName: "Manscaped Grooming",
        sideImg: email_img,
      },
      {
        question: "Brand Name:",
        type: "text",
        name: "brandName",
        sideImg: sideIMG3,
      },
      {
        question: "Website (URL):",
        type: "url",
        name: "website",
        sideImg: sideIMG4,
      },
      {
        question: "What’s your primary target audience?",
        type: "text",
        name: "targetAudience",
        sideImg: sideIMG5,
      },
      {
        question: "What problem are you solving for them?",
        type: "text",
        name: "problem",
        sideImg: sideIMG6,
      },
      {
        question: "What product are you selling, and what makes it unique?",
        type: "text",
        name: "product",
        sideImg: sideIMG7,
      },
      {
        question: "What emotion should the ad/track convey?",
        type: "text",
        name: "emotion",
        sideImg: sideIMG8,
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
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [questions.length]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) =>
      Math.min(prevQuestion + 1, questions.length - 1)
    );
  };

  const handlePrevQuestion = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
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
          <img src={exl} className="absolute top-10 left-10 w-32" alt="" />
          <div className="fixed inset-0 bg-black z-50 animate-split"></div>
          <div className="fixed inset-0 flex items-center justify-center bg-black z-50 animate-split-reverse">
            <div className="animate-pulse-slow">
              <img src={Adbeats} alt="Logo" className="w-64" />
            </div>
          </div>
          <div className="min-h-screen bg-stone-900 flex flex-row-reverse items-center justify-between">
            <img
              src={questions[currentQuestion].sideImg}
              alt=""
              className="h-screen"
            />
            <form
              onSubmit={handleSubmit}
              className="p-10 rounded-md text-left w-3/5"
            >
              {/* Progress Bar */}
              <div className="w-full bg-stone-700 h-2 rounded-full mb-6 mx-10">
                <div
                  className="bg-blue h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {currentQuestion < questions.length ? (
                <div className="flex flex-col justify-between h-[60dvh] p-10">
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
                      questions[currentQuestion].options.map((option, index) => (
                        <div
                          key={index}
                          className={`border flex items-center mb-2 rounded-md shadow-md w-64 p-3 border-blue cursor-pointer transition ${
                            formData[questions[currentQuestion].name] === option ? 'border bg-blue text-black transition' : ''
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, [questions[currentQuestion].name]: option })
                          }
                        >
                          <input
                            type="radio"
                            name={questions[currentQuestion].name}
                            value={option}
                            checked={formData[questions[currentQuestion].name] === option}
                            onChange={handleChange}
                            className="hidden" // Hides the radio input
                          />
                          <span className="text-stone-200">{option}</span>
                        </div>
                      ))
                    )
                     : questions[currentQuestion].type === "textarea" ? (
                      <textarea
                        name={questions[currentQuestion].name}
                        value={formData[questions[currentQuestion].name]}
                        onChange={handleChange}
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
                            className="flex-shrink-0 w-full flex items-center"
                          >
                            <img
                              src={q.image}
                              alt=""
                              className="w-20 h-20 rounded-md mr-4"
                            />
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
                        currentQuestion === questions.length - 1
                          ? handleSubmit
                          : handleNextQuestion
                      }
                      className="bg-blue comic_btn font-comic text-2xl font-bold px-5 py-2 border hover:bg-black border-blue transition hover:text-blue hover:scale-110"
                    >
                      {currentQuestion === questions.length - 1
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
