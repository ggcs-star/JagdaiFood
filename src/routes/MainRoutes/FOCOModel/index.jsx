import React from 'react'
import FocoModelSection from './components/FocoModelSection'
import Breadcrumbs from '../../../components/Breadcrumbs'

const FOCOModel = () => {
  return (
    <div className="bg-black">
      <Breadcrumbs
        titleMap={{
          "/foco-model": "FOCO Model",
        }}
      />
      <FocoModelSection />
    </div>
  )
}

export default FOCOModel