import React from "react";
import image_sababook from "../assets/img/Sababook-2.png";
import image_database from "../assets/img/Database-1.png";
import image_webpro from "../assets/img/Webpro-1.png"
import image_sop from "../assets/img/Sop-1.png"
import ProjectCard from "./ProjectCard";

function MyProject() {
  return (
    <>
    <div className="px-10 pt-5">
    <div className="text-2xl font-bold  text-white">My Projects</div>
      <ProjectCard
        projectName="Sababook"
        date="Jan 2022"
        githubLink="https://github.com/Dnuangkamon/Sababooks"
        designLink="https://www.canva.com/design/DAFQnZ3-2Uk/mu4kN_x_audDBJ0n1dTIVQ/edit"
        imageSrc={image_sababook}
      />
      <ProjectCard
        projectName="Filmary"
        date="Apr 2023"
        githubLink="https://github.com/DuangkamonPhobsungnoen/PROJECT-DATABASE"
        designLink="https://www.figma.com/file/FOJvEA9jbE3NLZZHlwKWx4/Filmary?type=design&node-id=0-1&mode=design&t=uygNqza4uDiH3heV-0"
        imageSrc={image_database}
      />
      <ProjectCard
        projectName="ChaoCarHUB"
        date="Jun 2023"
        githubLink="https://github.com/DuangkamonPhobsungnoen/PROJECT-WEBPRO_V2"
        designLink="https://www.figma.com/file/eeNMHyxpyoADhMvEVxvpeE/WEBPRO?type=design&node-id=4-2&mode=design&t=x9XUWKCGnftVDPkI-0"
        imageSrc={image_webpro}
      />
      <ProjectCard
        projectName="Weenteen"
        date="Nov 2023"
        githubLink="https://github.com/t0ngk/webteen-frontend"
        designLink="https://www.figma.com/file/np3WlnHyCkX0254bSn8Uio/Prototype-SOP?type=design&node-id=31-22&mode=design&t=sNJxNVxvGn1CVmEK-0"
        imageSrc={image_sop}
      />
      <div className="text-xl justify-center text-center text-gray-500 hover:text-pink-600 active:text-pink-700 focus:outline-none focus:ring focus:ring-pink-300">See more projects  ▶ ▶</div>
    </div></>
  );
}

export default MyProject;
