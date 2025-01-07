import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import leftImage from "../assets/LeftImage.jpeg"; // Correctly importing the image
import { FaWhatsapp, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_aurs3of",
        "template_f2ml3g2",
        form.current,
        "kfCBidvfF84OVR2OG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div
      name="Contact"
      className="bg-gradient-to-b from-black min-h-screen py-16 text-white to-gray-800 w-full"
    >
      <div className="max-w-7xl h-full flex flex-col lg:flex-row justify-center items-center p-4 mx-auto space-y-8 lg:space-y-0 ">
        
        {/* Left Side: Image and Social Media Links */}
        <div className="flex flex-col justify-center items-center space-y-4">
          <img
            src={leftImage}
            alt="Contact"
            className="h-auto rounded-md object-cover shadow-lg sm:w-full"
          />

          {/* Social Media Buttons */}
          <div className="mt-8 flex space-x-6">
            <a
              href="https://wa.me/8408032420"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-green-500 text-3xl transition-transform duration-200 transform hover:scale-110"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/rrp_4747"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 text-3xl transition-transform duration-200 transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:rushikeshpathare111@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-white hover:text-red-500 text-3xl transition-transform duration-200 transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/rushi4747"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-gray-500 text-3xl transition-transform duration-200 transform hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center items-center lg:w-1/2 w-full space-y-4">
          <h1 className="text-2xl md:text-4xl text-white font-bold text-center m-[14px]">
            Submit the form to<br />get in touch with me.
          </h1>
          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full lg:w-3/4">
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="p-4 bg-transparent border-2 rounded-md focus:outline-none text-white mb-2"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your Email"
              className="p-4 bg-transparent border-2 rounded-md my-2 focus:outline-none text-white"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="border-2 p-4 bg-transparent rounded-md focus:outline-none text-white mb-4"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className={`text-white bg-blue-700 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 px-6 py-3 mt-4 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {done && (
              <span className="text-green-500 mt-4 text-center">
                Thanks for contacting me! I'll get back to you soon.
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
