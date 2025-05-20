import React from "react";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillItem = [{
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    label: "HTML5",
    desc: "Markup Language",
  },
  {
    imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    label: "CSS3",
    desc: "Styling Language",
  },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      label: "JavaScript",
      desc: "Interaction",
    },
  

    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      label: "MongoDB",
      desc: "Database",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      label: "TailwindCSS",
      desc: "User Interface",
    },

    {
      imgSrc:
        "https://img.icons8.com/?size=100&id=44485&format=png",
      label: "Go Lang",
      desc: "Programming Language",
    },
    {
      imgSrc: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      label: "Python",
      desc: "Programming Language",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      label: "Java",
      desc: "Object-Oriented Programming Language",
    },
    {
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
      label: "ML & DL",
      desc: "Machine Learning & Deep Learning ",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      label: "Flask",
      desc: "Python Web Framework",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      label: "Git",
      desc: "Version Control",
    },
    ,
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      label: "GitHub",
      desc: "Version Control",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      label: "VS Code",
      desc: "Code Editor",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      label: "PostgreSQL",
      desc: "Relational Database",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      label: "MySQL",
      desc: "Relational Database",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      label: "Supabase",
      desc: "Backend as a Service",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      label: "Vercel",
      desc: "Deployment Platform",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      label: "Netlify",
      desc: "Deployment Platform",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/railway/railway-original.svg",
      label: "Railway",
      desc: "Cloud Deployment Platform",
    },
    {
      imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codepen/codepen-original.svg",
      label: "CodePen",
      desc: "Online Code Editor",
    }
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential tool I use</h2>
        <p className="max-w-[50ch] text-zinc-400 mt-3 mb-8 reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              key={key}
              classes={"reveal-up"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
