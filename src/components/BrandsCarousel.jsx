// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styled, { createGlobalStyle } from "styled-components";
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// import { brands, bgColors } from "../db";

// /* ---------------- GLOBAL STYLE ---------------- */

// const GlobalStyle = createGlobalStyle`
//   * {
//     box-sizing: border-box;
//   }
//   body {
//     margin: 0;
//     font-family: sans-serif;
//   }
// `;

// /* ---------------- LAYOUT ---------------- */

// const Main = styled.main``;

// const HorizontalSection = styled.section`
//   position: relative;
//   width: 100%;
//   max-width: 80rem; /* max-w-7xl = 1280px */
//   min-height: 480px;
//   margin: 0 auto;

//   @media (max-width: 576px) {
//     min-height: 320px;
//     padding: 0 16px;
//   }
// `;

// const BumperSection = styled.section`
//   text-align: center;
//   padding: 12px 16px;
// `;

// /* ---------------- HEADER ---------------- */

// const HeaderSection = styled.div`
//   text-align: center;
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 28px 24px 20px;

//   @media (max-width: 768px) {
//     padding: 48px 16px 40px;
//   }
// `;

// const HeaderTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: 700;
//   color: #ffffff;
//   line-height: 1.2;

//   @media (max-width: 768px) {
//     font-size: 1.8rem;

//   }
// `;

// const HeaderSubtitle = styled.p`

//   margin-bottom: 30px;
// `;

// const KnowMoreButton = styled.button`
//   background: transparent;
//   color: #ffffff;
//   border: 2px solid #ffffff;
//   padding: 12px 30px;
//   border-radius: 0.75rem;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background-color: #ffffff;
//     color: #000000;
//   }

//   @media (max-width: 768px) {
//     padding: 5px !important;
//     font-size: 0.9rem;
//   }
// `;

// /* ---------------- SLICK ARROWS ---------------- */

// const Arrow = styled.div`
//   width: 44px;
//   height: 44px;
//   background: #ffffff;
//   color: #000000;
//   border-radius: 999px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   z-index: 10;
//   box-shadow: 0 10px 30px rgba(0,0,0,0.35);

//   /* Apply hover only on devices that support hover */
//   @media (hover: hover) and (pointer: fine) {
//     &:hover {
//       transform: scale(1.1);
//     }
//   }
// `;

// const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//         <Arrow
//             style={{ position: "absolute", top: "50%" }}
//             onClick={onClick}
//             className="cursor-pointer left-1 lg:left-4"
//         >
//             <FaChevronLeft />
//         </Arrow>
//     );
// };

// const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//         <Arrow
//             style={{ position: "absolute", top: "50%" }}
//             onClick={onClick}
//             className="cursor-pointer right-0 lg:right-4"
//         >
//             <FaChevronRight />
//         </Arrow>
//     );
// };

// /* ---------------- CARD ---------------- */

// const SampleCard = ({ item, handler }) => {
//   return (
//     <div className="px-5">
//       <div className="group relative flex flex-col bg-[#262626] rounded-[20px] lg:w-[400px] h-[460px] lg:h-[460px] text-gray-300 overflow-hidden mx-auto transition-all duration-500">

//         {/* Glow Background */}
//     <div
//   className="absolute bottom-0 h-40 w-full rounded-t-full blur-2xl"
//   style={{ background: bgColors[item?.id - 1] }}
// />

//         {/* Content */}
//         <div className="pt-6 z-10 text-center px-6">
//           <h5 className="font-bricolageBold text-2xl font-bold text-white">
//             {item?.label}
//           </h5>

//           <p className="pt-3">
//             {item?.desc.substring(0, 100)}...
//           </p>
//         </div>

//         {/* Button */}
//         <div className="z-10 flex flex-col items-center pt-6">
//     <button
//   onClick={handler}
//  className="
//   text-xs py-3 px-6 rounded-lg
//   border-2 border-white
//   font-bold uppercase
//   bg-transparent text-white
//   group-hover:bg-[#f2b44c]
//   group-hover:border-[#f2b44c]
//   group-hover:text-black
// "
// >
//   View Menu
// </button>
//         </div>

//         {/* Image */}
//         <div className="mt-auto pb-6 z-10 flex justify-center px-4">
//           <img
//             src={item?.image}
//             alt="card"
//             className="w-full max-h-[240px] object-contain transition-transform duration-500"
//           />
//         </div>

//       </div>
//     </div>
//   );
// };

