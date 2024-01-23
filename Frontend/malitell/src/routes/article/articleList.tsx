import React from "react";
import * as g from "../../styles/grid";

export default function Articles() {
  return (
    <g.GridNav>
      <g.Box col="1/4" row="1/7">
        recommendedArticle
      </g.Box>
      <g.Box col="4/13" row="1/2">
        searchBox
      </g.Box>
      <g.Box col="4/13" row="2/3">
        filter
      </g.Box>
      <g.Box col="4/13" row="3/13">
        articles
      </g.Box>
    </g.GridNav>
  );
}
