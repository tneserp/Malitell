import React from 'react'
import * as g from "../../styles/grid";

export default function ArticleCreate() {
  return (
    <g.GridNav>
      <g.Box col="2/12" row="1/2">
        분류 / 제목
      </g.Box>
      <g.Box col="2/12" row="3/10">
        content
      </g.Box>
      <g.Box col="10/12" row="10/11">
        create
      </g.Box>
    </g.GridNav>
  )
}
