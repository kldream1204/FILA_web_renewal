import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    ul {
        display: flex;
    }
`;

export default GlobalStyle;