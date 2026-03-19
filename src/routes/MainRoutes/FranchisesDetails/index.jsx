import React, { useEffect, useState } from "react";
import {
  launcher,
  qsrFranchise,
  internet,
  trolleyFranchise,
  foodindustry,
  fofo,
  foco,
  whitelisting,
} from "../../../assets";

import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../../components/Layout";
import { franchise } from "../../../db";
import { H3, H5, P } from "../../../components/Typography";
import Hero from "./hero";
import { ApplyButton } from "../../../components/Button";
import InfluencerFranchise from "./InfluencerFranchise";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FranchiseCTA1 from "./FranchiseCTA1";
import QsrShowcase from "./QsrShowcase";
import RevenueOpportunitiesqsr from "./RevenueOpportunities";
import BenefitsSectionqsr from "./BenefitsSectionqsr";
import CloudKitchenIntro from "./CloudKitchenIntro";
import FranchiseModelsInternet from "./FranchiseModelsInternet";
import InternetRestaurantBenefits from "./InternetRestaurantBenefits";
import FoodTrolleyIntro from "./FoodTrolleyIntro";
import FoodTrolleySection from "./FoodTrolleySection";
import FocoAdvantages from "./FocoAdvantages";
import FoodTempoIntro from "./FoodTempoIntro";
import TempoAdvantages from "./TempoAdvantages";
import WhyFoodTempo from "./WhyFoodTempo";
import FocoEarningSectionTempo from "./FocoEarningSectionTempo";
import FoodCourtIntro from "./FoodCourtIntro";
import FoodCourtBenefits from "./FoodCourtBenefits";
import FoodCourtInfo from "./FoodCourtInfo";

/* ---------------- DESC COMPONENT ---------------- */

