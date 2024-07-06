import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'TTLaundryGothicB';

    @media screen and (max-width: 2250px), screen and (max-height: 1265.625px) {
        font-size: 15px;
    }
    @media screen and (max-width: 2100px), screen and (max-height: 1181.25px) {
        font-size: 14px;
    }
    @media screen and (max-width: 1950px), screen and (max-height: 1096.875px) {
        font-size: 13px;
    }
    @media screen and (max-width: 1800px), screen and (max-height: 1012.5px) {
        font-size: 12px;
    }
    @media screen and (max-width: 1650px), screen and (max-height: 928.125px) {
        font-size: 11px;
    }
    @media screen and (max-width: 1500px), screen and (max-height: 843.75px) {
        font-size: 10px;
    }
    @media screen and (max-width: 1350px), screen and (max-height: 759.375px) {
        font-size: 9px;
    }
    @media screen and (max-width: 1200px), screen and (max-height: 675px) {
        font-size: 8px;
    }
    @media screen and (max-width: 1050px), screen and (max-height: 590.625px) {
        font-size: 7px;
    }
    @media screen and (max-width: 900px), screen and (max-height: 506.25px) {
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
