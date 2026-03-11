import React, { useState } from "react";
import addIcon from "../../../../assets/faq/add.svg";
import removeIcon from "../../../../assets/faq/remove.svg";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Jagdai Foods?",
      answer:
        "A renowned brand operating a massive 10,000 sq. ft. kitchen, managing over 24 diverse food brands under one roof. With a focus on quality and innovation, Jagdai Foods delivers a seamless blend of flavors and culinary excellence, setting benchmarks in the food industry.",
    },
    {
      question: "What is the Jagdai Foods Franchise?",
      answer:
        "The Jagdai Foods franchise allows partners to operate multiple food brands through a centralized kitchen and operational ecosystem.",
    },
    {
      question: "How many franchise options does Jagdai Foods have?",
      answer:
        "Jagdai Foods offers multiple franchise formats including QSR restaurants, cloud kitchens, food trolleys, food tempos and food court formats.",
    },
    {
      question: "Who is the founder of Jagdai foods?",
      answer:
        "Jagdai Foods was founded with the vision to build a scalable and technology driven multi-brand food ecosystem.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black w-full min-h-screen py-[100px] px-[20px]">

      
      <div className="max-w-[1100px] mx-auto">

       
        <h2
          className="
          text-center
          text-[#60D186]

          text-[32px]
          sm:text-[40px]
          md:text-[48px]

          leading-[40px]
          sm:leading-[48px]
          md:leading-[56px]

          font-bricolageSemiBold
          mb-[100px]
        "
        >
          Frequently asked questions
        </h2>

        
        <div className="flex flex-col gap-[16px] max-w-[900px] mx-auto px-[20px] sm:px-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#3A3A3A] rounded-[8px] bg-[#262626] overflow-hidden transition-all duration-300"
            >

              
              <div
                onClick={() => toggleFAQ(index)}
                className="
                flex
                items-center
                justify-between
                px-[24px]
                h-[60px]
                cursor-pointer
                hover:bg-[#2E2E2E]
                transition
                duration-300
                "
              >
                <p
                  className="
                  text-white
                  text-[16px]
                  leading-[26px]
                  font-inter
                  font-medium
                  "
                >
                  {faq.question}
                </p>

                
                <img
                  src={openIndex === index ? removeIcon : addIcon}
                  alt="toggle"
                  className={`
                  w-[20px]
                  h-[20px]
                  flex-shrink-0
                  transition-transform
                  duration-300
                  ${openIndex === index ? "rotate-180" : "rotate-0"}
                  `}
                />
              </div>

              
              <div
                className={`
                grid
                transition-all
                duration-300
                ease-in-out
                ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
                `}
              >
                <div className="overflow-hidden">
                  <div
                    className="
                    px-[24px]
                    pb-[20px]
                    text-[#FFFFFF]
                    text-[15px]
                    leading-[24px]
                    font-inter
                    transform
                    transition-all
                    duration-300
                    "
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}