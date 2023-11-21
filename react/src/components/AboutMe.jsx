import React from "react";

function AboutMe() {
  return (
    <div className="flex flex-row m-5">
      <div className="basis-1/2 flex justify-center text-center text-white">
        <img
          className="w-32 h-32 rounded-full"
          src="https://media.discordapp.net/attachments/1032706076820385933/1176373150523592746/a3f1f9f59ad20938ff2856673a48c575.jpg?ex=656ea1df&is=655c2cdf&hm=b813d053dd9d6dde8e5147868f2fc96d1fb3d80b709ecbee4fdc7b14fb8b208c&=&width=441&height=662"
        />
      </div>
      <div className="basis-1/2 flex justify-center text-center text-white">
        <div className="text-2xl font-bold">About Me<br></br>
        <div className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut placeat, aperiam odit harum sapiente praesentium mollitia dignissimos incidunt. </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
