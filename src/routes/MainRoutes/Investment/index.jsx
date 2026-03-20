import React from 'react'
import InvestmentROI from './components/InvestmentROI'
import FranchiseInvestment from './components/FranchiseInvestment'
import FranchiseModels from './components/FranchiseModels'
import AdditionalFranchises from './components/AdditionalFranchises'
import WhyReturnsStructured from './components/WhyReturnsStructured'
import Breadcrumbs from '../../../components/Breadcrumbs'
import QsrEarnings from './components/QsrEarnings'
import FoodTrolleyEarnings from './components/FoodTrolleyEarnings'
import FoodTempoEarnings from './components/FoodTempoEarnings'
import InternetRestaurantEarnings from './components/InternetRestaurantEarnings'

const Investment = () => {
  return (
    <div>
       <Breadcrumbs
                    titleMap={{
                      "/investment": "Investment & ROI",
                    }}
                    className='pt-28 bg-black text-white'
                  />   
        <InvestmentROI/>
        <QsrEarnings/>
        <FoodTrolleyEarnings/>
        <FoodTempoEarnings/>
        <InternetRestaurantEarnings/>
        {/* <FranchiseInvestment/>
        <FranchiseModels/>
        <AdditionalFranchises/> */}
        <WhyReturnsStructured/>
    </div>
  )
}

export default Investment