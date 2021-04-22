import React from "react";
import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { PersonFill } from "react-bootstrap-icons"
import { DropdownButton, Dropdown } from "react-bootstrap";
import {Link} from "react-router-dom"

const Header = () => {
  function simulateLoginRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  //loading animation login
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

  
  //show and hide dropdownmenu on hover
  const [show, setShow] = useState(false);
  const showDropDown = (e) => {
    setShow(!show);
  }
  const hideDropdown = (e) => {
    setShow(false);
  }


  return (
    <Navbar bg="primary" variant="dark" id="navbar" className="navbar">
      <Navbar.Brand href="/home" className="headerButton">
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
        <Nav.Link href="/home">Home</Nav.Link>
        <DropdownButton
        title="Actions"
        show={show}
        onMouseEnter={showDropDown}
        onMouseLeave={hideDropdown}
        >
        <Dropdown.Item as={Link} to="/employees">Employees</Dropdown.Item>
        <Dropdown.Item as={Link} to="/action2">action2</Dropdown.Item>
        <Dropdown.Item as={Link} to="/action3">action3</Dropdown.Item>
        <Dropdown.Item as={Link} to="/action4">action4</Dropdown.Item>
        </DropdownButton>
        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
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
          as={Link} to="/login"
        >
          {isLoading ? "loading" : <PersonFill alt="Login"/>}
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;
