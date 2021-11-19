import { createGlobalStyle } from "styled-components";
import FrakturWoff from "../../content/fonts/fette-unz-fraktur.woff";
import NibProReg from "../../content/fonts/NibPro-Regular.woff";
import FannGrotesqueReg from "../../content/fonts/FannGrotesquePro-Regular.woff";
import FannGrotesqueSemiBold from "../../content/fonts/FannGrotesquePro-SemiBold.woff";
import FannGrotesqueThin from "../../content/fonts/FannGrotesquePro-Thin.woff";
import ApercuReg from "../../content/fonts/ApercuRegular.otf";
import ApercuSemiBold from "../../content/fonts/ApercuMedium.otf";
import ApercuLight from "../../content/fonts/ApercuLight.otf";
import ApercuMono from "../../content/fonts/ApercuProMono.otf";
//import RobotoWoff2 from "./fonts/roboto-condensed-v19-latin-regular.woff2";

const FontStyles = createGlobalStyle`

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
    font-family: "Fann Grotesque Thin";
    src: url(${FannGrotesqueThin}) format('woff');
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
