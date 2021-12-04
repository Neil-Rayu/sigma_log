import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserProfile = styled(Link)`
  z-index: 5;
  border-radius: 50%;
  outline: 5px;
  /*  ${(props) => props.theme.colors.deafultRankColor}; */
  outline-color: #ffb800;
  margin-left: 24px;
  background: #d500f9;
  text-decoration: none;
  color: #ffb800;
  height: 50px;
  width: 50px;
  background-image: "../../images/ProfileIcon.svg";
  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 50%;
  }
`;
