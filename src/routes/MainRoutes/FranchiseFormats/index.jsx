import React from 'react'
import InvestmentROI from './components/InvestmentROI'
import FranchiseInvestment from './components/FranchiseInvestment'
import FranchiseModels from './components/FranchiseModels'
import AdditionalFranchises from './components/AdditionalFranchises'
import WhyReturnsStructured from './components/WhyReturnsStructured'
import FranchiseCTA from './components/FranchiseCTA'

const FranchiseFormats = () => {
  return (
    <div>
        <InvestmentROI/>
        <FranchiseInvestment/>
        <FranchiseModels/>
        <AdditionalFranchises/>
        <FranchiseCTA/>
    </div>
  )
}

export default FranchiseFormats