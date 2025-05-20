import React from "react";
import certificate1 from "../assets/c1.jpg";
import certificate2 from "../assets/c2.png";

const Certification = () => {
  return (
    <section className="section" id="certificates">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Certifications</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          <div
            className="relative rounded-2xl p-4 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 
        ring-inset ring-zinc-50/5 transition-colors reveal-up"
          >
            <figure className="rounded-lg mb-4">
              <img
                src={certificate1}
                alt="certificate 1"
                loading="lazy"
                className="img-cover"
              />
            </figure>
            <h3 className="title-1 mb-3 text-center">
             Nodejs And Expressjs
            </h3>
          </div>
          <div
            className="relative rounded-2xl p-4 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 
        ring-inset ring-zinc-50/5 transition-colors reveal-up"
          >
            <figure className="rounded-lg mb-4">
              <img
                src={certificate2}
                alt="certificate 2"
                loading="lazy"
                className="img-cover"
              />
            </figure>
            <h3 className="title-1 mb-3 text-center">Backend</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
