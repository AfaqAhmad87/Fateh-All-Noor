import React from "react";
import "./App.css";
import Footer from "./footer";
import Hello from "./Hello";

function Services() {
  return (
    <>
      <div className="sm:w-full sm:overflow-none xl:w-11/12 xl:m-auto">
        <Hello />
        <div className="servicedata sm:w-full">
          <div
            className="flex flex-col justify-center xl:text-center xl:w-1/2 sm:items-center sm:w-full "
            id="heading"
          >
            <h1 className="text-cyan-950  sm:font-thin  sm:w-full">
              Services By Fateh
            </h1>
            <p className="text-xl w-3/4 sm:w-11/12 sm:m-auto sm:text-justify  text-cyan-950  ">
              Elevate your travel experience with our comprehensive and
              efficient solutions. We leverage a wide range of travel services,
              all aimed at making your travel journey smooth and enjoyable.
            </p>
          </div>
        </div>
        <div
          className="xl:flex xl:flex-row xl:justify-around xl:items-center sm:w-full sm:flex sm:p-3  sm:flex-wrap"
          id="books"
        >
          <div id="services" className="pb-2">
            <img
              src="./images/book-now-xl.png"
              alt=""
              className="flex items-center"
            />
          </div>
          <div
            className="flex flex-col  items-start xl:w-1/3 sm:w-full  "
            id="data"
          >
            <h1 className="h1 font-extrabold">01</h1>
            <h2 className="h2 text-cyan-950 font-extrabold">
              International And Domestics Tickets
            </h2>
            <p id="paragraph" className="text-2xl">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam
              id dui posuere blandit. Pellentesque in ipsum id orci porta
              dapibus. Cras ultricies ligula sed magna dictum porta.
            </p>
            <button className="py-3 px-14" id="button">
              lets go
            </button>
            {/* <Button type="dashed">Dashed Button</Button> */}
          </div>
        </div>
        <div
          id="top-down"
          className="xl:flex xl:flex-row xl:justify-around xl:items-center xl:h-2/3 sm:w-full sm:flex sm:p-3  sm:flex-wrap"
        >
          <div
            id="data"
            className="flex flex-col  items-start w-1/3 sm:w-full  "
          >
            <h1 className="h1 font-extrabold">02</h1>
            <h1 className="h2 text-cyan-950 font-extrabold">
              Hotel Reservation World Wide
            </h1>
            <p id="paragraph" className="text-2xl sm:w-full">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam
              id dui posuere blandit. Pellentesque in ipsum id orci porta
              dapibus. Cras ultricies ligula sed magna dictum porta.
            </p>
            <button className="py-3 px-14" id="button">
              lets go
            </button>

            {/* <Button type="dashed">Dashed Button</Button> */}
          </div>
          <div id="services" className=" ">
            <img
              src="./images/license-xl.png"
              alt=""
              className="flex items-center"
            />
          </div>
        </div>
        <div
          id="books"
          className="flex flex-row justify-around items-center h-2/3 sm:flex sm:p-3 sm:flex-wrap"
        >
          <div
            id="data"
            className="flex flex-col  items-start w-1/3 sm:w-full "
          >
            <h1 className="h1 font-extrabold">03</h1>
            <h1 className="h2 text-cyan-950 font-extrabold">visa services</h1>
            <p id="paragraph" className="text-2xl">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam
              id dui posuere blandit. Pellentesque in ipsum id orci porta
              dapibus. Cras ultricies ligula sed magna dictum porta.
            </p>
            <button className="py-3 px-14" id="button">
              lets go
            </button>
            {/* <Button type="dashed">Dashed Button</Button> */}
          </div>
          <div id="services" className="">
            <img
              src="./images/airport-xl.png"
              alt=""
              className="flex items-center"
            />
          </div>
        </div>
        <div
          id="top-down"
          className="flex flex-row justify-around items-center h-2/3  sm:w-full sm:flex sm:p-3  sm:flex-wrap"
        >
          <div
            id="data"
            className="flex flex-col  items-start w-1/3 sm:w-full  "
          >
            <h1 className="h1 font-extrabold">04</h1>
            <h1 className="h2 text-cyan-950 font-extrabold">
              Hotel Reservation World Wide
            </h1>
            <p id="paragraph" className="text-2xl">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam
              id dui posuere blandit. Pellentesque in ipsum id orci porta
              dapibus. Cras ultricies ligula sed magna dictum porta.
            </p>
            <button className="py-3 px-14" id="button">
              lets go
            </button>

            {/* <Button type="dashed">Dashed Button</Button> */}
          </div>
          <div
            id="services"
            className=" sm:w-full sm:flex sm:p-3  sm:flex-wrap"
          >
            <img
              src="./images/license-xl.png"
              alt=""
              className="flex items-center"
            />
          </div>
        </div>
        <div
          id="books"
          className="flex flex-row justify-around items-center h-2/3 sm:w-full sm:flex sm:p-3  sm:flex-wrap"
        >
          <div
            id="data"
            className="flex flex-col  items-start w-1/3 sm:w-full  "
          >
            <h1 className="h1 font-extrabold">05</h1>
            <h1 className="h2 text-cyan-950 font-extrabold">
              International And Domestics Tickets
            </h1>
            <p id="paragraph" className="text-2xl">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam
              id dui posuere blandit. Pellentesque in ipsum id orci porta
              dapibus. Cras ultricies ligula sed magna dictum porta.
            </p>
            <button className="py-3 px-14" id="button">
              lets go
            </button>
            {/* <Button type="dashed">Dashed Button</Button> */}
          </div>
          <div id="services" className="sm:w-full">
            <img
              src="./images/book-now-xl.png"
              alt=""
              className="flex items-center"
            />
          </div>
        </div>
        <div
          id="top-down"
          className="flex flex-row justify-around items-center h-2/3  sm:w-full sm:flex sm:p-3  sm:flex-wrap"
        >
          <div
            id="data"
            className="flex flex-col  items-start w-1/3 sm:w-full  "
          >
            <h1 className="h1 font-extrabold">06</h1>
            <h1 className="h2 text-cyan-950 font-extrabold">
              Hotel Reservation World Wide
            </h1>
            <p id="paragraph" className="text-2xl">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam
              id dui posuere blandit. Pellentesque in ipsum id orci porta
              dapibus. Cras ultricies ligula sed magna dictum porta.
            </p>
            <button className="py-3 px-14" id="button">
              lets go
            </button>

            {/* <Button type="dashed">Dashed Button</Button> */}
          </div>
          <div
            id="services"
            className=" sm:w-full sm:flex sm:p-3  sm:flex-wrap"
          >
            <img
              src="./images/maid-xl.png"
              alt=""
              className="flex items-center"
            />
          </div>
        </div>
        <div
          id="top-down"
          className="flex flex-row justify-around items-center h-2/3 sm:w-full sm:flex sm:p-3  sm:flex-wrap"
        >
          <div
            id="data"
            className="flex flex-col  items-start w-1/3 sm:w-full "
          >
            <h1 className="h1 font-extrabold">07</h1>
            <h1 className="h2 text-cyan-950 font-extrabold">
              Hotel Reservation World Wide
            </h1>
            <p id="paragraph" className="text-2xl">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam
              id dui posuere blandit. Pellentesque in ipsum id orci porta
              dapibus. Cras ultricies ligula sed magna dictum porta.
            </p>
            <button className="py-3 px-14" id="button">
              lets go
            </button>

            {/* <Button type="dashed">Dashed Button</Button> */}
          </div>
          <div
            id="services"
            className=" sm:w-full sm:flex sm:p-3  sm:flex-wrap"
          >
            <img
              src="./images/license-xl.png"
              alt=""
              className="flex items-center"
            />
          </div>
        </div>
        <div
          id="top-down"
          className="flex flex-row justify-around items-center h-2/3 sm:w-full sm:flex sm:p-3  sm:flex-wrap"
        >
          <div
            id="data"
            className="flex flex-col  items-start w-1/3 sm:w-full "
          >
            <h1 className="h1 font-extrabold">08</h1>
            <h1 className="h2 text-cyan-950 font-extrabold">
              Hotel Reservation World Wide
            </h1>
            <p id="paragraph" className="text-2xl">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
              aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat,
              accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam
              id dui posuere blandit. Pellentesque in ipsum id orci porta
              dapibus. Cras ultricies ligula sed magna dictum porta.
            </p>
            <button className="py-3 px-14" id="button">
              lets go
            </button>

            {/* <Button type="dashed">Dashed Button</Button> */}
          </div>
          <div
            id="services"
            className=" sm:w-full sm:flex sm:p-3  sm:flex-wrap"
          >
            <img
              src="./images/maid-xl.png"
              alt=""
              className="flex items-center"
            />
          </div>
        </div>
      </div>{" "}
      <br /> <br />
      <Footer />
    </>
  );
}

export default Services;
