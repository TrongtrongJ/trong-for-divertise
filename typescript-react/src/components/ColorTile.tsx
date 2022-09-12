import { useCallback, useMemo } from "react";
import {
  colorTiles,
  ColorTileKey,
  reShuffleAt,
} from "../store/color-tiles/color-tiles.store";
import "./ColorTile.scss";

interface ColorTileProps {
  colorTileKey: ColorTileKey;
}

export const ColorTile: React.FC<ColorTileProps> = (props) => {
  const backgroundColor = useMemo(() => {
    return colorTiles.value[props.colorTileKey];
  }, [props.colorTileKey, colorTiles.value]);

  const colorCodeClickHandler = useCallback(() => {
    reShuffleAt(props.colorTileKey);
  }, [props.colorTileKey]);

  return (
    <div className="color-tile-outer-container">
      <div className="color-tile-inner-container">
        <div
          className="color-tile"
          style={{ backgroundColor: backgroundColor }}
        ></div>
        <div onClick={colorCodeClickHandler} className="color-code">
          <div>
            <span>{backgroundColor}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
