import React from "react";
import image from "../../../../assets/home/FoodTrolleySection/Food_Tempo.png";
import image1 from "../../../../assets/home/FoodTrolleySection/Food_Tempo2.png";

export default function FoodTrolleyFranchise() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-10">
      {/* MAIN CARD */}
      <div className="w-full max-w-7xl rounded-3xl bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] p-8 md:p-12 border border-gray-800 shadow-[0_0_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
        
        <div
          className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[500px] h-[250px]
          bg-[radial-gradient(circle,rgba(34,197,94,0.25),transparent_70%)]
          blur-2xl"
        ></div>

     
        <div className="text-center mb-10 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Food Trolley/Tempo Franchise
          </h1>

          <p className="text-gray-400 mt-2">
            A smart, mobile food business — not just a cart.
          </p>

          <p className="relative inline-block text-yellow-400 font-semibold mt-3 mb-3 text-xl">
            Starting at ₹2.7 Lakhs + GST
            {/* GREEN UNDERLINE */}
            <span className="absolute left-40 -translate-x-1/2 bottom-[-6px] w-[40%] h-[3px] bg-green-400 rounded-full"></span>
          </p>

          <p className="text-gray-400 text-sm">
            with earning potential up to ₹90,000 per month
          </p>
        </div>

      
        <div className="relative flex items-center justify-center">
          {/* 🔥 CENTER GLOW (COVERS BOTH IMAGES) */}
          <div
            className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 
            w-[650px] h-[400px]
            bg-[radial-gradient(circle,rgba(34,197,94,0.5),rgba(34,197,94,0.2)_40%,transparent_75%)]
            blur-3xl z-0"
          ></div>

          
          <div
            className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 
            w-[450px] h-[250px]
            bg-green-400/50 blur-[100px] rounded-full z-0"
          ></div>

          
          <div className="hidden md:flex flex-col gap-5 absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-10">
            
            <div
              className="relative px-5 py-4 rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md left-5
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>

              <p className="pl-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                Fully mobile setup — operate at high-demand locations
              </p>
            </div>

        
            <div
              className="relative px-5 py-4 rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 right-15
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pl-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                Start earning from day one with a daily cash flow model
              </p>
            </div>

            
            <div
              className="relative px-5 py-4 rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 right-15
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pl-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                No kitchen required – plug-and-play setup
              </p>
            </div>

            <div
              className="relative px-5 py-4 rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 right-15
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pl-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                Compact, modern, and attractive design
              </p>
            </div>

            
            <div
              className="relative px-5 py-4 rounded-l-2xl rounded-r-none text-sm max-w-[300px]
bg-[linear-gradient(100deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-5 left-5
border-l border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute left-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pl-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px]">
                Centralized kitchen supply for consistent quality
              </p>
            </div>
          </div>

          <div className="relative z-10 pb-25 flex items-end justify-center me-20">
            
            <img
              src={image1}
              alt="trolley box"
              style={{ height: "500px", paddingTop: "110px" }}
              className="w-[400px] md:w-[400px] 
               z-20 
               translate-x-[20px]  
               translate-y-[10px]
              drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />

      
            <img
              src={image}
              alt="tempo"
              style={{ height: "500px", paddingTop: "100px" }}
              className="w-[300px] md:w-[360px] pb-4
               z-10 
               -ml-[80px] 
              drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
          </div>

         
          <div className="hidden md:flex flex-col gap-5 absolute right-0 top-1/2 -translate-y-1/2 z-10 mr-10">
           
            <div
              className="relative px-5 py-4 rounded-r-2xl rounded-l-none text-sm max-w-[300px]
  bg-gradient-to-l from-[#3a3a3a] to-transparent backdrop-blur-md right-2
  border-r border-t border-b border-gray-500/20 right-5
  shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                In-built freezer / hotpot <br></br>system
              </p>
            </div>

            
            <div
              className="relative px-5 py-4 rounded-r-2xl rounded-l-none text-sm max-w-[300px]
bg-[linear-gradient(283deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 left-15
border-r border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                Easy to relocate based on demand and season
              </p>
            </div>

          
            <div
              className="relative px-5 py-4 rounded-r-2xl rounded-l-none text-sm max-w-[300px]
bg-[linear-gradient(283deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 left-15
border-r border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                Expand into catering, events & bulk orders
              </p>
            </div>

          
            <div
              className="relative px-5 py-4 rounded-r-2xl rounded-l-none text-sm max-w-[300px]
bg-[linear-gradient(283deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7 left-15
border-r border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                Earn 9% ROI or 5% of total billing (whichever is higher)
              </p>
            </div>

          
            <div
              className="relative px-5 py-4 rounded-r-2xl rounded-l-none text-sm max-w-[300px]
bg-[linear-gradient(283deg,#505050,rgba(38,38,38,0))]
backdrop-blur-md mt-7  right-5
border-r border-t border-b border-white/10
shadow-[0_0_30px_rgba(255,255,255,0.08)]"
            >
              <span className="absolute right-0 top-3 bottom-3 w-[3px] bg-orange-400 rounded"></span>
              <p className="pr-4 text-[18px] leading-[24px] font-medium text-white/90 tracking-[0.2px] text-right">
                Profit structure <br />
                up to 35%
              </p>
            </div>
          </div>
        </div>

      
        <div className="flex justify-center mt-12 relative z-10">
          <div
            className="relative px-10 py-6 rounded-xl
    bg-[linear-gradient(180deg,#505050,rgba(38,38,38,0))]
    backdrop-blur-md
    border border-white/10
    shadow-[0_0_30px_rgba(255,255,255,0.08)]
    text-center"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[4px] bg-yellow-400 rounded-full"></span>

            <p className="text-[18px] leading-[24px] font-medium text-white">
              Estimated ROI:{" "}
              <span className="text-yellow-400 font-medium">30%+ annually</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
