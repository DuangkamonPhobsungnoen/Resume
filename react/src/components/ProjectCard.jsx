import React from "react";

const ProjectCard = ({
  projectName,
  date,
  githubLink,
  designLink,
  imageSrc,
  tools,
}) => {
  return (
    // <div className="p-2">
    //   <div className="text-base relative">
    //     Project Name: {projectName} <br />
    //     Tools : {tools} <br/>
    //     Date: {date}
    //     <div className="absolute top-0 right-0">
    //       <div className="flex flex-row">
    //         <div className="px-1">
    //           <a className="" href={githubLink}>
    //             <img
    //               width="25"
    //               height="30"
    //               src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo.png"
    //               alt="GitHub"
    //             />
    //           </a>
    //         </div>
    //         <a href={designLink}>
    //           <img
    //             width="25"
    //             height="30"
    //             src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/FFFFFF/external-figma-social-media-tanah-basah-basic-outline-tanah-basah.png"
    //             alt="Figma"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="pt-1 flex justify-center">
    //   {imageSrc && (
    //     <div className="pt-1">
    //       <img src={imageSrc} alt={projectName} />
    //     </div>
    //   )}
    //   </div>
    // </div>
    <div className="py-5">
      <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div
          class="relative overflow-hidden bg-cover bg-no-repeat p-0"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <img class="rounded-t-lg" src={imageSrc} alt="" />
          <a href="#!">
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
        <div class="p-6">
          <h5 class="mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50 font-bold">
            Project Name: {projectName} <br />
          </h5>
          <p class="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="flex justify-end">
          <div className="flex flex-row">
            <a className="px-1" href={githubLink}>
              <img
                width="40"
                height="40"
                src="https://img.icons8.com/ios-glyphs/30/github.png"
                alt="github"
              />
            </a>
         
          <a className="pt-1" href={designLink}>
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/ios-filled/50/figma--v1.png"
              alt="figma--v1"
            />
          </a>
        </div> </div></div>
      </div>
    </div>
  );
};
export default ProjectCard;
