import React from 'react'
import FofoModelSection from './components/FofoModelSection'
import Breadcrumbs from '../../../components/Breadcrumbs'

const FOFOModel = () => {
  return (
    <div className='bg-black'>
      <Breadcrumbs
        titleMap={{
          "/fofo-model": "FOFO Model",
        }}
      />
      <FofoModelSection />
    </div>
  )
}

export default FOFOModel