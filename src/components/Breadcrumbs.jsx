import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Container } from "./Layout";

export default function Breadcrumbs({ titleMap = {} }) {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pathnames = location.pathname.split("/").filter(Boolean);
  const type = searchParams.get("type");

  return (
    <div className="w-full bg-black py-3 px-3 lg:px-40">
      <Container className="max-w-7xl mx-auto text-sm text-white flex items-center flex-wrap">

        {/* Home */}
        <Link to="/" className=" hover:text-gray-300">
          {titleMap["/"] || "Home"}
        </Link>

        {pathnames.map((value, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          const label = titleMap[routeTo];
          if (!label) return null;

          return (
            <span key={routeTo} className="flex items-center">
              <span className="mx-2">{">"}</span>

              {isLast && !type ? (
                <span className="">{label}</span>
              ) : (
                <Link
                  to={routeTo}
                  className=" hover:text-gray-300"
                >
                  {label}
                </Link>
              )}
            </span>
          );
        })}

        {type && titleMap[type] && (
          <span className="flex items-center">
            <span className="mx-2">{">"}</span>
            <span className="">{titleMap[type]}</span>
          </span>
        )}

      </Container>
    </div>
  );
}