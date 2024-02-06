import React from "react";
import "./App.css";
import Hello from "./Hello";
import Footer from "./footer";

function About() {
  return (
    <>
      <div className="sm:w-full sm:overflow-none xl:w-11/12 xl:m-auto">
        <Hello />
        <section className="flex flex-col md:flex-row xl:w-5/5 justify-evenly m-auto mt-10 items-center sm:w-full">
          <div className="xl:w-5/12 sm:w-full" id="about">
            <h1 className="font-extrabold text-center">About</h1>
            <p className="sm:px-7">
              Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to
              cater to the interests of travelers across the globe, founded in
              2023 in Riyadh, Saudi Arabia. Our expertise lies in crafting
              exceptional journeys tailored to each client's unique
              requirements, whether it be ticketing, hotel bookings, or visa
              assistance. With competitive pricing and access to superior
              consulting services, we have become the favored choice among
              travelers. Fateh Al Mustaqbil plays a pivotal role in shaping the
              landscape of travel and tour services not only within the Kingdom
              of Saudi Arabia but also on a global scale. Welcome to Fateh Al
              Mustaqbil, where we advocate exploring the world one adventure at
              a time. Come, be a part of this remarkable journey, and together,
              let's craft experiences that transcend time and place.
            </p>
          </div>
          <div className="img">
            <img src="./images/about.png" alt="" />
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default About;
