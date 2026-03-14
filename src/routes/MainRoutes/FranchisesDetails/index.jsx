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
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Container } from "../../../components/Layout";
import { franchise } from "../../../db";
import { H3, H5, P } from "../../../components/Typography";
import Hero from "./hero";
import { ApplyButton } from "../../../components/Button";
import InfluencerFranchise from "./InfluencerFranchise";
import Breadcrumbs from "../../../components/Breadcrumbs";

const Desc = ({ details }) => {

    if (!details) return null;

    const currentUrl = window.location.href;

    const imageClass = currentUrl.includes(
        "/franchise-details?type=internet-restaurants-franchise"
    )
        ? "lg:w-[500px]"
        : "lg:w-[520px]";

    return (
        <section className="bg-black py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">

                {/* TOP BENEFITS CARD */}
                <div className="rounded-3xl bg-gradient-to-r from-[#1f1f1f] via-[#2a2a2a] to-[#6a5434] grid lg:grid-cols-[60%_40%] gap-10 items-stretch overflow-hidden">
                    {/* LEFT TEXT */}
                    <div className="p-10">
                        <h2 className="text-3xl lg:text-4xl font-bricolageRegular font-medium text-white mb-6 leading-snug">
                            Benefits of joining our <br />
                            <span className="font-bricolageRegular">
                                {details?.title} Business
                            </span>
                        </h2>

                        <ul className="space-y-4">
                            {details?.benefits?.details?.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-200 text-lg">
                                    <span className="flex items-center justify-center w-6 h-6 min-w-[24px] bg-yellow-400 text-black rounded-full text-sm font-bold">
                                        ✓
                                    </span>
                                    {item?.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex items-end justify-end">
                        <img
                            src={details?.largeImage}
                            alt="Franchise"
                            className={`object-contain ${imageClass}`}
                        />
                    </div>

                </div>

                {/* BOTTOM CARDS */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
                    {details?.benefits?.list?.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#2b2b2b] rounded-2xl p-6 text-center flex items-center justify-center min-h-[100px]"
                        >
                            <h3 className="font-bricolageRegular text-white text-lg lg:text-xl font-medium leading-snug">
                                {item?.label}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

function FranchisesDetails() {
    const navigate = useNavigate(),
        [searchParams] = useSearchParams();
    const [details, setDetails] = useState({});

    let params = searchParams?.get("type");

    useEffect(() => {
        window.scrollTo(0, 0);
        let data = franchise?.filter((item) => item?.slug === params)[0];
        setDetails(data);
    }, [params]);

    // <-- DEFINE showAllFormats HERE (uses params which is the query slug)
    const showAllFormats =
        params === "qsr-restaurant-franchise" ||
        params === "internet-restaurants-franchise";

    if (params === "influencer-franchise") {
        return (
            <>
                <Breadcrumbs
                    titleMap={{
                        "/franchise-details": "Franchise Formats",
                        "influencer-franchise": "Influencer Franchise",
                    }}
                />                <Hero details={details} data={details} />
                <InfluencerFranchise />
            </>
        );
    }

    return (
        <div className="lg:w-[99vw] w-screen">
            <Breadcrumbs
                titleMap={{
                    "/franchise-details": "Franchise Formats",
                    "qsr-restaurant-franchise": "QSR Franchise",
                    "internet-restaurants-franchise": "Internet Restaurant Franchise",
                    "food-trolley-franchise": "Food Trolley Franchise",
                    "food-tempo-franchise": "Food Tempo Franchise",
                    "chatori-gali": "Food Court Franchise",
                }}
            />
            <Hero details={details} data={details} />
            <Desc details={details} />
            <div className=" bg-black">
                <Container className="px-4">
                    <section className="py-14">
                        <div className="text-center pb-10">
                            <p className="text-2xl mb-3 text-white">
                                {details?.extraDetails?.label}
                            </p>
                            <H5 className="font-bricolageRegular !text-3xl md:!text-4xl mb-5 text-yellow-500">
                                {details?.extraDetails?.fees}
                                <span className="text-3xl">/- (+ GST)</span>
                            </H5>
                        </div>
                        <div
                            className={`grid xl:grid-cols-${details?.extraDetails?.list?.length} gap-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 pb-10`}
                        >
                            {details?.extraDetails?.list?.map((item, i) => {
                                return (
                                    <div
                                        className="bg-[#2b2b2b] rounded-3xl border-2 px-5 py-5 "
                                        key={i}
                                    >
                                        <h1 className="font-bricolageRegular !text-green-400 !text-md !lg:text-md text-center mb-1">
                                            {item?.label}
                                        </h1>
                                        <h1 className="font-bricolageBold !text-2xl text-center !text-white mb-1">
                                            {item?.subTitle}
                                        </h1>
                                        <h1 className="!leading-6 !text-sm text-center !text-gray-100">
                                            {item?.desc}
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>

                        {details?.slug === "internet-restaurants-franchise" ||
                            details?.slug === "bike-cart-franchise" ? null : (

                            <div className="relative flex flex-col lg:flex-row items-stretch justify-center mt-12 mx-auto -gap-20 lg:gap-6">

                                {/* LEFT CARD */}
                                <div className="flex-1 bg-gradient-to-r from-[#2b2b2b] to-[#1f1f1f] rounded-2xl px-10 py-10 text-center flex flex-col justify-center min-h-[160px]">
                                    <p className="font-bricolageRegular text-green-400 !text-md mb-3">
                                        Franchise Fee
                                    </p>

                                    <h2 className="text-white text-2xl font-semibold">
                                        <a
                                            href="https://www.globalgarner.com/upos"
                                            target="_blank"
                                            className="hover:underline"
                                        >
                                            UPOS – The Digital Mall
                                        </a>
                                    </h2>

                                    <p className="text-gray-300 mt-2 text-sm">
                                        With <span className="font-semibold text-white">20 Crores +</span> Products & Services
                                    </p>
                                </div>

                                {/* MOBILE + */}
                                <div className="flex lg:hidden justify-center -my-4 z-10">
                                    <div className="bg-yellow-500 w-14 h-14 rounded-full grid place-items-center shadow-lg">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </div>
                                </div>

                                {/* RIGHT CARD */}
                                <div className="flex-1 bg-gradient-to-r from-[#2b2b2b] to-[#1f1f1f] rounded-2xl px-10 py-10 text-center flex flex-col justify-center min-h-[160px]">
                                    <p className="font-bricolageRegular text-green-400 !text-md mb-3">
                                        Franchise Fee
                                    </p>

                                    <h2 className="text-white text-2xl font-semibold">
                                        Tapri Ki Tafri (chai)
                                    </h2>

                                    <p className="text-gray-300 mt-2 text-sm">
                                        with all QSR Franchise Complimentary <br />
                                        at <span className="text-white font-semibold">just 1 Lakh Extra</span> (optional)
                                    </p>
                                </div>

                                {/* DESKTOP + */}
                                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <div className="bg-yellow-500 w-14 h-14 rounded-full grid place-items-center shadow-lg">
                                        <svg
                                            width="28"
                                            height="28"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="black"
                                            strokeWidth="3.5"
                                            strokeLinecap="round"
                                        >
                                            <path d="M12 5v14M5 12h14" />
                                        </svg>
                                    </div>
                                </div>

                            </div>

                        )}



                        {details?.slug === "bike-cart-franchise" ? (
                            <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-100 rounded-xl px-6 py-6 mt-5">
                                <div className="text-center flex-1 pt-4 lg:pt-0">
                                    <h2 className="text-red-500 font-bold text-3xl">
                                        <a
                                            className="underline"
                                            href="https://www.globalgarner.com/upos"
                                            target="_blank"
                                        >
                                            Earnings
                                        </a>
                                    </h2>
                                    <p className="text-gray-600 font-medium">
                                        Earn 9% ROI or 5% of the{" "}
                                        <span className="text-black font-bold">
                                            billing amount
                                        </span>{" "}
                                        (whichever is higher)
                                    </p>
                                </div>

                                <div className="hidden md:block">
                                    <div className="w-10 mx-4 flex flex-row items-center justify-center">
                                        <div className="h-20 w-1 bg-red-500"></div>
                                        <div className="absolute bg-red-500 size-10 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="block md:hidden">
                                    <div className="w-10 mx-4 flex flex-col items-center justify-center">
                                        <div className="h-72 overflow-y-hidden -my-20 w-1 bg-red-500 rotate-90"></div>
                                        <div className="absolute bg-red-500 size-10 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                +
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center flex-1 pb-4 lg:pb-0">
                                    <h2 className="text-red-500 font-bold text-3xl">
                                        Options
                                    </h2>
                                    <p className="text-gray-600 font-medium">
                                        NON-VEG Option also available{" "}
                                        <span className="text-green-600 font-bold">
                                            for all brands
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ) : null}

                        <div className="flex flex-col items-center text-center pt-8">
                            <H5 className="!text-2xl mb-5 text-white">
                                {details?.extraDetails?.percent}
                            </H5>
                            {details?.slug === "bike-cart-franchise" ? null : (
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
                            )}
                        </div>
                        <div className="text-center pt-8">
                            <P className="!text-lg text-red-100">
                                {details?.extraDetails?.note}
                            </P>
                        </div>
                    </section>
                </Container>
            </div>

            {/* ---------- OUR FRANCHISE FORMAT ---------- */}
            {/* <div className="py-10 lg:px-0">
                <div className="text-center flex-1 pb-10 px-3">
                    <H3 className="!text-5xl md:text-2xl font-bold text-yellow-500 leading-tight mb-6">
                        Our Franchise Format
                    </H3>
                </div>

                {showAllFormats ? (
                    <>
                        <div className="relative z-10">
                            <div className="absolute left-0 top-0 w-2/5 h-[280px] lg:h-[520px] bg-gray-800  -z-50 rounded-tr-3xl rounded-br-3xl" />
                            <Container>
                                <div className="grid gap-6 py-10 sm:flex sm:gap-10 sm:py-20">
                                    <div className="w-full sm:w-3/5 sm:h-96">
                                        <img src={fofo} alt="brand" className="w-full h-full rounded-lg sm:rounded-tr-lg sm:rounded-br-lg " />
                                    </div>
                                    <div className="sm:w-2/5 m-auto">
                                        <div className="grid items-center ">
                                            <H3 className="text-[35px] font-semibold text-primary mt-8 lg:mt-0">
                                                FOFO Model
                                            </H3>
                                            <p className="mt-5 text-lg md:mt-0">
                                                Jagdai Foods offers the FOFO (Franchise-Owned, Franchise-Operated) model...
                                            </p>
                                            <button
                                                className="my-3 border-2 border-yellow-400 rounded-lg py-2 px-5 h-12 w-40 text-yellow-400 hover:bg-yellow-400 hover:text-white"
                                                onClick={() =>
                                                    navigate("/franchise-details/apply-form", {
                                                        state: { slug: "foco-model" },
                                                    })
                                                }
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>

                        <div className="relative z-10">
                            <div className="absolute right-0 top-0 w-2/5 h-[280px] lg:h-[520px] bg-gray-800 -z-50 rounded-tl-3xl rounded-bl-3xl" />
                            <Container>
                                <div className="grid justify-end gap-6 py-6 sm:flex sm:gap-10 sm:py-20">
                                    <div className="sm:w-2/5 m-auto">
                                        <div className="grid items-center ">
                                            <img
                                                src={whitelisting}
                                                alt="brand"
                                                className="block lg:hidden w-full h-full rounded-lg sm:rounded-tr-lg sm:rounded-br-lg mt-4 lg:mt-0"
                                            />
                                            <H3 className="text-[35px] font-semibold text-primary mt-16 lg:mt-0">
                                                White labelling Model
                                            </H3>
                                            <p className="mt-3 text-lg md:mt-0">
                                                Jagdai Foods is the only company offering franchise owners the unique opportunity...
                                            </p>
                                            <button
                                                className="my-3 border-2 border-yellow-400 rounded-lg py-2 px-5 h-12 w-40 text-yellow-400 hover:bg-yellow-400 hover:text-white"
                                                onClick={() =>
                                                    navigate("/franchise-details/apply-form", {
                                                        state: { slug: "fofo-model" },
                                                    })
                                                }
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-3/5 sm:h-96">
                                        <img src={whitelisting} alt="brand" className="hidden lg:block w-full h-full rounded-lg sm:rounded-tr-lg sm:rounded-br-lg " />
                                    </div>
                                </div>
                            </Container>
                        </div>

                        <div className="relative z-10">
                            <div className="absolute left-0 top-0 w-2/5 h-[280px] lg:h-[520px] bg-gray-800 -z-50 rounded-tr-3xl rounded-br-3xl" />
                            <Container>
                                <div className="grid gap-6 py-6 sm:flex sm:gap-10 sm:py-20">
                                    <div className="w-full sm:w-3/5 sm:h-96">
                                        <img src={foco} alt="brand" className="w-full h-full rounded-lg sm:rounded-tr-lg sm:rounded-br-lg mt-2 lg:mt-0" />
                                    </div>
                                    <div className="sm:w-2/5 m-auto">
                                        <div className="grid items-center ">
                                            <H3 className="text-[35px] font-semibold text-primary mt-10 lg:mt-0">
                                                FOCO Model
                                            </H3>
                                            <p className="mt-3 text-lg md:mt-0">
                                                Jagdai Foods offers its franchise opportunity under the FOCO (Franchise-Owned, Company-Operated) model...
                                            </p>
                                            <button
                                                className="my-3 border-2 border-yellow-400 rounded-lg py-2 px-5 h-12 w-40 text-yellow-400 hover:bg-yellow-400 hover:text-white"
                                                onClick={() =>
                                                    navigate("/franchise-details/apply-form", {
                                                        state: { slug: "whitelisting-model" },
                                                    })
                                                }
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="relative z-10">
                            <div className="absolute left-0 top-0 w-2/5 h-[280px] lg:h-[520px] bg-gray-800 -z-50 rounded-tr-3xl rounded-br-3xl" />
                            <Container>
                                <div className="grid gap-6 py-6 sm:flex sm:gap-10 sm:py-20">
                                    <div className="w-full sm:w-3/5 sm:h-96">
                                        <img src={foco} alt="brand" className="w-full h-full rounded-lg sm:rounded-tr-lg sm:rounded-br-lg mt-2 lg:mt-0" />
                                    </div>
                                    <div className="sm:w-2/5 m-auto">
                                        <div className="grid items-center ">
                                            <H3 className="text-[35px] font-semibold text-primary mt-10 lg:mt-0">
                                                FOCO Model
                                            </H3>
                                            <p className="mt-3 text-lg md:mt-0">
                                                Jagdai Foods offers its franchise opportunity under the FOCO model...
                                            </p>
                                            <button
                                                className="my-3 border-2 border-yellow-400 rounded-lg py-2 px-5 h-12 w-40 text-yellow-400 hover:bg-yellow-400 hover:text-white"
                                                onClick={() =>
                                                    navigate("/franchise-details/apply-form", {
                                                        state: { slug: "whitelisting-model" },
                                                    })
                                                }
                                            >
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </>
                )}
            </div> */}

            <div className="py-8 bg-black">

                {/* TITLE */}
                <div className="text-center pb-6 px-3">
                    <h1 className="px-3 lg:px-0 text-white text-3xl md:text-4xl font-bricolageSemiBold leading-tight mb-2">
                        Franchise Models
                    </h1>
                </div>

                <Container>

                    {showAllFormats ? (

                        <div className="grid md:grid-cols-3 gap-8">

                            {/* WHITE LABEL */}
                            <div className="bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] rounded-3xl p-8 transition hover:scale-[1.02]">

                                <H3 className="text-white text-xl font-semibold mb-3">
                                    White Label
                                </H3>

                                <p className="text-gray-400 mb-6">
                                    Operate under your brand name with full support.
                                </p>

                                <button
                                    // onClick={() =>
                                    //   navigate("/franchise-details/apply-form", {
                                    //     state: { slug: "whitelisting-model" },
                                    //   })
                                    // }
                                    className="text-yellow-400 font-medium flex items-center gap-2"
                                >
                                    Know More →
                                </button>

                            </div>

                            {/* FOFO */}
                            <div className="bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] rounded-3xl p-8 transition hover:scale-[1.02]">

                                <H3 className="text-white text-xl font-semibold mb-3">
                                    FOFO
                                </H3>

                                <p className="text-gray-400 mb-6">
                                    Franchise Owned, Franchise Operated model for independence.
                                </p>

                                <button
                                    // onClick={() =>
                                    //   navigate("/franchise-details/apply-form", {
                                    //     state: { slug: "fofo-model" },
                                    //   })
                                    // }
                                    className="text-yellow-400 font-medium flex items-center gap-2"
                                >
                                    Know More →
                                </button>

                            </div>

                            {/* FOCO */}
                            <div className="bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] rounded-3xl p-8 transition hover:scale-[1.02]">

                                <H3 className="text-white text-xl font-semibold mb-3">
                                    FOCO
                                </H3>

                                <p className="text-gray-400 mb-6">
                                    Franchise Owned, Company Operated model for ease.
                                </p>

                                <button
                                    // onClick={() =>
                                    //   navigate("/franchise-details/apply-form", {
                                    //     state: { slug: "foco-model" },
                                    //   })
                                    // }
                                    className="text-yellow-400 font-medium flex items-center gap-2"
                                >
                                    Know More →
                                </button>

                            </div>

                        </div>

                    ) : (

                        <div className="grid md:grid-cols-1 max-w-md mx-auto">

                            {/* ONLY FOCO */}
                            <div className="bg-gradient-to-r from-[#2a2a2a] to-[#3a3a3a] rounded-3xl p-8 transition hover:scale-[1.02]">

                                <H3 className="text-white text-xl font-semibold mb-3">
                                    FOCO
                                </H3>

                                <p className="text-gray-400 mb-6">
                                    Franchise Owned, Company Operated model for ease.
                                </p>

                                <button
                                    // onClick={() =>
                                    //   navigate("/franchise-details/apply-form", {
                                    //     state: { slug: "foco-model" },
                                    //   })
                                    // }
                                    className="text-yellow-400 font-medium flex items-center gap-2"
                                >
                                    Know More →
                                </button>

                            </div>

                        </div>

                    )}

                </Container>

            </div>

            {/* <Container>
                {details?.stats && (
                    <>
                        <H3 className="text-center !text-4xl font-bold text-yellow-500 leading-tight">
                            {details?.stats?.title}
                        </H3>
                        <div className="flex flex-col md:flex-row items-center justify-center bg-black-50 pb-16 pt-8 px-4 md:px-10">
                            <div className="md:w-1/2 text-left">
                                <ul>
                                    {details?.stats?.list?.map((item, i) => {
                                        return (
                                            <li
                                                className="text-white text-lg mb-3"
                                                key={i}
                                            >
                                                {item?.label}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 mb-4 lg:mr-16">
                                <img
                                    src={details?.stats?.image}
                                    alt="Professional Skills"
                                    className="w-full shadow-2xl"
                                />
                            </div>
                        </div>
                    </>
                )}
                {details?.banner?.img1 && (
                    <div className="flex flex-col md:flex-row items-center justify-center bg-black-50 pb-16 pt-8 px-4 md:px-10">
                        <div className="w-full md:w-1/2 mb-4 lg:mr-16">
                            <img
                                src={details?.banner?.img1}
                                alt="Professional Skills"
                                className="w-full shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2 mb-4 lg:mr-16">
                            <img
                                src={details?.banner?.img2}
                                alt="Professional Skills"
                                className="w-full shadow-2xl"
                            />
                        </div>
                    </div>
                )}
            </Container> */}
        </div>
    );
}

export default FranchisesDetails;
