import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const nRef = React.useRef(0)
  return (
    <div>
      <p>{nRef.current} 这里不能实时跟新</p>
      <button onClick={() => (nRef.current += 1)}>+1</button>
      {console.log(`${nRef.current}`)}
      <button onClick={()=>console.log(`n:${nRef.current}`)}>log</button>
    </div>
  )
}
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('root')
);