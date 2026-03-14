import React from 'react'
import WhatWeDoHero from './components/WhatWeDoHero'
import WhyWeExist from './components/WhyWeExist'
import BusinessModelGrid from './components/BusinessModelGrid'
import ServiceGrid from './components/ServiceGrid'
import WhatWeDoCTA from './components/WhatWeDoCTA'
import Breadcrumbs from '../../../components/Breadcrumbs'

const WhatWeDo = () => {
  return (
    <div>
 <Breadcrumbs
              titleMap={{
                "/what-we-do": "What We Do",
              }}
            />    
                <WhatWeDoHero />
      <WhyWeExist />
      <BusinessModelGrid />
      <ServiceGrid />
      <WhatWeDoCTA />
    </div>
  )
}

export default WhatWeDo