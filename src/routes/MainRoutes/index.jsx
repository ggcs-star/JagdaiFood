import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

import Home from "./Home";
import FranchiseModels from "./FranchiseModels";
import Investment from "./Investment";
import OurBrands from "./OurBrands";
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import WhatWeDo from "./WhatWeDo";
import BrandsDetails from "./BrandsDetails";
import Contact from "./Contact";
// import Pharmretail from "./Pharmretail";
// import Pharmconnect from "./Pharmconnect";
// import Pharmanalytics from "./Pharmanalytics";
// import Health from "./Health";
// import Careers from "./Careers";
// import Media from './Media'
// import Contact from "./Contact";
// import About from "./About";


export default function MainRoutes(props) {
    const routes = useRoutes([
        { path: "", element: <Home {...props} /> },
        { path: "/franchise-models", element: <FranchiseModels {...props} /> },
        { path: "/investment", element: <Investment {...props} /> },
        { path: "/brands", element: <OurBrands {...props} /> },
        { path: "/about", element: <AboutUs {...props} /> },
        { path: "/what-we-do", element: <WhatWeDo {...props} /> },
        { path: "brands/:key", element: <BrandsDetails {...props} /> },

        { path: "/faq", element: <FAQ {...props} /> },
        { path: "/contact", element: <Contact {...props} /> },
        // { path: "/pharmretail", element: <Pharmretail {...props} /> },
        // { path: "/pharmconnect", element: <Pharmconnect {...props} /> },
        // { path: "/pharmanalytics", element: <Pharmanalytics {...props} /> },
        // { path: "/publichealth", element: <Health {...props} /> },
        // { path: "/careers", element: <Careers {...props} /> },
        // { path: "/media", element: <Media {...props} /> },
        // { path: "/contact-us", element: <Contact {...props} /> },
        // { path: "/about-us", element: <About {...props} /> },

        Outlet,
    ]);
    return <div className="">{routes}</div>;
}
