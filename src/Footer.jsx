import React from "react";
import "./App.css";
import "./nav.css";

function footer() {
  return (
    <footer className=" bg-black sm:w-full xl:w-full sm:overflow-x-hidden ">
      <div className="">
        <img src="./images/logo-white.png" alt="" />
      </div>
      <div
        id="menu"
        className="text-white flex px-12 font-serif sm:flex-row sm:gap-5  xl:flex-row xl:w-3/4 xl:text-4xl xl:justify-around"
      >
        <a> Home</a>
        <a>Services</a>
        <a>Contact</a>
        <a>About</a>
      </div>
      <div className="flex flex-row space-x-10 xl:font-bold  mb-8">
        <img src="./images/facebook.svg" alt="" />
        <img src="./images/linkedin.svg" alt="" />
        <img src="./images/mail-golden.svg" alt="" />
      </div>
    </footer>
  );
}

export default footer;
