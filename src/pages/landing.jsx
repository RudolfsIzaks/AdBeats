import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import AdBeats from "../assets/AdBeats.png";
import { Link, useNavigate } from "react-router-dom";
import thoughtbbl from "../assets/thoughtbbl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCircleCheck, faPlay, faMusic } from "@fortawesome/free-solid-svg-icons";
import rectred from '../assets/rect-red.svg';
import rectblue from '../assets/rect-blue.svg';
import rectyellow from '../assets/rect-yellow.svg';
import Manscaped from "../assets/Manscaped.avif";
import Manscaped_logo from "../assets/Manscaped_logo.svg";
import AG1 from "../assets/ag1.webp";
import AG1Logo from "../assets/ag1logo.svg";
import Skillshare from '../assets/Skillshare.png';
import Skillshare_logo from '../assets/Skillshare_logo.svg';
import Petco from '../assets/Petco.png';
import Petco_logo from '../assets/Petco_logo.svg';
import Equinox_logo from '../assets/Equinox-Logo-1.svg';
import Equinox from '../assets/Equinox.png';
import Nike from '../assets/Nike.webp';
import Nike_logo from '../assets/Nike_logo.svg';
import splash_grey from '../assets/splash_grey.png';
import splash_red from '../assets/splash_red.png';
import splash_purple from '../assets/splash_purple.png';
import comic_splash from '../assets/comic_splash.png';

