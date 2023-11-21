import React from "react";
import image_sababook01 from "../assets/img/Sababook-1.png";
import image_sababook02 from "../assets/img/Sababook-2.png";

function MyProject() {
  return (
    <div class="text-2xl font-bold px-10 pt-5">
      My Proiect
      <div className="p-2">
        <div class="text-sm relative">
          Project Name : Sababook <br></br> Date : Jan 2022
          <div className="absolute top-0 right-0">
            <div className="flex flex-row ">
              <div className="px-1">
                <a className="" href="https://github.com/Dnuangkamon/Sababooks">
                  <img
                    width="40"
                    height="35"
                    src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo.png"
                    alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo"
                  />
                </a>
              </div>
              <a href="https://www.canva.com/design/DAFQnZ3-2Uk/mu4kN_x_audDBJ0n1dTIVQ/edit">
                <img
                  width="42"
                  height="37"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/canva.png"
                  alt="canva"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-1">
          <img src={image_sababook02}></img>
        </div>
      </div>
      <div className="p-2">
        <div class="text-sm relative">
          Project Name : Database, Web Pro, ลงทะเบียนเรียน, Hermoon, SOP <br></br> Date : Jan 2022
          <div className="absolute top-0 right-0">
            <div className="flex flex-row ">
              <div className="px-1">
                <a className="" href="https://github.com/Dnuangkamon/Sababooks">
                  <img
                    width="40"
                    height="35"
                    src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/FFFFFF/external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo.png"
                    alt="external-github-with-cat-logo-an-online-community-for-software-development-logo-regular-tal-revivo"
                  />
                </a>
              </div>
              <a href="https://www.canva.com/design/DAFQnZ3-2Uk/mu4kN_x_audDBJ0n1dTIVQ/edit">
                <img
                  width="42"
                  height="37"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/canva.png"
                  alt="canva"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-1">
          <img src={image_sababook02}></img>
        </div>
      </div>
    </div>
  );
}

export default MyProject;
