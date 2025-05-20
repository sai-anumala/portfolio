import React from "react";
import logo from "../assets/logo.png";
const aboutItems = [
  {
    label: "Project done",
    number: 5,
  },
];
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 rounded-2xl p-7 md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[650ch]">
           Hi, I’m Anumala Venkata Sairam. I’m a software developer who enjoys building useful and smart web applications.
          I work with languages like Python, Java, and Go, and use tools like React and Flask to create websites and systems that work smoothly.
          I also have experience in machine learning and love solving real-world problems through code.

          </p>
          <div className="flex flex-wrap gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => {
              return (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">
                      {number}
                    </span>
                    <span className="text-sky-400 font-semibold md:text-3xl">
                      +
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              );
            })}
          </div>
          <img src={logo} alt="logo" width={40} className="ml-auto mt-3" />
        </div>
      </div>
    </section>
  );
};

export default About;
