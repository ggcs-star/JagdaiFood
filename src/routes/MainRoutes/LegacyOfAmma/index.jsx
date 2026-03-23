import React, { useEffect } from 'react'
import LegacyOfAmmaHero from './components/LegacyOfAmmaHero'
import TributeToAmma from './components/TributeToAmma'
import FoundersSection from './components/FoundersSection'
import HowWeDoIt from './components/HowWeDoIT'
import FranchiseCTA from './components/FranchiseCTA'

const LegacyOfAmma = () => {

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // use "auto" if you want instant
      });
    }, []);

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