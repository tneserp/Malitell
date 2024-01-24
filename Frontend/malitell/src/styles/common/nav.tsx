import styled from "styled-components";

export const Nav = styled.nav`
  height: 9vh;
`;

export const NavTop = styled.div`
  /* box-shadow: 0 0 0 1px black inset; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

export const NavBottom = styled.div`
  /* box-shadow: 0 0 0 1px black inset; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  margin: auto;
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding: 0;
  }
  img {
    width: 30%;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: black;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: auto;
  @media screen and (max-width: 1023px) {
    width: 98%;
  }
`;

export const NavItems = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;
`;

export const NavItem = styled.div`
  text-align: center;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;
