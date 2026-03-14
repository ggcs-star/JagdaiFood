import React from "react";
import FAQAccordion from "./components/FAQAccordion";
import Breadcrumbs from "../../../components/Breadcrumbs";

export default function FAQ() {
  return (
    <div>
      <Breadcrumbs
        titleMap={{
          "/faq": "FAQs",
        }}
      />  
          <FAQAccordion />
    </div>
  );
}