import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/pj1.jpg"
import project2 from "../assets/image1.png";

import project5 from "../assets/image.png";

// https://fullstack-youtube-like-webapp.vercel.app/

const Work = () => {
  const works = [
   {
  imgSrc: project5, // Replace with an actual image if available
  title: "Grievance Management System",
  tags: [ "html", "css", "bootstrap","flask", "mysql"],
  projectLink: "https://github.com/sai-anumala/Grievance",
  badge: "Completed",
},
    {
      imgSrc: project1,
      title: " To-Do Web App",
      tags: ["react", "css"],
      projectLink: "https://todo-list-pro4.netlify.app",
      badge: "Pro",
    },
 
  ];
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Projects Highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ title, tags, imgSrc, projectLink, badge }, key) => (
            <ProjectCard
              title={title}
              tags={tags}
              imgSrc={imgSrc}
              projectLink={projectLink}
              key={key}
              badge={badge}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
