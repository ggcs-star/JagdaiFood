import React from 'react'
import ContactForm from './components/ContactForm'
import Breadcrumbs from '../../../components/Breadcrumbs'

const Contact = () => {
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