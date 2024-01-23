import React, { useState } from "react";
import * as g from "../styles/grid";
import * as s from "../styles/home";

export default function Home() {
  return (
    <>
      <g.GridNav>
        <g.Box col="1/13" row="1/4">
          homeImage
        </g.Box>
        <g.Box col="1/13" row="4/6">
          nav
        </g.Box>
        <g.Box col="1/13" row="6/13">
          article?
        </g.Box>
      </g.GridNav>
    </>
  );
}
