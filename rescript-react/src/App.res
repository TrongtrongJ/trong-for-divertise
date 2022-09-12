%%raw(`import './App.scss';`)

type color = string

type state = {colorList: array<color>, name: string}

let getRandomColorHex = () => {
    let hexString = Js.Math.floor(Js.Math.random() *. 16777215.)->Js.Int.toStringWithRadix(~radix=16)
    `#${hexString}`
  }

let initialState: state = {
  colorList: [
    getRandomColorHex(), getRandomColorHex(), getRandomColorHex(),
    getRandomColorHex(), getRandomColorHex(), getRandomColorHex(),
    getRandomColorHex(), getRandomColorHex(), getRandomColorHex()
  ],
  name: "Trong for Divertise",
}

type actions = ReShuffleAll | ReshuffleSingle(int)

let reducer = (state, action) => {
  switch action {
  | ReShuffleAll => {
      ...state,
      colorList: state.colorList->Js.Array2.map(_ => getRandomColorHex()),
    }
  | ReshuffleSingle(i) =>
    let specifiedIndex = i
    let upcomingColorList = state.colorList
    upcomingColorList[specifiedIndex] = getRandomColorHex()
    {
      ...state,
      colorList: upcomingColorList,
    }
  }
}

@react.component
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, initialState)

  <div className="main-app-container">
    <div className="app-header-container">
      <h1 className="user-name">{ React.string(state.name) }</h1>
      <img src="/icons/divertise-asia.webp" />
    </div>
    <div className="color-tiles-container">
      {state.colorList
      ->Belt.Array.mapWithIndex((i, _) => {
        <div className="color-tile-outer-container" key={Belt.Int.toString(i)}>
          <div className="color-tile-inner-container">
            <div 
              className="color-tile"  
              style={ReactDOM.Style.make(
                ~backgroundColor={state.colorList[i]},
              (),)}
            ></div>
            <div className="color-code" onClick={_ => i->ReshuffleSingle->dispatch} >
              <div>
                <span>{ React.string(state.colorList[i]) }</span>
              </div>
            </div>
          </div>
        </div>
      })
      ->React.array}
    </div>
    <div>
      <div className="button shuffle-all-icon" onClick={_ => ReShuffleAll->dispatch}>
        <div>{React.string("Shuffle All")}</div>
      </div>
    </div>
  </div>
}
