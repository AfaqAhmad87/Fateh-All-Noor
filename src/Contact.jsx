import React from "react";
import { Button, Form, Input } from "antd";
import Hello from "./Hello";
import footer from "./footer";
import Footer from "./footer";
import "./nav.css";

function Contact() {
  const { TextArea } = Input;
  const onFinish = (values) => {
    console.log("Received values:", values);
  };
  return (
    <>
      <div className="body">
        <Hello />
        <section className=" w-4/5  flex flex-col justify-center items-center m-auto mt-9 space-y-16">
          <h1 className="text-7xl font-bold">Contact US</h1>
          <div className="flex-col " id="initial">
            <Form onFinish={onFinish} className="flex flex-row w-full">
              <div className="div">
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input className="w-96 h-12" />
                </Form.Item>
              </div>

              <div className="div">
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input className="w-96 h-12" />
                </Form.Item>
              </div>
            </Form>
            <Form layout="" onFinish={onFinish} className="flex">
              <div className="div2">
                <Form.Item
                  label="Number"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input className="w-96 h-12" />
                </Form.Item>
              </div>
              <div className="div">
                {" "}
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input className="w-96 h-12" />
                </Form.Item>
              </div>
            </Form>
          </div>
          <div className="w-4/5 ml-10">
            {/* <label htmlFor="">description</label> */}
            <TextArea rows={7} className="ml-4" />
            <button class="button-48" role="button">
              <span class="text">Submit</span>
            </button>
          </div>
        </section>
        <br />
        <br />
        <br />
        <div
          className="w-2/3 m-auto flex flex-row justify-between text-2xl "
          id="contact"
        >
          <h1 className="text-2xl">Timing</h1>

          <h1 className="text-2xl">
            sunday-to-thursday <br /> <span>Timing 8.00 to 5.00</span>
          </h1>
        </div>
        <br />
        <br />
        <br />
        <div
          className="w-2/3 m-auto flex flex-row justify-between text-2xl "
          id="contact"
        >
          <div>
            <span className="relative right-16 top-8">
              <img src="/images/mail-golden.svg" alt="" />
            </span>
            Location
          </div>
          <div>
            <span className="relative right-16 top-8 mr-5">
              <img src="/images/Group 1418.png" alt="" />
            </span>
            Madina,Saudi
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className=" flex justify-around ">
          <div className="div">
            <img src="/images/2.png" alt="" />
          </div>
          <div className="flex flex-col space-y-14 ">
            <h1 className="text-4xl font-bold">You can Directly Reach To US</h1>
            <div>
              <div className="space-y-14">
                <div className="flex justify-center font-bold space-x-12">
                  <img
                    src="/images/mail-golden.svg"
                    alt=""
                    className="mr-10 "
                  />
                  <span className="font-bold relative right-4">
                    afaqahmad@gmail
                  </span>
                </div>
                <div className="flex justify-center mr-13 font-bold">
                  <img
                    src="/images/phone@2x.png"
                    alt=""
                    className="h-7 mr-16 font-bold"
                  />
                  <span className="mr-10">033302020200</span>
                </div>
                <div className="flex justify-center h-7 mr-14 font-bold">
                  <img
                    src="/images/Group 1418.png"
                    alt=""
                    className="h-7 mr-16 "
                  />
                  <span className="mr-10">Ryadh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div">
        <img src="./images/mask.png" alt="" />
      </div>
      <div id="map">
        <h4>currently</h4>
        <h1>SaudiArabia</h1>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
