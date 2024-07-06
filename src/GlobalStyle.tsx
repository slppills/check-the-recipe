import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'TTLaundryGothicB';

    @media screen and (max-width: 2100px), screen and (max-height: 1400px) {
    font-size: 14px;
    }
    @media screen and (max-width: 1950px), screen and (max-height: 1300px) {
        font-size: 13px;
    }
    @media screen and (max-width: 1800px), screen and (max-height: 1200px) {
        font-size: 12px;
    }
    @media screen and (max-width: 1650px), screen and (max-height: 1100px) {
        font-size: 11px;
    }
    @media screen and (max-width: 1500px), screen and (max-height: 1000px) {
        font-size: 10px;
    }
    @media screen and (max-width: 1100px), screen and (max-height: 900px) {
        font-size: 9px;
    }
    @media screen and (max-width: 1200px), screen and (max-height: 800px) {
        font-size: 8px;
    }
    @media screen and (max-width: 1050px), screen and (max-height: 700px) {
        font-size: 7px;
    }
    @media screen and (max-width: 900px), screen and (max-height: 600px) {
        font-size: 6px;
    }
}

@font-face {
    font-family: 'TTLaundryGothicB';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/TTLaundryGothicB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
`;

export default GlobalStyle;
