import React, { useEffect } from 'react'
import BrandsHero from './components/BrandsHero'
import BrandsCards from './components/BrandsCards'
import BrandsCTA from './components/BrandsCTA.JSX'
import FranchiseCTA from '../Home/components/FranchiseCTA'

const OurBrands = () => {

  // ✅ Scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // use "auto" if you want instant
    });
  }, []);

  return (
    <div>
        <BrandsHero/>
        <BrandsCards/>
        <FranchiseCTA/>
    </div>
  )
}

export default OurBrands