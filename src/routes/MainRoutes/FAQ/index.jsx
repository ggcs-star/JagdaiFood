import React from "react";
import FAQAccordion from "./components/FAQAccordion";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { useEffect } from "react";

export default function FAQ() {

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
          "/faq": "FAQs",
        }}
         className='pt-28 bg-black text-white'
      />  
          <FAQAccordion />
    </div>
  );
}