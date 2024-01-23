import React from 'react'
import * as g from '../../styles/grid';

export default function CounselorList() {
  return (
    <g.GridNav>
      <g.Box col='1/13' row='1/2'>counselors</g.Box>
      <g.Box col='1/4' row='2/3'>searchBox</g.Box>
      <g.Box col='1/4' row='3/9'>filter</g.Box>
      <g.Box col='4/13' row='2/13'>counselor</g.Box>
    </g.GridNav>
    )
}
