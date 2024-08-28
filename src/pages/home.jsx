import React, { useEffect, useState } from "react";
import "../index.css";
import Adbeats from "../assets/AdBeats.png";
import AG1 from "../assets/ag1.webp";
import AG1Logo from "../assets/ag1logo.svg";
import Manscaped from "../assets/Manscaped.avif";
import Manscaped_logo from "../assets/Manscaped_logo.svg";
import sideImg1 from "../assets/sideImg1.webp";
import orange from "../assets/orange.webp";
import blue from "../assets/blue.webp";

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

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
            sideImg: orange,
        },
        {
            question: "Brand Name:",
            type: "text",
            name: "brandName",
            sideImg: blue,
        },
        {
            question: "Website (URL):",
            type: "url",
            name: "website",
            sideImg: blue,
        },
        {
            question: "What’s your primary target audience?",
            type: "text",
            name: "targetAudience",
        },
        {
            question: "What problem are you solving for them?",
            type: "text",
            name: "problem",
        },
        {
            question: "What product are you selling, and what makes it unique?",
            type: "text",
            name: "product",
        },
        {
            question: "What emotion should the ad/track convey?",
            type: "text",
            name: "emotion",
        },
        {
            question: "What’s the goal of the ad?",
            type: "radio",
            name: "goal",
            options: ["Sales", "Engagement", "Brand Recognition", "Other"],
        },
        {
            question:
            "Is there anything else we need to know about the ad? (Optional)",
            type: "textarea",
            name: "additionalInfo",
        },
    ];

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
        setCurrentQuestion((prevQuestion) => Math.min(prevQuestion + 1, questions.length - 1));
    };

    const handlePrevQuestion = () => {
        setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
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
                            <div className="w-full bg-gray-300 h-2 rounded-full mb-6">
                                <div
                                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
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
                                            questions[currentQuestion].options.map(
                                                (option, index) => (
                                                    <div key={index} className="flex items-center mb-2">
                                                        <input
                                                            type="radio"
                                                            name={questions[currentQuestion].name}
                                                            value={option}
                                                            checked={
                                                                formData[questions[currentQuestion].name] ===
                                                                option
                                                            }
                                                            onChange={handleChange}
                                                            className="mr-2"
                                                        />
                                                        <label className="text-gray-700">{option}</label>
                                                    </div>
                                                )
                                            )
                                        ) : questions[currentQuestion].type === "textarea" ? (
                                            <textarea
                                                name={questions[currentQuestion].name}
                                                value={formData[questions[currentQuestion].name]}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border-b focus:outline-none focus:border-blue"
                                            />
                                        ) : null}
                                    </div>
                                    <div>
                                        <h2 className="text-white md:text-2xl font-inter font-bold mb-3">Ads That <i className="font-black text-blue">Beat</i> The System...</h2>
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
                                                className="bg-amber-500 font-inter text-xl font-black px-5 py-2 rounded-md hover:bg-transparent border border-amber-500 transition hover:text-amber-500 mr-5"
                                            >
                                                Back
                                            </button>
                                        )}
                                        <button
                                            type={currentQuestion === questions.length - 1 ? "submit" : "button"}
                                            onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNextQuestion}
                                            className="bg-blue font-inter text-xl font-black px-5 py-2 rounded-md hover:bg-transparent border border-blue transition hover:text-blue"
                                        >
                                            {currentQuestion === questions.length - 1 ? "Submit" : "Continue"}
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
