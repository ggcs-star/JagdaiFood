import { Check } from "lucide-react";

export default function FeaturePillsTempo() {
  const features = [
    "Food Tempo",
    "In-Built Freezer",
    "Ultra Modern Design",
    "No Location Constraint",
    "Food Supply from Central Kitchen",
  ];

  return (
    <div className="w-full flex justify-center items-center bg-black py-10">
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 rounded-full 
                       bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] 
                       text-white text-sm font-medium 
                       shadow-md hover:scale-105 transition-all duration-300"
          >
            <span className="bg-green-500 p-1 rounded-full flex items-center justify-center">
              <Check size={14} className="text-black" />
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}