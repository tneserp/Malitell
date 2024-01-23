import React from "react";
import * as g from "../../../styles/grid";

export default function Agree() {
  return (
    <g.Grid>
      <g.Box col="1/13" row="1/2">
        이용 약관
      </g.Box>
      <g.Box col="1/13" row="2/6">
        이용 약관 내용
      </g.Box>
      <g.Box col="1/13" row="6/10">
        이용 약관 내용
      </g.Box>
      <g.Box col="9/11" row="10/11">
        뒤로가기
      </g.Box>
      <g.Box col="11/13" row="10/11">
        정보 입력
      </g.Box>
    </g.Grid>
  );
}
