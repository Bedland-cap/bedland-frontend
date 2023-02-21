import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    box-sizing: border-box;
}

*, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
}

body {
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}

ol, ul {
	list-style: none;
}
`;

export default GlobalStyle;
