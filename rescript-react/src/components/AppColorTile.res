%%raw(`import './ColorTile.scss';`)

@react.component
let appColorTile = (~colorHex: string, ~colorTileIndex, ~reshuffleSingle) => {
  <div className="color-tile-outer-container">
    <div className="color-tile-inner-container">
      <div 
        className="color-tile"  
        style={ReactDOM.Style.make(
          ~backgroundColor={colorHex},
        (),)}
      ></div>
      <div className="color-code" onClick={_ => colorTileIndex-> reshuffleSingle} >
        <div>
          <span>{ React.string(colorHex) }</span>
        </div>
      </div>
    </div>
  </div>
}