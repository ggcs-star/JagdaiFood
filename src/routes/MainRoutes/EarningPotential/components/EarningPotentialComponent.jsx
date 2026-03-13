import React, { useEffect, useState } from "react";

import ReactApexChart from "react-apexcharts";
import { useLocation } from "react-router-dom";
import { Input, Select, Typography, Option } from "@material-tailwind/react";

import { Container } from "../../../../components/Layout";
import { ApplyButton } from "../../../../components/Button";


const operationCost = {
    trolley: {
        title: "trolley",
        total: "78000",
        breakdown: [
            { label: "Salaries & Wages", value: "₹20000" },
            { label: "Management/Office Expense", value: "₹5000" },
            { label: "Energy & Utilities/Wood", value: "₹10,000" },
            { label: "Operating Cost/Packaging etc", value: "₹10,000" },
            { label: "Finance Cost/Maintenance", value: "₹12,000" },
            { label: "Royalty@ 6%", value: "₹18,000" },
            {
                label: "Marketing Expenses (1% of billing amount)",
                value: "₹3000",
            },
        ],
    },
    qsr: {
        title: "QSR",
        title1: "Extra Potential Earning",
        total: "304500",
        total1: "804500",
        total2: "109000",
        breakdown: [
            { label: "Salaries & Wages", value: "₹60,000" },
            { label: "Rent / Management/Office Expense", value: "₹25,000" },
            { label: "Energy & Utilities/Wood", value: "₹50,000" },
            { label: "Operating Cost/Packaging etc", value: "₹25,000" },
            {
                label: "Marketing cost/Finance Cost/Maintenance",
                value: "₹50,000",
            },
            { label: "Royalty@ 6%", value: "₹81,000" },
            {
                label: "Marketing Expenses (1% of billing amount)",
                value: "₹13,500",
            },
        ],
        breakdown1: [
            { label: "Heads" },
            { label: "Monthly" },
            { label: "Details" },

            { label: "10% Royalty from Trolley on Actual Sales" },
            { value: "₹30,000" },
            { label: "On Expected Sale 3 Lac pm" },

            { label: "10% Royalty from Internet Kitchen on Actual Sales" },
            { value: "₹60,000" },
            { label: "On Expected Sale 6 Lac pm" },

            { label: "10% Royalty from Tiffin Box on Actual Sales" },
            { value: "₹15,000" },
            { label: "On Expected Sale 1.5 Lac pm" },

            { label: "10% Royalty from Gravy Mix on Actual Sales" },
            { value: "₹4500" },
            { label: "On Expected Sale 0.45 Lac pm" },

            { label: "Total" },
            { label: "₹1,09,000" },

        ],
    },
};

let chartData = {
    options: {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
    },
    series: [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
    ],
};

const pieData = {
    chart: {
        type: "pie",
    },

    labels: [],
    series: [],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
};

