import React from "react";
import * as g from "../../../styles/grid";
import { Link } from "react-router-dom";


export default function Selection() {
  return (
    <g.GridNav>
      <g.Box col="1/13" row="1/2">
        회원가입
      </g.Box>
      <g.Box col="1/13" row="2/4">
        회원 유형 선택
      </g.Box>
      <g.Box col="1/7" row="4/10">
        <Link to={"/signup/information"}>일반인</Link>
      </g.Box>
      <g.Box col="7/13" row="4/10">
        상담가
      </g.Box>
    </g.GridNav>
  );
}
