import React from 'react'
import InvestmentROI from './components/InvestmentROI'
import FranchiseInvestment from './components/FranchiseInvestment'
import FranchiseModels from './components/FranchiseModels'
import AdditionalFranchises from './components/AdditionalFranchises'
import WhyReturnsStructured from './components/WhyReturnsStructured'

const Investment = () => {
  return (
    <div>
        <InvestmentROI/>
        <FranchiseInvestment/>
        <FranchiseModels/>
        <AdditionalFranchises/>
        <WhyReturnsStructured/>
    </div>
  )
}

export default Investment