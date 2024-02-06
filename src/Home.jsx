import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./footer";
import Hello from "./Hello";

function App() {
  return (
    <>
      <body className="sm:w-full sm:overflow-none xl:w-11/12 xl:m-auto">
        <header className="h-12 min-w-full sm:w-full sm:flex sm:justify-around sm:gap-2 items-center justify-end bg-orange-400">
          <div className="flex text-white items-center space-x-1  ">
            <img src="./images/phone.png" alt="" className="h-5" />
            <a href="" className="text-cyan-50">
              03330782025
            </a>
          </div>

          <div className="flex flex-row items-center space-x-2  text-white">
            <img src="./images/map-pin.png" alt="" className="h-5 sm:h-3" />
            <a href="" className="text-cyan-50">
              peshawar <span>city</span>
            </a>
          </div>

          <button className="text-white bg-red-500 px-2 ">English</button>
        </header>
        <Hello />
        <div className="gradient mt-6">
          <div className="relative xl:h-72 sm:h-28 ">
            <img src="./images/banner.png" alt="" />
            <img
              src="./images/gradient.png"
              alt=""
              className="absolute top-0"
            />
          </div>
        </div>
        <section
          className=" xl:grid xl:grid-cols-4 xl:mt-20 xl:mb-9 xl:gap-4 sm:mb-5 sm:px-2 sm-flex sm:flex-col   sm:relative"
          id="section"
        >
          {/* <div className="img1">
            <img src="" alt="" />
          </div> */}
          <div className="img1 sm:my-2">
            <img src="./images/maid.png" alt="" />
          </div>
          <div className="img1 sm:my-2">
            <img src="./images/maid.png" alt="" />
          </div>
          <div className="img1 sm:my-2">
            <img src="./images/license.png" alt="" />
          </div>
          <div className="img1">
            <img src="./images/airport.png" alt="" />
          </div>
          <div className="img1 sm:my-2">
            <img src="./images/tourism.png" alt="" />
          </div>
          <div className="img1 sm:my-2">
            <img src="./images/tourism.png" alt="" />
          </div>
          <div className="img1 sm:my-2">
            <img src="./images/book.png" alt="" />
          </div>
          <div className="img1 sm:my-2">
            <img src="./images/flightes.png" alt="" />
          </div>
        </section>
      </body>
      <Footer />
    </>
  );
}

export default App;
