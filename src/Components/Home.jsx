import { useEffect, useRef } from "react";
import HeroImg from "../assets/heroimage.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { PiEyeBold } from "react-icons/pi";
import { Link } from "react-scroll";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [" I&apos;m a Front-End<br> Developer "],
        typeSpeed: 100,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className=" mx-auto max-w-7xl flex flex-col items-center justify-center h-full px-4 md:flex-row max-w-screen-xl">
        <div className="flex flex-col justify-center h-1/2 ">
          <h2 className="text-white font-bold text-3xl sm:text-6xl pb-2">
            <span ref={el}></span>
          </h2>
          <p className="text-white max-w-md">
            I have 2 years of experience developing websites. Currently, I love
            to work on web applications using technologies and languages like
            HTML, CSS, Javascript, React, Photoshop.
          </p>
          <div className="flex flex-row m-1">
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mr-4"
            >
              PortFolio
              <span className="group-hover:rotate-90 duration-500">
                <FaArrowCircleRight size={20} className="ml-2" />
              </span>
            </Link>

            <a
              href="/public/Mangesh_Lemte_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="resume.pdf"
              className="group text-white w-fit px-4 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume
              <span>
                <PiEyeBold size={20} className="group-hover:scale-125 ml-2" />
              </span>
            </a>
          </div>
        </div>
        <div className="">
          <img
            src={HeroImg}
            alt="My Profile"
            className="rounded-2xl mx-auto w-3/4"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
