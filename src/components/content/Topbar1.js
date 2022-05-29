import React, { useState } from "react";
import axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Topbar = ({ toggleSidebar },props) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);


  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to={"/signIn"}>
              Logout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/signup"}>
              {props.username}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"} id="stream">
              Stream
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-4"}>
              
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;