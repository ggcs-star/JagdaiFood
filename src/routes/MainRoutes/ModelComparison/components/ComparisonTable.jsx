import React from "react";
import { Container } from "../../../../components/Layout";

const tableData = [
  {
    aspect: "Ownership",
    fofo: [
      "Franchisee owns and operates his QSR franchise entirely",
      "Full staff and operation support will be given by Jagdai Foods",
    ],
    foco:
      "Franchisee owns the outlet, but operations are fully managed by Jagdai Foods.",
  },
  {
    aspect: "Operational control",
    fofo: [
      "The franchisee is responsible for day-to-day operations, staff management",
      "Consistent brand quality and standards are controlled by Jagdai Foods via centralized kitchen",
      "Jagdai Foods assists in staff recruitment and training",
    ],
    foco:
      "Jagdai Foods directly controls and manages the operations.",
  },
  {
    aspect: "Franchise fee & setup cost",
    fofo: "Same for both the models i.e ₹16 lac (including setup cost)",
    foco:
      "Same for both models (including setup cost) + working capital is additional",
  },
  {
    aspect: "Working capital investment",
    fofo:
      "Franchisee must invest month-on-month for rent, marketing, electricity, etc.",
    foco:
      "Total investment approx ₹40 lac including franchise fee, setup, working capital, marketing & electricity",
  },
  {
    aspect: "Franchise earning",
    fofo: [
      "Full sales revenue belongs to franchise",
      "Only 6% royalty to Jagdai Foods",
      "10% royalty from trolley sales",
      "10% royalty from internet kitchens",
      "10% royalty from Tiffin Box",
      "10% royalty from Gravy Mix",
    ],
    foco: [
      "5% of total revenue given to franchisee",
      "Remaining with company",
      "OR",
      "24% annual interest on investment",
      "Whichever is higher",
    ],
  },
  {
    aspect: "Margin on food",
    fofo: "55% margin on selling price",
    foco: "As above",
  },
  {
    aspect: "Food preparation",
    fofo:
      "Managed by Jagdai Foods, final serving done at outlet",
    foco:
      "Managed by Jagdai Foods, final serving done at outlet",
  },
  {
    aspect: "Management expertise",
    fofo:
      "No prior experience required. Jagdai provides training & support",
    foco: "-",
  },
  {
    aspect: "Revenue generation",
    fofo: "Franchise retains higher share of profits",
    foco:
      "Franchise earns 5% without day-to-day involvement",
  },
  {
    aspect: "Whitelabeling",
    fofo: "Possible",
    foco: "Not possible",
  },
  {
    aspect: "Earning potential illustration",
    fofo: [
      "300 orders/day @ ₹150 → ₹13.5L revenue",
      "55% margin → ₹7L gross",
      "After expenses → ₹4L net profit",
      "Extra ₹1L from add-ons → Total ₹5L/month",
    ],
    foco: [
      "300 orders/day → ₹13.5L revenue",
      "10% profit → ₹1.35L/month",
    ],
  },
  {
    aspect: "Capital guarantee (FOCO & FOFO)",
    fofo: [
      "Initial investment guaranteed",
      "Refund after 9 years (on closure)",
      "24% ROI OR 5% revenue (whichever higher)",
      "All assets transferred to franchisee on closure",
    ],
    foco: [
      "Franchise fee guaranteed only if setup via company",
      "Eligible after 9 years",
      "No refund before completion",
      "Assets remain company property",
    ],
  },
];

export default function ComparisonTable() {
  return (
    <Container className="mx-auto px-3 lg:px-0 flex items-center justify-between">

      <div className="w-full overflow-x-auto rounded-2xl border border-[#3a3a3a]">

        <table className="w-full text-sm text-left text-gray-300">

          {/* HEADER */}
          <thead className="bg-[#1f1f1f] text-xs uppercase">
            <tr>
              <th className="px-5 py-4 border-r border-[#3a3a3a] text-gray-400">
                Aspect
              </th>

              <th className="px-5 py-4 border-r border-[#3a3a3a] text-[#FDBD5B]">
                FOFO Model
              </th>

              <th className="px-5 py-4 text-[#60D186]">
                FOCO Model
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={`border-t border-[#2f2f2f] ${
                  index % 2 === 0 ? "bg-[#121212]" : "bg-[#1a1a1a]"
                }`}
              >
                {/* Aspect */}
                <td className="px-5 py-4 font-medium text-white border-r border-[#2f2f2f] align-top">
                  {row.aspect}
                </td>

                {/* FOFO */}
                <td className="px-5 py-4 border-r border-[#2f2f2f] align-top">
                  {Array.isArray(row.fofo) ? (
                    <ul className="space-y-2">
                      {row.fofo.map((item, i) => (
                        <li key={i}>- {item}</li>
                      ))}
                    </ul>
                  ) : (
                    row.fofo
                  )}
                </td>

                {/* FOCO */}
                <td className="px-5 py-4 align-top">
                  {Array.isArray(row.foco) ? (
                    <ul className="space-y-2">
                      {row.foco.map((item, i) => (
                        <li key={i}>- {item}</li>
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