import React, { useState, useEffect, useRef } from "react";
import QsrEarnings from "./QsrEarnings";
import FoodTrolleyEarnings from "./FoodTrolleyEarnings";
import FoodTempoEarnings from "./FoodTempoEarnings";
import InternetRestaurantEarnings from "./InternetRestaurantEarnings";

const tabs = [
  { id: "qsr", label: "QSR" },
  { id: "trolley", label: "Food Trolley" },
  { id: "tempo", label: "Food Tempo (FOFO Model)" },
  { id: "internet", label: "Internet Restaurant" },
];

const FranchiseTabs = () => {
  // ✅ Initialize from localStorage (NO flicker)
  const [activeTab, setActiveTab] = useState(() => {
    const saved = localStorage.getItem("activeFranchiseTab");
    return tabs.some((t) => t.id === saved) ? saved : "qsr";
  });

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const containerRef = useRef(null);
  const tabRefs = useRef([]);

  // ✅ Save active tab
  useEffect(() => {
    localStorage.setItem("activeFranchiseTab", activeTab);
  }, [activeTab]);

  // ✅ Move sliding indicator
  useEffect(() => {
    const index = tabs.findIndex((t) => t.id === activeTab);
    const currentTab = tabRefs.current[index];

    if (currentTab && containerRef.current) {
      const { offsetLeft, offsetWidth } = currentTab;

      setIndicatorStyle({
        transform: `translateX(${offsetLeft}px)`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeTab]);

  const renderComponent = () => {
    switch (activeTab) {
      case "qsr":
        return <QsrEarnings />;
      case "trolley":
        return <FoodTrolleyEarnings />;
      case "tempo":
        return <FoodTempoEarnings />;
      case "internet":
        return <InternetRestaurantEarnings />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white">

      {/* ✅ Sticky Tabs */}
      <div className="sticky top-16 z-50 py-4">
        <div className="max-w-7xl mx-auto px-4">

          <div
            ref={containerRef}
            className="relative flex w-full bg-[#111] border border-gray-700 rounded-xl overflow-hidden"
          >
            {/* ✅ Animated Sliding Background */}
            <div
              className="absolute top-0 left-0 h-full bg-[#f4b860] rounded-xl transition-all duration-300 ease-in-out"
              style={indicatorStyle}
            />

            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => setActiveTab(tab.id)}
                className={`relative z-10 flex-1 text-center px-6 py-2 text-sm md:text-base transition-all duration-300 whitespace-nowrap font-bricolageBold
                  ${
                    activeTab === tab.id
                      ? "text-black font-extrabold"
                      : "text-gray-300 hover:text-white"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ✅ Content */}
      <div className="mt-10 px-4 max-w-7xl mx-auto">
        {renderComponent()}
      </div>
    </div>
  );
};

export default FranchiseTabs;