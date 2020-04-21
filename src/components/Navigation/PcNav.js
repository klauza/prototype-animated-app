import React from 'react'

import NavLinks from './NavLinks';
// icons
import { HomeIcon, AppsIcon, MenuIcon } from '../../media';

const PcNav = ({ loc1, loc2 }) => {
  return (
    <div>
      <NavLinks loc1={loc1} loc2={loc2} />
    </div>
  )
}

export default PcNav
