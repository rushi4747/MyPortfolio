import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import leftImage from "../assets/LeftImage.jpeg"; // Correctly importing the image
import { FaWhatsapp, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div name="Contact" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 p-3 text-white">
      <div className="max-w-screen-lg h-full flex flex-col lg:flex-row justify-center items-center p-4 mx-auto">
        
        {/* Left Side: Image and Social Media Links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            left: "-18%",
            top: "7%",
            width: "100%",
            marginBottom: window.innerWidth >= 1048 ? "0" : "32px",
          }}
        >
          <img
            src={leftImage}
            alt="Contact"
            className="w-full h-auto rounded-md shadow-lg"
          />

          {/* Social Media Buttons */}
          <div className="mt-8 flex space-x-6">
            <a
              href="https://wa.me/8408032420"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 text-3xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/rrp_4747"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:rushikeshpathare111@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 text-3xl"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/rushi4747"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col justify-center items-center lg:w-1/2 w-full">
          <h1 className="text-2xl md:text-4xl text-white font-bold">
            Get in Touch Contact me
          </h1>
          <p className="py-4 text-center">
            Submit the form to get in touch with me
          </p>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full lg:w-[100%]">
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
            <button className="text-white bg-blue-700 mx-auto flex items-center rounded-lg hover:scale-105 duration-200 px-6 py-3 mt-4">
              Send Message
            </button>

            {/* Success Message */}
            <span>{done && "Thanks for Contacting me!"}</span>

          </form>
        </div>
      </div>
      <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
    </div>
  );
};

export default Contact;
