import React from 'react'
import * as g from '../../styles/grid';

export default function CounselorDetail() {
  return (
    <g.GridNav>
      <g.Box col='1/9' row='1/4'>introduce</g.Box>
      <g.Box col='1/9' row='4/6'>counsellingInformation</g.Box>
      <g.Box col='1/9' row='6/13'>counsellingReviews</g.Box>
      <g.Box col='9/13' row='1/6'>counselorImage</g.Box>
      <g.Box col='9/13' row='6/7'>reservation</g.Box>
      <g.Box col='9/13' row='7/8'>back</g.Box>
    </g.GridNav>
    )
}
