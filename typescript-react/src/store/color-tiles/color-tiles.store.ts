import { signal } from "@preact/signals-react";
import {
  ColorTileMap,
  colorTileDto,
  ColorTileKey,
} from "./color-tile.store-data";
export type { ColorTileKey };

import { cloneAndSync, getRandomHexColorString } from "@utils";

export const colorTiles = signal<ColorTileMap>({
  ...cloneAndSync(colorTileDto),
});

export function reShuffleAll() {
  colorTiles.value = { ...cloneAndSync(colorTileDto) };
}

export function reShuffleAt(tileKey: ColorTileKey) {
  colorTiles.value = {
    ...colorTiles.value,
    [tileKey]: getRandomHexColorString(),
  };
}
