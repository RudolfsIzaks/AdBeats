import React, {useEffect} from "react";
import '../index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function TermsConditions() {
    useEffect(() => {
        AOS.init({ duration: 1200 }); // Initialize AOS
      }, []);


    return(
        <>
        <div className="">
          <nav data-aos="fade-down" className="flex justify-center items-center py-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/adbeats-e1fd0.appspot.com/o/email-images%2FAdBeats.png?alt=media&token=7a97447e-5bac-4750-b298-cd24e7810b5f" className="w-48" />
          </nav>
          <div data-aos="fade-down"  className="w-screen h-[1px] hr-gradient"></div>
        </div>
        <div className="flex mt-32 mb-20 justify-center">
            <div className="flex flex-col items-center gap-10 md:w-1/2 sm:mx-5">
              <h1 className="text-blue font-montserrat text-headline-2 font-black">Terms & Conditions Of AdBeats</h1>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">1. Introduction</h2>
                <p className="text-stone-300">Welcome to AdBeats, an LLC providing innovative audio and advertising solutions. By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions. Please review them carefully.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">2. Services</h2>
                <p className="text-stone-300">AdBeats specializes in creating custom-tailored audio tracks for video advertisements. Our goal is to help your business improve its ad engagement and performance. By purchasing or requesting our services, you agree to provide accurate information during the submission process.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">3. Order Process</h2>
                <p className="text-stone-300">To use our services, you must complete the submission form, providing details like your name, email, brand name, website, target audience, product information, and the goals of the advertisement. We reserve the right to accept or reject any submission at our sole discretion.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">4. Free Offers and Promotions</h2>
                <p className="text-stone-300">From time to time, AdBeats may offer promotional services, such as free custom audio tracks for a limited number of clients. These promotions are subject to availability and may be withdrawn or altered without notice.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">5. Payment</h2>
                <p className="text-stone-300">All fees for services will be clearly displayed during the ordering process. Payment must be completed before services are rendered, unless otherwise stated in a promotion.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">6. Refunds and Cancellations</h2>
                <p className="text-stone-300">Refunds will be handled on a case-by-case basis. We do not guarantee refunds for services rendered. If you are unsatisfied with the service, please contact us at info@adbeats.co.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">7. Intellectual Property</h2>
                <p className="text-stone-300">All content and materials created by AdBeats, including custom audio tracks, are protected by intellectual property laws. By using our services, you agree not to reproduce, distribute, or use our materials for any purpose other than as authorized by AdBeats.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">8. Limitation of Liability</h2>
                <p className="text-stone-300">AdBeats is not responsible for any indirect, incidental, or consequential damages resulting from the use of our services, including but not limited to loss of revenue, profits, or data.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">9. Amendments</h2>
                <p className="text-stone-300">We reserve the right to amend these Terms and Conditions at any time. Changes will be posted on our website, and continued use of the site constitutes acceptance of the updated terms.</p>
              </div>
              <div className="w-full">
                <h2 className="text-headline-3 font-comic font-bold text-white">10. Governing Law</h2>
                <p className="text-stone-300">These Terms and Conditions are governed by and construed in accordance with the laws of the state where AdBeats LLC is registered.</p>
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

export default TermsConditions;