import React from "react";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing or using the services provided by Jagdai Foods, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our services.",
    },
    {
      title: "Client Responsibilities",
      content:
        "Clients must provide accurate and timely information necessary for the delivery of services. Jagdai Foods is not responsible for any delays or deficiencies in service resulting from incomplete or inaccurate client-provided information.",
    },
    {
      title: "Payments and Fees",
      content:
        "Clients agree to pay Jagdai Foods the fees specified in the service agreement. Payment terms, including due dates and acceptable forms of payment, will be outlined in the agreement. Failure to make timely payments may result in the suspension or termination of services.",
    },
    {
      title: "Intellectual Property",
      content:
        "All intellectual property developed or provided by Jagdai Foods in the course of providing services, including but not limited to content, designs, and software, shall remain the property of Jagdai Foods unless otherwise agreed upon in writing.",
    },
    {
      title: "Termination",
      content:
        "Either party may terminate the service agreement with written notice if the other party breaches a material term of the agreement. Jagdai Foods reserves the right to terminate services immediately if the client engages in any illegal or unethical activities.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Jagdai Foods shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the services provided. Jagdai Foods's total liability shall be limited to the amount paid by the client for the specific services in question.",
    },
    {
      title: "Governing Law",
      content:
        "These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Ahmedabad, Gujarat.",
    },
    {
      title: "Changes to Terms and Conditions",
      content:
        "Jagdai Foods reserves the right to update or modify these terms and conditions at any time without prior notice. Clients are encouraged to review the terms regularly. Continued use of Jagdai Foods services after any such changes constitutes acceptance of the updated terms.",
    },
  ];

  return (
    <div className="w-full bg-black min-h-screen pt-[80px] sm:pt-[90px] md:pt-[100px] pb-[80px] sm:pb-[100px] md:pb-[120px] px-[16px] sm:px-[24px] md:px-[30px]">
      <div className="max-w-[1000px] mx-auto text-center mb-[40px] sm:mb-[50px] md:mb-[60px]">
        <h1 className="text-[30px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-bricolageSemiBold text-[#34D399] leading-tight">
          Terms & Conditions
        </h1>

        <p className="text-gray-400 mt-[8px] sm:mt-[10px] text-[13px] sm:text-[14px] md:text-[15px]">
          These Terms and Conditions were last updated on December 12, 2023.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto space-y-[18px] sm:space-y-[22px] md:space-y-[26px]">
        {sections.map((item, index) => (
          <div
            key={index}
            className="rounded-[14px] sm:rounded-[16px] overflow-hidden border border-[#3a3a3a]"
          >
            <div className="bg-[#242424] px-[18px] sm:px-[22px] md:px-[26px] lg:px-[30px] py-[14px] sm:py-[16px]">
              <h3 className="text-white font-bricolageSemiBold text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px]">
                {item.title} :
              </h3>
            </div>

            <div className="bg-[#2f2f2f] px-[18px] sm:px-[22px] md:px-[26px] lg:px-[30px] py-[16px] sm:py-[18px] md:py-[20px]">
              <p className="text-gray-200 text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
