import React from 'react';
import ReactDOM from 'react-dom';


let _state
const myUseState = (init) => {
  _state = _state === undefined ? init : _state
  const setState = (newValue) => {
    _state = newValue
    render()
  }
  return [_state, setState]

}
const render = () => {
  ReactDOM.render(<App/>, document.getElementById('root'))
}
function App() {
  const [n, setN] = myUseState(0)
  return (
    <div>
      {n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  )
}
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);