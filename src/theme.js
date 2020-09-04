import {createGlobalStyle, css} from 'styled-components';

const colors = {
    black: '#1d1d1d',
    white: '#ffffff',
};

const space = [...Array(20).keys()].map((i) => i * 4);

const globalStyles = css`
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif !important;
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
    space,
};
