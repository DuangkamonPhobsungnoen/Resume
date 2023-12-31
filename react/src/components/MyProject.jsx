import React, { useState } from "react";
import image_sababook from "../assets/img/Sababook-1.png";
import image_database from "../assets/img/Database-1.png";
import image_webpro from "../assets/img/Webpro-1.png";
import image_sop from "../assets/img/Sop-1.png";
import ProjectCard from "./ProjectCard";

function MyProject() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const handleSeeMoreClick = () => {
    setShowMoreProjects(!showMoreProjects);
  };

  return (
    <div className="min-h-screen w-full">
      <div className=" px-10 pt-5 text-2xl font-bold  text-white ">My Projects</div>
      <div className="px-10 pt-5 grid md:grid-cols-2 gap-6">
        
        <ProjectCard
          projectName="Sababook"
          date="Jan 2022"
          tools="HTML, CSS, JavaScript, PHP, Bootstrap"
          content="Project from Web Technology cours"
          githubLink="https://github.com/Dnuangkamon/Sababooks"
          designLink="https://www.canva.com/design/DAFQnZ3-2Uk/mu4kN_x_audDBJ0n1dTIVQ/edit"
          imageSrc={image_sababook}
        />
        <ProjectCard
          projectName="Filmary"
          tools="Vue.js, CSS, Bulma, JavaScript, MySql"
          date="Apr 2023"
          content="Project from Database systems concepts cours"
          githubLink="https://github.com/DuangkamonPhobsungnoen/PROJECT-DATABASE"
          designLink="https://www.figma.com/file/FOJvEA9jbE3NLZZHlwKWx4/Filmary?type=design&node-id=0-1&mode=design&t=uygNqza4uDiH3heV-0"
          imageSrc={image_database}
        />
        <ProjectCard
          projectName="ChaoCarHUB"
          tools="Vue.js, Tailwind, JavaScript, MySql"
          date="Jun 2023"
          content="Project from Web programming cours"
          githubLink="https://github.com/DuangkamonPhobsungnoen/PROJECT-WEBPRO_V2"
          designLink="https://www.figma.com/file/eeNMHyxpyoADhMvEVxvpeE/WEBPRO?type=design&node-id=4-2&mode=design&t=x9XUWKCGnftVDPkI-0"
          imageSrc={image_webpro}
        />
        <ProjectCard
          projectName="Weenteen"
          tools="Svelte, Tailwind, JavaScript, Java, MongoDB"
          date="Nov 2023"
          content="Project from Service-oriented programming cours"
          githubLink="https://github.com/t0ngk/webteen-frontend"
          designLink="https://www.figma.com/file/np3WlnHyCkX0254bSn8Uio/Prototype-SOP?type=design&node-id=31-22&mode=design&t=sNJxNVxvGn1CVmEK-0"
          imageSrc={image_sop}
        />
      </div>
      <div className="text-xl justify-center text-center text-gray-500 hover:text-pink-600 active:text-pink-700 focus:outline-none focus:ring focus:ring-pink-300" onClick={handleSeeMoreClick}>
          See more projects ▶ ▶
        </div>
      <div className="px-10 pt-2 grid md:grid-cols-2 gap-6">
      {showMoreProjects && (
          <>
            <ProjectCard
              projectName="HerMoon"
              tools="React Native, JavaScript, Firebase"
              date="Nov 2023"
              content="Project from Mobile device programming cours"
              githubLink="https://github.com/PR-800/HerMoon"
              designLink="https://www.figma.com/file/EHAM38NFXxjfoXpPBZFGZC/HerMoon?type=design&node-id=61-2276&mode=design&t=HWih8sp47FgYKFTM-0"
            />
            <ProjectCard
              projectName="HOM-KLIN-NGERN"
              tools="NetBeans IDE, Phpmyadmin"
              content="Project from object-oriented programming cours"
              date="Jan 2023"
              githubLink="https://github.com/DuangkamonPhobsungnoen/PROJECT-OOP"
              designLink="https://www.figma.com/file/GaoX3lyx35QQUx67d8SBTj/%E0%B8%AB%E0%B8%AD%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99?type=design&node-id=1-2&mode=design&t=c3EErSvQ4VjFXQon-0"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default MyProject;
