import React from 'react'
import InvestmentROI from './components/InvestmentROI'
import FranchiseTabs from './components/FranchiseTabs'
import WhyReturnsStructured from './components/WhyReturnsStructured'
import Breadcrumbs from '../../../components/Breadcrumbs'

const Investment = () => {
  return (
    <div>
      <Breadcrumbs
        titleMap={{
          "/investment": "Investment & ROI",
        }}
        className='pt-28 bg-black text-white'
      />

      <InvestmentROI />

      {/* Tabs Section */}
      <FranchiseTabs />

      <WhyReturnsStructured />
    </div>
  )
}

export default Investment