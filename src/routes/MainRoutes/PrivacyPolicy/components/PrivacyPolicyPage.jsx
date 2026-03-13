import React from "react";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information Collection",
      points: [
        "Personal Information: Your name, contact details, job title, and affiliations may be collected through registrations and service usage.",
        "Financial Information: For transactions we collect payment data securely without storing sensitive details on our servers.",
        "Technical Information: IP address, browser details, and device information may be collected to improve website functionality.",
      ],
    },
    {
      title: "Purpose of Information Use",
      points: [
        "Service Fulfillment: Information is used to respond to inquiries and provide customer support.",
        "Marketing and Promotions: With your consent we may send promotional updates or service announcements.",
        "Analytics and Improvement: Non-personal data helps us understand user behavior and improve services.",
      ],
    },
    {
      title: "Data Protection",
      points: [
        "We implement security measures to protect your personal information from unauthorized access.",
        "Sensitive information is encrypted during transmission.",
        "Only authorized personnel have access to confidential data.",
      ],
    },
    {
      title: "Third Party Sharing",
      points: [
        "We do not sell or rent your personal information to third parties.",
        "Data may be shared with trusted partners strictly for operational purposes.",
        "All partners must comply with strict confidentiality obligations.",
      ],
    },
    {
      title: "Your Rights",
      points: [
        "You may request access to your stored personal data.",
        "You can request correction or deletion of inaccurate information.",
        "You may opt out of marketing communications at any time.",
      ],
    },
  ];

  return (
    <div className="w-full bg-black min-h-screen pt-[90px] pb-[120px] px-[16px] sm:px-[24px] md:px-[30px]">

      <div className="max-w-[1000px] mx-auto text-center mb-[50px] md:mb-[60px]">
        <h1 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bricolageSemiBold text-[#34D399]">
          Privacy Policy
        </h1>

        <p className="text-gray-400 mt-[10px] text-[14px] md:text-[15px]">
          This Privacy Policy explains how Jagdai Foods collects, uses, and protects your information.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto space-y-[22px] md:space-y-[26px]">

        {sections.map((section, index) => (
          <div
            key={index}
            className="rounded-[16px] overflow-hidden border border-[#3a3a3a]"
          >

            <div className="bg-[#242424] px-[20px] md:px-[26px] lg:px-[30px] py-[14px]">
              <h3 className="text-white font-bricolageSemiBold text-[18px] md:text-[20px]">
                {section.title}
              </h3>
            </div>

            <div className="bg-[#2f2f2f] px-[20px] md:px-[26px] lg:px-[30px] py-[20px]">

              <ul className="space-y-[10px]">
                {section.points.map((point, i) => (
                  <li key={i} className="flex gap-[10px] items-start">

                    <span className="mt-[6px] w-[8px] h-[8px] rounded-full bg-[#34D399] shrink-0"></span>

                    <p className="text-gray-300 text-[14px] md:text-[15px] leading-[24px]">
                      {point}
                    </p>

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