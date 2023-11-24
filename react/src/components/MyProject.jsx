import React, { useState } from "react";
import image_sababook from "../assets/img/Sababook-2.png";
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
    <>
      <div className="px-10 pt-5">
        <div className="text-2xl font-bold  text-white">My Projects</div>
        <ProjectCard
          projectName="Sababook"
          date="Jan 2022"
          tools="HTML, CSS, Javascript, PHP, Bootstrap"
          githubLink="https://github.com/Dnuangkamon/Sababooks"
          designLink="https://www.canva.com/design/DAFQnZ3-2Uk/mu4kN_x_audDBJ0n1dTIVQ/edit"
          
        />
        <ProjectCard
          projectName="Filmary"
          tools="Vue.js, CSS, Bulma, Javascript, MySql"
          date="Apr 2023"
          githubLink="https://github.com/DuangkamonPhobsungnoen/PROJECT-DATABASE"
          designLink="https://www.figma.com/file/FOJvEA9jbE3NLZZHlwKWx4/Filmary?type=design&node-id=0-1&mode=design&t=uygNqza4uDiH3heV-0"
         
        />
        <ProjectCard
          projectName="ChaoCarHUB"
          tools="Vue.js, Tailwind, Javascript, MySql"
          date="Jun 2023"
          githubLink="https://github.com/DuangkamonPhobsungnoen/PROJECT-WEBPRO_V2"
          designLink="https://www.figma.com/file/eeNMHyxpyoADhMvEVxvpeE/WEBPRO?type=design&node-id=4-2&mode=design&t=x9XUWKCGnftVDPkI-0"
          
        />
        <ProjectCard
          projectName="Weenteen"
          tools="Svelte, Tailwind, Javascript, Java, MongoDB"
          date="Nov 2023"
          githubLink="https://github.com/t0ngk/webteen-frontend"
          designLink="https://www.figma.com/file/np3WlnHyCkX0254bSn8Uio/Prototype-SOP?type=design&node-id=31-22&mode=design&t=sNJxNVxvGn1CVmEK-0"
          
        />
        <div className="text-xl justify-center text-center text-gray-500 hover:text-pink-600 active:text-pink-700 focus:outline-none focus:ring focus:ring-pink-300" onClick={handleSeeMoreClick}>
          See more projects ▶ ▶
        </div>
        {showMoreProjects && (
          <>
            <ProjectCard
              projectName="HerMoon"
              tools="React Native, Javascript, Firebase"
              date="Nov 2023"
              githubLink="https://github.com/PR-800/HerMoon"
              designLink="https://www.figma.com/file/EHAM38NFXxjfoXpPBZFGZC/HerMoon?type=design&node-id=61-2276&mode=design&t=HWih8sp47FgYKFTM-0"
            />
            <ProjectCard
              projectName="OOP"
              tools="NetBeans IDE, Phpmyadmin"
              date="Jan 2023"
              githubLink="https://github.com/DuangkamonPhobsungnoen/PROJECT-OOP"
              designLink="https://www.figma.com/file/GaoX3lyx35QQUx67d8SBTj/%E0%B8%AB%E0%B8%AD%E0%B8%A1%E0%B8%81%E0%B8%A5%E0%B8%B4%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99?type=design&node-id=1-2&mode=design&t=c3EErSvQ4VjFXQon-0"
            />
          </>
        )}
      </div>
    </>
  );
}

export default MyProject;
