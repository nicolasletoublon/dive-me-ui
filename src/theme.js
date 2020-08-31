import { createGlobalStyle, css } from "styled-components";

const colors = {
    black: "#1d1d1d",
    white: "#ffffff"
};

const space = [...Array(17).keys()].map(i => i * 8);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyles};
`;

export const theme = {
    colors,
    space
};