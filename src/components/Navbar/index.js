import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  NavLinkS,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLinkS to="top">
          <h1>Σ</h1>
        </NavLinkS>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLinkS to="why-sigma">Why Sigma?</NavLinkS>
          <NavLinkS to="about">About Me...</NavLinkS>
          <NavLinkS to="useful-links">Useful Links</NavLinkS>
          <NavLinkS to="sign-up">Get Started!</NavLinkS>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/dashboard">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
