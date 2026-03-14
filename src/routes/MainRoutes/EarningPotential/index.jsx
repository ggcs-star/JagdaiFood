import React from 'react'
import EarningPotentialComponent from './components/EarningPotentialComponent'
import Breadcrumbs from '../../../components/Breadcrumbs'

const EarningPotential = () => {
  return (
    <div className=''>
            <Breadcrumbs
              titleMap={{
                "/roi-calculator": "ROI Calculator",
              }}
            />
        <EarningPotentialComponent/>
    </div>
  )
}

export default EarningPotential