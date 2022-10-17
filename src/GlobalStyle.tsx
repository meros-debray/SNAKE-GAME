import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'Gotham';
        src: local('Gotham'),
        url('./assets/fonts/gotham-regular.woff2') format('woff2'),
        url('./assets/fonts/gotham-regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Gotham';
        src: local('Gotham'),
        url('./assets/fonts/gotham-black.woff2') format('woff2'),
        url('./assets/fonts/gotham-black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }
    
    body {
        margin: 0;
        padding: 0;
    }

    * {
        font-family: Gotham !important;
    }
`;
