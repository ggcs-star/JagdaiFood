import React from 'react'
import WhatWeDoHero from './components/WhatWeDoHero'
import WhyWeExist from './components/WhyWeExist'
import BusinessModelGrid from './components/BusinessModelGrid'
import ServiceGrid from './components/ServiceGrid'
import WhatWeDoCTA from './components/WhatWeDoCTA'

const WhatWeDo = () => {
  return (
    <div>
        <WhatWeDoHero/>
        <WhyWeExist/>
        <BusinessModelGrid/>
        <ServiceGrid/>
        <WhatWeDoCTA/>
    </div>
  )
}

export default WhatWeDo