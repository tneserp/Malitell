import styled from "styled-components";

export const Grid = styled.div`
  box-shadow: 0 0 0 1px black inset;
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  /* 모바일 기기를 고려한 설계 */
  @media screen and (min-width: 1024px) {
    width: 70%;
    margin: auto;
  }
`;

export const GridNav = styled.div`
  box-shadow: 0 0 0 1px black inset;
  display: grid;
  min-height: 91vh;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  /* 모바일 기기를 고려한 설계 */
  @media screen and (min-width: 1024px) {
    width: 70%;
    margin: auto;
  }
`;

export const Box = styled.div<{ col?: string; row?: string }>`
  box-shadow: 0 0 0 1px black inset;
  padding: 10px;
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};
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
