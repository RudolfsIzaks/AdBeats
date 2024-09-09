import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCircleCheck, faPlay, faMusic } from "@fortawesome/free-solid-svg-icons";
import splash_grey from '../assets/splash_grey.png';
import splash_red from '../assets/splash_red.png';
import splash_purple from '../assets/splash_purple.png';

function PricingFree() {
  return (
    <>
      <div className="flex items-center justify-center relative">
      <div className="flex items-center justify-center h-full w-full absolute z-50 text-center bg-stone-700 bg-opacity-25 bg_blurry">
        <p className="font-montserrat font-black text-white text-headline-1">For FREE!</p>
      </div>
      <div className="z-0">
        <div className="flex justify-evenly items-center h-auto">
          <div className="bg-stone-800 py-5 px-10 w-96 min-h-[60dvh] flex flex-col justify-between relative">
            <div>
              <p className="font-bold font-comic text-purple-400 text-headline-2">
                Starter
              </p>
              <p className="font-black font-montserrat text-white text-headline-1">
                77$
              </p>
            </div>
            <ul className="mt-10 flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faMusic}
                  className="text-2xl text-white"
                />
                <p className="font-comic text-white">
                  One high-quality fully custom track
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faMusic}
                  className="text-2xl text-white"
                />
                <p className="font-comic text-white">
                  Delivered in less than 48 hours
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <FontAwesomeIcon
                  icon={faMusic}
                  className="text-2xl text-white"
                />
                <p className="font-comic text-white">
                  100% SoundSuccess* Guarantee
                </p>
              </div>
            </ul>
            <button className="bg-amber-400 px-5 py-3 font-comic font-bold text-subheadline-2 mt-10 purple-shadow">
              Get Starter
            </button>
            <img
              src={splash_purple}
              alt=""
              className="absolute -top-10 -right-10"
            />
          </div>
          <div>
            <div className="bg-stone-800 py-5 px-10 w-96 min-h-[60dvh] flex flex-col justify-between relative">
              <div>
                <p className="font-bold font-comic text-red-500 text-headline-2">
                  Pro
                </p>
                <p className="font-black font-montserrat text-white text-headline-1">
                  120$
                </p>
              </div>
              <ul className="mt-10 flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faMusic}
                    className="text-2xl text-white"
                  />
                  <p className="font-comic text-white">
                    Two high-quality fully custom tracks
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faMusic}
                    className="text-2xl text-white"
                  />
                  <p className="font-comic text-white">
                    Delivered in less than 48 hours
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faMusic}
                    className="text-2xl text-white"
                  />
                  <p className="font-comic text-white">
                    Three Optimization Revisions
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon
                    icon={faMusic}
                    className="text-2xl text-white"
                  />
                  <p className="font-comic text-white">
                    100% SoundSuccess* Guarantee
                  </p>
                </div>
              </ul>
              <button className="bg-blue px-5 py-3 font-comic font-bold text-subheadline-2 mt-10 redish-shadow">
                Get Pro
              </button>
              <img
                src={splash_red}
                alt=""
                className="absolute -top-10 -right-10"
              />
            </div>
            <div className="bg-red-500 p-3 text-center rounded-b-md">
              <p
                className="text-white font-semibold font-comic text-xl
            "
              >
                Most Popular
              </p>
            </div>
          </div>
          <div className="bg-stone-800 py-5 px-10 w-96 min-h-[60dvh] flex flex-col justify-between relative">
            <img
              src={splash_grey}
              alt=""
              className="absolute -top-10 -right-10"
            />
            <div>
              <p className="font-bold font-comic text-white text-headline-2">
                Elite
              </p>
              <p className="font-black font-montserrat text-white text-headline-3 mt-8">
                By Contract
              </p>
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
      </div>
    </>
  );
}

export default PricingFree;
