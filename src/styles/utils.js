import tinycolor from "tinycolor2";
import { STD_LIGHTEN, STD_DARKEN } from "./constants";

export const lighten = (color, percent) =>
  tinycolor(color)
    .lighten(percent || STD_LIGHTEN)
    .toString();

export const darken = (color, percent) =>
  tinycolor(color)
    .darken(percent || STD_DARKEN)
    .toString();
