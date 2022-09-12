%%raw(`import './scss/main.scss';`)

let rootQuery = ReactDOM.querySelector("#root")

switch rootQuery {
| None => ()
| Some(root) => ReactDOM.render(<App />, root)
}