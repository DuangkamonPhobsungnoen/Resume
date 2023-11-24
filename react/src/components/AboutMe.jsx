import React from "react";
import image_aboutme from "../assets/img//Hannah.png"

function AboutMe() {
  return (
    <div className="flex flex-row h-screen w-full justify-center text-center">
        <div className="text-3xl font-bold">About Me<br></br>
        <div className="flex justify-center"><img src={image_aboutme} width="180" height="150" /></div>
        <div className="text-xs px-10 py-5">Hello, I'm Chompoo, currently studying in the Faculty of Information Technology. <br></br>Department of Information Technology King Mongkut's Institute of Technology Ladkrabang. </div>
      </div>
    </div>
  );
}

export default AboutMe;
