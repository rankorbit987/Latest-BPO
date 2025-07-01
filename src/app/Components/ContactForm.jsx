"use client";

import React, { useRef, useState, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa6";
import LinkedinButton from "../UI/Buttons/ContactLinkedinBtn";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let timer;
    if (isSuccess) {
      timer = setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    }
    return () => clearTimeout(timer); // Clean up the timer
  }, [isSuccess]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false); // Reset error state on new submission
    
    // Get form data to access the email and phone values
    const formData = new FormData(form.current);
    const from_email = formData.get('email');
    const phone = formData.get('phone');
    const from_name = `${formData.get('first_name')} ${formData.get('last_name')}`;
    
    // Add these values to the form before sending
    const templateParams = {
      from_name: from_name,
      from_email: from_email,
      phone: phone || 'Not provided',
      message: formData.get('message'),
      reply_to: from_email // This ensures reply goes to sender's email
    };

    emailjs
      .send(
        "service_vhnkpjm",
        "template_4k9x876",
        templateParams,
        "HYyZTN7Kqq4GK7U07"
      )
      .then(
        () => {
          setIsLoading(false);
          setIsSuccess(true);
          form.current.reset();
        },
        () => {
          setIsLoading(false);
          setIsError(true);
        }
      );
  };

  return (
    <section
      id="contact-form"
      className="min-h-screen bg-white px-4 sm:px-8 lg:px-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20"
    >
      {/* Left Content */}
      <div className="flex flex-col justify-center space-y-8 text-black">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight text-black">
          Your Success Starts Here <br className="hidden md:inline" /> Contact Us
        </h1>

        <p className="text-base md:text-lg font-semibold">
          We're ready to listen and help. Reach out today to discuss your needs.
          Contact us anytime to explore how BPO Brigade can simplify your
          workload and support your business growth.
        </p>

        <div className="w-full flex justify-start">
          <LinkedinButton />
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400">Call us</h4>
          <p className="text-lg md:text-xl font-medium mt-1">01793 488 000</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400">Email us</h4>
          <p className="text-lg md:text-xl font-medium mt-1">
            hello@leadingresolutions.com
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400">Lahore Office</h4>
          <p className="text-lg md:text-xl mt-1 leading-relaxed font-medium">
            90 Johar, Block D2 Block D 2 Phase 1 Town,<br /> Lahore, 54782
          </p>
          <div className="relative mt-4 w-full sm:w-72 h-40 sm:h-44 overflow-hidden rounded-2xl border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27221.30370572093!2d74.25073347375427!3d31.455773761267188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190115b05a98c3%3A0xd62437d60099e089!2sBPO%20Brigade!5e0!3m2!1sen!2s!4v1719174940000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-[#cba6ff] p-6 sm:p-8 rounded-2xl shadow-md relative text-black">
        <div className="absolute top-6 right-6 flex -space-x-2">
          <img
            src="https://i.pravatar.cc/40?img=1"
            className="w-8 h-8 rounded-full border-2 border-white"
            alt="Avatar 1"
          />
          <img
            src="https://i.pravatar.cc/40?img=2"
            className="w-8 h-8 rounded-full border-2 border-white"
            alt="Avatar 2"
          />
        </div>

        <h3 className="text-lg font-semibold mb-4">Send Enquiry</h3>
        <p className="text-sm mb-6">
          If you have any questions, please feel free to drop us a line.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name*"
              className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name*"
              className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            name="message"
            placeholder="Comments / Questions..."
            rows="4"
            className="p-3 rounded-md w-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>

          <label className="flex items-start text-sm gap-2">
            <input type="checkbox" className="mt-1 cursor-pointer" required />
            <span>
              I agree to receive other communications from Leading Resolutions.
            </span>
          </label>

          <p className="text-xs leading-relaxed">
            You can unsubscribe from these communications at any time. For more information, review our Privacy Policy.
            <br />
            By clicking submit, you consent to allow Leading Resolutions to store your info.
          </p>

          <button
            type="submit"
            className="bg-black text-white rounded-md px-6 py-3 hover:bg-[#284d8a]  transition mt-2 cursor-pointer w-full sm:w-auto"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {isSuccess && (
            <p className="text-green-600 mt-2 animate-fade">Message sent successfully!</p>
          )}
          {isError && (
            <p className="text-red-600 mt-2">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}