import React from 'react';
import ReactDOM from 'react-dom';
import {useState,useEffect,useRef,useLayoutEffect} from 'react'


function App() {
  const [n,seN] = useState(0)
  const time = useRef(null)
  const onclick = ()=>{
    seN(n+1)
    time.current = performance.now()
  }
  useLayoutEffect(()=>{
    if(time.current){
      console.log( performance.now()-time.current)
    }
  })
  return(
    <div>
      {n}
    <button onClick={onclick}>+1</button>
    </div>
  )
}

ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);