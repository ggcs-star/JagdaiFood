import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "../../../components/Layout";
import Hero from "./Hero";

import { brands } from "../../../db";

export default function BrandsDetails() {
  const location = useLocation();
  const [state, setState] = useState({
    loading: true,
    data: {},
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    let curItem = brands?.filter(
      (item) => item?.slug === location?.state?.slug
    )[0];
    setState((prev) => {
      return {
        ...prev,
        loading: false,
        data: curItem,
      };
    });
  }, [location?.state]);
  return (
    <div className="bg-black">
      {/* <Container> */}
        {state?.loading ? "loading" : <Hero item={state?.data} />}
      {/* </Container> */}
    </div>
  );
}