export default function EarningPotentialComponent(props) {
    const location = useLocation();

    const [state, setState] = useState({
        orders: 300,
        orderAmount: 150,
        franchiseType: location?.state?.franchiseType ?? "qsr",
        calculatedValue: [],
        extraContent: false,
        netProfit: null,
        netProfit1: null,
        canCalculate: true,
    });

    const {
        orders,
        orderAmount,
        franchiseType,
        calculatedValue,
        extraContent,
        netProfit,
        netProfit1,
        canCalculate,
    } = state;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        calculateHandler();
    }, [franchiseType]);

    const inputFields = [
        {
            id: 1,
            label: "Total Orders (per day)",
            key: "orders",
            value: orders,
        },
        {
            id: 2,
            label: "Order Amount (per order)",
            key: "orderAmount",
            value: orderAmount,
        },
    ];

    const calculateHandler = () => {
        let ordersPerMonth = orders * 30,
            orderAmountPerMonth = ordersPerMonth * orderAmount,
            monthlyGrossProfit = (orderAmountPerMonth * 55) / 100;

        let calculatedValue = [
            { label: "Orders Per month", value: ordersPerMonth },
            { label: "Order Amount per month", value: orderAmountPerMonth },
        ];

        const operationCostTotal = operationCost[franchiseType]?.total;
        const operationCostTotal1 = operationCost[franchiseType]?.total2;
        // operationCost[state?.franchiseType]?.total
        // const operationCostTotalInt = parseInt(
        //     operationCostTotal.replace(/₹|,/g, ""),
        //     10
        // );
        const netProfit = monthlyGrossProfit - parseInt(operationCostTotal);
        const netProfit1 = netProfit + parseInt(operationCostTotal1);
        // const netProfit1 = netProfit + parseInt(operationCostTotal1);

        if (franchiseType === "internet") {
            calculatedValue.push({
                label: "FOCO model Profit",
                highlighted: true,
                value: (orderAmountPerMonth * 15) / 100,
            });
            calculatedValue.push({
                label: "FOFO model Profit",
                highlighted: true,
                value: monthlyGrossProfit,
            });

            Object.assign(pieData, {
                labels: [
                    "Orders Per month",
                    "Order Amount per month",
                    "FOCO model Profit",
                    "FOFO model Profit",
                ],
                series: [
                    ordersPerMonth,
                    orderAmountPerMonth,
                    (orderAmountPerMonth * 15) / 100,
                    monthlyGrossProfit,
                ],
            });
        } else if (franchiseType === "qsr") {
            calculatedValue.push({ label: "Food Margin (%)", value: "55%" });

            calculatedValue.push({
                label: "Monthly Food Cost Expense",
                value: `₹${orderAmountPerMonth - monthlyGrossProfit}`,
            });

            calculatedValue.push({
                label: "Monthly Gross Profit",
                highlighted: true,
                value: `₹${monthlyGrossProfit}`,
            });

            Object.assign(pieData, {
                labels: [
                    "Orders Per month",
                    "Order Amount per month",
                    "Food Margin (%)",
                    "Monthly Gross Profit",
                    "Monthly Food Cost Expense",
                    "Net profit",
                ],
                series: [
                    ordersPerMonth,
                    orderAmountPerMonth,
                    55,
                    monthlyGrossProfit,
                    orderAmountPerMonth - monthlyGrossProfit,
                    netProfit1,
                ],
            });
        } else if (franchiseType === "trolley") {
            calculatedValue.push({ label: "Food Margin (%)", value: "55%" });

            calculatedValue.push({
                label: "Monthly Food Cost Expense",
                value: `₹${orderAmountPerMonth - monthlyGrossProfit}`,
            });

            calculatedValue.push({
                label: "Monthly Gross Profit",
                highlighted: true,
                value: `₹${monthlyGrossProfit}`,
            });

            Object.assign(pieData, {
                labels: [
                    "Orders Per month",
                    "Order Amount per month",
                    "Food Margin (%)",
                    "Monthly Gross Profit",
                    "Monthly Food Cost Expense",
                    "Net profit",
                ],
                series: [
                    ordersPerMonth,
                    orderAmountPerMonth,
                    55,
                    monthlyGrossProfit,
                    orderAmountPerMonth - monthlyGrossProfit,
                    netProfit,
                ],
            });
        } else {
            calculatedValue.push({ label: "Food Margin (%)", value: "55%" });

            calculatedValue.push({
                label: "Monthly Food Cost Expense",
                value: `₹${orderAmountPerMonth - monthlyGrossProfit}`,
            });

            calculatedValue.push({
                label: "Monthly Gross Profit",
                highlighted: true,
                value: `₹${monthlyGrossProfit}`,
            });

            Object.assign(pieData, {
                labels: [
                    "Orders Per month",
                    "Order Amount per month",
                    "Food Margin (%)",
                    "Monthly Gross Profit",
                    "Monthly Food Cost Expense",
                    "Net profit",
                ],
                series: [
                    ordersPerMonth,
                    orderAmountPerMonth,
                    55,
                    monthlyGrossProfit,
                    orderAmountPerMonth - monthlyGrossProfit,
                    netProfit1,
                ],
            });
        }


        setState((prev) => {
            return {
                ...prev,
                canCalculate: !location?.state?.franchiseType,
                extraContent: true,
                calculatedValue: calculatedValue,
                netProfit: netProfit,
                netProfit1: netProfit1,
            };
        });
    };

    return (
        <div className="bg-black">
            <Container >
               <div>
                 <h2 className="text-white text-center text-4xl font-bricolageBold md:text-5xl leading-tight mb-6">
                    Calculate Your Monthly Earning Potential
                </h2>
               </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 mt-10 py-4 lg:py-0 items-center gap-4 lg:gap-10 bg-gray-900 px-4 lg:px-0">
                    {inputFields?.map((item) => (
                        <div
                            key={item?.id}
                            className="flex items-center justify-center border-gray-200 rounded"
                        >
                            <div className="rounded-md lg:pr-[30px] lg:!my-3 w-full">
                                <div className="space-y-1">
                                    <Typography
                                        as="label"
                                        htmlFor={item?.key}
                                        type="small"
                                       color="default"
                                        className="font-bricolageBold !text-white font-semibold"
                                    >
                                        {item?.label}
                                    </Typography>
                                    <Input
                                        id={item?.key}
                                        type="number"
                                        value={item?.value}
                                        className="bg-white"
                                        placeholder={`Enter ${item?.label}`}
                                        onChange={(e) =>
                                            setState((prev) => {
                                                return {
                                                    ...prev,
                                                    extraContent: false,
                                                    canCalculate: true,
                                                    [item?.key]:
                                                        e?.target?.value,
                                                };
                                            })
                                        }
                                    ></Input>
                                </div>
                            </div>
                        </div>
                    ))}
                   <div className="flex flex-col gap-1 items-start relative justify-center border-gray-200 rounded">
    <Typography className="font-bricolageBold text-white font-semibold">
        Franchise Type
    </Typography>

    <Select
        // label=""
        value={state?.franchiseType}
        onChange={(value) =>
            setState((prev) => ({
                ...prev,
                extraContent: false,
                franchiseType: value,
                canCalculate: true,
            }))
        }
        className="bg-white"
    >
        <Option value="qsr">QSR Franchise</Option>
        <Option value="internet">Internet Restaurants Franchise</Option>
        <Option value="trolley">Food Trolley Franchise</Option>
    </Select>
</div>
                    {/* {canCalculate ? (
                        <div>
                            <ApplyButton
                                className="!bg-green-200"
                                onClick={calculateHandler}
                            >
                                Calculate
                            </ApplyButton>
                        </div>
                    ) : null} */}

                    <div>
                        <ApplyButton
                            className="!bg-green-200 "
                            onClick={calculateHandler}
                        >
                            Calculate
                        </ApplyButton>
                    </div>
                </div>
           <div className="flex justify-center items-start sticky top-24 z-10">
  <ReactApexChart
    options={pieData}
    series={pieData.series}
    type="pie"
    height={350}
    width="80%"
    className="text-white block lg:hidden py-10"
  />
</div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-10 py-10">
                    <div>
                        <div className="grid grid-cols-2 gap-2 mb-5 ">
                            {calculatedValue?.map((item, i) => (
                                <div
                                    className={`${franchiseType !== "internet"
                                        ? "group last:col-span-2"
                                        : ""
                                        } ${item?.highlighted ? "bg-yellow-800" : ""
                                        } flex flex-col items-center justify-between rounded-md lg:pt-1 py-4 px-2 lg:py-0 lg:px-0 bg-gray-800 mb-1`}
                                    key={i}
                                >
                                    <h4 className="font-bricolageBold flex flex-col lg:flex-row gap-2 mb-1 text-gray-200 text-center lg:py-0">
                                        {item?.label}
                                        <b
                                            className={`${franchiseType !== "internet"
                                                ? "hidden group-last:block"
                                                : "hidden"
                                                }`}
                                        >{`(Order Amount per month - Monthly Food Cost Expense)`}</b>
                                    </h4>
                                    <p className="text-[#FDBD5B] group-last:text-xl group-last:font-bold">
                                        {item?.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div>
                            {extraContent &&
                                operationCost[state?.franchiseType]?.breakdown
                                    ?.length && (
                                    <>
                                        <h5 className="text-center font-bricolageBold underline mb-5 text-white">
                                            Additional Operation Cost : ₹
                                            {
                                                operationCost[
                                                    state?.franchiseType
                                                ]?.total
                                            }
                                        </h5>
                                        <div className="grid grid-cols-2 gap-2 ">
                                            {operationCost[
                                                state?.franchiseType
                                            ]?.breakdown?.map((item, i) => (
                                                <div
                                                    className="py-4 px-2 lg:py-0 lg:px-0 operationCost flex flex-col items-center justify-between rounded-md lg:pt-1 bg-gray-800 mb-1"
                                                    key={i}
                                                >
                                                    <h4 className="font-bricolageBold mb-1 text-gray-200 text-center">
                                                        {item?.label}
                                                    </h4>
                                                    <p className="text-[#FDBD5B]">
                                                        {item?.value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}

                            {franchiseType !== "internet" ? (
                                <h1 className="text-center text-2xl font-bricolageBold mb-5 text-green-500 pt-12">
                                    The net profit from the{" "}
                                    {operationCost[franchiseType]?.title} operation alone
                                    is: ₹{netProfit}
                                </h1>
                            ) : null}

                            <div>
                                {extraContent && operationCost[state?.franchiseType]?.breakdown1?.length && (
                                    <>
                                        <h5 className="text-center font-bricolageBold underline mb-5 text-white pt-8">
                                            Extra Potential Earning of QSR : ₹
                                            {operationCost[state?.franchiseType]?.total1}
                                        </h5>
                                        <h5 className="text-center font-semibold italic mb-5 text-yellow-500 pt-8">
                                            Other Income to QSR by Our Other Products
                                        </h5>
                                        <div className="grid grid-cols-3 gap-2">
                                            {operationCost[state?.franchiseType]?.breakdown1?.map((item, i) => {

                                                const isRoyaltyText = item?.label && item?.label.includes("10% Royalty from ");
                                                const royaltyPart = isRoyaltyText ? item?.label.split("10% Royalty from ")[1]?.split(" on Actual Sales")[0] : "";


                                                return (
                                                    <div
    className={`w-full flex flex-col items-center justify-center rounded-md mb-1 
        ${i === 15 || i === 16 ? 'bg-red-500 text-white' : 'bg-gray-800'} 
        ${i < 3 ? 'bg-white text-red-500' : 'bg-gray-800'}`}
    key={i}
>
    {item?.label && (
        <h4 className={`py-4 px-2 pl-2 lg:px-4
            ${i === 15 || i === 16 ? 'bg-red-500 text-white' : ''} 
            ${i < 3 ? 'text-red-500 py-2' : 'text-white'}  
            ${isRoyaltyText ? 'text-green-500' : ''} 
            ${i === 15 || i === 16 ? 'py-2' : ''}`}
        >
            {isRoyaltyText ? (
                <>
                    <span className="pt-4">10% Royalty from </span>
                    <span className="text-green-500">{royaltyPart}</span>
                    <span> on Actual Sales </span>
                </>
            ) : (
                item?.label
            )}
        </h4>
    )}

    {item?.value && (
        <p className={` ${i < 3 ? 'text-red-500' : 'text-white'} 
            ${i === 16 ? 'text-red-500' : 'text-white'} 
            ${i > 3 && i < 16 ? 'pt-0' : ''} 
            ${i === 4 || i === 7 || i === 10 || i === 13 ? 'pt-0' : ''} 
            px-2`}
        >
            {item?.value}
        </p>
    )}
</div>

                                                );
                                            })}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>


                    </div>

                    {/* <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="bar"
                        width="100%"
                    /> */}
                    {/* <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="line"
                        width="100%"
                    /> 
                    <Chart
                        options={pieData.chartOptions}
                        series={pieData.series}
                        type="pie"
                        width="80%"
                    />*/}
                    <ReactApexChart
                        options={pieData}
                        series={pieData.series}
                        type="pie"
                        height={350}
                        width="80%"
                        className='hidden lg:block'
                    />
                </div>
                {franchiseType !== "internet" && franchiseType !== "trolley" ? (
                    <h1 className="text-center text-3xl font-bricolageBold pb-5 text-green-500">
                        The net profit from the {" "}
                        {operationCost[franchiseType]?.title1} operation alone
                        is: ₹{netProfit1}
                    </h1>
                ) : null}


                {/* {franchiseType !== "internet" && "trolley" ? (
                    <h1 className="text-center text-3xl font-semibold underline mb-5 text-green-500">
                        The Net Profit from the Extra Potential Earning of QSR operation
                        is: ₹{netProfit1}
                    </h1>
                ) : null} */}
            </Container>
        </div>
    );
}
