import React, { useEffect, useState } from "react";

import { fofo, foco, whitelisting } from "../../../assets";
import { H3 } from "../../../components/Typography";
import { useLocation } from "react-router-dom";

const model = [
  {
    slug: "fofo-model",
    label: "FOFO Model",
    image: fofo,
    desc: "Jagdai Foods offers the FOFO (Franchise-Owned, Franchise-Operated) model, where you can fully own and manage your own food franchise. If you want a business where you handle all daily operations yourself, the FOFO model with Jagdai Foods is a great option.",
  },
  {
    slug: "whitelisting-model",
    label: "White-labeling Model",
    image: whitelisting,
    desc: "As a franchise owner, you have the rare chance to run your business under your own brand without paying any royalty fees. Build your business freely while getting full support and guidance from us.",
  },
  {
    slug: "foco-model",
    label: "FOCO Model",
    image: foco,
    desc: "Jagdai Foods offers a franchise opportunity under the FOCO (Franchise-Owned, Company-Operated) model. This model lets investors own a Jagdai Foods outlet while the company manages all daily operations. As a franchise owner, you can focus on your investment while we take care of running the business smoothly and efficiently.",
  },
];

function ApplyForm() {
  const location = useLocation();
  const [state, setState] = useState({
    inputData: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
    errorMsg: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
    details: {},
  });
  const { inputData, errorMsg, details } = state;
  console.log(location?.state?.slug)
  useEffect(() => {
    window.scrollTo(0, 0);
    let data = model?.filter((item) => item?.slug === location?.state?.slug)[0];
    console.log(data)
    setState((prev) => {
      return {
        ...prev,
        details: data,
      };
    });
  }, [location?.state?.slug]);

  const inputFields = [
    {
      placeholder: "Select model options",
      name: "select",
      value: "",
      field: "select",
      option: [
        {
          value: "foco-model",
          label: "FOCO Model",
        },
        {
          value: "fofo-model",
          label: "FOFO Model",
        },
        {
          value: "whitelisting-model",
          label: "Whitelisting Model",
        },
      ],
    },
    {
      placeholder: "Select franchise options",
      name: "select",
      value: "",
      field: "select",
      option: [
        { label: "QSR Restaurant", value: "qsr-restaurant-franchise" },
        {
          label: "Internet Restaurants Franchise",
          value: "internet-restaurants-franchise",
        },
        { label: "Food Trolley Franchise", value: "food-trolley-franchise" },
        { label: "Bike Cart Franchise", value: "bike-cart-franchise" },
      ],
    },
    {
      placeholder: "Name",
      type: "text",
      name: "name",
      value: "",
      field: "input",
    },
    {
      placeholder: "Email",
      type: "text",
      name: "email",
      value: "",
      field: "input",
    },
    {
      placeholder: "Mobile Number",
      type: "number",
      name: "number",
      value: "",
      field: "input",
    },
    {
      placeholder: "Message",
      type: "text",
      name: "message",
      value: "",
      field: "input",
    },
  ];
  const setData = (e, name) => {
    const { value } = e.target;
    setState((prev) => {
      return {
        ...prev,
        inputData: {
          ...prev.inputData,
          [name]: value,
        },
      };
    });
  };
  const handleSubmitForm = () => {
    let valid = true;

    for (let i in inputData) {
      if (inputData[i] === "") {
        valid = false;
        setState((prev) => {
          return {
            ...prev,
            errorMsg: {
              ...prev.errorMsg,
              [i]: "Required",
            },
          };
        });
      } else {
        valid = true;
        setState((prev) => {
          return {
            ...prev,
            errorMsg: { [i]: "" },
          };
        });
      }
    }
    return valid && MessagePopup()
  };
  const MessagePopup = () => {
    // window.location.reload()
    if (valid) {
      alert("Data added successfully")
    }
    setState((prev) => {
      return {
        ...prev,
        inputData: {
          name: "",
          email: "",
          number: "",
          message: "",
        }
      }
    })
  }
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                {/* <img src="https://pagedone.io/asset/uploads/1696488602.png" alt="ContactUs tailwind section" className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover" /> */}
                {/* <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">Contact us</h1> */}
                <H3 className="text-[35px] font-semibold text-primary text-center pt-5">
                  {details?.label}
                </H3>
                {/* </div> */}
                <p className="mt-5 text-lg md:mt-0 w-[90%] mx-auto">
                  {details?.desc}
                </p>
                <img
                  src={details?.image}
                  alt="ContactUs tailwind section"
                  className="flex items-center mt-10 w-[90%] mx-auto lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-00 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-green-600 font-manrope text-4xl font-bold leading-10 mb-11 text-center">
              Send Us A Message
            </h2>
            <div className={`grid gap-7 `}>
              {inputFields?.map((item, i) => {
                return (
                  <div key={i}>
                    {item?.field === "input" ? (
                      <>
                        <input
                          onChange={(e) => {
                            setData(e, item?.name);
                          }}
                          value={inputData[item?.name]}
                          placeholder={item?.placeholder}
                          type={item?.type}
                          className="w-full h-12 text-gray-300 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-700 focus:outline-none pl-4"
                        />
                        {errorMsg ? (
                          <p className="text-sm text-red-500 mt-1 pl-5">
                            {errorMsg[item?.name]}
                          </p>
                        ) : null}
                      </>
                    ) : (
                      <select className="w-full h-12 text-gray-400 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-700 focus:outline-none pl-4">
                        <option value="Select a model">
                          {item?.placeholder}
                        </option>
                        {item?.option?.map((item) => (
                          <option value={item.slug}>{item.label}</option>
                        ))}
                      </select>
                    )}
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => handleSubmitForm()}
              className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-yellow-600 bg-green-500 shadow-sm mt-10"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplyForm;
