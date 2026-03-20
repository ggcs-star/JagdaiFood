import { Check } from "lucide-react";

export default function TrolleyFeaturesGrid() {
  const features = [
    "Compact and Mobile Setup",
    "No Location Constraint",
    "Ultra Modern Design",
  ];

  return (
    <div className="w-full">
      
      {/* Top 3 Items */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-[#2a2a2a]"
          >
            {/* Green Check Circle */}
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#60D186]">
              <Check className="w-4 h-4 text-black" strokeWidth={3} />
            </div>

            <p className="text-gray-300 font-bricolageMedium text-sm md:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Full Width Item */}
      <div className="flex justify-center">
        <div className="flex items-center justify-center gap-3 px-8 py-6 rounded-2xl bg-[#2a2a2a] w-full md:w-[60%]">
          
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#60D186]">
            <Check className="w-4 h-4 text-black" strokeWidth={3} />
          </div>

          <p className="text-gray-300 font-bricolageMedium text-sm md:text-base">
            Food Supply from Central Kitchen
          </p>
        </div>
      </div>

    </div>
  );
}