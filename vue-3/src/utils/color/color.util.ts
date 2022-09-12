import { validHexCharacters } from "./color.util-data";

export function getRandomHexColorString(): string {
  let hexColorString = "#";
  for (let i = 0; i < 6; i++) {
    hexColorString += validHexCharacters[Math.floor(Math.random() * 16)];
  }
  return hexColorString;
}
