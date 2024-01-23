import React from 'react'
import * as g from '../../styles/grid';

export default function Profile() {
  return (
    <g.GridNav>
      <g.Box col='1/13' row='1/2'>Profile</g.Box>
      <g.Box col='1/4' row='2/5'>profileImage</g.Box>
      <g.Box col='1/4' row='5/6'>tag</g.Box>
      <g.Box col='1/4' row='6/12'>profileMenu</g.Box>
      <g.Box col='4/13' row='2/3'>nowMenu</g.Box>
      <g.Box col='4/13' row='3/12'>profileDetail</g.Box>
    </g.GridNav>
  )
}
