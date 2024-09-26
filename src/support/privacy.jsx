import React, {useEffect} from "react";
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function PrivacyPolicy() {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // Initialize AOS
      }, []);


    return(
        <>
        <div className="">
          <nav data-aos="fade-down" className="flex justify-center items-center p-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/adbeats-e1fd0.appspot.com/o/email-images%2FAdBeats.png?alt=media&token=7a97447e-5bac-4750-b298-cd24e7810b5f" className="w-48" />
          </nav>
          <div data-aos="fade-down"  className="w-screen h-[1px] hr-gradient"></div>
        </div>
        <div className="flex mt-32 mb-20 justify-center">
            <div className="flex flex-col items-center gap-10 md:w-1/2 sm:mx-5">
              <h1 className="text-blue font-montserrat text-headline-2 font-black">Privacy Policy Of AdBeats</h1>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">1. Introduction</h2>
                <p className="text-stone-300">AdBeats LLC ("we", "our", "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and share information when you interact with our website and services.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">2. Information We Collect</h2>
                <p className="text-stone-300">We collect personal information that you voluntarily provide to us, such as:</p>
                <ul className="text-blue list-disc pl-5 flex flex-col gap-3 my-5">
                    <li>Name</li>
                    <li>Email Address</li>
                    <li>Brand Name</li>
                    <li>Website URL</li>
                    <li>Target Audience Details</li>
                    <li>Product Information</li>
                    <li>Ad goals and any additional information you provide in our submission form</li>
                </ul>
                <p className="text-stone-300">We only collect this information to fulfill orders and provide you with the best possible service.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">3. How We Use Your Information</h2>
                <p className="text-stone-300">The information we collect is used for the following purposes:</p>
                <ul className="text-blue list-disc pl-5 flex flex-col gap-3 my-5">
                    <li>To process and complete your order or request</li>
                    <li>To communicate with you regarding your order or project</li>
                    <li>To improve our services based on customer feedback</li>
                    <li>To inform you of special offers and promotions (you may opt out at any time)</li>
                </ul>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">4. Sharing of Information</h2>
                <p className="text-stone-300">We do not sell, rent, or share your personal information with third parties except as required by law or necessary to provide our services. In some cases, we may work with third-party service providers who help us operate our business, and these providers are bound by confidentiality agreements.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">5. Data Security</h2>
                <p className="text-stone-300">We take reasonable steps to protect the information you provide from loss, misuse, and unauthorized access. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">6. Cookies and Tracking Technologies</h2>
                <p className="text-stone-300">Our website may use cookies and similar technologies to enhance user experience. You can control cookies through your browser settings, but disabling cookies may affect site functionality.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">7. Your Rights</h2>
                <p className="text-stone-300">You have the right to access, update, or delete the personal information we hold about you. To make a request, please contact us at info@adbeats.co.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">8. Data Retention</h2>
                <p className="text-stone-300">We retain your personal information for as long as necessary to provide you with services or as required by law.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">9. Changes to this Privacy Policy</h2>
                <p className="text-stone-300">We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised date. We encourage you to review it regularly.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">10. Contact Information</h2>
                <p className="text-stone-300">For questions about this Privacy Policy or your data, please contact us at: <br /> Email: info@adbeats.co</p>

              </div>
              <Link to="/" className="flex w-full justify-start items-center gap-3">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-blue text-2xl"
              />
              <p className="text-blue font-comic text-2xl">Back</p>
              </Link>
            </div>
        </div>
        </>
    )
}

export default PrivacyPolicy