import { reactive } from "vue";

import {
  ColorTileMap,
  colorTileDto,
  ColorTileKey,
} from "./color-tile.store-data";
export type { ColorTileKey };

import { cloneAndSync, resetAllKeysTo, getRandomHexColorString } from "@utils";

export const colorTiles = reactive<ColorTileMap>({
  ...cloneAndSync(colorTileDto),
});

export function reShuffleAll() {
  resetAllKeysTo(colorTiles, getRandomHexColorString);
}

export function reShuffleAt(tileKey: ColorTileKey) {
  colorTiles[tileKey] = getRandomHexColorString();
}
