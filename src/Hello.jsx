import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import { useNavigate } from "react-router-dom";

function Hello() {
  const [data, setdata] = useState(true);
  const nav1 = useNavigate();
  const nav2 = useNavigate();
  const nav3 = useNavigate();
  const nav4 = useNavigate();

  return (
    <div className="w-full">
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container className=" ">
          <img src="./images/fateh.png" alt="" className="pl-16" />
          {/* <Navbar.Brand href="#home"></Navbar.Brand> */}
          {data ? (
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setdata(!data)}
            />
          ) : (
            <h1>
              {" "}
              <Navbar.Toggle aria-controls="x" onClick={() => setdata(!data)} />
            </h1>
            
          )}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me">
              <Nav.Link href="#home" id="home" onClick={() => nav1("/")}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => nav2("/services")}>
                Services
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => nav3("/about")}>
                About
              </Nav.Link>
              <Nav.Link href="#link" onClick={() => nav4("/contact")}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Hello;
