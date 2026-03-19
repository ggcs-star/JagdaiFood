import React from 'react'
import InvestmentOverview from './components/InvestmentOverView'
import CapitalProtectionFramework from './components/CapitalProtectionFramework'
import EcosystemBenefitsCard from './components/EcosystemBenefitsCard'
import ModelFitSection from './components/ModelFitSection'
import ExploreFranchiseSection from '../FranchiseModels/components/ExploreFranchiseSection'
import Breadcrumbs from '../../../components/Breadcrumbs'
import ComparisonTable from './components/ComparisonTable'
import FranchiseCTA from './components/FranchiseCTA'

const ModelComparison = () => {
  return (
    <div className='bg-black'>
      <Breadcrumbs
        titleMap={{
          "/model-comparison": "Model Comparison",
        }}
      />
      <InvestmentOverview />
      <ComparisonTable/>
      <FranchiseCTA/>
      {/* <CapitalProtectionFramework />
      <EcosystemBenefitsCard />
      <ModelFitSection />

      <ExploreFranchiseSection /> */}
    </div>
  )
}

export default ModelComparison