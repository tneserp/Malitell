import React from 'react'
import * as g from '../../../styles/grid';

export default function ReservationFirst() {
  return (
    <g.GridNav>
      <g.Box col='1/9' row='1/2'>reservation</g.Box>
      <g.Box col='1/5' row='2/6'>calendar</g.Box>
      <g.Box col='5/9' row='2/6'>time</g.Box>
      <g.Box col='1/9' row='6/7'>counsel tag</g.Box>
      <g.Box col='1/9' row='7/11'>question</g.Box>
      <g.Box col='9/13' row='1/6'>counselorImage</g.Box>
      <g.Box col='9/13' row='6/7'>confirm</g.Box>
      <g.Box col='9/13' row='7/8'>back</g.Box>
    </g.GridNav>
    )
}
