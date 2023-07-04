import React from "react";

import { ReactComponent as Logo } from "../../images/shared/logo.svg";

import { HeaderContainer, HeaderSperator, NavContainer } from "./Header.styles";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderSperator />
      <NavContainer>
        <ul>
          <li>
            <NavLink to="/">
              <span>00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <span>01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <span>02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <span>03</span> Technology
            </NavLink>
          </li>
        </ul>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
