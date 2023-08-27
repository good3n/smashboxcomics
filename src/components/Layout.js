import React from "react";
import "normalize.css";
import GlobalStyles from "../assets/styles/global.styles";

const Layout = ({ children }) => {
  return (
    <main>
      <GlobalStyles />
      {children}
    </main>
  );
};

export default Layout;
