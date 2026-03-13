import React from "react";

const InfluencerFranchise = () => {
    // Static Data
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
        <div className="min-h-screen bg-black flex flex-col items-center p-6">
            {/* Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-white rounded-2xl shadow-xl"
                    >
                        <div className="p-2">
                            <h2 className="text-center font-semibold text-lg text-gray-600">
                            {plan.subtitle}
                        </h2>
                        <h3 className="text-2xl font-bold text-red-500 text-center">
                            {plan.title}
                        </h3>
                        </div>
                        <hr className="border-t-4 border-green-500 w-full my-3" />
                        <div className="p-4">
                        <ul className="space-y-3 text-gray-700">
                            <li>• Fee: {plan.fee}</li>
                            <li>• Earnings: {plan.earnings}</li>
                            <li>
                                • <b>Bonus:</b> {plan.bonus}
                            </li>
                            {plan.specialOffer && (
                                <li className="text-sm text-green-500 font-semibold">
                                    • Special Offer: {plan.specialOffer}
                                </li>
                            )}
                        </ul>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full mt-10">
  {highlights.map((item, index) => (
    <div
      key={index}
      className="bg-white text-black font-semibold text-center p-4 rounded-lg shadow-md h-28 flex items-center justify-center text-lg font-bricolageBold"
    >
      {item}
    </div>
  ))}
</div>

        </div>
    );
};

export default InfluencerFranchise;
