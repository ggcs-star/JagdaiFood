import React from 'react'
import LegacyOfAmmaHero from './components/LegacyOfAmmaHero'
import TributeToAmma from './components/TributeToAmma'
import FoundersSection from './components/FoundersSection'
import HowWeDoIt from './components/HowWeDoIT'
import FranchiseCTA from './components/FranchiseCTA'

const LegacyOfAmma = () => {
  return (
    <div>
        <LegacyOfAmmaHero/>
        <TributeToAmma/>
        <FoundersSection/>
        <HowWeDoIt/>
        <FranchiseCTA/>
    </div>
  )
}

export default LegacyOfAmma