function Landing() {

  const navigate = useNavigate();

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
        color: "bg-red-400",
    },
    {
        logo: Skillshare_logo,
        main_img: Skillshare,
        translate: "-translate-y-16",
        color: 'bg-blue',
    },
    {
        logo: Petco_logo,
        main_img: Petco,
        translate: "translate-y-12",
        color: "bg-amber-500"
    },
    {
        logo: Equinox_logo,
        main_img: Equinox,
        translate: "-translate-y-10",
        color: "bg-red-400"
    },
    {
        logo: Nike_logo,
        main_img: Nike,
        translate: "translate-y-10",
        color: "bg-blue"
    },
  ]

  const handleCTA = () => {
    navigate("/qualify");
  };

  return (
    <>
    <div className="flowin">
      <div className="absolute">
        <nav className="flex justify-center items-center p-5">
          <img src={AdBeats} className="w-48" />
        </nav>
        <div className="w-screen h-[1px] hr-gradient"></div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <div className="w-2/3 flex flex-col items-center">
          <p className="font-comic text-blue text-center text-2xl">
            The Simplest And Easiest Way to…
          </p>
          <h2 className="font-montserrat text-headline-2 font-black text-white text-center">
            Transform Run-Of-The-Mill Video Ads Into Attention-Grabbing Monsters
          </h2>
          <p className="font-comic text-stone-400 text-center mt-6 text-subheadline-3">
            That kidnap your dream customer's attention, and instantly converts
            them into loyal fans! 
          </p>
          <button
            onClick={handleCTA}
            className="py-2 px-10 mt-10 bg-stone-100 text-black font-comic font-bold text-headline-3 text-center border border-stone-100 transition hover:bg-transparent hover:text-stone-100"
          >
            Learn More
          </button>
          <Link className="font-comic font-bold text-xl my-5 border-blue border text-center bg-blue py-2 px-5 hover:bg-transparent hover:text-blue transition" to="/order-retrieval">Claim Orders Here</Link>
        </div>
      </div>
      <div className="relative text-center mx-32">
        <p className="font-comic font-bold text-blue z-10 text-subheadline-3">
          Ever wondered, what’s…
        </p>
        <h2 className="font-montserrat text-headline-2 text-center font-black text-white z-10">
          The Secret Behind The Top 2% of Advertisers
        </h2>
        <p className="font-comic text-stone-300 text-subheadline-3 z-10">
          (That allows them to get 50% of online traffic, dirt cheap…)
        </p>
      </div>
      <div className="flex items-center gap-5 justify-center  mt-5 mx-32">
        <div className="p-5 flex items-center gap-5 bg-[#3A3A3A] red-shadow w-96">
          <FontAwesomeIcon 
          icon={faCircleXmark}
          className="text-red-600 text-3xl"
          />
          <p className="text-white">It’s not their endless budget</p>
        </div>
        <div className="p-5 flex items-center gap-5 bg-[#3A3A3A] red-shadow w-96">
          <FontAwesomeIcon 
          icon={faCircleXmark}
          className="text-red-600 text-3xl"
          />
          <p className="text-white">It’s not their “brand”</p>
        </div>
        <div className="p-5 flex items-center gap-5 bg-[#3A3A3A] red-shadow w-96">
          <FontAwesomeIcon 
          icon={faCircleXmark}
          className="text-red-600 text-3xl"
          />
          <p className="text-white"> It’s not the quality of their product</p>
        </div>
      </div>
      <div className="flex items-center justify-center relative min-h-[70dvh]">
        <img src={comic_splash} alt="" className="absolute z-0"/>
        <p className="z-10 font-comic w-64 text-2xl font-bold -rotate-12"> It’s all about grabbing and holding attention!
        </p>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-5 text-center">
            <p className="font-comic font-bold text-blue z-10 text-subheadline-3">
            If you’re a business that advertises online…
            </p>
            <h2 className="font-montserrat text-headline-2 font-black text-white text-center z-10 w-4/5">
            Your Sales Hindge Solely on How Much Attention Your Dream Customers Can Give!
            </h2>
            <p className="font-comic font-bold text-stone-300 z-10 text-subheadline-3">
            And their attention is directly responsible for:
            </p>
        </div>
        <div className="flex justify-center items-center gap-12 my-40 h-[50dvh]">
            <div className="relative flex items-center justify-center">
                <img src={rectred} alt="" className="absolute md:w-[500px] z-0"/>
                <div className="z-10 w-3/5">
                    <h2 className="font-black font-montserrat text-white text-subheadline-3">Reducing CPA’s</h2>
                    <p className="text-white font-comic text-subheadline-4">Spending Significantly Less to Gain Each New Customer</p>
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <img src={rectblue} alt="" className="absolute md:w-[500px] z-0"/>
                <div className="z-10 w-3/5">
                    <h2 className="font-black font-montserrat text-white text-subheadline-3">Lowering CPC’s</h2>
                    <p className="text-white font-comic text-subheadline-4">Drastically Cheaper Traffic Flooding Into Your Website</p>
                </div>
            </div>
            <div className="relative flex items-center justify-center">
                <img src={rectyellow} alt="" className="absolute md:w-[500px] z-0"/>
                <div className="z-10 w-3/5">
                    <h2 className="font-black font-montserrat text-white text-subheadline-3">Cheaper CPM’s</h2>
                    <p className="text-white font-comic text-subheadline-4">Facebook Charging You Way Less For Ad Placements</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center gap-4 mb-20">
            <div className="flex flex-col gap-5 w-2/3 text-center">
                <p className="text-stone-300 font-bold font-comic text-subheadline-3">So, how do you get your dream customer's attention?</p>
                <h2 className="text-white font-black font-montserrat text-headline-2">Meet AdBeats - The Fastest And Easiest Way To Make Your Brand a Show-Stopper</h2>
            </div>
            <div className="flex items-center gap-10 overflow-hidden h-[80dvh] w-[110%]">
                {cards.map((q, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center relative hover:scale-125 transition hover:cursor-pointer hover:z-50 ${q.translate}`}
                      onClick={handleCTA}
                    >
                        <img src={q.logo} className="w-36 p-5" />
                        <div className={`p-5 rounded-md ${q.color} relative flex items-center justify-center`}>
                            <img src={q.main_img} className="w-[500px] rounded-md opacity-50" />
                            <FontAwesomeIcon 
                              icon={faPlay}
                              className="text-stone-200 absolute text-4xl"
                            />
                        </div>

                    </div>
                ))}
            </div>
        </div>
      </div>
      <div>
        <p className="font-montserrat text-white font-black text-headline-1 text-center mb-5">PRICING</p>
        <hr className="bg-stone-400 h-0 border-stone-700"/>
        <div className="flex justify-evenly items-center h-screen">
            <div className="bg-stone-800 py-5 px-10 w-96 min-h-[60dvh] flex flex-col justify-between relative">
                <div>
                <p className="font-bold font-comic text-purple-400 text-headline-2">Starter</p>
                <p className="font-black font-montserrat text-white text-headline-1">77$</p>
                </div>
                <ul className="mt-10 flex flex-col gap-5">
                    <div className="flex gap-3 items-center">
                        <FontAwesomeIcon 
                        icon={faMusic} className="text-2xl text-white"/>
                        <p className="font-comic text-white">One high-quality fully custom track</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FontAwesomeIcon 
                        icon={faMusic} className="text-2xl text-white"/>
                        <p className="font-comic text-white">Delivered in less than 48 hours</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FontAwesomeIcon 
                        icon={faMusic} className="text-2xl text-white"/>
                        <p className="font-comic text-white">100% SoundSuccess* Guarantee</p>
                    </div>
                </ul>
                <button className="bg-amber-400 px-5 py-3 font-comic font-bold text-subheadline-2 mt-10 purple-shadow">
                    Get Starter
                </button>
                <img src={splash_purple} alt="" className="absolute -top-10 -right-10"/>
            </div>
            <div>
            <div className="bg-stone-800 py-5 px-10 w-96 min-h-[60dvh] flex flex-col justify-between relative">
                <div>
                <p className="font-bold font-comic text-red-500 text-headline-2">Pro</p>
                <p className="font-black font-montserrat text-white text-headline-1">120$</p>
                </div>
                <ul className="mt-10 flex flex-col gap-5">
                    <div className="flex gap-3 items-center">
                        <FontAwesomeIcon 
                        icon={faMusic} className="text-2xl text-white"/>
                        <p className="font-comic text-white">Two high-quality fully custom tracks</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FontAwesomeIcon 
                        icon={faMusic} className="text-2xl text-white"/>
                        <p className="font-comic text-white">Delivered in less than 48 hours</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FontAwesomeIcon 
                        icon={faMusic} className="text-2xl text-white"/>
                        <p className="font-comic text-white">Three Optimization Revisions</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FontAwesomeIcon 
                        icon={faMusic} className="text-2xl text-white"/>
                        <p className="font-comic text-white">100% SoundSuccess* Guarantee</p>
                    </div>
                </ul>
                <button className="bg-blue px-5 py-3 font-comic font-bold text-subheadline-2 mt-10 red-shadow">
                    Get Pro
                </button>
                <img src={splash_red} alt="" className="absolute -top-10 -right-10"/>
                
            </div>
            <div className="bg-red-500 p-3 text-center rounded-b-md">
            <p className="text-white font-semibold font-comic text-xl
            ">Most Popular </p>
            </div>
            </div>
            <div className="bg-stone-800 py-5 px-10 w-96 min-h-[60dvh] flex flex-col justify-between relative">
                <img src={splash_grey} alt="" className="absolute -top-10 -right-10"/>
                <div>
                <p className="font-bold font-comic text-white text-headline-2">Elite</p>
                <p className="font-black font-montserrat text-white text-headline-3 mt-8">By Contract</p>
                </div>
                
                <p className="text-white font-comic text-subheadline-3">Looking for a guaranteed way of making your ads a show-stopper?</p>
                <button className="bg-stone-100 px-5 py-3 font-comic font-bold text-subheadline-2 mt-10 black-shadow">
                    Get Elite
                </button>
            </div>

        </div>
      </div>
      </div>
    </>
  );
}

export default Landing;
