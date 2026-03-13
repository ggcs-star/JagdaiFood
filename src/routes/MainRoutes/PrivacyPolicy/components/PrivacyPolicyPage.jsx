import React from "react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information Collection :",
      description:
        "We collect information to enhance our services, which may include :",
      points: [
        "Personal Information : Your name, contact details, job title, and affiliations are gathered through registrations, newsletter subscriptions, and service usage.",
        "Financial Information : For transactions, we collect financial data (e.g., credit card information) securely, without retention on our servers.",
        "Technical Information : We automatically collect technical details (IP addresses, browser specifications, device information) to optimize website functionality.",
      ],
    },
    {
      title: "Purpose of Information Use :",
      description: "We use your information for :",
      points: [
        "Service Fulfillment : Personal information is used to respond to inquiries, provide customer support, and fulfill service requests.",
        "Marketing and Promotions : With your explicit consent, we send marketing communications and promotional content about our products, services, and industry insights.",
        "Analytics and Enhancement : Non-personal information is analyzed to understand user behavior, preferences, and trends, allowing continuous refinement of our website and services.",
      ],
    },
    {
      title: "Information Sharing and Disclosure :",
      description: "We may share your information : ",
      points: [
        "Third-Party Service Providers: Collaboration with providers enhances service delivery and functionality.",
        "Legal Compliance : Information may be disclosed to comply with applicable laws, regulations, or legal procedures.",
        "Business Transfers : In mergers, acquisitions, or asset sales, your information may be transferred to the acquiring entity.",
      ],
    },
    {
      title: "Cookies and Tracking Technologies :",
      description: "We use cookies and similar technologies :",
      points: [
        "Cookies : These help gather insights into browsing behavior, preferences, and session data for a more personalized user experience.",
        "Opt-Out : You can manage cookie preferences through browser settings, though disabling cookies may impact certain website functionalities.",
      ],
    },
    {
      title: "Data Security :",
      description:
        "We implement security measures to protect your information :",
      points: [
        "Security Protocols : Industry-standard measures prevent unauthorized access, disclosure, alteration, and destruction.",
        "Encryption : Sensitive data, including financial information, is encrypted for secure transmission and storage.",
      ],
    },
    {
      title: "Your Rights :",
      description: "You have rights regarding your personal information :",
      points: [
        "Access and Correction : Contact us to access and correct your personal information.",
        "Opt-Out : Unsubscribe from marketing communications by following the instructions in our emails or contacting us directly.",
      ],
    },
    {
      title: "Children's Privacy :",
      points: [
        "Our services are not intended for individuals under the age of 16. We do not knowingly collect or process personal information from minors without parental consent.",
      ],
    },
    {
      title: "Changes to the Privacy Policy :",
      points: [
        "We reserve the right to update this Privacy Policy periodically. Material changes will be communicated through our website.",
      ],
    },
    {
      title: "Contact Information :",
      points: [
        "For inquiries or concerns about our Privacy Policy, contact us at contact@ggcs.com.",
      ],
    },
  ];

  return (
    <div className="w-full bg-black min-h-screen pt-[70px] sm:pt-[90px] md:pt-[100px] pb-[70px] sm:pb-[100px] md:pb-[120px] px-[16px] sm:px-[24px] md:px-[30px]">
      <div className="max-w-[1000px] mx-auto text-center mb-[40px] sm:mb-[50px] md:mb-[60px]">
        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] font-bricolageSemiBold text-[#34D399] leading-tight">
          Privacy Policy
        </h1>

        <p className="text-gray-400 mt-[8px] sm:mt-[10px] text-[13px] sm:text-[14px] md:text-[15px] max-w-[700px] mx-auto">
          This Privacy Policy explains how Jagdai Foods collects, uses, and
          protects your information.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto space-y-[18px] sm:space-y-[22px] md:space-y-[26px]">
        {sections.map((section, index) => (
          <div
            key={index}
            className="rounded-[14px] sm:rounded-[16px] overflow-hidden border border-[#3a3a3a]"
          >
            <div className="bg-[#242424] px-[16px] sm:px-[20px] md:px-[26px] lg:px-[30px] py-[12px] sm:py-[14px]">
              <h3 className="text-white font-bricolageSemiBold text-[16px] sm:text-[18px] md:text-[20px]">
                {section.title}
              </h3>
            </div>

            <div className="bg-[#2f2f2f] px-[16px] sm:px-[20px] md:px-[26px] lg:px-[30px] py-[16px] sm:py-[18px] md:py-[20px]">
              {section.description && (
                <p className="text-gray-200 text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px] mb-[10px] font-semibold">
                  {section.description}
                </p>
              )}

              <ul className="space-y-[6px] sm:space-y-[8px]">
                {section.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-[10px]">
                    <span className="mt-[8px] w-[6px] h-[6px] sm:w-[7px] sm:h-[7px] rounded-full bg-[#34D399] shrink-0"></span>

                    <span className="flex-1 text-gray-200 text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
