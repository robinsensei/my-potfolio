import React from "react";
import HeroImg from "../assets/try.JPG.png";
import { TypeAnimation } from 'react-type-animation'

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";




const Hero = () => {

  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, 
            <br />I am <span className="text-accent">R</span>
            <TypeAnimation
            sequence={[
              
              // Same substring at the start will only be typed out once, initially
              'egal Excellence',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'ising Star',
              1000,
              'enowned Achiever',
              1000,
              'ealm of the Best',
              1000,
              'obin',
              4000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
          </h1>
          <br />
            Frontend Developer

          <p className="py-5">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

          <div className="flex py-5 ">
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineYoutube size={40} />{" "}
            </a>
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="w-full h-full lg:w-[100%] lg:h-[400px] ml-auto custom-class"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;