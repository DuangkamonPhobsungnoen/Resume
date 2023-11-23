import React from "react";
import image_aboutme from "../assets/img/About_me.jpg"

function AboutMe() {
  return (
    <div className="flex flex-row m-2">
      <div className="basis-1/2 flex justify-center text-center text-white">
        <img
          className="w-36 h-36 rounded-full"
          src={image_aboutme}
        />
      </div>
      <div className="basis-1/2 flex justify-center text-center text-white">
        <div className="text-2xl font-bold">About Me<br></br>
        <div className="text-xs">Hello, I'm Chompoo, currently studying in the Faculty of Information Technology. Department of Information Technology King Mongkut's Institute of Technology Ladkrabang. </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
