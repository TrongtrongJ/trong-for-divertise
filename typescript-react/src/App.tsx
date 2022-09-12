import { AppHeader, ColorTile } from "./components";
import {
  colorTiles,
  ColorTileKey,
  reShuffleAll,
} from "@store/color-tiles/color-tiles.store";
import SystemUiconsShuffle from "~icons/system-uicons/shuffle";
import "./App.scss";

function App() {
  const colorTileKeys = Object.keys(colorTiles.value) as ColorTileKey[];

  return (
    <div className="main-app-container">
      <AppHeader />
      <div className="color-tiles-container">
        {colorTileKeys.map((key) => {
          return <ColorTile colorTileKey={key} />;
        })}
      </div>
      <div>
        <div onClick={reShuffleAll} className="button shuffle-all-icon">
          <SystemUiconsShuffle />
          <div>Shuffle All</div>
        </div>
      </div>
    </div>
  );
}

export default App;
