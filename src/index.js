import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react'

function App() {
  const [n, setN] = useState(0)
  return (
    <div>
      <p>{n}</p>
      <button onClick={() => setN(n + 1)}>+1</button>
      <button onClick={()=>setTimeout(()=>{console.log(`n:${n}`)},1000)}>log</button>
    </div>
  )
}
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);