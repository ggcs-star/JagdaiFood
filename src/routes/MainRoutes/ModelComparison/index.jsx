import React from 'react'
import InvestmentOverview from './components/InvestmentOverView'
import CapitalProtectionFramework from './components/CapitalProtectionFramework'
import EcosystemBenefitsCard from './components/EcosystemBenefitsCard'
import ModelFitSection from './components/ModelFitSection'
import ExploreFranchiseSection from '../FranchiseModels/components/ExploreFranchiseSection'

const ModelComparison = () => {
  return (
    <div className='bg-black'>
         <InvestmentOverview />
              <CapitalProtectionFramework />
              <EcosystemBenefitsCard />
              <ModelFitSection />
        
              <ExploreFranchiseSection />
    </div>
  )
}

export default ModelComparison