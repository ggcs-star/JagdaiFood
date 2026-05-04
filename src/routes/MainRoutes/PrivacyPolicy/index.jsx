import React from 'react'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import { useEffect } from 'react';


const PrivacyPolicy = () => {

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // change to "auto" if you want instant
      });
    }, []);
    
  return (
    <div>
        <PrivacyPolicyPage/>
    </div>
  )
}

export default PrivacyPolicy