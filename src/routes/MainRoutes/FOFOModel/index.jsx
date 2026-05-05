import React from 'react'
import FofoModelSection from './components/FofoModelSection'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { useEffect } from 'react'

const FOFOModel = () => {

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // change to "auto" if you want instant
      });
    }, []);

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