// /* ---------------- MAIN COMPONENT ---------------- */

// export default function BrandsCarousel() {
//     const navigate = useNavigate();

//     const settings = {
//         infinite: false,
//         speed: 600,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true,
//         prevArrow: <PrevArrow />,
//         nextArrow: <NextArrow />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: { slidesToShow: 2 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: { slidesToShow: 1 }
//             }
//         ]
//     };

//     return (
//         <div className="bg-black text-center ">
//             <GlobalStyle />

//             <div className="max-w-7xl mx-auto rounded-xl ">
//                 <HeaderSection>
//                     <HeaderTitle className="font-bricolageBold">
//                       24+ Brands Power
//                     </HeaderTitle>

//                     <HeaderSubtitle className="!text-white text-2xl ">
//                       Multiple brands. One kitchen. One investment
//                     </HeaderSubtitle>

//                     {/* <div
//                         style={{
//                             display: "flex",
//                             gap: "16px",
//                             justifyContent: "center",
//                             alignItems: "center",
//                         }}
//                     >
//                         <KnowMoreButton onClick={() => navigate("/franchise")}>
//                             Become A Franchise Partner
//                         </KnowMoreButton>

//                         <KnowMoreButton
//                             onClick={() => {
//                                 window.location.href = "tel:+919099237617";
//                             }}
//                         >
//                             Talk to Our Team
//                         </KnowMoreButton>
//                     </div> */}

//                 </HeaderSection>

//                 <Main>
//                     <HorizontalSection>
//                         <Slider {...settings}>
//                             {brands?.map((item, i) => {
//                                 return (
//                                     <React.Fragment key={i}>
//                                         <SampleCard item={item} handler={() => navigate(`brands/${item?.slug}`, { state: { slug: item?.slug } })} />
//                                     </React.Fragment>
//                                 );
//                             })}
//                         </Slider>
//                     </HorizontalSection>
//                 </Main>

//                 <BumperSection />
//             </div>
//         </div>
//     );
// }









// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled, { createGlobalStyle } from "styled-components";
// import Slider from "react-slick";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import leftArrow from "../assets/brands/leftarrow.svg";
// import rightArrow from "../assets/brands/rightarrow.svg";

// import { getPopularRestaurants } from "../api/restaurantApi";
// import { bgColors } from "../db";



// const GlobalStyle = createGlobalStyle`
//   * { box-sizing: border-box; }
//   body { margin: 0; font-family: sans-serif; }
// `;


// const Main = styled.main``;

// // const HorizontalSection = styled.section`
// //   position: relative;
// //   width: 100%;
// //   max-width: 80rem;
// //   min-height: 480px;
// //   margin: 0 auto;

// //   @media (max-width: 576px) {
// //     min-height: 320px;
// //     padding: 0 16px;
// //   }
// // `;

// const HorizontalSection = styled.section`
//   position: relative;
//   width: 100%;
//   max-width: 80rem;
//   margin: 0 auto;

//   .slick-list {
//     margin: 0;   /* ✅ NO EXTRA SHIFT */
//   }

//   .slick-track {
//     display: flex;
//     gap: 24px;   /* ✅ PERFECT GAP */
//   }
// `;

// const BumperSection = styled.section`
//   text-align: center;
//   padding: 12px 16px;
// `;


// const HeaderSection = styled.div`
//   text-align: center;
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 28px 24px 20px;

//   @media (max-width: 768px) {
//     padding: 48px 16px 40px;
//   }
// `;

// const HeaderTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: 700;
//   color: #ffffff;

//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//   }
// `;

// const HeaderSubtitle = styled.p`
//   margin-bottom: 30px;
// `;


// const Arrow = styled.div`
//   width: 44px;
//   height: 44px;
//   background: #ffffff;
//   color: #000;
//   border-radius: 999px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 10;
// `;

// // const PrevArrow = ({ onClick }) => (
// //   <Arrow
// //     onClick={onClick}
// //     className="
// //       cursor-pointer
// //       absolute top-1/2 -translate-y-1/2
// //       left-[-10px] sm:left-[-16px] lg:left-[-24px]
// //       flex items-center justify-center
// //     "
// //   >
// //     <FaChevronLeft />
// //   </Arrow>
// // );


// const PrevArrow = ({ onClick }) => (
//   <Arrow
//     onClick={onClick}
//     className="
//       cursor-pointer
//       absolute top-1/2 -translate-y-1/2
//       -left-6   /* ✅ FIXED */
//     "
//   >
//     <FaChevronLeft />
//   </Arrow>
// );

