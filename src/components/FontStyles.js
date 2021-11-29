import { createGlobalStyle } from "styled-components";
import FrakturWoff from "../../content/fonts/fette-unz-fraktur.woff";
import NibProReg from "../../content/fonts/NibPro-Regular.woff";
import FannGrotesqueReg from "../../content/fonts/FannGrotesquePro-Regular.woff";
import FannGrotesqueSemiBold from "../../content/fonts/FannGrotesquePro-SemiBold.woff";
import FannGrotesqueThin from "../../content/fonts/FannGrotesquePro-Thin.woff";
import FannGrotesqueThinItalic from "../../content/fonts/FannGrotesquePro-ThinItalic.woff";
import FannGrotesqueSemiboldItalic from "../../content/fonts/FannGrotesquePro-SemiBoldItalic.woff";
import FannGrotesqueItalic from "../../content/fonts/FannGrotesquePro-Italic.woff";
import GeorgiaProLight from "../../content/fonts/GeorgiaPro-Light.woff2";
import GeorgiaProRegular from "../../content/fonts/GeorgiaProW01Regular.woff2";
import GeorgiaProSemiBold from "../../content/fonts/GeorgiaPro-Semibold.woff2";
import GeorgiaProBold from "../../content/fonts/GeorgiaPro-Bold.woff2";
import ApercuReg from "../../content/fonts/ApercuRegular.otf";
import ApercuSemiBold from "../../content/fonts/ApercuMedium.otf";
import ApercuLight from "../../content/fonts/ApercuLight.otf";
import ApercuMono from "../../content/fonts/ApercuProMono.otf";
//import RobotoWoff2 from "./fonts/roboto-condensed-v19-latin-regular.woff2";

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Georgia Pro Bold';
    src: url(${GeorgiaProBold}) format('woff2');
}

@font-face {
    font-family: 'Georgia Pro Light';
    src: url(${GeorgiaProLight}) format('woff2');
}

@font-face {
    font-family: 'Georgia Pro Regular';
    src: url(${GeorgiaProRegular}) format('woff2');
}

@font-face {
    font-family: 'Georgia Pro Semi Bold';
    src: url(${GeorgiaProSemiBold}) format('woff2');
}

@font-face {
  font-family: 'Fette Unz Fraktur';
  src: url(${FrakturWoff}) format('woff');
}

@font-face {
    font-family: 'Nib Pro Regular';
    src: url(${NibProReg}) format('woff');
}

@font-face {
    font-family: "Fann Grotesque Regular";
    src: url(${FannGrotesqueReg}) format('woff');
}

@font-face {
    font-family: "Fann Grotesque SemiBold";
    src: url(${FannGrotesqueSemiBold}) format('woff');
}

@font-face {
    font-family: "Fann Grotesque SemiBold Italic";
    src: url(${FannGrotesqueSemiboldItalic}) format('woff');
}

@font-face {
    font-family: "Fann Grotesque Thin";
    src: url(${FannGrotesqueThin}) format('woff');
}

@font-face {
    font-family: "Fann Grotesque Thin Italic";
    src: url(${FannGrotesqueThinItalic}) format('woff');
}

@font-face {
    font-family: "Fann Grotesque Italic";
    src: url(${FannGrotesqueItalic}) format('woff');
}

@font-face {
    font-family: "Apercu Regular";
    src: url(${ApercuReg}) format('woff');
}

@font-face {
    font-family: "Apercu SemiBold";
    src: url(${ApercuSemiBold}) format('woff');
}

@font-face {
    font-family: "Apercu Thin";
    src: url(${ApercuLight}) format('woff');
}

@font-face {
    font-family: "Apercu Mono";
    src: url(${ApercuMono}) format('woff');
}
`;

export default FontStyles;
