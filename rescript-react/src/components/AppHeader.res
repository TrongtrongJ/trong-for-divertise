%%raw(`import './AppHeader.scss';`)

@react.component
let make = (~name: string) => {
  <div className="app-header-container">
    <h1 className="user-name">{ React.string(name) }</h1>
    <img src="/icons/divertise-asia.webp" />
  </div>
}
