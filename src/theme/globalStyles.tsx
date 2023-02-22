import { createGlobalStyle } from 'styled-components';
import SansSourceProRegular from 'assets/fonts/SourceSansPro-Regular.woff2';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Sans Source Pro', sans-serif,
    src: local('Sans Source Pro'),
    font-style: normal;
    font-weight: 400;
    src: url(${SansSourceProRegular}) format('woff2'),
}

html, #root, body{
    box-sizing: border-box;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Source Sans Pro', sans-serif;
}

*, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}

ol, ul, li {
	list-style: none;
}

`;

export default GlobalStyle;
