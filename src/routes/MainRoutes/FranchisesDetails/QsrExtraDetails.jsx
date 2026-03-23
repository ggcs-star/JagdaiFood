import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "../../../components/Layout";

export default function QsrExtraDetails({ details }) {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Only render on QSR route
  if (location.pathname !== "/franchise-formats/qsr-restaurant-franchise") {
    return null;
  }

  return (
    <Container className="px-4">
      <section className="py-14">

        {/* Heading */}
        <div className="text-center pb-10">
          <p className="text-2xl mb-3">
            {details?.extraDetails?.label}
          </p>

          <h2 className="text-4xl md:text-5xl mb-5 font-bold">
            {details?.extraDetails?.fees}
            <span className="text-3xl">/- (+ GST)</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          className={`grid xl:grid-cols-${details?.extraDetails?.list?.length} gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 pb-10`}
        >
          {details?.extraDetails?.list?.map((item, i) => (
            <div
              key={i}
              className="bg-gray-200 rounded-3xl border-2 px-5 py-5"
            >
              <h3 className="text-2xl text-red-500 text-center">
                {item?.label}
              </h3>

              <h3 className="text-4xl text-gray-800 text-center">
                {item?.subTitle}
              </h3>

              <h3 className="text-base text-gray-800 text-center">
                {item?.desc}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="flex flex-col items-center text-center pt-8">
          <h5 className="text-2xl mb-5">
            {details?.extraDetails?.percent}
          </h5>

          <button
            onClick={() =>
              navigate("/earning-potential", {
                state: {
                  franchiseType: details?.franchiseType,
                },
              })
            }
            className="bg-red-500 text-white px-6 py-3 rounded-lg"
          >
            Calculate Your Monthly Earning Potential
          </button>
        </div>

        {/* Note */}
        <div className="text-center pt-8">
          <p className="text-lg text-red-100">
            {details?.extraDetails?.note}
          </p>
        </div>

      </section>
    </Container>
  );
}