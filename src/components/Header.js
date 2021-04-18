import React from "react";
import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { PersonFill } from "react-bootstrap-icons"

const Header = () => {
  function simulateLoginRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const [isLoading, setLoading] = useState(false);

  const handleClick = () => setLoading(true);

  useEffect(() => {
    if (isLoading) {
      simulateLoginRequest().then(() => {
        // TODO swap simulatelogin with actual login
        setLoading(false);
      });
    }
  }, [isLoading]);

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home" className="headerButton">
        <img
          alt=""
          src="logo192.png"
          width="30"
          height="30"
          className="d-inline-block align top"
        />
        {""}
        App
      </Navbar.Brand>
      <Nav className="mr-auto px-3 headerButton">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#about">About us</Nav.Link>
      </Nav>
      <Form inline >
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 px-3"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
      <Nav>
        <Button
          className="headerButton"
          variant="outline-light"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "loading" : <PersonFill alt="Login"/>}
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;
