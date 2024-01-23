import React from "react";
import * as g from "../../styles/grid";

export default function SelfTest() {
  return (
    <g.GridNav>
      <g.Box col="1/13" row="1/2">
        검사 유형
      </g.Box>
      <g.Box col="1/13" row="2/7">
        검사지
      </g.Box>
      <g.Box col="1/13" row="7/11">
        검사 결과
      </g.Box>
    </g.GridNav>
  );
}
