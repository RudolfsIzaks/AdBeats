import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import AdBeats from "../assets/AdBeats.png";
import { Link, useNavigate } from "react-router-dom";
import thoughtbbl from "../assets/thoughtbbl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCircleCheck,
  faPlay,
  faMusic,
  faArrowDown,
  faArrowUp,
  faXmark,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import rectred from "../assets/rect-red.svg";
import rectblue from "../assets/rect-blue.svg";
import rectyellow from "../assets/rect-yellow.svg";
import Manscaped from "../assets/Manscaped.avif";
import Manscaped_logo from "../assets/Manscaped_logo.svg";
import AG1 from "../assets/ag1.webp";
import AG1Logo from "../assets/ag1logo.svg";
import Skillshare from "../assets/Skillshare.png";
import Skillshare_logo from "../assets/Skillshare_logo.svg";
import Petco from "../assets/Petco.png";
import Petco_logo from "../assets/Petco_logo.svg";
import Equinox_logo from "../assets/Equinox-Logo-1.svg";
import Equinox from "../assets/Equinox.png";
import Nike from "../assets/Nike.webp";
import Nike_logo from "../assets/Nike_logo.svg";
import comic_splash from "../assets/comic_splash.png";
import seesaw_1 from "../assets/seesaw_1.webp";
import seesaw_2 from "../assets/seesaw_2.webp";
import engagement from "../assets/engagement.png";
import seesaw_4 from "../assets/seesaw_4.webp";
import bang from "../assets/bang.png";
import Footer from "../components/footer";
import grinman from "../assets/grinman.png";
import bomb from "../assets/bomb.png";
import light from "../assets/light.png";
import Counter from "../components/counter";
import AOS from "aos";
import "aos/dist/aos.css";
import grid1 from '../assets/grid1.png';
import grid2 from '../assets/grid2.png';
import grid3 from '../assets/grid3.png';
import grid4 from '../assets/grid4.png';
import LogoGroup from '../assets/logogroup.png';

