import styled from "styled-components";

import { flexAlignCenter, flexCenter } from "../../styles/utilities";

export const HeaderContainer = styled.header`
  height: 7rem;
  ${flexAlignCenter};
`;

export const HeaderSperator = styled.div`
  width: 40rem;
  height: 1px;
  opacity: 0.2514851987361908;
  background: #fff;
  margin-left: 3rem;
  margin-right: -5rem;
  z-index: 10;
`;

export const NavContainer = styled.nav`
  height: 100%;
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.774227142333984px);
  font-family: "Barlow Condensed", sans-serif;
  color: #fff;

  ${flexCenter};

  ul {
    display: flex;
    gap: 3rem;
    height: 100%;

    li {
      font-size: 1.4rem;
      font-weight: 400;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-bottom: 3px solid transparent;

      a {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    li:hover {
      border-bottom: 3px solid #979797;
    }

    span {
      margin-right: 5px;
      font-weight: 700;
    }
  }
`;
