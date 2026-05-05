import React from 'react'
import WhatWeDoHero from './components/WhatWeDoHero'
import WhyWeExist from './components/WhyWeExist'
import BusinessModelGrid from './components/BusinessModelGrid'
import ServiceGrid from './components/ServiceGrid'
import WhatWeDoCTA from './components/WhatWeDoCTA'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { useEffect } from 'react'

const WhatWeDo = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // change to "auto" if you want instant
      });
    }, []);

  return (
    <div className=''>
 <Breadcrumbs
              titleMap={{
                "/what-we-do": "What We Do",
              }}
              className='pt-28 bg-black text-white'
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