function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS
  }, []);
  const navigate = useNavigate();

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Manually start video playback with autoplay enabled
      videoRef.current.muted = true; // Ensure muted for autoplay policies
      videoRef.current.play();
    }
  }, []);

  const cards = [
    {
      logo: Manscaped_logo,
      main_img: Manscaped,
      translate: "-translate-y-10",
      color: "bg-amber-500",
    },
    {
      logo: AG1Logo,
      main_img: AG1,
      translate: "translate-y-20",
      color: "bg-[#DC2625]",
    },
    {
      logo: Skillshare_logo,
      main_img: Skillshare,
      translate: "-translate-y-16",
      color: "bg-blue",
    },
    {
      logo: Petco_logo,
      main_img: Petco,
      translate: "translate-y-12",
      color: "bg-amber-500",
    },
    {
      logo: Equinox_logo,
      main_img: Equinox,
      translate: "-translate-y-10",
      color: "bg-[#DC2625]",
    },
    {
      logo: Nike_logo,
      main_img: Nike,
      translate: "translate-y-10",
      color: "bg-blue",
    },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselCards, setCarouselCards] = useState(cards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => {
        if (prevIndex === cards.length - 1) {
          setTimeout(() => {
            setCarouselIndex(0);
          }, 500);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const [isSwiping, setIsSwiping] = useState(false);

  const rotateCards = () => {
    setCarouselCards((prevCards) => {
      const [first, ...rest] = prevCards;
      return [...rest, first];
    });
  };

  const handleSwipe = () => {
    setIsSwiping(true);
    setTimeout(() => {
      rotateCards();
      setIsSwiping(false);
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSwipe();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCTA = () => {
    navigate("/qualify");
  };

  return (
    <>
      <div className="absolute">
        <nav
          data-aos="fade-down"
          className="flex justify-center items-center py-5"
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
      <div className="sm:overflow-hidden xs:overflow-hidden">
      <div className="min-h-screen flex sm:flex-col sm:pt-32 items-center justify-center md:mx-32">
        <div
          data-aos="fade-in"
          className="md:w-1/2 flex flex-col md:items-start sm:items-center sm:m-5"
        >
          <p className="font-comic text-blue sm:text-center sm:text-lg md:text-2xl">
            The Simplest And Easiest Way to…
          </p>
          <h2 className="font-montserrat sm:text-xl md:text-headline-2 font-black text-white sm:text-center">
            Transform Run-Of-The-Mill Video Ads Into Attention-Grabbing Monsters
          </h2>
          <p className="font-comic text-stone-400 sm:text-center mt-6 sm:text-lg md:text-subheadline-3">
            That kidnap your dream customer's attention, and instantly converts
            them into loyal fans! 
          </p>
          <button
            onClick={handleCTA}
            className="py-2 px-10 mt-10 bg-stone-100 text-black font-comic font-bold md:text-headline-3 sm:text-xl text-center border border-stone-100 transition hover:bg-transparent hover:text-stone-100"
          >
            Learn More
          </button>
          <Link
            className="font-comic font-bold sm:text-lg md:text-xl my-5  border-blue border text-center bg-blue py-2 px-5 hover:bg-transparent hover:text-blue transition"
            to="/order-retrieval"
          >
            Claim Orders Here
          </Link>
        </div>
        <div className="md:w-1/2">
          <video
            ref={videoRef}
            className="mix-blend-screen"
            src="https://firebasestorage.googleapis.com/v0/b/adbeats-e1fd0.appspot.com/o/mock%2Fmockupfinal.mp4?alt=media&token=d0e4b41c-010c-4f18-8d1b-f2c6d12f6413"
            playsInline
            loop
            muted
          />
        </div>
      </div>
      <hr className="h-[1px] bg-stone-500 border-none border-stone-500 mb-32" />
      <div className="relative text-center md:mx-32 sm:mx-5">
        <p className="font-comic font-bold text-blue z-10 md:text-subheadline-3 sm:text-lg">
          Ever wondered, what’s…
        </p>
        <h2 className="font-montserrat sm:text-subheadline-3 md:text-headline-2 text-center font-black text-white z-10">
          The Secret Behind The Top 2% of Advertisers
        </h2>
        <p className="font-comic text-stone-300 sm:text-md md:text-subheadline-3 z-10">
          (That allows them to get 50% of online traffic, dirt cheap…)
        </p>
      </div>
      <div className="flex sm:flex-col-reverse sm:mx-5 md:items-center my-20 md:gap-20 md:mx-32 lg:mx-48">
        <div className="flex flex-col gap-10 justify-between md:w-1/2 bg-[#171717] border border-[#680019] md:p-10 sm:p-5 h-max">
          <h2 className="md:text-headline-3 sm:text-subheadline-3 font-black text-white">Reality Of Advertising</h2>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
            <FontAwesomeIcon
            icon={faXmark}
            className="text-red-500 md:text-headline-2 sm:text-subheadline-2"
            />
            <p className="text-white md:text-subheadline-3">It’s Not Their Endless Budget</p>
            </div>
            <div className="flex gap-5 items-center">
            <FontAwesomeIcon
            icon={faXmark}
            className="text-red-500 md:text-headline-2 sm:text-subheadline-2"
            />
            <p className="text-white md:text-subheadline-3">It’s Not Their “brand”</p>
            </div>
            <div className="flex gap-5 items-center">
            <FontAwesomeIcon
            icon={faXmark}
            className="text-red-500 md:text-headline-2 sm:text-subheadline-2"
            />
            <p className="text-white md:text-subheadline-3">It’s Not The Quality of Their Product.</p>
            </div>
            <div className="flex gap-5 items-center">
            <FontAwesomeIcon
            icon={faCheck}
            className="text-blue md:text-headline-2 sm:text-subheadline-2"
            />
            <p className="text-white md:text-subheadline-3 font-bold">It’s Grabbing and Holding Attention!</p>
            </div>
          </div>
          <button className="text-white border border-red-500 bg-red-500 py-2 px-5 w-48 hover:bg-transparent hover:text-red-500 hover:scale-110 transition">Become The 2%</button>
        </div>
        <div className="md:w-1/2 md:my-20 flex-grow">
          <img src={LogoGroup} />
        </div>
      </div>
      <hr className="h-[1px] bg-stone-500 border-none border-stone-500 mb-32" />
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-5 text-center md:mt-20">
          <p className="font-comic font-bold text-blue z-10 sm:text-lg md:text-subheadline-3">
            If you’re a business that advertises online…
          </p>
          <h2 className="font-montserrat sm:text-subheadline-4 md:text-headline-2 font-black text-white text-center z-10 mx-5 md:w-4/5">
            Your Sales Hindge Solely on How Much Attention Your Dream Customers
            Can Give!
          </h2>
          <p className="font-comic font-bold text-stone-300 z-10 sm:text-lg md:text-subheadline-3">
            And their attention is directly responsible for:
          </p>
        </div>
        <div className="flex justify-between items-center sm:flex-col gap-12 sm:mx-5 my-40 sm:min-h-screen md:h-[50dvh]">
          <div
            data-aos="fade-down-right"
            className="relative flex items-center justify-center"
          >
            <img src={rectred} alt="" className="absolute md:w-[500px] z-0" />
            <div className="z-10 w-3/5">
              <h2 className="font-black font-montserrat text-white sm:text-subheadline-4 md:text-subheadline-3 xs:text-sm">
                Reducing CPA’s
              </h2>
              <p className="text-white font-comic sm:text-lg md:text-subheadline-4 xs:text-xs">
                Spending Significantly Less to Gain Each New Customer
              </p>
            </div>
          </div>
          <div
            data-aos="flip-up"
            className="relative flex items-center justify-center"
          >
            <img src={rectblue} alt="" className="absolute md:w-[500px] z-0" />
            <div className="z-10 w-3/5">
              <h2 className="font-black font-montserrat text-white sm:text-subheadline-4 md:text-subheadline-3 xs:text-sm">
                Lowering CPC’s
              </h2>
              <p className="text-white font-comic sm:text-lg md:text-subheadline-4 xs:text-xs">
                Drastically Cheaper Traffic Flooding Into Your Website
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down-left"
            className="relative flex items-center justify-center"
          >
            <img
              src={rectyellow}
              alt=""
              className="absolute md:w-[500px] z-0"
            />
            <div className="z-10 w-3/5">
              <h2 className="font-black font-montserrat text-white sm:text-subheadline-4 md:text-subheadline-3 xs:text-sm">
                Cheaper CPM’s
              </h2>
              <p className="text-white font-comic sm:text-lg md:text-subheadline-4 xs:text-xs">
                Facebook Charging You Way Less For Ad Placements
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mb-5 sm:w-auto sm:overflow-hidden">
        <div
          data-aos="fade-in"
          className="flex flex-col gap-5 md:w-2/3 text-center m-5"
        >
          <p className="text-stone-300 font-bold font-comic sm:text-md md:text-subheadline-3">
            So, how do you get your dream customer's attention?
          </p>
          <h2 className="text-white font-black font-montserrat sm:text-xl md:text-headline-2">
            Meet AdBeats - The Fastest And Easiest Way To Make Your Brand a
            Show-Stopper
          </h2>
        </div>
      </div>
      <div className="p-4 md:hidden lg:hidden rounded-md mb-6 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${carouselIndex * 100}%)`,
            width: `${cards.length * 100}%`, // Update to handle overflow
          }}
        >
          {[...cards, ...cards].map(
            (
              q,
              i // Clone the cards for infinite looping
            ) => (
              <div
                key={i}
                className={`flex-shrink-0 flex w-full items-center`}
                onClick={handleCTA}
              >
                <div className="w-[94vw] flex flex-col items-center">
                  <img
                    src={q.logo}
                    className="md:w-36 sm:w-32 md:p-5 sm:mb-2"
                  />
                  <div
                    className={`md:p-5 sm:p-5 w-64 rounded-md ${q.color} relative flex items-center justify-center`}
                  >
                    <img
                      src={q.main_img}
                      className="rounded-md opacity-50 transition-all duration-500 ease-in-out"
                    />
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-stone-200 absolute sm:text-xl md:text-4xl"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="p-4 sm:hidden md:inline-block lg:flex rounded-md mb-6 overflow-hidden justify-center">
        <div
          className={`flex ${
            isSwiping ? "transition duration-500 -translate-x-[20%]" : ""
          }`}
          style={{
            width: `${carouselCards.length * (100 / 5)}%`, // Adjust width for 5 cards
          }}
        >
          {carouselCards.map((q, i) => (
            <div
              key={i}
              className={`flex-shrink-0 flex w-full items-center md:w-1/5`} // 1/5 width for 5 items on larger screens
              onClick={handleCTA}
            >
              <div className="w-auto m-5 flex flex-col items-center">
                <img src={q.logo} className="md:w-48 sm:w-24 md:p-5 sm:mb-2" />
                <div
                  className={`md:p-5 sm:p-1 rounded-md ${q.color} relative flex items-center justify-center`}
                >
                  <img
                    src={q.main_img}
                    className="rounded-md opacity-50 transition-all duration-500 ease-in-out"
                  />
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-stone-200 absolute sm:text-xl md:text-4xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="h-[1px] bg-stone-500 border-none border-stone-500 my-32" />
      <div className="flex sm:flex-col-reverse gap-10 md:justify-around items-center sm:mx-5 md:mx-32">
        <div
          data-aos="fade-in"
          className="md:w-1/2 md:flex md:flex-col md:items-end"
        >
          <div>
            <p className="text-blue font-comic sm:text-subheadline-4 md:text-subheadline-3 my-2 select-none">
              Take the first step towards transforming your ad performance.
            </p>
            <h1 className="text-white font-montserrat font-black sm:text-subheadline-3 md:text-headline-2 my-5 select-none">
              Your Ads Can Be Unforgettable
            </h1>
            <p className="text-stone-400 select-none">
              Imagine your ad playing in someone's head long after they've
              scrolled past it.
              <br />
              <br />
              Custom-tailored music can do just that, according to multiple
              studies​.
              <br />
              <br />
              <br />
              So naturally, crafting custom tracks to resonate with the 96% who
              don't click on your ads, is what we do best.
              <br />
              <br />
              The benefit? Your ads won't just be seen; they'll be remembered
              and acted upon.
              <br />
              <br />
            </p>
            <Link
              to="/qualify"
              className="text-xl font-black italic font-montserrat text-blue animate-pulse"
            >
              Sign up now and experience the AdBeats difference!
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center sm:mb-32 sm:mt-10 md:w-1/2">
          <div
            data-aos="flip-right"
            className="absolute sm:w-48 md:w-80 h-auto bg-stone-900 rounded-md p-3 -rotate-12 z-50"
          >
            <div className="relative flex items-center justify-center select-none">
              <img
                src={seesaw_1}
                className="z-50 md:w-72 md:h-80 rounded-md select-none"
              />
              <img
                src={seesaw_1}
                className="absolute z-0 blur-3xl animate-pulse select-none"
              />
            </div>
          </div>
          <div
            data-aos="flip-left"
            className="flex items-center absolute sm:w-20 sm:h-32 md:w-80 md:h-96 bg-stone-800 rounded-md p-3 sm:-rotate-45 md:rotate-12 sm:right-[10%] md:right-[10%] z-0"
          >
            <div className="relative flex items-center justify-center">
              <img src={AdBeats} className="z-50 md:w-72  rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[1px] bg-stone-500 border-none border-stone-500 my-32" />
      <div className="flex sm:flex-col-reverse md:flex-row-reverse gap-10 md:justify-center items-center md:mx-32 sm:mx-5">
        <div data-aos="fade-in" className="md:w-1/2">
          <p className="text-blue font-comic sm:text-subheadline-4 md:text-subheadline-3 my-2">
            Attention is the new currency in the world of advertising.
          </p>
          <h1 className="text-white font-montserrat font-black sm:text-subheadline-3 md:text-headline-2 my-5">
            Stand Out with Unique, Attention-Grabbing Ads
          </h1>
          <p className="text-stone-400">
            <b>Why make ads that are easily overlooked? </b>
            <br />
            <br />
            AdBeats offers a fresh approach to your brand's copywriting and
            tone, guaranteeing that your ads command attention.
            <br />
            <br />
            Research indicates that ads with branded audio are 44% more noticed
            and engaging​.
            <br />
            <br />
            Adbeats doesn't just create a track for your brand, but a track
            meant to persuade! The result? Ads that can't be ignored.
          </p>
        </div>
        <div
          data-aos="fade-in"
          className="relative flex items-center justify-center md:w-1/2"
        >
          <div className="flex items-center justify-center relative">
            <img
              src={seesaw_2}
              className="sm:w-full sm:mx-5 md:w-3/5 rounded-md z-50"
            />
            <img
              src={seesaw_2}
              className="absolute sm:w-full sm:mx-5 md:w-3/5 z-0 sm:blur-xl md:blur-3xl animate-pulse"
            />
          </div>
        </div>
      </div>
      <hr className="h-[1px] bg-stone-500 border-none border-stone-500 my-32" />
      <div className="flex sm:flex-col-reverse gap-10 md:justify-center md:mx-32 sm:mx-5">
        <div
          data-aos="fade-in"
          className="lg:w-1/3 md:w-1/2 md:flex md:flex-col "
        >
          <div>
            <p className="text-blue font-comic sm:text-subheadline-4 md:text-subheadline-3 my-2">
              Transform Mere Attention into Laser-Focused Interest…
            </p>
            <h1 className="text-white font-montserrat font-black sm:text-subheadline-3 md:text-headline-2 my-5">
              Boost Engagement and Retention, Instantly
            </h1>
            <p className="text-stone-400">
              Engagement is the lifeblood of successful advertising.
              <br />
              <br />
              So naturally, who wouldn’t want a stunning 64% increase in
              engagement?
              <br />
              <br />
              We’re talking floods of comments, shares, and genuine interest.
              <br />
              <br />
              And the best part?
              <br />
              <br />
              Advertising platforms reward engagement with drastically lower
              costs- exponentially boosting your ROI!
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="relative flex items-center justify-start"
        >
          <div className="flex items-center justify-center relative">
            <img src={engagement} className="rounded-md z-50" />
            <img src={engagement} className="absolute rounded-md z-0" />
          </div>
        </div>
      </div>
      <hr className="h-[1px] bg-stone-500 border-none border-stone-500 my-32" />
      <div className="flex sm:flex-col-reverse md:flex-row-reverse gap-10 md:justify-center items-center md:mx-32 sm:mx-5">
        <div className="md:w-1/2">
          <h1 className="text-white font-montserrat font-black sm:text-subheadline-3 md:text-headline-2 my-5">
            Create Timeless Ads that Defy Ad Fatigue
          </h1>
          <p className="text-stone-400">
            Ad fatigue is a common challenge, but it’s not insurmountable.
            <br />
            <br />
            The key to drowning ad fatigue and prolonging your campaign's
            success is engagement.
            <br />
            <br />
            AdBeats excels in creating timeless audio that keeps your ads fresh
            and engaging.
            <br />
            <br />
            The benefit?
            <br />
            <br />
            Prolonged ad performance and sustained audience interest, ensuring
            your marketing efforts yield long-term results.
          </p>
          <div className="flex md:justify-between sm:flex-col sm:items-start sm:gap-10 lg:justify-start lg:gap-10 items-center my-10">
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-col gap-3 justify-between"
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="text-blue text-5xl"
                />
                <div className="text-headline-1 font-black font-montserrat flex text-white">
                  <Counter end={64} duration={3000} />%
                </div>
              </div>
              <p className="text-blue font-comic font-bold text-center">
                Average Watch Time
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1000"
              className="flex flex-col gap-3 justify-evenly"
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-blue text-5xl"
                />
                <div className="text-headline-1 font-black font-montserrat flex text-white">
                  <Counter end={44} duration={2000} />%
                </div>
              </div>
              <p className="text-blue font-comic font-bold text-center">
                Average Cost Per View
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="1500"
              className="flex flex-col gap-3 justify-evenly"
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-blue text-5xl"
                />
                <div className="text-headline-1 font-black font-montserrat flex text-white">
                  <Counter end={87} duration={4000} />%
                </div>
              </div>
              <p className="text-blue font-comic font-bold text-center">
                Average Cost Per Click
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center lg:justify-end lg:gap-10  justify-center md:w-1/2">
          <div className="flex items-center justify-center relative p-5 bg-stone-800 rounded-md -rotate-6">
            <img src={seesaw_4} className="rounded-md sm:w-64 md:w-96 z-50" />
            <img
              src={seesaw_4}
              className="absolute rounded-md z-0 sm:blur-xl md:blur-3xl animate-pulse"
            />
          </div>
        </div>
      </div>
      <hr className="h-[1px] bg-stone-500 border-none border-stone-500 mt-32" />
      <div className="bg-backgroundblack min-h-screen flex items-center justify-center">
        <div className="md:w-3/5">
          <p className="font-comic text-blue md:text-headline-3 text-center sm:py-5">
            Tired of Making Ordinary Ads with Ordinary Results?
          </p>
          <h1 className="md:text-headline-2 sm:text-subheadline-3 text-white font-black font-montserrat text-center mb-10">
            The Next 10 Businesses To Request A Custom Track, <br /> Get It 100%
            For FREE!
          </h1>
          <div className="relative bg-stone-800 sm:p-5 md:p-10 sm:mx-5">
            <img
              src={bang}
              alt=""
              className="absolute sm:w-20 md:w-64 z-10 sm:-top-12 md:-top-24 rotate-12 md:-right-24"
            />
            <h2 className="text-red-500 font-comic font-bold text-headline-3">
              Yes, you read that right!
            </h2>
            <p className="text-stone-200 font-comic">
              Our “100% Off for 10” is finally back!
              <br />
              <br />
              We’re offering the next 10 businesses a 100% discount on our
              starter offer. 
              <br />
              <br />
              So if there was ever an incentive to improve your ads, it’s here. 
              <br />
              <br />
              Remember… 
              <br />
              <br />
              <b className="text-blue">When it comes to getting attention;</b>
              <br />
              <br />
              <b className="text-blue">Nobody beats, Adbeats. </b>
            </p>
            <button
              onClick={handleCTA}
              className="bg-[#DC2625] text-white px-5 py-2 font-comic font-bold text-subheadline-4 mt-10 red-shadow"
            >
              Claim Your Starter Adbeats Track!
            </button>
            <p className="text-stone-400 mt-5">
              (7 slots left, get yours before it’s too late!)
            </p>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default Landing;
