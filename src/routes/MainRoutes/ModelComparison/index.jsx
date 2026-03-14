import React from 'react'
import InvestmentOverview from './components/InvestmentOverView'
import CapitalProtectionFramework from './components/CapitalProtectionFramework'
import EcosystemBenefitsCard from './components/EcosystemBenefitsCard'
import ModelFitSection from './components/ModelFitSection'
import ExploreFranchiseSection from '../FranchiseModels/components/ExploreFranchiseSection'
import Breadcrumbs from '../../../components/Breadcrumbs'

const ModelComparison = () => {
  return (
    <div className='bg-black'>
      <Breadcrumbs
        titleMap={{
          "/model-comparison": "Model Comparison",
        }}
      />
      <InvestmentOverview />
      <CapitalProtectionFramework />
      <EcosystemBenefitsCard />
      <ModelFitSection />

      <ExploreFranchiseSection />
    </div>
  )
}

export default ModelComparison