import React from "react";

export default function DisclaimerPage() {
  const sections = [
    {
      title: "Accuracy of Information ",
      content:
        "Jagdai Foods strives to provide accurate and up-to-date information on this Website. However, we make no warranties or representations regarding the accuracy, completeness, or reliability of the information provided. Users are advised to independently verify the information before relying on it.",
    },
    {
      title: "No Professional Advice ",
      content:
        "The content on this Website is for informational purposes only and should not be construed as professional advice. Jagdai Foods is not responsible for any decisions made based on the information provided on the Website. Users are encouraged to seek professional advice relevant to their specific circumstances.",
    },
    {
      title: "Third-Party Links",
      content:
        "This Jagdai Foods website may contain links to third-party websites. Jagdai Foods has no control over the content, accuracy, or availability of these external sites and is not responsible for any damages or losses arising from the use of such links. The inclusion of any third-party link does not imply endorsement by Jagdai Foods.",
    },
    {
      title: "Limitation of Liability",
      content:
        "Jagdai Foods, its affiliates, partners, employees, or agents will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website. This includes but is not limited to loss or damage to data, profits, or business interruption.",
    },
    {
      title: "Changes and Modifications",
      content:
        "Jagdai Foods reserves the right to modify, suspend, or discontinue any aspect of the Website at any time without prior notice. We do not guarantee that the Website will be error-free or uninterrupted.",
    },
    {
      title: "Privacy and Security",
      content:
        "While Jagdai Foods takes reasonable measures to protect user data, we cannot guarantee the security of information transmitted over the Internet. Users are encouraged to review our Privacy Policy for details on data collection, storage, and usage practices.",
    },
    {
      title: "Acceptance of Terms",
      content:
        "By using this Website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer. Jagdai Foods reserves the right to update or change these terms at any time without notice.",
    },
  ];

  return (
    <div className="w-full bg-black min-h-screen pt-[70px] sm:pt-[90px] md:pt-[100px] pb-[70px] sm:pb-[100px] md:pb-[120px] px-[16px] sm:px-[20px] md:px-[30px]">
      
      <div className="max-w-[1000px] mx-auto text-center mb-[35px] sm:mb-[50px] md:mb-[60px]">
        <h1 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-bricolageSemiBold text-[#34D399] leading-tight">
          Disclaimer
        </h1>

        <p className="text-gray-400 mt-[10px] text-[13px] sm:text-[14px] md:text-[15px] max-w-[800px] mx-auto leading-[22px] sm:leading-[24px]">
          Welcome to the Jagdai Foods Digital Marketing website ("Website").
          By accessing and using this Website, you agree to comply with and be
          bound by the following disclaimer. Please read the disclaimer
          carefully before using our services.
        </p>
      </div>

      <div className="max-w-[1000px] mx-auto space-y-[18px] sm:space-y-[22px] md:space-y-[26px]">
        {sections.map((section, index) => (
          <div
            key={index}
            className="rounded-[14px] sm:rounded-[16px] overflow-hidden border border-[#3a3a3a]"
          >
            <div className="bg-[#242424] px-[16px] sm:px-[20px] md:px-[26px] lg:px-[30px] py-[12px] sm:py-[14px]">
              <h3 className="text-white font-bricolageSemiBold text-[15px] sm:text-[18px] md:text-[20px]">
                {section.title} :
              </h3>
            </div>

            <div className="bg-[#2f2f2f] px-[16px] sm:px-[20px] md:px-[26px] lg:px-[30px] py-[14px] sm:py-[18px] md:py-[20px]">
              <p className="text-gray-200 text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[24px] md:leading-[26px]">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}