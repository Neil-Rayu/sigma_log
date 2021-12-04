import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="why-sigma" onClick={toggle}>
              Why Use Sigma?
            </SidebarLink>
            <SidebarLink to="about" onClick={toggle}>
              About Me...
            </SidebarLink>
            <SidebarLink to="useful-links" onClick={toggle}>
              Useful Links
            </SidebarLink>
            <SidebarLink to="sign-up" onClick={toggle}>
              Get Started!
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/sign-in">Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
