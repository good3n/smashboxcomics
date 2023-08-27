import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.75;
    text-rendering: optimizeLegibility;
    font-family: "DM Sans", sans-serif;
  }

  a {
    text-decoration: none;
  }

  main.content {
    padding-left: 430px;
  }
`;

export default GlobalStyles;
