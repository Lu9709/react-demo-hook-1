import React from 'react';
import ReactDOM from 'react-dom';


let _state=[]
let index = 0
const myUseState = (init) => {
  const currentIndex = index;
  _state[currentIndex] = _state[currentIndex] === undefined ? init : _state[currentIndex]
  console.log("currentIndex")
  console.log(currentIndex)
  const setState = (newValue) => {
    _state[currentIndex] = newValue
    render()
  }
  index += 1;
  return [_state[currentIndex], setState]

}
const render = () => {
   index = 0;
  ReactDOM.render(<App/>, document.getElementById('root'))
}
function App() {
  const [n, setN] = myUseState(0)
  const [m, setM] = myUseState(0)
  return (
    <div>
      {n}
      <button onClick={() => setN(n + 1)}>+1</button>
      {m}
      <button onClick={() => setM(m + 1)}>+1</button>
    </div>
  )
}
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);