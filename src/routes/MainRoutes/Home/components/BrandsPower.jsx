// import React from "react";
// import styled, { createGlobalStyle } from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   * { box-sizing: border-box; }
//   body { margin: 0; font-family: sans-serif; }
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
//   color: #ffffff;
//   font-size: 1.5rem;
// `;

// export default function BrandsPower() {
//   // ✅ Auto import 24 images
//   const brandImages = Array.from({ length: 24 }, (_, i) =>
//     new URL(
//       `../../../../assets/home/brandpower/artboard${i + 1}.png`,
//       import.meta.url
//     ).href
//   );

//   return (
//     <div className="text-center overflow-x-hidden">
//       <GlobalStyle />

//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <HeaderSection>
//           <HeaderTitle className="font-bricolageBold">
//             24+ Brands Power
//           </HeaderTitle>

//           <HeaderSubtitle>
//             Multiple brands. One kitchen. One investment
//           </HeaderSubtitle>
//         </HeaderSection>

//         {/* ✅ BRAND GRID */}
//         <div className="pb-16">
//           <div className="max-w-7xl mx-auto">

//             <div
//               className="
//               grid
//               grid-cols-2
//               sm:grid-cols-3
//               md:grid-cols-4
//               lg:grid-cols-8
//               gap-5
//             "
//             >
//               {brandImages.map((img, index) => (
//                 <div
//                   key={index}
//                   className="
//                     bg-[#2b2b2b]
//                     rounded-2xl
//                     flex items-center justify-center
//                     aspect-square
//                     hover:scale-105
//                     hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
//                     transition-all duration-300
//                   "
//                 >
//                   <img
//                     src={img}
//                     alt={`brand-${index}`}
//                     className="w-full rounded-lg h-full object-contain"
//                   />
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import styled, { createGlobalStyle } from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { getPopularRestaurants } from "../../../../api/restaurantApi";

// const GlobalStyle = createGlobalStyle`
//   * { box-sizing: border-box; }
//   body { margin: 0; font-family: sans-serif; }
// `;

// const HeaderSection = styled.div`
//   text-align: center;
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 28px 24px 20px;
// `;

// const HeaderTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: 700;
//   color: #ffffff;
// `;

// const HeaderSubtitle = styled.p`
//   margin-bottom: 30px;
//   color: #ffffff;
//   font-size: 1.5rem;
// `;

// export default function BrandsPower() {
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
//         image: item.logo,
//         slug: item.name.toLowerCase().replace(/\s+/g, "-"),
//       }));

//       setBrands(formatted);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="text-center overflow-x-hidden">
//       <GlobalStyle />

//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <HeaderSection>
//           <HeaderTitle className="font-bricolageBold">
//             24+ Brands Power
//           </HeaderTitle>

//           <HeaderSubtitle>
//             Multiple brands. One kitchen. One investment
//           </HeaderSubtitle>
//         </HeaderSection>

//         {/* GRID */}
//         <div className="pb-16">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-5">

//             {brands.map((brand, index) => (
//               <div
//                 key={index}
//                 onClick={() =>
//                   navigate(`/brands/${brand.slug}`, {
//                     state: { slug: brand.slug },
//                   })
//                 }
//                 className="
//                   bg-[#2b2b2b]
//                   rounded-2xl
//                   flex items-center justify-center
//                   aspect-square
//                   cursor-pointer
//                   hover:scale-105
//                   hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
//                   transition-all duration-300
//                 "
//               >
//                 <img
//                   src={brand.image}
//                   alt="brand"
//                   className="w-full h-full object-contain p-2"
//                 />
//               </div>
//             ))}

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";
import { getPopularRestaurants } from "../../../../api/restaurantApi";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
`;

const HeaderSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 28px 24px 20px;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
`;

const HeaderSubtitle = styled.p`
  margin-bottom: 30px;
  color: #ffffff;
  font-size: 1.5rem;
`;

export default function BrandsPower() {
  const navigate = useNavigate();

  const [brands, setBrands] = useState([]);

  // ✅ Local Images
  const brandImages = Array.from(
    { length: 24 },
    (_, i) =>
      new URL(
        `../../../../assets/home/brandpower/artboard${i + 1}.png`,
        import.meta.url,
      ).href,
  );

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const restaurants = await getPopularRestaurants();

      const formatted = restaurants.map((item) => ({
        id: item.id,
        slug: item.name.toLowerCase().replace(/\s+/g, "-"),
      }));

      setBrands(formatted);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="text-center overflow-x-hidden">
      <GlobalStyle />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        {/* <HeaderSection> */}

        <h1 className="text-4xl md:text-5xl font-bricolageBold text-white relative z-10">
          24+ Brands Power
        </h1>

        <p className="text-white text-[18px] my-3 max-w-xl mx-auto leading-relaxed">
          Multiple brands. One kitchen. One investment

        </p>


        {/* </HeaderSection> */}

        {/* GRID */}
        <div className="">
          <div className="h-full grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-5 overflow-hidden
">
            {brandImages.map((img, index) => {
              const brand = brands[index];
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (!brand) return;

                    navigate(`/brands/${brand.slug}`, {
                      state: { slug: brand.slug },
                    });
                  }}
                  className="
                  rounded-xl
                  overflow-hidden
                  flex items-center justify-center
                  aspect-square
                  cursor-pointer
                  hover:scale-105
                  hover:shadow-lg
                  transition-all duration-300
                "
                >
                  <img
                    src={img}
                    alt={`brand-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
