import React from 'react'
import ContactForm from './components/ContactForm'
import Breadcrumbs from '../../../components/Breadcrumbs'
import { useEffect } from 'react'

const Contact = () => {

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // change to "auto" if you want instant
      });
    }, []);

  return (
    <div>
      <Breadcrumbs
              titleMap={{
                "/contact": "Contact Us",
              }}
               className='pt-28 bg-black text-white'
            />  
        <ContactForm/>
    </div>
  )
}

export default Contact