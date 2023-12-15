import React from "react";
import AboutImg from "../assets/ictd.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
          "I'm Robinson Domingo, a dedicated IT professional at CDA with a passion for innovation and excellence. Eager to learn and grow in the dynamic tech landscape, I actively seek opportunities to stay ahead of industry trends. Thriving on challenges, I believe in continuous learning for personal development and project success."
          </p>
          <p className="pb-5">
          I am highly proficient in front-end development, specializing in React.js. With hands-on experience and a deep understanding of React's component-based architecture, I have designed and implemented user interfaces that consistently exceed expectations
          </p>

          <p>In backend development, I leverage Python and Django for building robust applications. My proficiency extends to working with MongoDB and Mongoose, ensuring efficient and scalable data storage solutions.</p>

          <p>
          I enjoy creating software projects and exploring automation using Python, purely for the joy of it. This hobby allows me to experiment with innovative ideas and apply my Python skills in a creative and enjoyable way.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="w-full h-full lg:w-[100%] lg:h-[auto] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;