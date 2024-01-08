import React from "react";
import FooterPage from "../layout/footer/footer";
// import FooterPage from "./footerPage";

function NoAuthLayout({ children }) {
  return (
    <>
      {children}
      <FooterPage />
    </>
  );
}

export default NoAuthLayout;