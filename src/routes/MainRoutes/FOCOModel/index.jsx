import React from 'react'
import FocoModelSection from './components/FocoModelSection'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { useEffect } from 'react'

const FOCOModel = () => {

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // change to "auto" if you want instant
      });
    }, []);

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