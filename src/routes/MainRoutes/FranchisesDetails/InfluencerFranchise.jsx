import React from "react";
import { Check } from "lucide-react";
import FranchiseCTA from "./FranchiseCTA";

const InfluencerFranchise = () => {
  const plans = [
    {
      id: 1,
      title: "Starter Influencer",
      subtitle: "Plan 1",
      fee: "₹2,000/month",
      earnings: "Get 5% on total billing",
      bonus:
        "Full refund of ₹2,000 once you achieve ₹20,000/month in food business",
      specialOffer:
        "Enroll now for just ₹200/month (Limited Time)",
    },
    {
      id: 2,
      title: "Pro Influencer",
      subtitle: "Plan 2",
      fee: "₹5,000/month",
      earnings: "Get 10% on total billing",
      bonus:
        "Full refund of ₹5,000 once you achieve ₹50,000/month in food business",
    },
  ];

  const highlights = [
    "Zero Risk",
    "Earn from Day One",
    "Promote JF's All Foods Brands along with 20 Crore Product and Services, Cashback & More",
  ];

  return (
    <section className="bg-black py-8 lg:py-16 px-4 flex flex-col items-center">

      {/* PLAN CARDS */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">

        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] rounded-2xl p-3 lg:p-8 text-white"
          >
            <p className="text-green-400 font-semibold mb-1">
              {plan.subtitle}
            </p>

            <h2 className="text-3xl font-bricolageBold mb-6">
              {plan.title}
            </h2>

            <div className="space-y-4 text-sm text-gray-300">

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400">
                  <Check className="w-3 h-3 text-black" strokeWidth={3} />
                </div>
                Fee: {plan.fee}
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400">
                  <Check className="w-3 h-3 text-black" strokeWidth={3} />
                </div>
                Earnings: {plan.earnings}
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400">
                  <Check className="w-3 h-3 text-black" strokeWidth={3} />
                </div>
                Bonus: {plan.bonus}
              </div>

              {plan.specialOffer && (
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-400">
                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                  </div>
                  Special Offer: {plan.specialOffer}
                </div>
              )}

            </div>
          </div>
        ))}

      </div>

      {/* HIGHLIGHTS */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl w-full mt-10">

        <div className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-white rounded-xl py-6 text-center font-semibold text-lg">
          {highlights[0]}
        </div>

        <div className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-white rounded-xl py-6 text-center font-semibold text-lg">
          {highlights[1]}
        </div>

      </div>

      <div className="max-w-6xl w-full mt-6">
        <div className="bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] text-white rounded-xl py-6 text-center font-semibold text-lg px-6">
          {highlights[2]}
        </div>
      </div>

      <FranchiseCTA/>

    </section>
  );
};

export default InfluencerFranchise;