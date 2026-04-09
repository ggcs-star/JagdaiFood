import React from 'react'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import WhyModel from './components/WhyModel'
import WhatYouGet from './components/WhatYouGet'
import WhoCanStart from './components/WhoCanStart'
import WhyRevolutionary from './components/WhyRevolutionary'
import StartSteps from './components/StartSteps'
import CTASection from './components/CTASection'
import { useEffect } from 'react'

const TrollyonRent = () => {

    // ✅ Scroll to top on page load
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // change to "auto" if you want instant
      });
    }, []);

  return (
    <div >
      <HeroSection/>
      <HowItWorks/>
      <WhyModel/>
      <WhatYouGet/>
      <WhoCanStart/>
      <WhyRevolutionary/>
      <StartSteps/>
      <CTASection/>

         </div>
  )
}

export default TrollyonRent