// const NextArrow = ({ onClick }) => (
//   <Arrow
//     onClick={onClick}
//     className="
//       cursor-pointer
//       absolute top-1/2 -translate-y-1/2
//       -right-6   /* ✅ FIXED */
//     "
//   >
//     <FaChevronRight />
//   </Arrow>
// );
// // const NextArrow = ({ onClick }) => (
// //   <Arrow
// //     onClick={onClick}
// //     className="
// //       cursor-pointer
// //       absolute top-1/2 -translate-y-1/2
// //       right-[-10px] sm:right-[-16px] lg:right-[-24px]
// //       flex items-center justify-center
// //     "
// //   >
// //     <FaChevronRight />
// //   </Arrow>
// // );  






// // const PrevArrow = ({ onClick }) => (
// //   <div
// //     onClick={onClick}
// //     className="absolute top-1/2 -translate-y-1/2 left-[-20px] cursor-pointer z-10"
// //   >
// //     <img src={leftArrow} alt="prev" className="w-[44px] h-[44px]" />
// //   </div>
// // );

// // const NextArrow = ({ onClick }) => (
// //   <div
// //     onClick={onClick}
// //     className="absolute top-1/2 -translate-y-1/2 right-[-20px] cursor-pointer z-10"
// //   >
// //     <img src={rightArrow} alt="next" className="w-[44px] h-[44px]" />
// //   </div>
// // );




// const SampleCard = ({ item, handler }) => {
//   return (
//     <div>
//       <div className="group relative flex flex-col justify-between bg-[#262626] rounded-[24px] w-[380px] h-[540px] text-gray-300 overflow-hidden transition-all duration-500">

//         <div
//           className="absolute bottom-0 h-[180px] w-full rounded-t-full blur-2xl z-0"
//           style={{ background: bgColors[item?.id - 1] }}
//         />

//         <div className="pt-8 z-10 text-center px-6">
//           <h5 className="text-[22px] font-bold text-white">
//             {item?.label}
//           </h5>

//           <p className="pt-4 text-sm h-[90px] overflow-hidden">
//             {item?.desc?.substring(0, 110)}...
//           </p>

//           <div className="mt-6 flex justify-center">
//             <button className="text-xs py-3 px-7 rounded-lg border border-white text-white group-hover:bg-[#f2b44c] group-hover:text-black transition">
//               View Menu
//             </button>
//           </div>
//         </div>

//         <div className="flex items-center justify-center pb-10 px-6 z-10">
//           <img src={item?.image} className="max-h-[220px]" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default function BrandsCarousel() {
//   const navigate = useNavigate();
//   const [brands, setBrands] = useState([]);

//   useEffect(() => {
//     fetchBrands();
//   }, []);

//   const fetchBrands = async () => {
//     try {
//       const restaurants = await getPopularRestaurants();

//       const formatted = restaurants.map((item) => ({
//         id: item.id,
//         label: item.name,
//         desc: item.description,
//         image: item.logo,
//         slug: item.name.toLowerCase().replace(/\s+/g, "-"),
//       }));

//       setBrands(formatted);
//     } catch (error) {
//       console.log("API ERROR:", error);
//     }
//   };
// const settings = {
//   infinite: false,
//   speed: 600,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   arrows: true,
//   prevArrow: <PrevArrow />,
//   nextArrow: <NextArrow />,
//   centerMode: false,   // ✅ IMPORTANT
//   responsive: [
//     { breakpoint: 1024, settings: { slidesToShow: 2 } },
//     { breakpoint: 768, settings: { slidesToShow: 1 } },
//   ],
// };

//   return (
//     <div className="bg-black text-center">
//       <GlobalStyle />

//       <div className="max-w-7xl mx-auto rounded-xl">
//         <HeaderSection>
//           <HeaderTitle className="font-bricolageBold">
//             24+ Brands Power
//           </HeaderTitle>

//           <HeaderSubtitle className="!text-white text-2xl">
//             Multiple brands. One kitchen. One investment
//           </HeaderSubtitle>
//         </HeaderSection>

//         <Main>
//           <HorizontalSection>
//             <Slider {...settings}>
//               {brands.map((item, i) => (
//                 <SampleCard
//                   key={i}
//                   item={item}
//                   handler={() =>
//                     navigate(`/brands/${item.slug}`, {
//                       state: { slug: item.slug },
//                     })
//                   }
//                 />
//               ))}
//             </Slider>
//           </HorizontalSection>
//         </Main>

