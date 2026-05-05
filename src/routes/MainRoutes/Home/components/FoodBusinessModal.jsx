import React from "react";
import { IoClose } from "react-icons/io5";

// images
import img1 from "../../../../assets/home/businessStyle/image1.png";
import img2 from "../../../../assets/home/businessStyle/image2.png";
import img3 from "../../../../assets/home/businessStyle/image3.png";
import img4 from "../../../../assets/home/businessStyle/image4.png";

export default function FoodBusinessModal({ onClose }) {
  const images = [img1, img2, img3, img4];

  return (
    <div className="fixed bottom-6 left-6 z-60">

      {/* GLASS CARD */}
      <div
        className="
          relative w-[220px] rounded-2xl
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        "
      >
        {/* ✅ GRADIENT OVERLAY (WHITE → DARK) */}
        {/* <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.7) 100%)",
          }}
        /> */}

        {/* CONTENT */}
        <div className="relative p-3">

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
              cursor-pointer
              absolute -top-3 -right-3 
              bg-[#FDBD5B] text-black 
              rounded-full p-1.5 text-sm 
              shadow-md z-60
            "
          >
            <IoClose />
          </button>

          {/* HEADING */}
          <h2 className="text-white text-center text-md font-bricolageSemiBold mb-3 leading-tight">
            Choose Your Food <br /> Business Style
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-2">
            {images.map((img, index) => (
              <div
                key={index}
                className="
                  rounded-lg overflow-hidden
                  bg-white/10
                  backdrop-blur-md
                  border border-white/10
                "
              >
                <img
                  src={img}
                  alt={`style-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}