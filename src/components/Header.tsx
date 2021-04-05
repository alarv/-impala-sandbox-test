import logo from "../assets/freddie.svg";
import { Navbar } from "react-bootstrap";
import React from "react";
function Header() {
  return (
    <div className="Header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          alarv test
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
