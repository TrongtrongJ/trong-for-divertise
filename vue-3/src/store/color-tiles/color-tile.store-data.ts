import { getRandomHexColorString } from "@utils";

export const arrayOfRange9 = [0, 1, 2, 3, 4, 5, 6, 7, 8] as const;

type TileIndex = typeof arrayOfRange9[number];

export type ColorTileMap = Record<`tile${TileIndex}`, string>;

export type ColorTileKey = keyof ColorTileMap;

export const colorTileDto = arrayOfRange9.reduce((acc, cur) => {
  return {
    ...acc,
    [`tile${cur}`]: getRandomHexColorString,
  };
}, {}) as DtoOf<ColorTileMap>;