//         <BumperSection />
//       </div>
//     </div>
//   );
// }











import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { getPopularRestaurants } from "../api/restaurantApi";
import { bgColors } from "../db";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
`;

const Main = styled.main``;

/* ✅ FIXED SECTION */
const HorizontalSection = styled.section`
  position: relative;
  
  margin: 0 auto;

  .slick-list {
    margin: 0 -12px;     /* ✅ ALIGN WITH HEADER */
    overflow: visible;   /* ✅ arrows outside */
  }

  .slick-slide {
    padding: 0 12px;     /* ✅ GAP BETWEEN CARDS */
  }
`;

const BumperSection = styled.section`
  text-align: center;
  padding: 12px 16px;
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 28px 24px 20px;

  @media (max-width: 768px) {
    padding: 48px 16px 40px;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const HeaderSubtitle = styled.p`
  margin-bottom: 30px;
`;

const Arrow = styled.div`
  width: 44px;
  height: 44px;
  background: #ffffff;
  color: #000;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

/* ✅ ARROWS OUTSIDE PERFECT */
const PrevArrow = ({ onClick }) => (
  <Arrow
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 -left-6 cursor-pointer"
  >
    <FaChevronLeft />
  </Arrow>
);

const NextArrow = ({ onClick }) => (
  <Arrow
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 -right-6 cursor-pointer"
  >
    <FaChevronRight />
  </Arrow>
);

/* ✅ CARD FIXED */
const SampleCard = ({ item, handler }) => {
  return (
    <div>
      <div className="group relative flex flex-col justify-between bg-[#262626] rounded-[24px] w-full h-[540px] text-gray-300 overflow-hidden transition-all duration-500">

        <div
          className="absolute bottom-0 h-[180px] w-full rounded-t-full blur-2xl z-0"
          style={{ background: bgColors[item?.id - 1] }}
        />

        <div className="pt-8 z-10 text-center px-6">
          <h5 className="text-[22px] font-bold text-white">
            {item?.label}
          </h5>

          <p className="pt-4 text-sm h-[90px] overflow-hidden">
            {item?.desc?.substring(0, 110)}...
          </p>

          <div className="mt-10 flex justify-center">
            <button
              onClick={handler}
              className="
    text-xs py-3 px-6 rounded-lg
    border-2 border-white
    font-bold uppercase
    bg-transparent text-white
    group-hover:bg-[#f2b44c]
    group-hover:border-[#f2b44c]
    group-hover:text-black
    active:bg-[#f2b44c]
    active:border-[#f2b44c]
    active:text-black
    transition-all duration-200
  "
            >
              View Menu
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center pb-10 px-6 z-10">
          <img src={item?.image} className="max-h-[220px]" />
        </div>
      </div>
    </div>
  );
};

export default function BrandsCarousel() {
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const restaurants = await getPopularRestaurants();

      const formatted = restaurants.map((item) => ({
        id: item.id,
        label: item.name,
        desc: item.description,
        image: item.logo,
        slug: item.name.toLowerCase().replace(/\s+/g, "-"),
      }));

      setBrands(formatted);
    } catch (error) {
      console.log("API ERROR:", error);
    }
  };

 const settings = {
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,

  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,

  centerMode: false,
  variableWidth: false,

  /* ✅ IMPORTANT FOR MANUAL SLIDE */
  draggable: true,        
  swipe: true,           
  swipeToSlide: true,     
  touchMove: true,        
  accessibility: true,    

  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

  return (
    <div className="bg-black text-center">
      <GlobalStyle />

      {/* ✅ SAME WIDTH AS SLIDER */}
      <div className="max-w-7xl mx-auto rounded-xl">
        <HeaderSection>
          <HeaderTitle className="font-bricolageBold">
            24+ Brands Power
          </HeaderTitle>

          <HeaderSubtitle className="!text-white text-2xl">
            Multiple brands. One kitchen. One investment
          </HeaderSubtitle>
        </HeaderSection>

        <Main>
          <HorizontalSection>
            <Slider {...settings}>
              {brands.map((item, i) => (
                <SampleCard
                  key={i}
                  item={item}
                  handler={() =>
                    navigate(`/brands/${item.slug}`, {
                      state: { slug: item.slug },
                    })
                  }
                />
              ))}
            </Slider>
          </HorizontalSection>
        </Main>

        <BumperSection />
      </div>
    </div>
  );
}