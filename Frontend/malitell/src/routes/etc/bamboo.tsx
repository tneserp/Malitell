import React from 'react'
import * as g from "../../styles/grid";

export default function Bamboo() {
  return (
    <g.GridNav>
      <g.Box col="1/13" row="2/3">
        대나무 숲
      </g.Box>
      <g.Box col="1/13" row="3/5">
        주제
      </g.Box>
      <g.Box col="1/13" row="6/11">
        대 숲 content
      </g.Box>
    </g.GridNav>
  )
}
