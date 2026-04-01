import React from "react";
import { Container } from "../../../../components/Layout";

const tableData = [
  {
    aspect: "Ownership",
    fofo: [
      "- Franchisee owns and operates his QSR franchise entirely",
      "- Full Staff and operation support will be given by Jagdai Foods",
    ],
    foco:
      "Franchisee owns the outlet, but operations are fully managed by Jagdai Foods.",
  },
  {
    aspect: "Operational control",
    fofo: [
      "- The franchisee is responsible for day-to-day operations, staff management",
      "- Consistent brand quality and standards are controlled by Jagdai Foods by managing centralized food delivery and preparation from central kitchen",
      "- Jagdai Foods will assist in staff recruitment and training",
    ],
    foco:
      "Jagdai Foods directly controls and manages the operations.",
  },
  {
    aspect: "Franchise fee & setup cost",
    fofo:
      "Same for both the models is Rs.16 lac (including set up cost)",
    foco:
      "Same for both the models (including set up cost) + working capital is additional",
  },
  {
    aspect: "Working capital investment",
    fofo:
      "The franchisee is required to invest month on month from day one, covering all working capital expenses such as rent, marketing, and electricity etc",
    foco:
      "Total investment- Rs.40 lac which includes Franchise Fee, setup cost, working capital including rent, marketing, and electricity, is to be provided by the franchisee to Jagdai Foods.",
  },
  {
    aspect: "Franchise earning",
    fofo: [
      "Full Sales revenue (billing) is with the franchise",
      "- 10% Royalty from Trolley attached to the outlet on Actual sales",
      "- 10% Royalty from Internet Kitchens attached to the outlet on Actual sales",
      "- 10% Royalty from Tiffin Box services sold from outlet on Actual sales",
      "- 10% Royalty from Gravy Mix sold from the outlet on Actual sales",
    ],
    foco: [
      "a) 5% of total sales revenue (billing) is given to franchise, rest remains with the Company from the date of outlet opening Not any other earning",
      "OR",
      "b) Interest @24% per annum on the invested amount",
      "a or b : whichever is higher",
    ],
  },
  {
    aspect: "Margin on food",
    fofo: "50% on the selling price of the menu items",
    foco: "As above",
  },
  {
    aspect: "Food preparation",
    fofo:
      "Food preparation and delivery will be managed by Jagdai Food, with the final step and serving done at the outlet",
    foco:
      "Food preparation and delivery will be managed by Jagdai Food, with the final step and serving done at the outlet",
  },
  {
    aspect: "Management expertise",
    fofo:
      "No Requirement of the franchisee to have prior experience. Jagdai Foods provides operational expertise and support, including staff training, for standardized performance",
    foco: "-",
  },
  {
    aspect: "Revenue generation",
    fofo: "Franchisee retains a higher share of profits",
    foco:
      "Franchisee enjoys 5% of billing without any involvement in day to day operations",
  },
  {
    aspect: "Whitelabeling",
    fofo: "Whitelabeling/own brand name is possible",
    foco: "Not possible",
  },
  {
    aspect: "Earning potential illustration",
    fofo: [
      "Assuming 300 daily orders at ₹150 each, the QSR can generate a monthly revenue of ₹13,50,000., With a 55% margin, the gross profit is approximately ₹7,00,000. After deducting operating expenses such as salary, rent, and marketing, totaling around ₹3,00,000, the net profit is approximately ₹4,00,000.",
      "Additionally, 10% royalties from products like Trolley, Internet Kitchen, and Tiffin Box contribute up to ₹1,00,000, bringing the total monthly profit to approximately ₹5,00,000.",
    ],
    foco: [
      "Assuming 300 daily orders at ₹150 each, the QSR can generate a monthly revenue of ₹13,50,000.",
      "The net profit is 10% of the revenue which is approx ₹1,35,000",
    ],
  },
  {
    aspect: "Capital guarantee provisions (FOCO & FOFO Models)",
    fofo: [
      "- The Company guarantees the Franchise Fee and the Setup Cost only if the Setup Cost is paid to the Company and the complete setup is executed by the Company. If the Franchisee undertakes any part of the setup independently, only the Franchise Fee shall be guaranteed.",
      "- The capital guarantee becomes eligible only after nine (9) years and only upon permanent closure of the Unit. No refund shall be made prior to completion of this period.",
      "- Upon closure, all infrastructure, fixed assets, movable and immovable assets installed by the Company shall be taken over by the Company and shall remain the property of the Company.",
    ],
    foco: [
      "- The entire lump-sum Initial Capital Investment paid at the commencement of the Agreement is capital guaranteed.",
      "- Refund of the Initial Capital Investment shall be permitted only after nine (9) years and only upon permanent closure of the Unit.",
      "- During the Unit’s operations, the Franchisee shall receive 24% annual ROI on the Initial Capital Investment or 5% of the total billing, whichever is higher.",
      "- At closure, all infrastructure, fixed assets, movable and immovable assets installed for the Unit shall be taken over by the Company and shall remain the property of the Company. The Company shall thereafter refund the Initial Capital Investment, after adjusting any outstanding dues.",
    ],
    
  },
];

export default function ComparisonTable() {
  return (
    <Container className="mx-auto px-3 lg:px-0">

      <div className="w-full overflow-x-auto rounded-2xl border border-[#3a3a3a]">

        <table className="w-full text-sm text-left text-gray-300">

          <thead className="bg-[#1c1c1c]">
            <tr>
              <th className="px-6 py-4 border-r border-[#3a3a3a] text-gray-400">
                Aspect
              </th>
              <th className="px-6 py-4 border-r border-[#3a3a3a] text-[#FDBD5B]">
                FOFO Model
              </th>
              <th className="px-6 py-4 text-[#60D186]">
                FOCO Model
              </th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`border-t border-[#2a2a2a] ${
                  index % 2 === 0 ? "bg-[#0f0f0f]" : "bg-[#1a1a1a]"
                }`}
              >
                <td className="px-6 py-6 text-white border-r border-[#2a2a2a] align-top">
                  {row.aspect}
                </td>

                <td className="px-6 py-6 border-r border-[#2a2a2a] align-top">
                  {Array.isArray(row.fofo) ? (
                    <ul className="space-y-3">
                      {row.fofo.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          {/* <span className="text-[#FDBD5B]">•</span> */}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    row.fofo
                  )}
                </td>

                <td className="px-6 py-6 align-top">
                  {Array.isArray(row.foco) ? (
                    <ul className="space-y-3">
                    {row.foco.map((item, i) => (
  <li
    key={i}
    className={`flex gap-2 ${
      item.trim() === "OR" ? "justify-center font-semibold text-gray-400" : ""
    }`}
  >
    <span className={item.trim() === "OR" ? "text-center w-full" : ""}>
      {item}
    </span>
  </li>
))}
                    </ul>
                  ) : (
                    row.foco
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </Container>
  );
}