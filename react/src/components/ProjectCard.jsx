import React from 'react';

const ProjectCard = ({ projectName, date, githubLink, designLink, imageSrc }) => {
  return (
    <div className="p-2">
      <div className="text-sm relative">
        Project Name: {projectName} <br />
        Date: {date}
        <div className="absolute top-0 right-0">
          <div className="flex flex-row">
            <div className="px-1">
              <a className="" href={githubLink}>
                <img
                  width="40"
                  height="35"
                  src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo.png"
                  alt="GitHub"
                />
              </a>
            </div>
            <a href={designLink}>
              <img
                width="42"
                height="37"
                src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-figma-social-media-tanah-basah-basic-outline-tanah-basah.png"
                alt="Figma"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-1">
        <img src={imageSrc} alt={projectName} />
      </div>
    </div>
  );
};
export default ProjectCard;