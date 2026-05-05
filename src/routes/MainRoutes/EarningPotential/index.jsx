import React from 'react'
import EarningPotentialComponent from './components/EarningPotentialComponent'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { useEffect } from 'react'

const EarningPotential = () => {

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
                "/roi-calculator": "ROI Calculator",
              }}
            />
        <EarningPotentialComponent/>
    </div>
  )
}

export default EarningPotential