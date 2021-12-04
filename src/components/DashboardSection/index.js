import React from "react";
import {
  Nav,
  NavLink,
  NavLinkS,
  MobileIcon,
  NavMenu,
  NavBtn,
} from "../Navbar/NavbarElements";
import { FaBars } from "react-icons/fa";
import { UserProfile } from "./DashboardElements";

const DashboardComponent = () => {
  return (
    <>
      <Nav>
        <NavLink to="/dashboard">
          <h1>Σ</h1>
        </NavLink>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLinkS to="top">Dashboard</NavLinkS>
          {/* <NavThemeSwitch onClick={toggle} /> */}
        </NavMenu>
        <NavBtn>
          <UserProfile to="/dashboard"></UserProfile>
        </NavBtn>
      </Nav>
    </>
  );
};

export default DashboardComponent;
