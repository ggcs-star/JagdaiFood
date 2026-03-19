import React from "react";
import { P } from "../../../components/Typography";

export default function Hero({ details, slug }) {

  const paddingClass =
    slug === "internet-restaurants-franchise" ? " lg:pt-14" : "pt-14";

  return (
    <div className={`relative bg-black ${paddingClass}`}>

      <div className="lg:pt-16">
        <div className="text-center lg:py-0 py-10">

          <h1 className="px-3 lg:px-0 text-white text-3xl md:text-5xl font-bricolageSemiBold mb-2">
            {details?.title}
          </h1>

          <P className="px-3 lg:px-0 lg:w-[60%] mx-auto pt-4 text-gray-100">
            {details?.info}
          </P>

        </div>
      </div>

    </div>
  );
}