const Desc = ({ details, slug }) => {
  if (!details) return null;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="bg-black py-8 lg:py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="rounded-3xl bg-gradient-to-r from-[#1f1f1f] via-[#2a2a2a] to-[#6a5434] grid lg:grid-cols-[60%_40%] gap-10 items-stretch overflow-hidden">

          {/* LEFT CONTENT */}
          <div className="p-3 lg:p-10">
            <h2 className="font-bricolageRegular text-3xl lg:text-4xl text-white mb-6 leading-snug">
              Benefits of joining our <br />
              <span>{details?.title} Business</span>
            </h2>

            <ul className="space-y-4">
              {details?.benefits?.details?.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-200 text-base lg:text-lg"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 min-w-[24px] min-h-[24px] bg-[#FDBD5B] text-black rounded-full text-sm font-bold mt-1">
                    ✓
                  </span>

                  <p className="leading-relaxed">
                    {item?.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex lg:items-end lg:justify-end relative overflow-hidden">
            <img
              src={details?.largeImage}
              alt="Franchise"
              className="object-contain w-full"
              style={{
                width: isMobile
                  ? "100%" // ✅ force full width on mobile
                  : details?.imageConfig?.width || "520px",

                height: details?.imageConfig?.height || "auto",

                marginRight: isMobile
                  ? "0px"
                  : details?.imageConfig?.right || "0px",

                transform: `translateY(${isMobile
                  ? details?.imageConfig?.mobileBottom || "0px"
                  : details?.imageConfig?.bottom || "0px"
                  })`,
              }}
            />
          </div>

        </div>

        {/* BENEFITS GRID */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
          {details?.benefits?.list?.map((item, i) => (
            <div
              key={i}
              className="bg-[#2b2b2b] rounded-2xl p-6 text-center flex items-center justify-center min-h-[100px]"
            >
              <h3 className="font-bricolageRegular text-white text-lg lg:text-xl">
                {item?.label}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ---------------- MAIN PAGE ---------------- */

function FranchisesDetails() {

  const navigate = useNavigate();
  const { slug } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = franchise?.find((item) => item?.slug === slug);
    setDetails(data || {});
  }, [slug]);

  const showAllFormats =
    slug === "qsr-restaurant-franchise" ||
    slug === "internet-restaurants-franchise";

  /* ---------------- Influencer Page ---------------- */

  if (slug === "influencer-franchise") {
    return (
      <>
        <Breadcrumbs
          titleMap={{
            "/franchise-formats": "Franchise Formats",
            "/franchise-formats/influencer-franchise": "Influencer Franchise",
          }}
                  className="pt-28 bg-black"

        />

        <Hero details={details} slug={slug} />

        <InfluencerFranchise />
      </>
    );
  }

  /* ---------------- NORMAL PAGE ---------------- */

  return (
    <div className="lg:w-[99vw] w-screen pt-20">

      <Breadcrumbs
        titleMap={{
          "/franchise-formats": "Franchise Formats",
          "/franchise-formats/qsr-restaurant-franchise": "QSR Franchise",
          "/franchise-formats/internet-restaurants-franchise": "Internet Restaurant Franchise",
          "/franchise-formats/food-trolley-franchise": "Food Trolley Franchise",
          "/franchise-formats/food-tempo-franchise": "Food Tempo Franchise",
          "/franchise-formats/chatori-gali": "Food Court Franchise",
        }}
        className="pt-10 bg-black"
      />

      <Hero details={details} slug={slug} />

      {slug == "qsr-restaurant-franchise" && (
        <QsrShowcase />
      )}

      {slug == "internet-restaurants-franchise" && (
        <CloudKitchenIntro />
      )}

      {slug == "food-trolley-franchise" && (
        <FoodTrolleyIntro />
      )}


      {slug == "food-tempo-franchise" && (
        <FoodTempoIntro />
      )}

      {slug == "chatori-gali" && (
        <FoodCourtIntro />
      )}



      {!["qsr-restaurant-franchise", "internet-restaurants-franchise", "food-tempo-franchise", "chatori-gali", "food-trolley-franchise"].includes(slug) && (
        <Desc details={details} slug={slug} />
      )}

      {/* {slug == "food-tempo-franchise" && (
        <TempoAdvantages />
      )} */}

      <div className="bg-black">
        <Container className="px-4">

          <section className="py-14">

            {/* PRICE SECTION */}

            <div className="text-center pb-10">
              <p className="font-bricolageRegular text-2xl mb-3 text-white">
                {details?.extraDetails?.label}
              </p>

              <H5 className="font-bricolageRegular !text-3xl md:!text-4xl mb-5 text-yellow-500">
                {details?.extraDetails?.fees}
                <span className="text-3xl">/- (+ GST)</span>
              </H5>
            </div>

            {/* EXTRA DETAILS GRID */}

            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 pb-10">
              {details?.extraDetails?.list?.map((item, i) => (
                <div
                  className="bg-[#2b2b2b] rounded-3xl border-2 px-5 py-5"
                  key={i}
                >

                  <h1 className="font-bricolageRegular text-[#60D186] text-md text-center mb-1">
                    {item?.label}
                  </h1>

                  <h1 className="font-bricolageBold text-2xl text-center text-white mb-1">
                    {item?.subTitle}
                  </h1>

                  <h1 className="text-sm text-center text-gray-100">
                    {item?.desc}
                  </h1>

                </div>
              ))}
            </div>

            {/* ---------- UPOS + TAPRI SECTION ---------- */}

            {![
              "food-trolley-franchise",
              "chatori-gali",
              "influencer-franchise",
              "internet-restaurants-franchise"
            ].includes(slug) && (

                <div className="relative flex flex-col lg:flex-row items-stretch justify-center mt-12 mx-auto lg:gap-6">

                  {/* LEFT CARD */}
                  <div className="flex-1 bg-gradient-to-r from-[#2b2b2b] to-[#1f1f1f] rounded-2xl px-10 py-10 text-center flex flex-col justify-center min-h-[160px]">
                    <p className="font-bricolageRegular text-[#60D186] mb-3">
                      Franchise Fee
                    </p>

                    <h2 className="font-bricolageBold text-white text-2xl">
                      <a
                        href="https://www.globalgarner.com/upos"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        UPOS – The Digital Mall
                      </a>
                    </h2>

                    <p className="text-gray-300 mt-2 text-sm">
                      With <span className="text-white font-semibold">20 Crores +</span> Products & Services
                    </p>
                  </div>

                  {/* PLUS ICON */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-yellow-500 w-14 h-14 rounded-full grid place-items-center shadow-lg">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>

                  {/* RIGHT CARD */}
                  <div className="flex-1 bg-gradient-to-r from-[#2b2b2b] to-[#1f1f1f] rounded-2xl px-10 py-10 text-center flex flex-col justify-center min-h-[160px]">
                    <p className="font-bricolageRegular text-[#60D186] mb-3">
                      Franchise Fee
                    </p>

                    <h2 className="font-bricolageBold text-white text-2xl">
                      Tapri Ki Tafri (chai)
                    </h2>

                    <p className="text-gray-300 mt-2 text-sm">
                      with all QSR Franchise Complimentary <br />
                      at <span className="text-white font-semibold">just 1 Lakh Extra</span> (optional)
                    </p>
                  </div>

                </div>
              )}

            {/* ROI BUTTON */}

            <div className="flex flex-col items-center text-center pt-8">

              <H5 className="font-bricolageRegular !text-2xl mb-5 text-white">
                {details?.extraDetails?.percent}
              </H5>

              <ApplyButton
                onClick={() =>
                  navigate("/roi-calculator", {
                    state: {
                      franchiseType: details?.franchiseType,
                    },
                  })
                }
              >
                Calculate Your Monthly Earning Potential
              </ApplyButton>

            </div>

            <div className="text-center pt-8">
              <P className="!text-lg text-red-100">
                {details?.extraDetails?.note}
              </P>
            </div>

          </section>

        </Container>
      </div>

      {slug == "food-tempo-franchise" && (
        <WhyFoodTempo />
      )}
      {slug == "food-tempo-franchise" && (
        <FocoEarningSectionTempo />
      )}
      {slug == "qsr-restaurant-franchise" && (
        <BenefitsSectionqsr />
      )}

      {slug == "chatori-gali" && (
        <FoodCourtBenefits />
      )}

      {slug == "chatori-gali" && (
        <FoodCourtInfo />
      )}

      {slug == "food-trolley-franchise" && (
        <FoodTrolleySection />
      )}

      {slug == "food-trolley-franchise" && (
        <FocoAdvantages />
      )}

      {slug == "internet-restaurants-franchise" && (
        <InternetRestaurantBenefits />
      )}

      {slug == "internet-restaurants-franchise" && (
        <FranchiseModelsInternet />
      )}

      {slug == "qsr-restaurant-franchise" && (
        <RevenueOpportunitiesqsr />
      )}
      {/* FRANCHISE MODELS */}

      <div className="py-8 bg-black">



        {!["food-trolley-franchise", "food-tempo-franchise", "chatori-gali", "internet-restaurants-franchise"].includes(slug) && (
          <Container>
            {showAllFormats ? (
              <>
                <div className="text-center pb-6 px-3">
                  <h1 className="font-bricolageSemiBold text-white text-3xl md:text-4xl">
                    Franchise Models
                  </h1>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-[#2a2a2a] rounded-3xl p-8">
                    <H3 className="font-bricolageSemiBold text-white text-xl mb-3">
                      White Label
                    </H3>
                    <p className="text-gray-400">
                      Operate under your brand name with full support.
                    </p>
                  </div>

                  <div className="bg-[#2a2a2a] rounded-3xl p-8">
                    <H3 className="font-bricolageSemiBold text-white text-xl mb-3">
                      FOFO
                    </H3>
                    <p className="text-gray-400">
                      Franchise Owned, Franchise Operated model.
                    </p>
                  </div>

                  <div className="bg-[#2a2a2a] rounded-3xl p-8">
                    <H3 className="font-bricolageSemiBold text-white text-xl mb-3">
                      FOCO
                    </H3>
                    <p className="text-gray-400">
                      Franchise Owned, Company Operated model.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-[#2a2a2a] rounded-3xl p-8">
                  <H3 className="font-bricolageSemiBold text-white text-xl mb-3">
                    FOCO
                  </H3>
                  <p className="text-gray-400">
                    Franchise Owned, Company Operated model for ease.
                  </p>
                </div>
              </div>
            )}
          </Container>
        )}

        <Container className="mx-auto flex justify-center">
          <FranchiseCTA1 />
        </Container>

      </div>

    </div>
  );
}

export default FranchisesDetails;