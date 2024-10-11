import { useState, useRef, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../index.css";
import AG1 from "../assets/ag1.webp";
import AG1Logo from "../assets/ag1logo.svg";
import Manscaped from "../assets/Manscaped.avif";
import Manscaped_logo from "../assets/Manscaped_logo.svg";
import Equinox_logo from "../assets/Equinox-Logo-1.svg";
import Equinox from "../assets/Equinox.png";
import Skillshare from "../assets/Skillshare.png";
import Skillshare_logo from "../assets/Skillshare_logo.svg";
import Petco from "../assets/Petco.png";
import Petco_logo from "../assets/Petco_logo.svg";
import Northface from "../assets/Northface.webp";
import Northface_logo from "../assets/Northface_logo.svg";
import Uber from "../assets/Uber.webp";
import Uber_logo from "../assets/Uber_logo.svg";
import sampleAudio from "../assets/sample.mp3";
import Petco_audio from "../assets/Petco_audio.mp3";
import NorthFace_audio from "../assets/NorthFace.mp3";
import Equinox_audio from "../assets/Equinox.mp3";
import SkillshareAudio from "../assets/SkillshareAudio.mp3";
import UberAudio from "../assets/UberAudio.mp3";
import AG1Audio from "../assets/AG1Audio.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0); // Index for carousel
  const [isPlaying, setIsPlaying] = useState(null); // Track which audio is playing
  const audioRefs = useRef([]); // Array of audio refs

  // Carousel items for the images and audio
  const carouselItems = [
    {
      image: AG1,
      imageLogo: AG1Logo,
      songName: "AG1 Supplements",
      audio: AG1Audio,
    },
    {
      image: Manscaped,
      imageLogo: Manscaped_logo,
      songName: "Manscaped Grooming",
      audio: sampleAudio,
    },
    {
      image: Equinox,
      imageLogo: Equinox_logo,
      songName: "Equinox Fitness",
      audio: Equinox_audio,
    },
    {
      image: Skillshare,
      imageLogo: Skillshare_logo,
      songName: "Skillshare Education",
      audio: SkillshareAudio,
    },
    {
      image: Petco,
      imageLogo: Petco_logo,
      songName: "Petco Goods",
      audio: Petco_audio,
    },
    {
      image: Northface,
      imageLogo: Northface_logo,
      songName: "NorthFace Clothing",
      audio: NorthFace_audio,
    },
    {
      image: Uber,
      imageLogo: Uber_logo,
      songName: "Uber Transportation",
      audio: UberAudio,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [carouselItems.length]);

  const handleAudioPlayPause = (index) => {
    const currentAudio = audioRefs.current[index];
    if (isPlaying === index) {
      currentAudio.pause();
      setIsPlaying(null); // No audio is playing now
    } else {
      if (isPlaying !== null && audioRefs.current[isPlaying]) {
        audioRefs.current[isPlaying].pause(); // Pause the currently playing audio
      }
      currentAudio.play();
      setIsPlaying(index); // Update the currently playing audio
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up");
      // Redirect or update state here
    } catch (err) {
      setError(err.message);
    }
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="md:w-2/5 bg-[#181818] p-10">
          <h1 className="font-black md:text-headline-2 text-white mb-5">Sign Up</h1>
          <form className="flex-col flex gap-5" onSubmit={handleSignUp}>
            <input
              type="text"
              className="outline-none bg-transparent border-b border-b-blue p-3 placeholder:text-stone-500 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="email"
              className="outline-none bg-transparent border-b border-b-blue p-3 placeholder:text-stone-500 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              className="outline-none bg-transparent border-b border-b-blue p-3 placeholder:text-stone-500 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <input
              type="password"
              className="outline-none bg-transparent border-b border-b-blue p-3 placeholder:text-stone-500 text-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <div className="bg-[#302828] border border-[#363636] mt-10 p-4 rounded-md mb-6 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${carouselIndex * 100}%)`,
                  width: `${carouselItems.length * 100}%`,
                }}
              >
                {carouselItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex w-full items-center"
                  >
                    <div className="flex items-center justify-center relative">
                      <img
                        src={item.image}
                        alt=""
                        className="w-20 h-20 object-cover rounded-md mr-4 opacity-50"
                      />
                      {item.audio && (
                        <div className="absolute right-[40%]">
                          <audio
                            ref={(el) => (audioRefs.current[i] = el)}
                            src={item.audio}
                          />
                          <FontAwesomeIcon
                            icon={isPlaying === i ? faPause : faPlay}
                            onClick={() => handleAudioPlayPause(i)}
                            className="cursor-pointer text-blue-500 text-4xl text-stone-200"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <img src={item.imageLogo} alt="" className="w-16 mb-2" />
                      <p className="text-stone-200 font-semibold">
                        {item.songName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button type="submit" className="bg-[#DC2625] text-white px-5 py-2 font-comic font-bold text-subheadline-4 mt-10 red-shadow">Sign Up</button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
